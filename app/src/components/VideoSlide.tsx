import { useEffect, useState } from 'react'

interface VideoSlideProps {
  readonly videoId: string
  readonly startSeconds: number
  readonly endSeconds?: number
  readonly label: string
  readonly caption: string
  readonly autoplay?: boolean
}

export default function VideoSlide({ videoId, startSeconds, endSeconds, label, caption, autoplay = false }: VideoSlideProps) {
  const buildUrl = (withAutoplay: boolean) => {
    const end = endSeconds == null ? '' : `&end=${endSeconds}`
    const ap = withAutoplay ? '&autoplay=1' : ''
    return `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?start=${startSeconds}${end}${ap}&rel=0&modestbranding=1`
  }

  const [src, setSrc] = useState(() => buildUrl(false))

  useEffect(() => {
    setSrc(buildUrl(autoplay))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, videoId, startSeconds, endSeconds])

  return (
    <div className="flex h-full w-full flex-col bg-brand-black">
      {/* Top bar — label + caption */}
      <div className="flex items-center justify-between px-[clamp(1.5rem,3vw,3rem)] py-[clamp(0.6rem,1.2vh,1rem)] border-b border-white/10">
        <span className="reveal delay-1 font-body font-semibold text-[clamp(0.6rem,1vw,0.8rem)] uppercase tracking-[0.18em] text-brand-orange">
          {label}
        </span>
        <span className="reveal delay-2 font-body font-light text-[clamp(0.6rem,0.9vw,0.78rem)] text-white/50 max-w-[40ch] text-right">
          {caption}
        </span>
      </div>

      {/* Video iframe — near full frame */}
      <div className="reveal-scale delay-2 flex-1 relative">
        <iframe
          src={src}
          title={label}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  )
}
