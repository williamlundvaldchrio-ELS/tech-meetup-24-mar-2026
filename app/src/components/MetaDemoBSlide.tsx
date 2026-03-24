export default function MetaDemoBSlide() {
  return (
    <div className="flex h-full w-full bg-white">
      {/* Left panel — Pro Tips */}
      <div className="flex flex-1 flex-col justify-center px-[clamp(2rem,5vw,5rem)] border-r border-brand-border">
        <p className="reveal delay-1 font-body font-semibold text-[clamp(0.55rem,0.9vw,0.72rem)] uppercase tracking-[0.2em] text-brand-orange mb-[clamp(1rem,2vh,1.5rem)]">
          One-liners that change everything
        </p>
        <h2 className="reveal delay-2 font-display font-black text-[clamp(1.6rem,4vw,3.2rem)] leading-[1.05] text-brand-black mb-[clamp(1rem,2.5vh,2rem)]">
          <em className="font-display italic font-normal">Power ups!</em>
        </h2>
        <div className="reveal delay-3 w-[clamp(30px,4vw,40px)] h-[2px] bg-brand-orange mb-[clamp(1rem,2vh,1.5rem)]" />

        <div className="space-y-[clamp(0.8rem,1.8vh,1.4rem)]">
          <div className="reveal delay-3">
            <code className="block bg-brand-black text-white font-mono text-[clamp(0.7rem,1vw,0.88rem)] px-[clamp(0.6rem,1vw,1rem)] py-[clamp(0.3rem,0.6vh,0.5rem)] rounded-sm mb-[clamp(0.2rem,0.5vh,0.4rem)]">
              use subagents
            </code>
            <p className="font-body font-light text-[clamp(0.65rem,0.9vw,0.78rem)] text-brand-muted leading-relaxed">
              Append to any prompt. The agent fans out to multiple workers — often faster, even on the biggest model.
            </p>
          </div>

          <div className="reveal delay-4">
            <code className="block bg-brand-black text-white font-mono text-[clamp(0.7rem,1vw,0.88rem)] px-[clamp(0.6rem,1vw,1rem)] py-[clamp(0.3rem,0.6vh,0.5rem)] rounded-sm mb-[clamp(0.2rem,0.5vh,0.4rem)]">
              don&apos;t stop, use askQuestions
            </code>
            <p className="font-body font-light text-[clamp(0.65rem,0.9vw,0.78rem)] text-brand-muted leading-relaxed">
              One long interactive session instead of 10 back-and-forths. Same work, one premium request.
            </p>
          </div>
        </div>
      </div>

      {/* Right panel — the thesis */}
      <div className="relative w-[clamp(280px,40vw,480px)] bg-brand-orange flex flex-col items-center justify-center px-[clamp(2rem,3vw,3.5rem)]">
        <blockquote className="reveal-scale delay-3 text-center">
          <p className="font-display italic font-normal text-[clamp(1.1rem,2.2vw,1.8rem)] leading-[1.3] text-white mb-[clamp(1rem,2vh,1.5rem)]">
            &ldquo;Skills turned a blank canvas into a
            production build. Two files, zero guesswork.&rdquo;
          </p>
          <div className="w-[clamp(20px,3vw,30px)] h-[1.5px] bg-white/40 mx-auto mb-[clamp(0.5rem,1vh,0.8rem)]" />
          <cite className="font-body font-light text-[clamp(0.6rem,0.85vw,0.72rem)] text-white/70 not-italic uppercase tracking-[0.15em]">
            On Skills &amp; Leverage
          </cite>
        </blockquote>
      </div>
    </div>
  )
}
