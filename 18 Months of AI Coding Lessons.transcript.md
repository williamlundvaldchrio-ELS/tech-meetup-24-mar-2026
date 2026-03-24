      videoId="Xdpv_EnJ6Dw"


18 Months of AI Coding Lessons in 18 Minutes (10 Tips)
GritAI Studio
5.85K subscribers
  
4,245 views  Dec 7, 2025  #CursorAI #ClaudeCode #AICodingTips
AI coding tips that actually work. After 18 months of daily AI coding with Cursor, Claude Code, and other tools, I have distilled everything I learned into 10 tips you can learn in 15 minutes. These are battle-tested workflows I use every single day—no hype, just what actually works.

The models we use today are probably the worst models you will use for the rest of your life. In the past year alone, we have gone from AI that could barely autocomplete a function to agents that write entire features, create branches, and open pull requests while you drink your coffee. Hate it or embrace it—AI-assisted coding done the right way is a superpower!

📌 In this video:
0:00 Intro
1:35 Tip 0: Embrace a Pair-Programming Mindset (The Foundation)
3:52 Tip 1: Context is King! (/init, context management, sub-agents)
5:38 Tip 2: Rules & Docs Make All The Difference! (claude.md, cursor.rules, framework docs)
6:51 Tip 3: Make a PLAN! (Plan mode, ultrathink, markdown planning)
8:52 Tip 4: Break It Down! (GitHub issues, task management)
10:06 Tip 5: Pick the Right Model! (Model selection, when to use what)
11:10 Tip 6: Use the Tools, Luke! (Slash commands, sub-agents, hooks, skills)
13:39 Tip 7: Git Everything & Learn from Rabbit Holes! (Checkpoints, branches, documentation)
14:31 Tip 8: Level Up with MCPs! (Model Context Protocol, tool selection)
15:48 Tip 9: Release the Agents! (GitHub issues + agents, parallel workflows)
16:45 Tip 10: Be the Human in the Loop! (Orchestration, feedback, domain knowledge)
17:23 Recap + Call to Action

🎯 What You Will Learn:
✅ How to think of AI as a pair programmer, not just a tool
✅ Context engineering strategies that actually work
✅ How to build your AI knowledge base over time (compound engineering)
✅ Planning workflows that leverage thinking models
✅ When to use which model (and when not to waste expensive tokens)
✅ Advanced tool usage: slash commands, sub-agents, hooks, and skills
✅ MCP integration strategies for powerful agent capabilities
✅ How to orchestrate multiple agents working in parallel
✅ The human role in AI-assisted development

🔧 Tools Covered:

    Cursor AI
    Claude Code (including Opus 4.5)
    GitHub CLI & GitHub Issues
    MCP Servers (Model Context Protocol)


💡 Key Takeaways:
These AI coding tips work with ANY AI coding tool—Cursor, Claude Code, or whatever you prefer. The principles are universal. Once you embrace these workflows, you might find yourself moving from conductor to orchestrator, continuously "tending" to your agents and making sure they are never idle. Fair warning: it can be addictive (and costly!), but it is definitely worth it.

🔗 Resources Mentioned:
https://www.anthropic.com/news/claude...
https://every.to/c/compounding-engine...
https://cli.github.com
https://github.com/features/issues
https://github.com/upstash/context7
https://github.com/ChromeDevTools/chr...



