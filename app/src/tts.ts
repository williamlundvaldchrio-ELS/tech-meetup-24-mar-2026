/**
 * Supertonic TTS — on-device text-to-speech via ONNX Runtime Web.
 *
 * ONNX Runtime is loaded from CDN via a script tag in index.html
 * and accessed through globalThis.ort. Models are served from /assets/.
 */

// ─── Config ─────────────────────────────────────────────────────

/** Voice model file. Available: M1–M5 (male), F1–F5 (female) */
const VOICE_MODEL = '/assets/voice_styles/M2.json'

/** Denoising steps — higher = better quality but slower generation (range: 1–10) */
const DENOISING_STEPS = 5

/** Speech rate multiplier — >1.0 = faster, <1.0 = slower */
const SPEECH_SPEED = 1.05

/** WASM worker thread count — keep at 1 to avoid SharedArrayBuffer COOP/COEP requirement */
const WASM_THREADS = 1

/**
 * Phonetic substitutions applied before synthesis.
 * Keys are matched as whole words (case-insensitive). Add entries here to fix
 * mispronounced words or expand acronyms the model reads letter-by-letter.
 */
const PHONETIC_SUBSTITUTIONS: Record<string, string> = {
  // "vibe" — model adds an /iː/ to any silent-e ending; 'igh' reliably maps to /aɪ/ (night/light/fight)
  vibe: 'vighb',
  vibed: 'vighbed',
  vibing: 'vighing',
}

// ─── Types / state ──────────────────────────────────────────────

