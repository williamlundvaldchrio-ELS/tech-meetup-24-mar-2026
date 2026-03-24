export default function MetaDemoASlide() {
  return (
    <div className="flex h-full w-full bg-white">
      {/* Left panel */}
      <div className="flex flex-1 flex-col justify-center px-[clamp(2rem,5vw,5rem)] border-r border-brand-border">
        <p className="reveal delay-1 font-body font-semibold text-[clamp(0.55rem,0.9vw,0.72rem)] uppercase tracking-[0.2em] text-brand-orange mb-[clamp(1rem,2vh,1.5rem)]">
          The Meta Demo
        </p>
        <h2 className="reveal delay-2 font-display font-black text-[clamp(1.6rem,4vw,3.2rem)] leading-[1.05] text-brand-black mb-[clamp(1rem,2.5vh,2rem)]">
          I vibed<br />
          <em className="font-display italic font-normal text-brand-orange">this site.</em>
        </h2>
        <div className="reveal delay-3 w-[clamp(30px,4vw,40px)] h-[2px] bg-brand-orange mb-[clamp(0.8rem,2vh,1.5rem)]" />
        <p className="reveal delay-3 font-body font-light text-[clamp(0.82rem,1.4vw,1.05rem)] text-brand-muted leading-relaxed max-w-[34ch]">
          Two skills powered the whole build — <em>frontend-slides</em> and <em>frontend-design</em>. The agent interrogated me, proposed styles, and built it.
        </p>
      </div>

      {/* Right panel — how this site was built */}
      <div className="relative w-[clamp(280px,42vw,520px)] bg-brand-cream flex flex-col justify-center px-[clamp(1.5rem,3vw,3rem)]">
        <p className="reveal delay-2 font-body font-semibold text-[clamp(0.55rem,0.9vw,0.72rem)] uppercase tracking-[0.2em] text-brand-orange mb-[clamp(1.5rem,3vh,2.5rem)]">
          How I Built This
        </p>

        <div className="space-y-[clamp(0.6rem,1.5vh,1.2rem)]">
          <div className="reveal delay-2 flex items-start gap-[clamp(0.5rem,1vw,1rem)]">
            <span className="font-display font-black text-[clamp(1rem,1.5vw,1.4rem)] text-brand-orange leading-none mt-0.5">1</span>
            <div>
              <h3 className="font-display font-bold text-[clamp(0.78rem,1.1vw,0.95rem)] text-brand-black">Two skill files</h3>
              <p className="font-body font-light text-[clamp(0.62rem,0.85vw,0.75rem)] text-brand-muted mt-0.5">
                <em>frontend-slides</em> + <em>frontend-design</em> — all the domain knowledge the agent needs.
              </p>
            </div>
          </div>

          <div className="reveal delay-3 flex items-start gap-[clamp(0.5rem,1vw,1rem)]">
            <span className="font-display font-black text-[clamp(1rem,1.5vw,1.4rem)] text-brand-orange leading-none mt-0.5">2</span>
            <div>
              <h3 className="font-display font-bold text-[clamp(0.78rem,1.1vw,0.95rem)] text-brand-black">Interrogation phase</h3>
              <p className="font-body font-light text-[clamp(0.62rem,0.85vw,0.75rem)] text-brand-muted mt-0.5">
                The agent asked about purpose, content, and mood before generating anything.
              </p>
            </div>
          </div>

          <div className="reveal delay-4 flex items-start gap-[clamp(0.5rem,1vw,1rem)]">
            <span className="font-display font-black text-[clamp(1rem,1.5vw,1.4rem)] text-brand-orange leading-none mt-0.5">3</span>
            <div>
              <h3 className="font-display font-bold text-[clamp(0.78rem,1.1vw,0.95rem)] text-brand-black">Style discovery</h3>
              <p className="font-body font-light text-[clamp(0.62rem,0.85vw,0.75rem)] text-brand-muted mt-0.5">
                Five visual previews generated. I picked one, the agent built it.
              </p>
            </div>
          </div>

          <div className="reveal delay-5 flex items-start gap-[clamp(0.5rem,1vw,1rem)]">
            <span className="font-display font-black text-[clamp(1rem,1.5vw,1.4rem)] text-brand-orange leading-none mt-0.5">4</span>
            <div>
              <h3 className="font-display font-bold text-[clamp(0.78rem,1.1vw,0.95rem)] text-brand-black">Iterate &amp; ship</h3>
              <p className="font-body font-light text-[clamp(0.62rem,0.85vw,0.75rem)] text-brand-muted mt-0.5">
                Slide-by-slide refinement. Each round was one prompt, one result.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
