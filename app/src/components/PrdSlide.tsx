export default function PrdSlide() {
  return (
    <div className="flex h-full w-full bg-white">
      {/* Left panel — context */}
      <div className="flex flex-1 flex-col justify-center px-[clamp(2rem,5vw,5rem)] border-r border-brand-border">
        <p className="reveal delay-1 font-body font-semibold text-[clamp(0.55rem,0.9vw,0.72rem)] uppercase tracking-[0.2em] text-brand-orange mb-[clamp(1rem,2vh,1.5rem)]">
          PRD-Driven Development
        </p>
        <h2 className="reveal delay-2 font-display font-black text-[clamp(1.6rem,4vw,3.2rem)] leading-[1.05] text-brand-black mb-[clamp(1rem,2.5vh,2rem)]">
          Start with<br />
          <em className="font-display italic font-normal text-brand-orange">the why.</em>
        </h2>
        <div className="reveal delay-3 w-[clamp(30px,4vw,40px)] h-[2px] bg-brand-orange mb-[clamp(0.8rem,2vh,1.5rem)]" />
        <p className="reveal delay-3 font-body font-light text-[clamp(0.82rem,1.4vw,1.05rem)] text-brand-muted leading-relaxed max-w-[34ch] mb-[clamp(0.8rem,1.5vh,1.2rem)]">
          In Graphene, every task can now start with a PRD. Copilot researches git history, Jira tickets, and PRs to uncover the <strong className="text-brand-black font-medium">history</strong> of the component.
        </p>
        <p className="reveal delay-4 font-body font-light text-[clamp(0.72rem,1.1vw,0.9rem)] text-brand-muted leading-relaxed max-w-[34ch]">
          That becomes the WHY. From the PRD, extract the WHAT as tests. Then the agent implements the HOW. After implementation, run after-edit mode to sync the PRD back.
        </p>
      </div>

      {/* Right panel — visual flow diagram */}
      <div className="relative w-[clamp(280px,44vw,540px)] bg-brand-cream flex flex-col items-center justify-center px-[clamp(1.5rem,3vw,3rem)] py-[clamp(1rem,2vh,2rem)]">
        {/* Flow: vertical steps connected by lines */}
        <div className="flex flex-col items-center gap-[clamp(0.4rem,1vh,0.8rem)] w-full max-w-[clamp(220px,28vw,380px)]">

          {/* Step 1: Research */}
          <div className="reveal delay-2 w-full bg-white border border-brand-border rounded-sm px-[clamp(0.8rem,1.2vw,1.2rem)] py-[clamp(0.5rem,1vh,0.8rem)] relative">
            <div className="flex items-center gap-[clamp(0.4rem,0.7vw,0.7rem)]">
              <span className="font-display font-black text-[clamp(0.9rem,1.3vw,1.2rem)] text-brand-orange leading-none">1</span>
              <div>
                <h3 className="font-display font-bold text-[clamp(0.72rem,1vw,0.88rem)] text-brand-black">Research the component</h3>
                <p className="font-body font-light text-[clamp(0.55rem,0.75vw,0.68rem)] text-brand-muted mt-0.5">
                  Git history · Jira tickets · PRs
                </p>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="reveal delay-2 w-[2px] h-[clamp(8px,1.2vh,14px)] bg-brand-orange/40" />

          {/* Step 2: PRD */}
          <div className="reveal delay-3 w-full bg-brand-orange text-white rounded-sm px-[clamp(0.8rem,1.2vw,1.2rem)] py-[clamp(0.5rem,1vh,0.8rem)]">
            <div className="flex items-center gap-[clamp(0.4rem,0.7vw,0.7rem)]">
              <span className="font-display font-black text-[clamp(0.9rem,1.3vw,1.2rem)] text-white/70 leading-none">2</span>
              <div>
                <h3 className="font-display font-bold text-[clamp(0.72rem,1vw,0.88rem)] text-white">Document the WHY in PRD</h3>
                <p className="font-body font-light text-[clamp(0.55rem,0.75vw,0.68rem)] text-white/80 mt-0.5">
                  History → structured intent
                </p>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="reveal delay-3 w-[2px] h-[clamp(8px,1.2vh,14px)] bg-brand-orange/40" />

          {/* Step 3: Tests */}
          <div className="reveal delay-4 w-full bg-white border border-brand-border rounded-sm px-[clamp(0.8rem,1.2vw,1.2rem)] py-[clamp(0.5rem,1vh,0.8rem)]">
            <div className="flex items-center gap-[clamp(0.4rem,0.7vw,0.7rem)]">
              <span className="font-display font-black text-[clamp(0.9rem,1.3vw,1.2rem)] text-brand-orange leading-none">3</span>
              <div>
                <h3 className="font-display font-bold text-[clamp(0.72rem,1vw,0.88rem)] text-brand-black">Extract the WHAT into tests</h3>
                <p className="font-body font-light text-[clamp(0.55rem,0.75vw,0.68rem)] text-brand-muted mt-0.5">
                  PRD requirements → runnable specs
                </p>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="reveal delay-4 w-[2px] h-[clamp(8px,1.2vh,14px)] bg-brand-orange/40" />

          {/* Step 4: Implement */}
          <div className="reveal delay-5 w-full bg-white border border-brand-border rounded-sm px-[clamp(0.8rem,1.2vw,1.2rem)] py-[clamp(0.5rem,1vh,0.8rem)]">
            <div className="flex items-center gap-[clamp(0.4rem,0.7vw,0.7rem)]">
              <span className="font-display font-black text-[clamp(0.9rem,1.3vw,1.2rem)] text-brand-orange leading-none">4</span>
              <div>
                <h3 className="font-display font-bold text-[clamp(0.72rem,1vw,0.88rem)] text-brand-black">Agent implements the HOW</h3>
                <p className="font-body font-light text-[clamp(0.55rem,0.75vw,0.68rem)] text-brand-muted mt-0.5">
                  Tests pass → ship it
                </p>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="reveal delay-5 w-[2px] h-[clamp(8px,1.2vh,14px)] bg-brand-orange/40" />

          {/* Step 5: Review loop */}
          <div className="reveal delay-6 w-full bg-brand-black text-white rounded-sm px-[clamp(0.8rem,1.2vw,1.2rem)] py-[clamp(0.5rem,1vh,0.8rem)] relative">
            <div className="flex items-center gap-[clamp(0.4rem,0.7vw,0.7rem)]">
              <span className="font-display font-black text-[clamp(0.9rem,1.3vw,1.2rem)] text-brand-orange leading-none">5</span>
              <div>
                <h3 className="font-display font-bold text-[clamp(0.72rem,1vw,0.88rem)] text-white">Review &amp; close the loop</h3>
                <p className="font-body font-light text-[clamp(0.55rem,0.75vw,0.68rem)] text-white/70 mt-0.5">
                  After-edit mode — sync PRD with reality
                </p>
              </div>
            </div>
            {/* Loop-back arrow indicator */}
            <div className="absolute -right-[clamp(18px,2.5vw,28px)] top-1/2 -translate-y-1/2 flex items-center">
              <div className="w-[clamp(12px,1.8vw,20px)] h-[2px] bg-brand-orange/50" />
              <div className="text-brand-orange text-[clamp(0.55rem,0.8vw,0.7rem)] font-body font-medium whitespace-nowrap ml-1">
                ↑ back to 2
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