export type NarrationState = 'idle' | 'loading' | 'generating' | 'playing' | 'error'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getOrt(): any {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const g = globalThis as any
  if (!g.ort) throw new Error('ONNX Runtime not loaded — check the CDN script tag in index.html')
  return g.ort
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let ttsEngine: { cfgs: any; indexer: number[]; sessions: any[] } | null = null
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let ttsStyle: { ttl: any; dp: any } | null = null
let ready = false
let loadingPromise: Promise<void> | null = null
let currentSource: AudioBufferSourceNode | null = null
let audioCtx: AudioContext | null = null
let narrationGen = 0

/** Pre-rendered AudioBuffers keyed by text, ready for instant playback */
const audioCache = new Map<string, AudioBuffer>()

function getAudioCtx(): AudioContext {
  if (!audioCtx || audioCtx.state === 'closed') audioCtx = new AudioContext()
  if (audioCtx.state === 'suspended') audioCtx.resume()
  return audioCtx
}

/**
 * Call from a user-gesture handler (click / keydown) to pre-unlock
 * the AudioContext so auto-playback works on the next slide change.
 */
export function unlockAudio(): void {
  getAudioCtx()
}

// ─── Init ───────────────────────────────────────────────────────

export async function initTTS(
  onProgress?: (msg: string) => void,
): Promise<void> {
  if (ready) return
  if (loadingPromise) return loadingPromise

  loadingPromise = _init(onProgress)
  return loadingPromise
}

async function _init(onProgress?: (msg: string) => void): Promise<void> {
  const ort = getOrt()
  ort.env.wasm.numThreads = WASM_THREADS

  const basePath = '/assets/onnx'

  onProgress?.('Loading TTS config…')
  const [cfgsResp, indexerResp] = await Promise.all([
    fetch(`${basePath}/tts.json`),
    fetch(`${basePath}/unicode_indexer.json`),
  ])
  if (!cfgsResp.ok) throw new Error('Failed to load tts.json')
  if (!indexerResp.ok) throw new Error('Failed to load unicode_indexer.json')
  const cfgs = await cfgsResp.json()
  const indexer: number[] = await indexerResp.json()

  const modelNames = ['duration_predictor', 'text_encoder', 'vector_estimator', 'vocoder']
  const sessions = []
  for (const name of modelNames) {
    onProgress?.(`Loading ${name}…`)
    const session = await ort.InferenceSession.create(
      `${basePath}/${name}.onnx`,
      { executionProviders: ['wasm'], graphOptimizationLevel: 'all' },
    )
    sessions.push(session)
  }

  onProgress?.('Loading voice style…')
  const voiceResp = await fetch(VOICE_MODEL)
  if (!voiceResp.ok) throw new Error(`Failed to load voice style: ${VOICE_MODEL}`)
  const voiceStyle = await voiceResp.json()

  const ttlData = new Float32Array(voiceStyle.style_ttl.data.flat(Infinity))
  const dpData = new Float32Array(voiceStyle.style_dp.data.flat(Infinity))
  ttsStyle = {
    ttl: new ort.Tensor('float32', ttlData, voiceStyle.style_ttl.dims),
    dp: new ort.Tensor('float32', dpData, voiceStyle.style_dp.dims),
  }

  ttsEngine = { cfgs, indexer, sessions }
  ready = true
  onProgress?.('AI voice ready')
}

// ─── Inference ──────────────────────────────────────────────────

function applyPhoneticSubstitutions(text: string): string {
  let s = text
  for (const [word, replacement] of Object.entries(PHONETIC_SUBSTITUTIONS)) {
    // Use String.raw to avoid escape-sequence lint warnings; 'gi' for case-insensitive whole-word match
    s = s.replaceAll(new RegExp(String.raw`\b${word}\b`, 'gi'), replacement)
  }
  return s
}

function preprocess(text: string): string {
  let s = applyPhoneticSubstitutions(text)
    .normalize('NFKD')
    .replaceAll('\u2013', '-')
    .replaceAll('\u2014', '-')
    .replaceAll('\u201C', '"')
    .replaceAll('\u201D', '"')
    .replaceAll('\u2018', "'")
    .replaceAll('\u2019', "'")
  s = s.trim().split(/\s+/).join(' ')
  if (!/[.!?;:]$/.test(s)) s += '.'
  return `<en>${s}</en>`
}

async function synthesize(text: string): Promise<{ wav: Float32Array; sampleRate: number }> {
  const ort = getOrt()
  const { cfgs, indexer, sessions } = ttsEngine!
  const [dpSess, textEncSess, vecEstSess, vocoderSess] = sessions
  const { ttl: styleTtl, dp: styleDp } = ttsStyle!

  const processed = preprocess(text)
  const seqLen = processed.length

  const ids = new BigInt64Array(seqLen)
  for (let j = 0; j < seqLen; j++) {
    const cp = processed.codePointAt(j)
    ids[j] = BigInt(cp !== undefined && cp < indexer.length ? indexer[cp] : -1)
  }

  const textIdsTensor = new ort.Tensor('int64', ids, [1, seqLen])
  const textMaskTensor = new ort.Tensor('float32', new Float32Array(seqLen).fill(1), [1, 1, seqLen])

  // Duration prediction
  const dpOut = await dpSess.run({
    text_ids: textIdsTensor, style_dp: styleDp, text_mask: textMaskTensor,
  })
  const duration = Array.from(dpOut.duration.data as Float32Array)
  for (let i = 0; i < duration.length; i++) duration[i] /= SPEECH_SPEED

  // Text encoding
  const textEncOut = await textEncSess.run({
    text_ids: textIdsTensor, style_ttl: styleTtl, text_mask: textMaskTensor,
  })

  // Latent parameters
  const sampleRate: number = cfgs.ae.sample_rate
  const chunkSize: number = cfgs.ae.base_chunk_size * cfgs.ttl.chunk_compress_factor
  const latentDimVal: number = cfgs.ttl.latent_dim * cfgs.ttl.chunk_compress_factor
  const maxDur = Math.max(...duration)
  const wavLenMax = Math.floor(maxDur * sampleRate)
  const latentLen = Math.floor((wavLenMax + chunkSize - 1) / chunkSize)

  // Box-Muller noise
  const xtData = new Float32Array(latentDimVal * latentLen)
  for (let i = 0; i < xtData.length; i++) {
    const u1 = Math.max(0.0001, Math.random())
    const u2 = Math.random()
    xtData[i] = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2)
  }

  // Latent mask
  const wavLen0 = Math.floor(duration[0] * sampleRate)
  const maskLen = Math.floor((wavLen0 + chunkSize - 1) / chunkSize)
  const latentMask = new Float32Array(latentLen)
  for (let j = 0; j < Math.min(maskLen, latentLen); j++) latentMask[j] = 1
  for (let d = 0; d < latentDimVal; d++) {
    for (let t = 0; t < latentLen; t++) {
      xtData[d * latentLen + t] *= latentMask[t]
    }
  }

  const latentMaskTensor = new ort.Tensor('float32', latentMask, [1, 1, latentLen])
  const totalStepTensor = new ort.Tensor('float32', new Float32Array([DENOISING_STEPS]), [1])

  // Denoising loop
  let xtArray = xtData
  for (let step = 0; step < DENOISING_STEPS; step++) {
    const xtTensor = new ort.Tensor('float32', new Float32Array(xtArray), [1, latentDimVal, latentLen])
    const stepTensor = new ort.Tensor('float32', new Float32Array([step]), [1])
    const vecOut = await vecEstSess.run({
      noisy_latent: xtTensor, text_emb: textEncOut.text_emb,
      style_ttl: styleTtl, latent_mask: latentMaskTensor,
      text_mask: textMaskTensor, current_step: stepTensor,
      total_step: totalStepTensor,
    })
    xtArray = new Float32Array(vecOut.denoised_latent.data)
  }

  // Vocoder
  const finalTensor = new ort.Tensor('float32', xtArray, [1, latentDimVal, latentLen])
  const vocOut = await vocoderSess.run({ latent: finalTensor })
  const rawWav = vocOut.wav_tts.data as Float32Array
  const outLen = Math.floor(sampleRate * duration[0])

  return { wav: rawWav.slice(0, outLen), sampleRate }
}

