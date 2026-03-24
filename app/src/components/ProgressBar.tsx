interface ProgressBarProps {
  readonly current: number
  readonly total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = ((current + 1) / total) * 100

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-brand-border">
      <div
        className="h-full bg-brand-orange transition-all duration-500 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
