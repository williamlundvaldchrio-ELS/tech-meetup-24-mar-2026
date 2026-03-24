import { useCallback, useEffect, useState } from 'react'
import ProgressBar from './components/ProgressBar'
import NavDots from './components/NavDots'
import NarrateButton from './components/NarrateButton'
import TitleSlide from './components/TitleSlide'
import ProblemRulesSlide from './components/ProblemRulesSlide'
import VideoSlide from './components/VideoSlide'
import CycleTimeSlide from './components/CycleTimeSlide'
import MetaDemoASlide from './components/MetaDemoASlide'
import PrdSlide from './components/PrdSlide'
import MetaDemoBSlide from './components/MetaDemoBSlide'
import ClosingSlide from './components/ClosingSlide'

const TOTAL_SLIDES = 11

export default function App() {
  const [current, setCurrent] = useState(0)
  const [autoplaySlide, setAutoplaySlide] = useState<number | null>(null)

  const goTo = useCallback((index: number) => {
    setCurrent(Math.max(0, Math.min(TOTAL_SLIDES - 1, index)))
  }, [])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // Reset autoplay when user navigates away from a video slide
  useEffect(() => {
    setAutoplaySlide(null)
  }, [current])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft' || (e.key === ' ' && e.shiftKey)) {
        e.preventDefault()
        prev()
      }
    }
    globalThis.addEventListener('keydown', onKey)
    return () => globalThis.removeEventListener('keydown', onKey)
  }, [next, prev])

  const slides = [
    <TitleSlide key={0} />,
    <ProblemRulesSlide key={1} />,
    <VideoSlide
      key={2}
      videoId="goOZSXmrYQ4"
      startSeconds={440}
      endSeconds={498}
      label="Rule 1: Interrogate"
      caption="Reduce assumptions — make the AI ask you questions first."
      autoplay={autoplaySlide === 2}
    />,
    <VideoSlide
      key={3}
      videoId="Xdpv_EnJ6Dw"
      startSeconds={411}
      endSeconds={444}
      label="Rule 2: Plan"
      caption="Plan mode — let the AI think before it writes."
      autoplay={autoplaySlide === 3}
    />,
    <VideoSlide
      key={4}
      videoId="Xdpv_EnJ6Dw"
      startSeconds={460}
      endSeconds={507}
      label="Rule 2: Reflect & Spar"
      caption="Spar with the plan — push the model to a nine."
      autoplay={autoplaySlide === 4}
    />,
    <CycleTimeSlide key={5} />,
    <VideoSlide
      key={6}
      videoId="goOZSXmrYQ4"
      startSeconds={1398}
      endSeconds={1633}
      label="The PIV Loop"
      caption="Plan, Implement, Validate — focused work from a PRD phase."
      autoplay={autoplaySlide === 6}
    />,
    <MetaDemoASlide key={7} />,
    <PrdSlide key={8} />,
    <MetaDemoBSlide key={9} />,
    <ClosingSlide key={10} />,
  ]

  return (
    <div className="relative h-full w-full overflow-hidden">
      <ProgressBar current={current} total={TOTAL_SLIDES} />
      <NavDots current={current} total={TOTAL_SLIDES} onDotClick={goTo} />
      <NarrateButton
        slideIndex={current}
        onNarrationEnd={(slide) => {
          if (slide === current) setAutoplaySlide(slide)
        }}
      />

      {slides.map((slide, i) => (
        <div
          key={`slide-${slide.key}`}
          className={`slide absolute inset-0 transition-opacity duration-500 ${
            i === current ? 'visible opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {slide}
        </div>
      ))}
    </div>
  )
}