Intro
0:00
Let's be honest, there's a lot of AI
0:02
slop out there. Bad code,
0:04
hallucinations, frustrating results. But
0:07
here's the thing, most of that comes
0:09
down to how we wield these tools, not
0:11
the tools themselves. Hate it or embrace
0:14
it. AI assisted coding done the right
0:16
way is a superpower.
0:21
[Music]
0:26
Today I'm sharing my top 10 tips for
0:28
leveling up your AI assisted coding. No
0:31
hype, just what works. Let's go.
0:38
Hey, Alex here from Grit AI Studio. Fair
0:41
warning, there are probably developers
0:43
watching this video who are way better
0:45
than me. But what I can share is my
0:47
hard-earned lessons from building with
0:49
AI these past 2 years. from frustration
0:52
to it actually becoming useful.
0:54
Distilled into these 10 tips, battle
0:56
tested workflows that actually work. No
0:59
matter what AI assistant you're using,
1:01
these tips generally apply. So, pick
1:04
your own favorite sauce and let's get
1:06
into it. Oh, and one more thing. Once
1:09
you embrace these tips and if you end up
1:11
going allin, a fair warning, it can be
1:14
quite a bit addictive and you might find
1:16
yourself moving from a conductor to
1:19
someone orchestrating a fleet of agents,
1:22
continuously tending to your agents,
1:25
making sure they're never idle. Keep
1:27
working all the time, and it can be
1:30
costly, but it's definitely worth it.
1:33
Okay, let's go. Tip zero, embrace a pair
Tip 0: Embrace a Pair-Programming Mindset (The Foundation)
1:37
programming mindset. Before we get to
1:39
the 10 tips, here's tip zero. Maybe the
1:42
most important mindset shift of all. A
1:45
lot of people ask me how I use AI. And
1:47
I've reflected on this and the way that
1:49
we phrase it, realizing we need to stop
1:52
thinking of AI as a tool and maybe a bit
1:54
cliche, start thinking of it as a
1:56
coworker. Maybe a junior intern who's
1:59
incredibly fast but needs guidance. I
2:02
know it's a tool, but if you use a
2:05
hammer and the results are bad, you
2:07
quickly end up throwing away the hammer.
2:09
But if it's an intern that delivers
2:12
mediocre results, you probably or
2:14
hopefully won't fire them on the first
2:16
try. What do you do? You'll give them
2:18
feedback. You're more specific. You
2:21
provide more context. And that's exactly
2:24
how we need to approach AI. Don't expect
2:27
perfect results on first try. Iterate,
2:30
give feedback, guide it. And here's the
2:32
part a lot of people miss. You can just
2:35
ask the AI to help you. What context are
2:38
you missing? What more information do
2:40
you need to give me a better result?
2:43
Turn it into a peer programmer. Ask it
2:45
to explain what it's doing step by step.
2:48
You have a choice. Get an answer and
2:50
accept it or instead use it to learn and
2:53
engage. Building knowledge together with
2:55
the AI. We shouldn't become lazy just
2:58
because we have these tools. We should
3:00
be smart about how we collaborate.
3:03
That's the foundation everything else
3:05
builds on. Instead of just firing off a
3:08
task to solve and then move on, we need
3:10
to turn the collaboration into a
3:12
continuous learning experience for us
3:15
and for the AI. Every coin the term
3:18
compounding engineering and I really
3:20
love this concept. Each interaction
3:22
teaches your AI tools your patterns,
3:25
preferences, and corrections. Over time,
3:28
they generate better code with less
3:30
guidance, reducing repetitive
3:32
corrections. Every bug fix, code review,
3:35
and pattern becomes a permanent lesson
3:37
that benefits future work, preventing
3:40
repeated mistakes, and accelerating on
3:42
boarding. So, embrace that pair
3:45
programming mindset. All right, let's
3:48
jump into the 10 tips. Starting with
3:51
context. Tip number one, context is
Tip 1: Context is King! (/init, context management, sub-agents)
3:54
king. Llms have a fundamental
3:56
constraint, their attention budget.
3:59
Context is king, but we need to select
4:01
the right context carefully. Too much,
4:04
we get performance degradation. Too
4:06
little, we end up with hallucinations.
4:09
The LLM fills in the blanks because it's
4:11
trained to please you. Context
4:13
engineering is about selecting the
4:15
highest impact tokens with the minimal
4:17
amount of information needed to get the
4:20
best result. We can be clever about
4:22
guiding and injecting context, pointing
4:25
the LLM in the right direction instead
4:27
of having the agent review and explore
4:29
everything every time. We can explain
4:31
and summarize or point the agent in the
4:34
right direction by referencing files. In
4:37
cloud code, you can use slashinit. It
4:40
explores your entire repository and
4:42
writes a summary in your claw.md file.
4:44
Now every prompt has architectural
4:47
context instead of navigating blindly.
4:49
Even if you use a different coding
4:51
agent, run /init with clawed code, then
4:54
copy that summary into whatever
4:56
environment you prefer. And manage your
4:58
context windows actively. Don't wait for
5:01
autocompact because then you lose
5:03
control. Before your window fills up,
5:05
say, "Let's summarize where we are.
5:07
Create a plan for next steps. Put it in
5:10
a markdown file. Then clear new
5:13
conversation and attach the file. You
5:15
control how you compact. In Claude Code,
5:18
you can use the /context command and you
5:20
can use this CC usage package to show
5:23
context on the status line all the time.
5:25
It's really handy. Oh, and we'll get
5:28
back to sub aents, but a superpower you
5:30
have is that each sub aent in Cloud Code
5:33
has their own context window. So, make
5:35
sure you use that to your advantage.
Tip 2: Rules & Docs Make All The Difference! (claude.md, cursor.rules, framework docs)
5:38
Tip number two, rules and docs makes all
5:41
the difference. This is where compound
5:43
engineering kicks in. Set yourself up so
5:46
that the AI becomes more proficient over
5:48
time and keep building your AI's
5:51
knowledge base. Being specific and
5:53
sharing the known recipes helps a lot.
5:56
Feed the docs. A lot of frameworks offer
5:59
specific LLM friendly docs and even
6:02
rules. Use them to your advantage.
6:05
They're tried and tested. For instance,
6:07
writing migrations in Superbase. If you
6:09
think of your Claude MD or cursor rules
6:12
as something you set up once and forget,
6:15
you're really missing out. In Claude
6:17
Code, use the hash shortcut to add
6:19
things you want Claude to remember. When
6:21
you've gone through painful debugging
6:23
and finally solved something, say, "Now
6:26
we fixed it." Summarize all the rabbit
6:29
holes we went through so we avoid these
6:31
mistakes in the future. Learn from your
6:33
mistakes and teach Claude or your coding
6:36
assistant to learn from its mistakes.
6:39
Make this into a habit. You can also ask
6:41
Claude to detect patterns and
6:43
anti-atterns in your codebase.
6:46
Build a library.
Tip 3: Make a PLAN! (Plan mode, ultrathink, markdown planning)
6:51
Tip number three, make a plan. Always
6:54
make a plan. The reasoning capabilities
6:56
of thinking models are at a whole new
6:59
level for planning. Use that to your
7:02
advantage. In Claude Code, shift double
7:04
tab puts you in plan mode. In cursor,
7:07
select plan mode explicitly. The model
7:09
gets different instructions. It thinks
7:11
things through and asks clarifying
7:14
questions, giving you options. I always
7:17
ask the model to put that plan in a
7:19
markdown file. That way, I can keep
7:21
progress between sessions in this file.
7:24
My favorite is to combine plan mode with
7:26
ultrathink. They even made it a rainbow
7:28
colored keyword in the terminal. Add it
7:31
at the end of your prompt with something
7:32
like ultra think this through before
7:34
responding. It allocates a bigger
7:36
thinking budget. Makes the model work
7:39
harder. Personally, I hate writing long
7:41
descriptive specs, so I always ask the
7:44
AI to help me write it out based on my
7:46
rough idea. Sparring with the AI,
7:49
exploring concepts in plan mode is
7:52
vastly underrated in my opinion, and I
7:54
think a lot of developers are missing
7:56
out when it comes to planning.
7:59
Here are some magic phrases that work.
8:02
Make it better. It sounds silly, but it
8:04
works every time. You're telling the
8:06
LLM, "This isn't good enough, and it
8:08
gets creative. It pushes the boundaries.
8:11
Try it out." You can also say, "On a
8:13
scale from 1 to 10, how would you rate
8:15
what you just gave me?" It'll almost
8:17
always say eight, but you can push back
8:20
and say, "I disagree. This is a six. I'm
8:23
expecting 9 plus." You're pushing the
8:25
model to try harder. When your context
8:28
fills up, don't autocompact. Summarize
8:31
where we are. Create new steps. Put it
8:33
in a markdown file. Clear new
8:36
conversation and attach the file. Now
8:38
you can continue where you left off and
8:40
you're in control. Don't be afraid of
8:42
markdown files. Make an AI docs folder.
8:44
If you're worried about co-workers
8:46
seeing it, you can add it to Git ignore.
8:49
Keep your own little AI knowledge base.
8:51
That's completely fine. Tip number four,
Tip 4: Break It Down! (GitHub issues, task management)
8:54
break it down. Maybe this is common
8:56
sense, but it's critical when you work
8:58
with AI. Break tasks into smaller
9:01
pieces. Here's a power workflow that I
9:03
love. GitHub issues. When you've done
9:05
your plan and want to break it into 10
9:08
features, ask your coding assistant to
9:10
create issues in GitHub for each task.
9:12
This approach you can also use with uh
9:14
something like linear or even just a
9:17
markdown file as well. Midcon
9:18
conversation when the AI suggests we
9:20
could also do this or this or this.
9:22
Sometimes that's distracting, but
9:24
sometimes they're great ideas. So just
9:27
not now. Say great suggestions, add them
9:30
to GitBishious for me to review later.
9:32
And now let's focus on the current task.
9:35
It'll elaborate, follow your template,
9:37
manage your road map for you. We
9:39
actually did a whole video about this
9:41
power workflow here. So just a quick
9:44
tip, the GitHub MCP has something like
9:47
40 tools and that's a lot of context
9:49
overhead. For cloud code, I've found
9:51
that the GitHub CLI is more efficient.
9:54
Same power, less context hungry. or if
9:57
you're using Opus 4.5, we now have the
10:00
ability to defer loading of tools, which
10:02
is an awesome way to manage context for
10:05
MCPS and other tools. Tip number five,
Tip 5: Pick the Right Model! (Model selection, when to use what)
10:08
pick the right model. There's so many
10:10
choices now. It's habitual to stick with
10:12
what you know, but keep an open mind.
10:15
Try different models occasionally. You
10:17
can fork tasks, run the same prompt with
10:19
multiple models, compare results, pick
10:22
what you like best. It's worth trying
10:24
out for novel or complex features. You
10:27
can think about it simply like this. If
10:28
it's a complex task, choose one of the
10:31
best models. If it's a quick trivial
10:33
task, maybe that's overkill. Go with a
10:35
cheaper, faster model. Don't waste
10:37
expensive tokens on simple stuff. Cursor
10:40
just recently dropped their own model
10:41
called Composer. And quality-wise, it's
10:44
perfectly fine. It's not on par with
10:46
Opus 4.5, but the speed is insane. It
10:50
makes you realize how slow clawed code
10:52
can feels at times. Then again, Opus 4.5
10:55
is a beast. Pick your source, but no
10:58
need for max models on simple tasks. Be
11:01
clever about model selection. And when
11:03
you need maximum quality, ultra think
11:06
just use it. It's insanely good. Tip
11:09
number six, use the tools. Slash
Tip 6: Use the Tools, Luke! (Slash commands, sub-agents, hooks, skills)
11:12
commands, sub agents. These tools are
11:15
powerful. Learn to use them with your AI
11:18
coding assistant. Let's start with slash
11:20
commands. The built-in ones are handy,
11:22
but the power is really creating your
11:24
own slash commands. Anything repetitive,
11:26
invest time in a slash command. It's a
11:29
reusable prompt template with arguments.
11:31
Here's a power tip for you. You can
11:33
actually execute bash commands inside
11:36
slash commands. Put an exclamation mark
11:38
before the command. This means you can
11:40
gather information before running the
11:43
task. Run git commands to get context.
11:46
Then generate a smart commit message. A
11:48
lot of people don't know about this
11:50
feature. You can also tell your AI agent
11:52
when to use slash commands in your cloud
11:55
MD file. For instance, run write unit
11:58
test when you're about to start writing
11:59
tests. And then you can inject your
12:01
recipe. All right. Sub aents. Currently,
12:05
this is only available in cloud code.
12:07
But the key difference is that they have
12:09
their own context window. You can even
12:11
say use sub aents for this mid
12:14
conversation without defining one. It
12:16
wraps the task into a standalone
12:18
process. Why is that useful? Let's say
12:20
you have a folder with 50 documents that
12:23
you want to process. Go through all of
12:25
them. Summarize each one. Use a sub
12:28
agent for each document. It paralyzes 50
12:31
parallel files without bloating one
12:33
context window. Create reusable sub
12:36
aents. Architect, code reviewer,
12:38
optimizer, and then you can even chain
12:40
them together. First use code analyzer,
12:42
then optimizer on the results. Then we
12:46
also have hooks. Really powerful ways of
12:48
controlling what happens before or after
12:51
turns. A way for us to add guardrails,
12:53
but also clever automations. You can,
12:56
for instance, send a Slack message every
12:58
time Claude Code sends a notification
13:00
and is asking for your input while
13:02
you're off getting your coffee or
13:05
whatever. Or you can use it to prevent
13:07
tool calls if certain criteria is met.
13:10
Definitely worth checking out hooks.
13:14
And lastly, we have skills. One of my
13:17
favorites and really underrated by many.
13:20
Antropic found this brilliant way to
13:23
manage context through progressive
13:24
disclosure. Claude reads only the front
13:27
matter of a skill initially and goes
13:29
deeper only when relevant. Check out my
13:32
dedicated video on skills if you want to
13:34
deep dive.
Tip 7: Git Everything & Learn from Rabbit Holes! (Checkpoints, branches, documentation)
13:39
Tip number seven, get everything and
13:42
learn from your rabbit holes. Source
13:45
control is obviously important, but it's
13:47
essential when we work with AI agents.
13:50
Use checkpoints. Both cursor and cloud
13:52
code have rewind options available. So,
13:55
go back to when things were working
13:57
before the spiral started. Use branches
14:00
for experimental stuff. Maybe that's
14:02
standard best practice, but it's just
14:04
more important now. Okay, let's talk
14:06
about rabbit holes. When you finally
14:08
solve something painful, don't just move
14:11
on. Say, summarize all the mistakes we
14:13
made. Document the root cause and
14:16
solution. Put it in our patterns folder
14:18
so that I never have to go through these
14:20
issues ever again. This is really the
14:22
essence of compounding engineering. This
14:25
is how it works. You're building
14:26
institutional knowledge that makes every
14:29
future session better. Tip number eight,
Tip 8: Level Up with MCPs! (Model Context Protocol, tool selection)
14:32
level up with MCPs. Model context
14:35
protocol. MCPs aren't just for enriching
14:37
context anymore. They give your agents
14:40
arms to perform actions. But be
14:43
selective. Don't turn everything on.
14:45
Working on database stuff, turn on the
14:48
database MCP. Not touching the database,
14:50
turn it off. Context space is precious.
14:54
Antropic have a really clever approach
14:56
to managing context and tool calling
14:58
with Opus 4.5. Check out their blog post
15:01
about this in the description below. So,
15:03
here's some of my favorite MCP servers.
15:06
Context 7 for documentation enrichment,
15:10
Figma if you're doing design and front-
15:12
end work, and ChromeDev tools. This MCP
15:15
is really, really powerful. In Cursor,
15:18
you have a built-in browser. Now, you
15:20
can connect it to your own browser, run
15:22
through tests, get feedback, and you
15:24
have the same functionality in
15:26
anti-gravity. Don't forget you can feed
15:28
screenshots to AI agents. Draw on them,
15:31
circle something, say, "Change this."
15:34
Way faster than just describing it with
15:36
words. And you can of course also talk.
15:39
Use something like Super Whisper or
15:41
something similar. In Cursor, we have a
15:43
built-in functionality for this.
15:45
Speaking is often faster than typing.
15:47
Tip number nine, release the agents.
Tip 9: Release the Agents! (GitHub issues + agents, parallel workflows)
15:51
Here's where it gets really interesting.
15:53
Combine GitHub issues with agents.
15:58
tell code or cursor fix issue number
16:01
three. It uses the GitHub CLI, pulls the
16:04
issue description as context, spins up
16:06
an agent in a sandbox, solves it,
16:09
creates a branch, opens a pull request
16:11
for your review. That's how you go from
16:13
one agent to 10 or more depending on
16:17
your budget and your cognitive ability
16:20
to handle many parallel tasks. I think
16:22
we are going to be the choking point in
16:25
this equation. You can be drinking
16:27
coffee, watching multiple agents work in
16:29
parallel. It's wild. It's actually very
16:31
addictive. And a fair warning, it can
16:33
get expensive if you're running 10
16:35
agents in parallel. But this is where
16:37
we're heading. Get comfortable with that
16:39
orchestrator role. There's a full video
16:42
on this power workflow in the comments
16:44
below. Tip number 10, be the human in
Tip 10: Be the Human in the Loop! (Orchestration, feedback, domain knowledge)
16:48
the loop. Don't just trust what comes
16:50
out, but also embrace it smartly.
16:53
Remember the pair programming mindset.
16:55
Don't just accept results, ask the AI to
16:58
explain what it did. Use your knowledge.
17:01
Expand your knowledge together. You're
17:03
the orchestrator. Now, your value is
17:05
your taste, your opinion, your style,
17:08
your domain knowledge. That's what turns
17:11
generic AI slop into something valuable,
17:14
something that resonates with what you
17:16
would have built yourself. guide it,
17:18
give feedback, be specific, be the human
17:21
in the loop.
Recap + Call to Action
17:23
And there you have it. Those are my 10
17:25
tips plus tip zero, which might be the
17:28
most important one. Let's do a quick
17:30
recap. Tip zero, embrace a pair
17:33
programming mindset. Tip number one,
17:36
context is king. Tip number two, rules
17:39
and docs make all the difference. Tip
17:41
number three, make a plan. Always make a
17:45
plan. Tip number four, break it down
17:47
into smaller pieces. Tip number five,
17:49
pick the right model for the job. And
17:52
tip number six, use the tools, Luke. Tip
17:55
number seven, get everything and learn
17:58
from your rabbit holes. Tip number
18:00
eight, level up with MCBs. Tip number
18:04
nine, release the agents. And tip number
18:07
10, be the human in the loop. The models
18:10
we use today are the worst we'll use for
18:12
the rest of our lives. The pace of
18:14
improvement is incredible. If you
18:17
haven't fully embraced AI assisted
18:19
coding yet, now's the time. Drop a
18:21
comment with your favorite tip or if you
18:23
have a great tip to share with the
18:25
community. Hit that like button and
18:27
subscribe for more videos like this. and
18:30
I'll see you in the next
