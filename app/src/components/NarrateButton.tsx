import { useCallback, useEffect, useRef, useState } from 'react'
import { initTTS, narrate, startBackgroundRender, prioritize, stopNarration, unlockAudio, type NarrationState } from '../tts'
import { SPEAKER_NOTES } from '../speakerNotes'
import { FLAGS } from '../flags'

interface NarrateButtonProps {
  readonly slideIndex: number
  readonly onNarrationEnd?: (slideIndex: number) => void
}

export default function NarrateButton({ slideIndex, onNarrationEnd }: NarrateButtonProps) {
  const [state, setState] = useState<NarrationState>('idle')
  const [loadMsg, setLoadMsg] = useState('')
  const [preRenderProgress, setPreRenderProgress] = useState<{ done: number; total: number } | null>(null)
  const [ttsReady, setTtsReady] = useState(false)
  const hasInteracted = useRef(false)
  const prevSlide = useRef(slideIndex)
  const manualStop = useRef(false)
  // Keep a ref so the narrate .then() callback always sees the latest prop without being a dep
  const onNarrationEndRef = useRef(onNarrationEnd)
  useEffect(() => { onNarrationEndRef.current = onNarrationEnd })

  // Unlock AudioContext on first user gesture so auto-playback works
  useEffect(() => {
    const unlock = () => {
      hasInteracted.current = true
      unlockAudio()
    }
    globalThis.addEventListener('click', unlock)
    globalThis.addEventListener('keydown', unlock)
    return () => {
      globalThis.removeEventListener('click', unlock)
      globalThis.removeEventListener('keydown', unlock)
    }
  }, [])

  // Load models then start background pre-rendering in slide order (0→7)
  useEffect(() => {
    const slideOrder = Object.keys(SPEAKER_NOTES)
      .map(Number)
      .sort((a, b) => a - b)
      .map(i => SPEAKER_NOTES[i])

    initTTS(setLoadMsg)
      .then(() => {
        setTtsReady(true)
        startBackgroundRender(slideOrder, (done, total) =>
          setPreRenderProgress(done < total ? { done, total } : null))
      })
      .catch(() => setLoadMsg('Failed to load TTS'))
  }, [])

  // Auto-narrate when slide changes (requires prior user gesture + TTS ready)
  useEffect(() => {
    if (!ttsReady) return

    // On initial mount (slide 0) we wait for user interaction; on subsequent changes
    // the slide change itself IS a user gesture (keyboard or click)
    const isSlideChange = prevSlide.current !== slideIndex
    prevSlide.current = slideIndex

    if (!isSlideChange && !hasInteracted.current) return

    stopNarration()
    setState('idle')

    const text = SPEAKER_NOTES[slideIndex]
    if (!text) return

    prioritize(text)
    const capturedSlide = slideIndex
    manualStop.current = false
    narrate(text, setState)
      .then(() => { if (!manualStop.current) onNarrationEndRef.current?.(capturedSlide) })
      .catch(() => setState('error'))
  }, [slideIndex, ttsReady])

  const handleClick = useCallback(() => {
    hasInteracted.current = true
    unlockAudio()

    if (state === 'playing' || state === 'generating') {
      manualStop.current = true
      stopNarration()
      setState('idle')
      return
    }

    const text = SPEAKER_NOTES[slideIndex]
    if (!text) return

    const capturedSlide = slideIndex
    manualStop.current = false
    narrate(text, setState)
      .then(() => { if (!manualStop.current) onNarrationEndRef.current?.(capturedSlide) })
      .catch(() => setState('error'))
  }, [state, slideIndex])

  if (!FLAGS.AI_VOICE) return null

  const label: Record<NarrationState, string> = {
    idle: '🔊',
    loading: '⏳',
    generating: '⏳',
    playing: '⏹',
    error: '⚠️',
  }

  function getTitleText() {
    if (state === 'playing') return 'Stop'
    if (preRenderProgress) return `Pre-rendering ${preRenderProgress.done}/${preRenderProgress.total}…`
    if (state === 'idle') return 'Narrate this slide'
    return loadMsg || state
  }

  return (
    <button
      onClick={handleClick}
      title={getTitleText()}
      className="fixed bottom-[clamp(1rem,2vh,2rem)] right-[clamp(1rem,2vw,2rem)] z-50 w-[clamp(32px,3vw,44px)] h-[clamp(32px,3vw,44px)] rounded-full bg-brand-orange text-white flex items-center justify-center text-[clamp(0.8rem,1.2vw,1.1rem)] shadow-lg hover:bg-brand-orange/90 transition-colors cursor-pointer disabled:opacity-40"
      disabled={state === 'loading' || !SPEAKER_NOTES[slideIndex]}
    >
      {label[state]}
    </button>
  )
}
