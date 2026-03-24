export default function ClosingSlide() {
  return (
    <div className="flex h-full w-full bg-brand-black relative overflow-hidden">
      {/* Subtle warm glow */}
      <div className="absolute w-[60vw] h-[60vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/[0.06] blur-[80px] pointer-events-none" />

      {/* Left panel — the problem (chaos) */}
      <div className="flex flex-1 flex-col justify-center px-[clamp(2rem,5vw,5rem)] border-r border-white/10 relative z-10">
        <p className="reveal delay-1 font-body font-semibold text-[clamp(0.55rem,0.9vw,0.72rem)] uppercase tracking-[0.2em] text-white/60 mb-[clamp(1rem,2vh,1.5rem)]">
          Without Structure
        </p>
        <h2 className="reveal delay-2 font-display font-black text-[clamp(1.6rem,4vw,3.2rem)] leading-[1.05] text-white/70 mb-[clamp(1rem,2.5vh,2rem)]">
          Vibe coding<br />is chaos.
        </h2>
        <div className="reveal delay-3 w-[clamp(30px,4vw,40px)] h-[2px] bg-white/30 mb-[clamp(0.8rem,2vh,1.5rem)]" />
        <ul className="space-y-[clamp(0.4rem,1vh,0.8rem)]">
          <li className="reveal delay-3 font-body font-light text-[clamp(0.72rem,1.1vw,0.9rem)] text-white/55 leading-relaxed">
            → Hallucinated APIs and phantom dependencies
          </li>
          <li className="reveal delay-4 font-body font-light text-[clamp(0.72rem,1.1vw,0.9rem)] text-white/55 leading-relaxed">
            → Endless back-and-forth burning your quota
          </li>
          <li className="reveal delay-5 font-body font-light text-[clamp(0.72rem,1.1vw,0.9rem)] text-white/55 leading-relaxed">
            → Code that "Works on my machine"
          </li>
        </ul>
      </div>

      {/* Right panel — the answer (PRD + tests) */}
      <div className="relative w-[clamp(280px,50vw,560px)] flex flex-col justify-center px-[clamp(2rem,4vw,4rem)] z-10">
        <p className="reveal delay-1 font-body font-semibold text-[clamp(0.55rem,0.9vw,0.72rem)] uppercase tracking-[0.2em] text-brand-orange mb-[clamp(1rem,2vh,1.5rem)]">
          With a PRD &amp; Tests
        </p>
        <h2 className="reveal delay-2 font-display font-black text-[clamp(1.6rem,4vw,3.2rem)] leading-[1.05] text-white mb-[clamp(0.6rem,1.5vh,1rem)]">
          It&apos;s a<br />
          <em className="font-display italic font-normal text-brand-orange">superpower.</em>
        </h2>
        <p className="reveal delay-3 font-body font-light text-[clamp(0.78rem,1.2vw,0.95rem)] text-white/60 leading-relaxed max-w-[32ch] mb-[clamp(1.2rem,2.5vh,2rem)]">
          The AI is capable of extraordinary work. A good PRD gives it intent. Tests give it guardrails. Together, they turn undeterministic chaos into production-grade output.
        </p>

        <div className="reveal delay-4 flex flex-col gap-[clamp(0.5rem,1.2vh,1rem)]">
          <div className="flex items-center gap-[clamp(0.4rem,0.8vw,0.8rem)]">
            <span className="w-[clamp(6px,0.5vw,8px)] h-[clamp(6px,0.5vw,8px)] rounded-full bg-brand-orange flex-shrink-0" />
            <span className="font-display font-bold text-[clamp(0.75rem,1.1vw,0.95rem)] text-white">PRD captures the why</span>
          </div>
          <div className="flex items-center gap-[clamp(0.4rem,0.8vw,0.8rem)]">
            <span className="w-[clamp(6px,0.5vw,8px)] h-[clamp(6px,0.5vw,8px)] rounded-full bg-brand-orange flex-shrink-0" />
            <span className="font-display font-bold text-[clamp(0.75rem,1.1vw,0.95rem)] text-white">Tests enforce the what</span>
          </div>
          <div className="flex items-center gap-[clamp(0.4rem,0.8vw,0.8rem)]">
            <span className="w-[clamp(6px,0.5vw,8px)] h-[clamp(6px,0.5vw,8px)] rounded-full bg-brand-orange flex-shrink-0" />
            <span className="font-display font-bold text-[clamp(0.75rem,1.1vw,0.95rem)] text-white">The AI delivers the how</span>
          </div>
        </div>
      </div>

      {/* Bottom metadata */}
      <div className="reveal delay-6 absolute bottom-[clamp(1.2rem,3vh,2.5rem)] left-[clamp(2rem,5vw,5rem)] flex gap-[clamp(0.8rem,2vw,2rem)] z-10">
        <span className="font-body text-[clamp(0.52rem,0.8vw,0.65rem)] uppercase tracking-[0.12em] text-white/30">
          Oliver W. L. Christensen
        </span>
        <span className="text-brand-orange/50 text-[clamp(0.52rem,0.8vw,0.65rem)]">·</span>
        <span className="font-body text-[clamp(0.52rem,0.8vw,0.65rem)] uppercase tracking-[0.12em] text-white/30">
          March 2026
        </span>
      </div>
    </div>
  )
}
