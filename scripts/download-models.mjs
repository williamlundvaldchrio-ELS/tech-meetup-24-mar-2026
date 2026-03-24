import fs from 'fs'
import https from 'https'
import path from 'path'

// Allow self-signed certs for HuggingFace CDN downloads only
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const BASE = 'https://huggingface.co/Supertone/supertonic-2/resolve/main'
const DEST = path.resolve('app/public/assets')

function follow(url) {
    return new Promise(function resolver(resolve, reject) {
        const parsed = new URL(url)
        https.get(parsed, { headers: { 'User-Agent': 'node' } }, function handler(res) {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                let next = res.headers.location
                // handle relative redirects
                if (next.startsWith('/')) {
                    next = parsed.protocol + '//' + parsed.host + next
                }
                follow(next).then(resolve, reject)
            } else if (res.statusCode === 200) {
                resolve(res)
            } else {
                reject(new Error('HTTP ' + res.statusCode + ' for ' + url))
            }
        }).on('error', reject)
    })
}

function download(urlPath, destPath) {
    return new Promise(function resolver(resolve, reject) {
        fs.mkdirSync(path.dirname(destPath), { recursive: true })
        follow(BASE + urlPath).then(function writeStream(res) {
            const file = fs.createWriteStream(destPath)
            res.pipe(file)
            file.on('finish', function done() { file.close(); resolve() })
            file.on('error', reject)
        }, reject)
    })
}

const files = [
    ['/onnx/tts.json', path.join(DEST, 'onnx', 'tts.json')],
    ['/onnx/unicode_indexer.json', path.join(DEST, 'onnx', 'unicode_indexer.json')],
    ['/onnx/duration_predictor.onnx', path.join(DEST, 'onnx', 'duration_predictor.onnx')],
    ['/onnx/text_encoder.onnx', path.join(DEST, 'onnx', 'text_encoder.onnx')],
    ['/onnx/vector_estimator.onnx', path.join(DEST, 'onnx', 'vector_estimator.onnx')],
    ['/onnx/vocoder.onnx', path.join(DEST, 'onnx', 'vocoder.onnx')],
    ['/voice_styles/M1.json', path.join(DEST, 'voice_styles', 'M1.json')],
    ['/voice_styles/M2.json', path.join(DEST, 'voice_styles', 'M2.json')],
    ['/voice_styles/F1.json', path.join(DEST, 'voice_styles', 'F1.json')],
]

async function main() {
    for (const [urlPath, destPath] of files) {
        console.log('Downloading ' + urlPath + ' ...')
        await download(urlPath, destPath)
        const stat = fs.statSync(destPath)
        console.log('  -> ' + destPath + ' (' + stat.size + ' bytes)')
    }
    console.log('All done!')
}

main().catch(function onError(e) { console.error(e); process.exit(1) })
