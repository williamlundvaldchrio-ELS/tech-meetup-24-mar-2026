interface NavDotsProps {
  readonly current: number
  readonly total: number
  readonly onDotClick: (index: number) => void
}

function dotColor(i: number, current: number) {
  if (i === current) return 'bg-brand-orange scale-150'
  if (i < current) return 'bg-brand-muted'
  return 'bg-brand-border'
}

export default function NavDots({ current, total, onDotClick }: NavDotsProps) {
  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
      aria-label="Slide navigation"
    >
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === current ? 'step' : undefined}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${dotColor(i, current)}`}
        />
      ))}
    </nav>
  )
}