function buildWavBuffer(samples: Float32Array, sampleRate: number): ArrayBuffer {
  const dataSize = samples.length * 2
  const buf = new ArrayBuffer(44 + dataSize)
  const view = new DataView(buf)
  const ws = (off: number, s: string) => {
    for (let i = 0; i < s.length; i++) view.setUint8(off + i, s.codePointAt(i) ?? 0)
  }

  ws(0, 'RIFF')
  view.setUint32(4, 36 + dataSize, true)
  ws(8, 'WAVE')
  ws(12, 'fmt ')
  view.setUint32(16, 16, true)
  view.setUint16(20, 1, true)
  view.setUint16(22, 1, true)
  view.setUint32(24, sampleRate, true)
  view.setUint32(28, sampleRate * 2, true)
  view.setUint16(32, 2, true)
  view.setUint16(34, 16, true)
  ws(36, 'data')
  view.setUint32(40, dataSize, true)

  const pcm = new Int16Array(samples.length)
  for (let i = 0; i < samples.length; i++) {
    pcm[i] = Math.floor(Math.max(-1, Math.min(1, samples[i])) * 32767)
  }
  new Uint8Array(buf, 44).set(new Uint8Array(pcm.buffer))
  return buf
}

async function synthAndDecode(text: string): Promise<AudioBuffer> {
  const { wav, sampleRate } = await synthesize(text)
  const wavBuffer = buildWavBuffer(wav, sampleRate)
  return getAudioCtx().decodeAudioData(wavBuffer)
}

// ─── Background render queue ────────────────────────────────────

let renderQueue: string[] = []
let isRendering = false
let renderProgressCb: ((done: number, total: number) => void) | null = null
let totalToRender = 0
let doneRendered = 0

/**
 * Start non-blocking background pre-rendering in the given order.
 * Yields to the event loop between each slide so the UI stays responsive.
 * Call once after initTTS(); safe to call again (resets the queue).
 */
export function startBackgroundRender(
  orderedTexts: string[],
  onProgress?: (done: number, total: number) => void,
): void {
  const needed = orderedTexts.filter(t => !audioCache.has(t))
  renderQueue = needed
  totalToRender = orderedTexts.length
  doneRendered = orderedTexts.length - needed.length
  renderProgressCb = onProgress ?? null
  if (needed.length > 0 && !isRendering) processQueue()
}

/** Move a text to the front of the render queue so it's synthesized next. */
export function prioritize(text: string): void {
  const idx = renderQueue.indexOf(text)
  if (idx > 0) {
    renderQueue.splice(idx, 1)
    renderQueue.unshift(text)
  }
}

/** Check whether a given text has been pre-rendered and is ready for instant playback. */
export function isCached(text: string): boolean {
  return audioCache.has(text)
}

async function processQueue(): Promise<void> {
  if (isRendering) return
  isRendering = true
  while (renderQueue.length > 0) {
    const text = renderQueue.shift()!
    if (!audioCache.has(text)) {
      // Yield to the event loop so UI stays responsive between heavy ONNX calls
      await new Promise<void>(r => setTimeout(r, 0))
      audioCache.set(text, await synthAndDecode(text))
    }
    doneRendered++
    renderProgressCb?.(doneRendered, totalToRender)
  }
  isRendering = false
  renderProgressCb = null
}

// ─── Public API ─────────────────────────────────────────────────

export function stopNarration() {
  narrationGen++ // invalidate any in-flight narrate() call
  if (currentSource) {
    try { currentSource.stop() } catch { /* already stopped */ }
    currentSource = null
  }
}

export async function narrate(
  text: string,
  onStateChange?: (s: NarrationState) => void,
): Promise<void> {
  stopNarration()
  const gen = ++narrationGen

  let audioBuffer = audioCache.get(text)

  if (!audioBuffer) {
    if (!ready) {
      onStateChange?.('loading')
      await initTTS()
    }
    if (gen !== narrationGen) return // stale — user navigated away
    onStateChange?.('generating')
    audioBuffer = await synthAndDecode(text)
    audioCache.set(text, audioBuffer)
  }

  if (gen !== narrationGen) return // stale — user navigated away

  const ctx = getAudioCtx()
  const source = ctx.createBufferSource()
  source.buffer = audioBuffer
  source.connect(ctx.destination)
  currentSource = source
  onStateChange?.('playing')

  return new Promise<void>((resolve) => {
    source.onended = () => {
      if (currentSource === source) currentSource = null
      onStateChange?.('idle')
      resolve()
    }
    source.start()
  })
}
