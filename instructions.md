Phase 0: Meta-Instructions (The Vibe Guidelines)
Before you start this project, you must strictly follow these Vibe Coding Workflow principles:
Interrogation First: Do not generate code yet. Ask me 5-7 technical questions to uncover hidden requirements (Design tokens, SSR, tests).
Reflect until Sure: After I answer, provide a Plan in Markdown. Do not start coding until I approve the plan.
Minimize Cycle Time: Prioritize code that is testable. If I ask for a feature, suggest a way to verify it (e.g., a Playwright/Lighthouse check) immediately.
Context is King: Respect the existing folder structure. If you need to create a new component, document its "vibe" for future sub-agents.

Phase 1: Project Overview
Goal: Build a single-page "Vibe Coding" presentation site.
Stack: React + Tailwind CSS (Dark Mode).
Layout: \* A centered slide container.
Keyboard navigation (Left/Right arrows).
Top progress bar based on current slide index.
iFrame slots for the YouTube videos listed in the "Content" section.
Phase 2: Front-end Technical Constraints
Design Tokens: Do not guess colors or spacing. Use a strict Zinc/Slate palette. Check if I have a tailwind.config.js or if you should define them as CSS variables.
SSR/Hydration: Ensure keyboard listeners are initialized in a useEffect to avoid SSR mismatches.
Documentation: Every component must have a basic Storybook mock structure generated.
Performance: All iFrames must be lazy-loaded. Use next/image or standard optimization if applicable.
Safety Checks: If I ask for "tests," do not just write unit tests. Include Lighthouse score targets and Visual Regression (Playroom) placeholders.
Phase 3: Content & Script
Embed this script into the presentation slides:
Slide 1 (Intro): "Vibe Coding: How to let the Agent do your job (without hitting the rate limit)."
Slide 2 (The Problem): "Senior Devs burn 20% of their quota by letting agents loop on hallucinations. We stop that today."
Slide 3 (Rule: Interrogate): Video 1. "Ask the AI to grill you before it codes."
Slide 4 (Rule: Plan): Video 2. "Reflect on the plan to save 10 wasted requests."
Slide 5 (The Flex): "I built this site using these exact rules. No hacks, just pure intent."

links to videos
https://www.youtube.com/watch?v=goOZSXmrYQ4
Why it works: Focuses heavily on the Cycle Time and Interrogation aspects. It introduces the "PIV Loop" (Plan, Implement, Validate), which is a professional way to explain "reducing cycle time."
Clip to show: Start at 4:14 (PRD/Interrogation phase) and 23:18 (The PIV Loop for cycle time).

https://www.youtube.com/watch?v=Xdpv_EnJ6Dw
Why it works: This is a much more grounded, professional breakdown. It covers the "Reflection" tip (Tip 3: Make a Plan) and "Folder Structure" (Tip 1: Context is King).
Clip to show: Start at 3:52 (Context/Rules) and 6:51 (Planning/Reflection).

This is the "Full Vibe" approach. I’ve tailored the PRD to be front-end specific, focusing on the pain points you mentioned—like the nightmare of an AI hallucinating CSS variables instead of using your actual Design Tokens, or ignoring SSR/Lighthouse entirely.
Here is your "Master PRD Prompt" to feed into your coding AI, followed by the finalized "Casual Dev" script.

Part 1: The "Vibe Coding" PRD Prompt
Copy-paste this into your AI Agent (Cursor, Claude Dev, Copilot, etc.) to build your presentation site.
System Goal: Build a single-page, high-fidelity presentation website for a 20-minute "Show and Learn" session about AI-assisted coding.
Core Feature Set:
Navigation: Global keyboard listeners (Left/Right arrows) and on-screen buttons to swap slides.
Visuals: Modern Dark Mode (Slate/Zinc). High-contrast typography.
Layout: A centered "Slide Deck" container. Support for embedded YouTube iframes and code snippets.
Components: A progress bar at the top (0% to 100%) based on slide index.
Technical Requirements (Front-end Specific):
Architecture: Use Tailwind CSS for styling. Ensure the code is clean enough for a Senior dev to respect (no !important hacks).
SSR Friendly: If using a framework, ensure no hydration mismatches on the keyboard listeners.
Design Tokens: Do not guess colors. Use a strict Zinc/Blue color palette.
Documentation: Generate a README.md and a basic Storybook entry structure for the 'Slide' component.
Testing: Include a placeholder for a Playroom/Visual Regression test config.
The "Interrogation" Instruction (CRITICAL):
Before writing any code, you must interrogate me. Ask me 5 questions specifically regarding:
How we handle Design Tokens (Tailwind config vs. CSS variables).
How many slides I need and their content hierarchy.
My preference for Lighthouse optimization (Image lazy-loading vs. priority).
Whether I want a "Live Code" playground integrated.
Any specific SSR/Next.js vs. Vite constraints.
The "Reflection" Instruction: > After I answer, provide a Markdown Plan of the component architecture. Do not code until I approve the "vibe" of the plan.

Part 2: The "Show and Learn" Script
Use this as your talk track. It’s designed to sound like a peer-to-peer chat, not a lecture.
0:00 - 0:04 | The Intro: Confessions of a Vibe Coder
"Alright, let's talk about 'Vibe Coding.' We’ve all done it—you open the agent, you give it a prompt, and you just let it rip while you grab a coffee. When it works, it’s magic. When it doesn't, you realize you just wasted 20 premium requests because the AI started hallucinating design tokens that don't exist in our repo. Today is about steering that energy so we actually ship instead of just burning our Copilot quota."
0:04 - 0:12 | The Three 'Steering' Rules
"The video I’m about to show clips from has a few 'influencer' vibes, but the technical core is solid. Here’s how we apply it to our front-end workflow:"
Rule 1: The Interrogation. "Before you let an agent touch a component, make it ask you questions. If it doesn't know we use specialized tokens for our shadows or that this page needs to be SSR-compatible, it’s going to fail. Force it to grill you first."
Rule 2: Reflect & Plan. "Never let it write 500 lines of code in one go. Ask for a plan. If it forgets to mention Storybook or Lighthouse scores in the plan, you kill the task right there. You save the request; you save the vibe."
Rule 3: Reduce Cycle Time. "The AI should write its own visual tests. If the 'vibe' is off, the test should catch it before you even look at the browser."
0:12 - 0:17 | The "Meta" Demo
"I didn't actually 'write' this presentation site. I vibed it. I used a PRD prompt that forced the AI to interrogate me on our design tokens and SSR needs. It drafted a plan, I corrected its lack of Lighthouse considerations, and it spat out this site in one shot. No 'loop of doom,' no wasted requests."
0:17 - 0:20 | Closing (The Senior Dev Nod)
"Vibe coding isn't about being lazy—it’s about being a high-leverage architect. Let the AI handle the boilerplate; we handle the intent. Anyone else hitting their request limits too early in the month?"
