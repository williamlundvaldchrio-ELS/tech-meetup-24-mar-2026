export default function CycleTimeSlide() {
  return (
    <div className="flex h-full w-full bg-white">
      {/* Left panel — content */}
      <div className="flex flex-1 flex-col justify-center px-[clamp(2rem,5vw,5rem)] border-r border-brand-border">
        <p className="reveal delay-1 font-body font-semibold text-[clamp(0.55rem,0.9vw,0.72rem)] uppercase tracking-[0.2em] text-brand-orange mb-[clamp(1rem,2vh,1.5rem)]">
          Rule 03
        </p>
        <h2 className="reveal delay-2 font-display font-black text-[clamp(1.6rem,4vw,3.2rem)] leading-[1.05] text-brand-black mb-[clamp(1rem,2.5vh,2rem)]">
          Reduce<br />Cycle Time
        </h2>
        <div className="reveal delay-3 w-[clamp(30px,4vw,40px)] h-[2px] bg-brand-orange mb-[clamp(0.8rem,2vh,1.5rem)]" />
        <p className="reveal delay-3 font-body font-light text-[clamp(0.82rem,1.4vw,1.05rem)] text-brand-muted leading-relaxed max-w-[32ch] mb-[clamp(1rem,2.5vh,2rem)]">
          The AI should write its own visual tests. If the "vibe" is off, the test catches it before you even look at the browser.
        </p>

        <div className="reveal delay-4 font-body text-[clamp(0.7rem,1vw,0.88rem)] text-brand-black/70 space-y-[clamp(0.3rem,0.7vh,0.5rem)]">
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange inline-block" />
            <span>Write testable code first</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange inline-block" />
            <span>Validate visually before merging</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange inline-block" />
            <span>Catch failure before the browser</span>
          </p>
        </div>
      </div>

      {/* Right panel — PIV Loop diagram */}
      <div className="relative w-[clamp(280px,40vw,480px)] bg-brand-orange-pale flex items-center justify-center overflow-hidden">
        <div className="reveal-scale delay-3 relative w-[clamp(200px,24vw,320px)] h-[clamp(200px,24vw,320px)]">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-brand-orange/30" />

          {/* PIV labels positioned around the circle */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-brand-border px-[clamp(0.6rem,1vw,1rem)] py-[clamp(0.3rem,0.5vh,0.5rem)] rounded-sm">
            <span className="font-display font-bold text-[clamp(0.7rem,1vw,0.9rem)] text-brand-orange">Plan</span>
          </div>

          <div className="absolute bottom-[15%] right-0 translate-x-1/2 bg-white border border-brand-border px-[clamp(0.6rem,1vw,1rem)] py-[clamp(0.3rem,0.5vh,0.5rem)] rounded-sm">
            <span className="font-display font-bold text-[clamp(0.7rem,1vw,0.9rem)] text-brand-orange">Implement</span>
          </div>

          <div className="absolute bottom-[15%] left-0 -translate-x-1/2 bg-white border border-brand-border px-[clamp(0.6rem,1vw,1rem)] py-[clamp(0.3rem,0.5vh,0.5rem)] rounded-sm">
            <span className="font-display font-bold text-[clamp(0.7rem,1vw,0.9rem)] text-brand-orange">Validate</span>
          </div>

          {/* Center label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="font-display font-black text-[clamp(1.4rem,2.2vw,2rem)] text-brand-black">PIV</span>
            <p className="font-body font-light text-[clamp(0.5rem,0.7vw,0.62rem)] text-brand-muted mt-0.5 uppercase tracking-widest">Loop</p>
          </div>

          {/* Arrow arcs (simplified with small triangles) */}
          <div className="absolute top-[18%] right-[12%] rotate-[30deg]">
            <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-[6px] border-t-brand-orange" />
          </div>
          <div className="absolute bottom-[5%] right-[35%] rotate-[150deg]">
            <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-[6px] border-t-brand-orange" />
          </div>
          <div className="absolute top-[35%] left-[8%] rotate-[-90deg]">
            <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-[6px] border-t-brand-orange" />
          </div>
        </div>
      </div>
    </div>
  )
}
