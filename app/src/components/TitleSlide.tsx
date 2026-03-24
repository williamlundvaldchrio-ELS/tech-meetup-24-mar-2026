export default function TitleSlide() {
  return (
    <div className="flex h-full w-full bg-white">
      {/* Left panel — text */}
      <div className="flex flex-1 flex-col justify-center px-[clamp(2rem,5vw,5rem)] border-r border-brand-border">
        <p className="reveal delay-1 font-body font-semibold text-[clamp(0.55rem,0.9vw,0.72rem)] uppercase tracking-[0.2em] text-brand-orange mb-[clamp(1.5rem,3vh,3rem)]">
          Show &amp; Learn · Issue No. 01
        </p>
        <h1 className="reveal delay-2 font-display font-black text-[clamp(2.4rem,6vw,5rem)] leading-[1.0] tracking-tight text-brand-black mb-[clamp(1rem,2.5vh,2rem)]">
          Vibe<br />
          <em className="block font-display italic font-normal text-brand-orange text-[0.85em]">
            Coding
          </em>
        </h1>
        <div className="reveal delay-3 w-[clamp(30px,5vw,50px)] h-[2px] bg-brand-orange mb-[clamp(0.8rem,2vh,1.5rem)]" />
        <p className="reveal delay-4 font-body font-light text-[clamp(0.85rem,1.5vw,1.1rem)] text-brand-muted leading-relaxed max-w-[30ch]">
          How to add afterburners to your workflow — without burning the quota.
        </p>

        <p className="reveal delay-6 absolute bottom-[clamp(1.2rem,2.5vh,2rem)] left-[clamp(2rem,5vw,5rem)] font-body text-[clamp(0.52rem,0.8vw,0.65rem)] uppercase tracking-[0.12em] text-brand-muted">
          Oliver W. L. Christensen · Frontend Engineering
        </p>
      </div>

      {/* Right panel — abstract shapes on pale orange */}
      <div className="relative w-[clamp(280px,40vw,480px)] bg-brand-orange-light flex items-center justify-center overflow-hidden">
        {/* Large filled circle */}
        <div className="reveal-scale delay-2 absolute w-[clamp(180px,28vw,350px)] h-[clamp(180px,28vw,350px)] rounded-full bg-brand-orange top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        {/* Ring */}
        <div className="reveal-scale delay-3 absolute w-[clamp(100px,16vw,200px)] h-[clamp(100px,16vw,200px)] rounded-full border-2 border-brand-orange top-[15%] right-[10%]" />
        {/* Small ghost circle */}
        <div className="reveal-scale delay-4 absolute w-[clamp(60px,10vw,120px)] h-[clamp(60px,10vw,120px)] rounded-full bg-brand-orange/30 bottom-[18%] left-[12%]" />
        {/* Vertical label */}
        <span className="reveal delay-5 absolute bottom-[clamp(1.5rem,3vh,3rem)] right-[clamp(1.5rem,3vw,2.5rem)] font-body font-medium text-[clamp(0.55rem,0.85vw,0.7rem)] uppercase tracking-[0.15em] text-brand-orange [writing-mode:vertical-rl]">
          March 2026
        </span>
      </div>
    </div>
  )
}
