export default function ProblemRulesSlide() {
  return (
    <div className="flex h-full w-full bg-white">
      {/* Left panel — The Problem */}
      <div className="flex flex-1 flex-col justify-center px-[clamp(2rem,5vw,5rem)] border-r border-brand-border">
        <p className="reveal delay-1 font-body font-semibold text-[clamp(0.55rem,0.9vw,0.72rem)] uppercase tracking-[0.2em] text-brand-orange mb-[clamp(1rem,2vh,1.5rem)]">
          The Problem
        </p>
        <h2 className="reveal delay-2 font-display font-black text-[clamp(1.4rem,3.5vw,2.8rem)] leading-[1.1] text-brand-black mb-[clamp(1rem,2.5vh,2rem)]">
          Devs burn so much of their usage fighting the LLM instead of working with it.
        </h2>
        <div className="reveal delay-3 w-[clamp(30px,4vw,40px)] h-[2px] bg-brand-orange mb-[clamp(0.8rem,2vh,1.5rem)]" />
        <ul className="space-y-[clamp(0.4rem,1vh,0.8rem)]">
          <li className="reveal delay-3 font-body font-light text-[clamp(0.78rem,1.3vw,1rem)] text-brand-muted leading-relaxed">
            → AI invents design tokens that don't exist in your repo
          </li>
          <li className="reveal delay-4 font-body font-light text-[clamp(0.78rem,1.3vw,1rem)] text-brand-muted leading-relaxed">
            → SSR and Lighthouse scores are never in its "plan"
          </li>
          <li className="reveal delay-5 font-body font-light text-[clamp(0.78rem,1.3vw,1rem)] text-brand-muted leading-relaxed">
            → You spend 10 requests fixing what 1 good prompt would prevent
          </li>
        </ul>
      </div>

      {/* Right panel — The Three Steering Rules */}
      <div className="relative w-[clamp(280px,42vw,520px)] bg-brand-orange-pale flex flex-col justify-center px-[clamp(1.5rem,3vw,3rem)]">
        <p className="reveal delay-1 font-body font-semibold text-[clamp(0.55rem,0.9vw,0.72rem)] uppercase tracking-[0.2em] text-brand-orange mb-[clamp(1.5rem,3vh,2.5rem)]">
          Three Steering Rules
        </p>

        {/* Rule cards */}
        <div className="space-y-[clamp(0.8rem,2vh,1.5rem)]">
          <div className="reveal delay-2 bg-white rounded-sm border border-brand-border p-[clamp(0.8rem,1.5vw,1.5rem)]">
            <div className="flex items-baseline gap-[clamp(0.4rem,0.8vw,0.8rem)]">
              <span className="font-display font-black text-[clamp(1.2rem,2vw,1.8rem)] text-brand-orange">01</span>
              <div>
                <h3 className="font-display font-bold text-[clamp(0.85rem,1.3vw,1.1rem)] text-brand-black">Interrogate</h3>
                <p className="font-body font-light text-[clamp(0.65rem,0.95vw,0.82rem)] text-brand-muted mt-1">
                  Make the AI grill you before it writes a line.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal delay-3 bg-white rounded-sm border border-brand-border p-[clamp(0.8rem,1.5vw,1.5rem)]">
            <div className="flex items-baseline gap-[clamp(0.4rem,0.8vw,0.8rem)]">
              <span className="font-display font-black text-[clamp(1.2rem,2vw,1.8rem)] text-brand-orange">02</span>
              <div>
                <h3 className="font-display font-bold text-[clamp(0.85rem,1.3vw,1.1rem)] text-brand-black">Reflect & Plan</h3>
                <p className="font-body font-light text-[clamp(0.65rem,0.95vw,0.82rem)] text-brand-muted mt-1">
                  Approve the architecture before any code ships.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal delay-4 bg-white rounded-sm border border-brand-border p-[clamp(0.8rem,1.5vw,1.5rem)]">
            <div className="flex items-baseline gap-[clamp(0.4rem,0.8vw,0.8rem)]">
              <span className="font-display font-black text-[clamp(1.2rem,2vw,1.8rem)] text-brand-orange">03</span>
              <div>
                <h3 className="font-display font-bold text-[clamp(0.85rem,1.3vw,1.1rem)] text-brand-black">Reduce Cycle Time</h3>
                <p className="font-body font-light text-[clamp(0.65rem,0.95vw,0.82rem)] text-brand-muted mt-1">
                  The AI writes its own tests. Catch failure before the browser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
