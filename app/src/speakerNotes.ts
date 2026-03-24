/** Speaker notes for each slide — used by the TTS narrator */
export const SPEAKER_NOTES: Record<number, string> = {
  0: `Vibe Coding. How to add afterburners to your workflow. Without burning the quota. Let's talk about steering AI. So we actually ship. Instead of just spinning our wheels.`,

  1: `Devs burn so much of their usage fighting the LLM. Instead of working with it. The AI invents design tokens that don't exist. SSR and Lighthouse scores are never in its plan. You spend ten requests fixing what one good prompt would prevent. Three steering rules. That's all it takes.`,

  2: `Rule one. Interrogate. Your number one goal is to reduce assumptions. One bad line in a PRD could be a thousand lines of bad code. So before the agent writes anything. Make it ask you questions. Every question removes an assumption.`,

  3: `Rule two. Make a plan. Always. Put the AI in plan mode. The model thinks first. It asks clarifying questions. Ask it to write the plan to a markdown file. That way you can pick up where you left off.`,

  4: `Don't accept the first draft of the plan. Spar with it. Tell it to "make it better". That tells the model its answer isn't good enough. It gets creative. It pushes harder.`,

  5: `Rule three. Reduce cycle time. The AI should write its own tests. Plan, Implement and Validate. That is the loop. If the vibe is off, the test catches it. Before you even open the browser.`,

  6: `Three letters. Plan, implement, validate. Take one phase from the PRD. Build a structured plan — task list and validation strategy. Reset context. Then hand it to the agent. Trust but verify at the end.`,

  7: `I vibed this site. Two skills powered the whole build. Frontend slides. And frontend design. The agent interrogated me. Proposed five styles. And built it.`,

  8: `Start with the why. In Graphene, every task can now start with a PRD. Copilot researches git history. Jira tickets. Pull requests. That becomes the why. The PRD captures the what, as tests. Only then does Copilot implement the how. After the build, run after-edit mode. If anything changed, the PRD gets updated too.`,

  9: `Two power ups. Append use sub agents to any prompt. The agent fans out. Often faster, even on the biggest model. And: don't stop your turn, use ask questions. One long session. Instead of ten back and forths. Same work. One premium request.`,

  10: `Here's the takeaway. Vibe coding alone is chaos. The AI hallucinates. It invents things that don't exist. You burn your quota fighting fires. But add a PRD. And add real tests. Then the AI is not just a boilerplate machine. It is capable of extraordinary work. You just have to give it constraints. A PRD gives it intent. Tests give it guardrails. Together, they turn vibe coding from a gamble into a superpower.`,
}
