      videoId="goOZSXmrYQ4"

My COMPLETE Agentic Coding Workflow to Build Anything (No Fluff or Overengineering)
Cole Medin
197K subscribers

37,605 views Feb 23, 2026
Building software from scratch with coding agents like Claude Code is one of the highest-leverage skills you can develop right now, but honestly most people seriously overcomplicate it.

In this video I'll walk you through the complete greenfield AI coding workflow I use daily that is dead simple and super easy to use + evolve for yourself. This is the workflow that lets a single developer build production-grade software in hours instead of weeks.

This is a longer video only because I am going through literally everything with you. The framework itself is simple to implement now!

```

If you want to take the validation phase to the next level, check out QA Tech - AI testing tool for QA automation and Shift-Left Testing. No test code to write, no selectors to maintain:

https://qa.tech/

```

    If you want to dive even deeper into building reliable and repeatable systems for AI coding, check out the Dynamous Community and Agentic Coding Course:

https://dynamous.ai/agentic-coding-co...

    GitHub repository with the build from this video and command/rules resources (see .claude/):

https://github.com/coleam00/link-in-b...

```

0:00 The Dead Simple Framework for AI Coding
2:28 Creating the AI Layer for Your Codebase
4:14 PRD Creation - The Ultimate Planning Tool
8:38 Subagents for Research
15:42 Global Rules and On Demand Context
20:50 The Prime Command
23:18 The PIV Loop Framework
31:40 Live Feature Implementation + Validation
34:53 Keeping Your Codebase Reliable
38:40 Evolve Your Coding Agent Over Time

```

The Dead Simple Framework for AI Coding
0:00
Everyone knows that you need a framework for working with coding agents, but not many people have one that's simple,
0:06
really their own, and something they can evolve over time. Now, there are a lot of overengineered frameworks out there
0:12
on GitHub. All these multi-agent systems people are creating. I respect what people are working on, but a lot of
0:18
times you just need something really simple that just gets the job done for you. because I know that you have good
0:24
ideas that you want to build and you don't want to spend more time creating your agentic coding workflows than you
0:29
do actually coding. And so that's what I have for you right now. This is my dead simple framework that I use every single
0:37
time I'm starting a new project with my coding agent. Now, brownfield development, working on an existing
0:42
codebase, is slightly different. That's for another video. This we're focusing on green field development. We want a
0:48
simple framework to get our feet on the ground running as fast as possible building anything new. And everything
0:54
that I am covering here is universal. These principles will apply no matter the coding agent that you are using. So
1:00
there are really two parts to this video and I'm going to be doing a live build with you as I'm explaining everything here to make it super concrete. And so
1:08
what I have right now with my codebase is pretty much nothing besides my AI layer. So there's a few commands and
1:14
skills that I brought over. This is what I use as a starting point for every single one of my projects. We're going to be creating something from scratch.
1:21
And so we need to start with our initial planning, creating what is called a PRD. This is the initial scope of work that
1:28
we have to create the minimum viable product for our application. And there's a lot that goes here setting up our
1:34
initial AI layer before we get into any of the actual coding. And then we take our PRD and we split it up into phases
1:41
of work. And we're going to knock it out with PIV loops. And so I'll talk about what that means. We'll see an example of
1:47
that. And then while I'm going through this entire implementation, I'll be covering the four golden rules that we
1:52
want to follow all of the time. So these golden rules are going to fit in pretty naturally as I'm going through creating
1:58
the PRD, our AI layer, and doing a PIV loop. For example, the context
2:03
management. Context is your most precious resource when working with AI coding assistants. That's going to be a
2:08
big theme throughout. also creating commands and skills for everything and the system evolution mindset because
2:14
what we're going for here with our system is to create something that is reliable and repeatable. And so I'll be
2:19
speaking to that as I go through everything. So just trying to hit on some of the core themes that you'll see
2:25
throughout this. It's going to be a very valuepacked video. And so we'll start here with our initial planning creating
Creating the AI Layer for Your Codebase
2:31
what I like to call the AI layer. So I'll explain what that is and we'll build it together right now. So your AI
2:37
layer is all the assets in your codebase that you created to be context for your coding agent like your PRD what are we
2:44
going to build your global rules how are we going to build it the commands so we have reusable workflows for our coding
2:50
agent we'll focus on the prime one at first and then also sub agents so we can delegate for research and generally how
2:58
I work with my AI layer and I have this as a resource for you is I have a more generic set of commands that I'll bring
3:05
into any new project. And then the point of this is as my code base grows and I start to build it out, I will also
3:11
evolve my commands to make them more powerful for the specific use case, just making them more specific to my code.
3:18
And that's generally my recommendation for you. And so use this as a starting point if you want. I'll have a link to the GitHub repo in the description. The
3:25
point of keeping this so simple is that you can take it for yourself and easily evolve it for your use case and how you
3:32
like to work. That's why I recommend something like this over a more complex framework like BMAD or the GitHub spec
3:38
kit. They're really, really powerful, but it's hard to really make it your own. I want you to be able to make this your own. So, right now, I'll show you
3:45
what it looks like to create an entire PRD, define the initial rules for our codebase. We'll even customize our first
3:51
command a little bit, and then I'll talk about sub agents throughout. And I know we're doing a lot of planning before we
3:56
write any of our actual code with the piv loops, but it's important to do this. Doing the planning up front might
4:03
seem like we're taking things too slow, but if we create a really good plan, like we have good rules, a good PRD, it
4:10
means that all of our development after is going to be a lot faster and more reliable. So, let's start with our PRD.
PRD Creation - The Ultimate Planning Tool
4:16
A lot of people call this a spec. Again, it's just the entire scope of work to build out the initial version of our
4:22
application. And then after that point, when we have a good foundation, it moves more to brownfield development. That's
4:28
the next video that I've got coming. So stay tuned for that. And so what I'll do here with my cloud code, I got a
4:34
basically empty project here besides my AI layer is I will simply have a casual conversation at first just telling it
4:41
about my idea, maybe some ideas I have for the tech stack and the architecture. You start really unstructured, which
4:48
also just makes it easy to get started. And then you eventually get to the point where you use your conversation as
4:54
context to create a structured PRD. And I have a command that'll help us get the
5:00
job done. I'll cover that once we get there. But first, let's just start with our idea. And so what I want to build
5:06
just as a fun example for this video is something kind of like Linkree, more like a self-hosted version where you can
5:12
set up your own kind of landing page that has a bunch of links that you can organize. You have analytics like the
5:18
click-through rate on your different links. I want to build something like this. It's a good example for right now because it's not super trivial where you
5:24
could just vibe code it really easily with some of the more um cool features we can add in, but also it's not going
5:29
to be overly complicated where we'll barely have anything by the end of this video. And so I'm going to use a
5:35
speechtoext tool to get the job done here. I highly recommend using something like Aquavo. This is what I use. There
5:41
are a lot of good free and open- source options as well. Whisper flow, Epicenter whispering, great tools that we have
5:47
here. I love using speech to text cuz I can promise you I will never be able to type 226 words per minute. And so I'll
5:54
use a tool like this just to give a big brain dump at first for what I want to build. And this is going to be really
5:59
raw, but I'm going to go ahead and do a brain dump live for you right now. And pay attention to what I asked Claude
6:05
Code to do for me because this is just as important as the ideas that I'm sharing. I'll explain a little bit about
6:11
that after as well. And by the way, you can do this entire thing with any AI coding assistant. So here we go.
6:17
I want to build a link in bio page builder. So something kind of like linkree. Users can create an account.
6:24
They can create their own landing page where they specify the links. They can change the order. I want them to be able
6:29
to have analytics so they can view the click-through rates on their links as well and they can customize the theme. And then for the text stack, I'm
6:35
thinking probably like Nex.js. I'd like to use Neon for my database and Neon authentication. So definitely spin up a
6:42
sub aent to do some research for that. Um, and then for the architecture, not super picky on that. Definitely want
6:47
your recommendations for that and just how we're going to handle the theming and the link building, all of that. And
6:54
so I want you to also spin off an agent to do a bunch of web research on just like best practices for creating these
7:01
linkree type applications. And then what I want you to do after is come back to me with a bunch of questions so we can
7:07
get on the same page with even the little details for what we are building here. All right, very good. So, I'm going to go ahead and send that off and
7:13
it'll just transcribe in a couple of seconds here. There we go. And boom, we are off to the races. And the most
7:20
important thing that I did there is actually right at the end when I told it to ask me a bunch of questions after it
7:26
does its research. So, this is really important to drive home here. Your number one goal for any kind of planning
7:33
with coding agents is to reduce the number of assumptions that your coding agent is making. Because in the end,
7:39
when a coding agent makes a mistake in your codebase, half the time it's not that the code is bad, it's that you just
7:45
weren't aligned on what exactly you should be building. The common adage is that one line of bad code is just one
7:52
line of bad code. One line of a bad plan is maybe a 100 lines of bad code. But
7:57
then one bad line in a PRD, that could be a thousand bad lines of code because
8:03
you have misalignment. And so I have been doing a lot of experimentation with
8:08
ways to, you know, reduce assumptions over time. And having the coding agent actually just give me a flurry of
8:14
questions has worked so incredibly well for me because especially Claude Code with its ask user question tool where it
8:21
can give like multiple choice or write your own answer. We'll see that in a second. It's so powerful. Like they do a
8:26
really good job thinking about all the edge cases and little details that maybe we aren't even thinking about. like it's
8:32
hard for us to just reason oursel about what assumptions the coding agent might make. So it's very very powerful. And
Subagents for Research
8:38
then the other thing that I did as you can see right here is we have different sub aents that are running for research.
8:43
I love using sub aents for any kind of planning creating the PRD or even for
8:49
the planning process of the piv loops that we'll talk about in a little bit. And so with Cloud Code, I don't actually
8:55
have to create my own sub agents because we have the exploration and research sub agents built right into the tool. For
9:02
other coding agents, you might have to build your own, which is why I wanted to call it out here. But pretty much every
9:07
single good coding agents these days supports the idea of sub agents. And I love using them for research. And the
9:14
reason for that is context isolation. Again, one of the key themes here is we want to really protect the context of
9:21
our main coding agent. And the reason that research is such a good use case for sub agents specifically is because
9:28
when they explore, they're looking at everything. They're doing a bunch of codebase exploration or web research.
9:34
They're loading in tens, even hundreds of thousands of tokens for their work, but really all we care about is their
9:39
findings, the summary at the end that they return to our main context. And so, we can keep our main context clean. I
9:45
don't recommend using sub aents for implementation because with implementation we usually care about all
9:51
of the context of the files that we've been editing and creating otherwise it leads to a lot of hallucinations in my
9:57
experience and that's also why claude code doesn't have any built-in agents for implementation it's just for
10:02
research and that's exactly what we are seeing right here and so I'm going to let everything complete and then I'll
10:08
come back once it has the questions for us all right so all of our sub agent research is done and we now have the
10:14
initial set of questions to answer. And as I go through this, I think you'll really appreciate as much as I do
10:20
because we are clarifying a ton of things. Every single question that we answer here is removing an assumption
10:26
from the coding agent. And because it's multiple choice and usually one of the options it presents here is good. We can
10:32
blitz through this really quickly. And so we can be pretty confident going into the implementation that we have all of
10:37
the details locked down. And so for example, how should the public page URL structure work? I actually like option
10:43
number one here. And then boom, on to the next one. How many pages should each user be able to create? Let's just do one page per user. I mean, some of these
10:50
I'm just going to keep going with the defaults here. But there are a lot of instances where it really fundamentally misunderstands something. And that's
10:56
where I can type my own answer to really clarify. So I don't know if I'll run into an example right here. But what I'm
11:02
going to do is I'm just going to go through and answer all of its questions. Come back once I've done that. You don't really need to see me do every single
11:08
question here cuz it might do up to like 20 25 questions. like it will take this
11:13
pretty far and so again you have to be a bit patient with this but every single question you answer could save you from
11:20
having hundreds of lines of bad code. So actually here is a good example where I want to clarify something entirely
11:26
different from what it suggested here. So it's saying this is the second batch of questions that Claude has asked me by
11:32
the way. Should the link editor have a live phone frame preview? So, kind of like lovable or bolt-on new where you
11:38
have the the view of what you're creating and then you have the builder on the left side or should it be inline? And I kind of want to actually have both
11:44
options here. So, I can go to the chat about this and so then it will ask me the other questions after, but now we
11:50
get to have a little bit of a conversation for this thing specifically. And so, I'll say right here, I want to have an inline editor,
11:56
but I want the option to be able to see the preview as well. So, essentially, I want to have three buttons. one where I
12:02
just see the editor, one where I see both, and one where I just see the preview. So, I send that in, and then
12:07
it'll come back and ask me more questions, and I'll just continue the process. So, here we are. Claude finished asking me a bunch of questions,
12:14
probably more than I need, but you can really just tweak this to whatever you want to do. And now, it's time to create
12:20
our PRD because, as we can see from the final spec summary, it [snorts] really does have a clear understanding of
12:26
exactly what we're going to build, even where I'm going to deploy it. I'm going to deploy this to Verscell after I build it. This is fantastic. Like I feel like
12:33
it isn't really assuming much anymore. So now what I'm going to do is just run my create PRD command. I'll just put
12:39
this includ. You can really put this wherever you want. You can even call it whatever you
12:45
want. And so I am using the command that I mentioned earlier because going back to our four golden rules, one of the big
12:52
ones here is to commandify everything. If you do something more than twice, which I have definitely started more
12:59
than a couple of projects, you should make it a command. And then otherwise known as skill because cloud code did
13:05
recently merge commands with skills. But I still like to have the distinction of commands are things that you invoke
13:11
yourself like /commit. And in skills, that's when an agent decides to read
13:16
context like understanding how to do something new. And so I'm creating a command here because I'm deciding okay
13:22
at this point in the conversation I want to run this command to output a
13:27
structured PRD. So as a part of this command I'm giving it the exact structure all the different sections
13:33
that I want in the PRD. So that way I'm making my whole process repeatable. Right? A big part of this system that
13:40
I'm showing you here is you can create something that works for you and then you can do it over and over and over
13:45
again for new features and new code bases. And so I'm going to do /create PRD. I'm going to let it rip and I'll
13:52
come back once we have our final PRD. All right. So our PRD is now created.
13:57
And it is very comprehensive, but that's good because it's not like we're going to send this into our coding agent to
14:03
implement. Instead, we're going to build things in phases that are described by our PRD. So I'm not going to do a ton of
14:10
validation on camera right now. definitely not worth your time. But I do want to say that it is important to read
14:15
through this and make sure that you really are aligned on everything. Otherwise, it is going to lead to a lot of bad code in the future. And so the
14:21
first thing I want to call out really quick here is we have our MVP scope. And in this we can see all of our questions
14:28
coming to life in our PRD. And that's important because the conversation we just had was really just unstructured
14:34
context to feed into the PRD. The PRD is the only thing that's going to survive.
14:39
So we need to make sure that the entire conversation that we have with our agent is really put in here. We have our out
14:45
of scope which is equally as important. What we don't want to build right now. We have the entire directory structure.
14:50
So it already understands generally what is going to go into our codebase which is good because we've already established our tech stack and
14:56
architecture. And the important thing with this is that we have our phases of work. And so from this when we use our
15:04
prime command that I'll talk about in a little bit we're able to establish like okay what have we already built in our
15:09
codebase what do we have to build next based on the PRD. So this is going to be one of the important pieces of context
15:15
at the start of every conversation as we build our MVP. And by the way here's the
15:20
section itself where I lay out the phases. Each one of these is going to be a granular implementation one of our
15:26
pivloop. So we build the foundation then we build the link management. Then we do the theme and we're going to plan each one of these individually so we're not
15:33
trying to have the coding agent ever do too much at once. Okay, so we just created our PRD and that really is the
15:39
biggest thing. So we're almost there getting to our first implementation. The next thing that we have to set up is our
Global Rules and On Demand Context
15:44
rules and this is going to be pretty basic at first because our rules are definitely going to evolve the most as
15:51
we are evolving our actual codebase. And so I'm using cloud code, but I'm just referring to aagents and agents.mmd
15:57
because this is more of the universal standard for the naming for global rules. And so the important thing here
16:03
is that the constraints and conventions that we always want our coding agent to follow, this goes in our global rule
16:10
file. And so this is things like the commands to run our application, our testing strategy, our logging strategy.
16:17
No matter what we're building, we always want our coding agent to see this. And so we want to create this right now, at least an initial version to get us
16:24
started. And then the other component I have here is the reference folder. You can also use claude code skills for this
16:30
by the way, but this is just more universal cuz a lot of times we have other contexts we want the agent to have
16:35
in mind, but only when we're working on specific parts of our application like a guide to building front-end components
16:41
if we're working on the front end. And the reason we don't want to just dump this all into our agents.mmd is this is
16:47
loaded into the context of the coding agent every single conversation. And remember context is precious. So we want
16:53
to keep this really concise and then just point it to each of these files. So we can tell the coding agent if you are
16:59
working on the front end then you can read this file or if you're building new API endpoints then you can read this
17:05
file. So this is essentially progressive disclosure. We have different layers of context that the agent can discover over
17:11
time to make sure it's only loading what it actually needs based on the current task at hand. And so for this one, I
17:17
have yet another command. Again, commandify everything just like I have a template I like for my PRDS. I have a
17:24
template that I like for creating my global rules. And so, first we are going to discover what we already have in the
17:30
codebase because I created this to work for existing code bases and new ones. And so for this really all it's going to
17:35
explore is the PRD. It's going to figure out what's our tech stack, what's our architecture, do some web research for
17:41
testing and logging strategies, and then bring all that together with my guidance to create my global rules. And I have
17:47
the exact structure here. And so, it's going to be based off of this template that I have. So, I'll show you this very
17:54
quickly as well because this is the template that I love using for all of my global rules. And you can see that
18:00
everything here, we really do care about our agency no matter what. like, okay, here's our tech stack, the commands to run and test things, our project
18:06
structure. So, it has essentially an index of our codebase, our architecture, our code patterns, like things like
18:11
naming conventions, testing and validation strategies. It's pretty basic overall, but we're going to create this
18:17
first and then I'll give you a couple of examples of reference documents like our secondary ondemand context. And so I'll
18:24
go into Claude here and really just in the same conversation where I created my PRD, I'm just going to do create rules
18:30
because I can really use all of this conversation as context to help. Uh so it just right away it knows, okay,
18:36
here's our PRD, here's our text stack and things like that. All right, so our create rules command finished and we now
18:41
have our global rules. And so I have it pulled up already. Pretty standard here. We have our text stack, the commands
18:47
like we're using Drizzle ORM for our database for example, project structure, architecture, code patterns. For the
18:53
sake of brevity, I'm not really customizing things here or applying my own thoughts to this very much. But
18:58
depending on how technical you are, this is your time to make sure that the constraints and conventions, the code
19:05
patterns is really aligned with how you want to create your code bases. So you can spend a lot of time with this if you
19:11
want. I'm just not doing it because I'm focusing on the highle ideas with you right here. And so I also had to do some
19:16
web research on best practices for creating things like front-end components and API endpoints. And then based on that, I had to create some
19:22
ondemand context as well. And again, these could be cloud code skills if you would like. And so if we go back to the
19:29
global rules and we scroll down to the on demand context section, here we go. When working on front-end components,
19:34
read this file. When working on API routes, read this file. So the claw.md is the only thing loaded in up front,
19:40
but then it'll decide to bring this in when it needs. And in my experience, it's really good at referencing this,
19:46
especially if our global rules is concise like it should be. Like we don't even have 240 lines here. Just 233 lines
19:54
for our global rules. And then we have our APIM MD and components.md. These are
19:59
a lot bigger because when we are working on the task and it's very specific to this then it's okay to bring in a lot
20:05
more information to make sure we have good guidance for our coding agent. So again going back to our diagram here the
20:12
rules this is how we want to build things. The PRD is what exactly we're going to build. And so with both of
20:18
these things in mind the last thing that I want to talk about here is commands specifically the prime command. Then
20:23
we'll get into building the plan for our first phase and creating the code. So, at this point, we have the initial AI
20:31
layer. We have our PRD, our rules, and those generic commands that I brought in that you can feel free to use for
20:36
yourself. And so, we're going on to implementation now. But here's the thing. At the start of every new
20:42
conversation with an AI coding assistant, we need it to catch itself up to speed on the codebase. What are we
20:48
building? What comes next? That is where the prime command comes in. And so, this
The Prime Command
20:53
is a command we'll run / prime at the start of every new session. It is a guided process for it to explore our
21:00
codebase and get itself to the point where it has the mental model where it's ready for the next feature
21:05
implementation. And so we'll have it read documentation, explore the structure. It can use sub agents to do
21:10
all this as well. Checking the git log because that's another thing that I'll talk about more in a bit as well is
21:15
using git log as our long-term memory so it can see over time how our codebase
21:20
has been evolving because that'll help it make decisions around what it's going to build next. And so after this
21:26
command, it's going to output to us its understanding of the codebase. So we can validate it knows what's up with our
21:32
codebase and we can go on to building the next thing. And so not to cover the prime command in too much detail right
21:38
here, but we do some operations with git to take advantage of the history. And then we're reading through the core
21:43
files and identifying anything that we need to pay special attention to that are like main entry points to our
21:48
application for example. And then this output report is how we can validate its understanding. And we can evolve this
21:55
over time to make it specific to our project. Just to give you one really small example here for reading core
22:01
documentation, I could say read the Drizzle migrations so you understand the
22:07
database schema, right? It even had the tab complete there. I knew exactly what I was going for. And so as you kind of
22:12
build your own understanding of like what are the core things I want my coding agent to pay attention to in this codebase like maybe other documentation
22:19
we have in the reference folder for example, we can add that here. And so now what I'll do is I'll go into Claude,
22:25
but I'm going to start a brand new conversation because now we're going to get into our first piv loop and I'll
22:30
explain the entire pivot loop in a little bit here. But watch this. I'm just going to run prime and that's going to be the beginning of my conversation
22:37
before I do anything. I want to explore. And so in this case, it's going to realize like, okay, this is a brand new project. Let me check the PRD. And it's
22:44
going to recommend like let's do phase one first. Let's create the foundation for our project. So our prime completed.
22:51
Here is the project overview. a link in bio page builder the current state it's an empty repository with just
22:56
documentation I did do a test build earlier which is why it says this but I cleared everything for right now and
23:02
then it pulled the first phase the foundation from our PRD and this is what it's recommending that we build and
23:08
that's exactly what I am going for here I want it to pick out phases one at a time from the PRD so we have granular
23:14
implementations for our PIV loops which speaking of the PIV loops we are going to get into this now and so PIV is short
The PIV Loop Framework
23:22
for plan, implement, validate. We take focused work, usually a phase from a
23:28
PRD, and we run it through this entire process. So, we create a structured
23:33
plan, that's this part right here, around what we're going to tackle. And this process is actually pretty similar
23:38
to creating a PRD. Then, we go into the implementation. And our goal here is to delegate all coding to the coding agent.
23:45
And then, we do the validation after. And so I'm going to cover really quickly what this process looks like. Then we're
23:52
going to go through it in action. And so first of all, when we are in our planning, we have two layers of
23:57
planning. We have the top level project planning. That is what we already did creating our PRD and our rules. And now
24:04
we have the taskspecific planning. So like I just mentioned, these are pretty
24:09
similar. Creating a structure plan is pretty similar to creating our structured PRD. The main difference is
24:16
the structure plan is just very focused on an individual feature and all of the
24:21
tasks that come with that. So now we're getting down to the code. We're not as high level, but we are still going to
24:28
start with a very unstructured conversation. I like to call it vibe planning where we're just going to
24:33
explore general ideas. What's the architecture for what we're building specifically? Spinning off sub agents
24:39
for codebase analysis and documentation. and then just figuring out like what are the specific tasks that we need to knock
24:45
out for this feature. And so we have this conversation. I'll show you an example of this. And then we turn that
24:51
into a structured document just like with the PRD. So the goal here is to
24:56
create a detailed plan of attack for the AI coding assistant based on our conversation. So the conversation is a
25:03
part of our context. But here we have very specific sections that I want to
25:08
create in the structure plan. the goal and success criteria of this feature, any documentation that we want to
25:14
reference that maybe one of the sub agents found, our task list, which can be as specific as even the individual
25:20
files that we want to create and update. And then probably the most important part out of this entire plan is the
25:25
validation strategy. This is kind of like test-driven development where we want to be very specific with how we can
25:32
validate the feature before we even write a single line of code. This forces both us and the coding agent to be very
25:39
specific about the success criteria and so we create our structure plan and we
25:45
are very much a part of this but then we delegate all of the coding to the agent itself. This is not vibe coding though
25:52
the only reason that I'm going to trust the agent but verify is because I am sandwiching the implementation with the
25:58
planning and the validation that I am very much a part of the process for. And so we are going to have the coding agent
26:04
check its own work with unit testing, integration testing, and end toend testing. We'll see that as well. But
26:10
then I am going to run my own code review and manually test the application. I'll spin it up myself.
26:15
I'll go through the application just like a user would. Make sure that everything is working good before I make
26:20
that commit and send it off to production or staging or whatever. The important thing here is that in between
26:26
the planning and the implementation, I am going to be resetting the context. This is one of the golden rules. Context
26:33
is very precious. And so I have a long and detailed conversation figuring out
26:39
this feature we're going to implement. And then the structured plan that I create right here, I want it to be all
26:45
of the context the coding agent needs to get the job done so that I can have a fresh conversation where the plan is the
26:52
only thing I send in because it has all the documentation to reference. It has the entire task list. So we know what we
26:58
have to do. We know how to validate. So that way we can just cut things off and go into execution to keep things very
27:05
focused, right? We want to not have a bunch of context bloating the conversation when we get into writing
27:11
the actual code. All right, so with that, let's now get into our first piv loop. And this is going to be a lot
27:17
simpler than you would think because we really are going to reap the rewards from all of the planning that we did up
27:23
front. We are on the same page with our coding agent. we're confident, understands what we want to build. And so there's not even that much planning
27:30
we're going to have to do for each of these phases, at least at first. And so going back here, we finished the prime.
27:35
We are on the same page of the coding agent. And I just gave a really simple prompt here, like, yeah, phase one looks
27:40
good. Just confirm to me exactly everything that we're going to build. Now, usually for piv loops, after the first one, it's a bit more detailed,
27:47
like let's look at the codebase and figure out how exactly we're going to build this. But right here, it's really simple. So this looks good. And now
27:53
remember commandify everything. I want to turn this conversation and this idea of phase one into a structured plan with
28:01
a task list and validation. So I have another command for that. It is just called create or plan feature /pl
28:07
feature. There we go. So I'll send this in. And now plan feature just like the create PRD it has this idea of a
28:15
structure plan built in. So I'll show you this command as well. So plan feature open this up. So it accepts an
28:22
optional argument where I can specify what I want to build. In this case, I just using the conversation history. So it already knew. But we go through a
28:29
phased process here. So feature understanding, diving into the codebase, which is again more applicable for
28:35
future piv loops. But it does a lot of research, pulling relevant documentation, making sure we have a a
28:41
rich set of context going into the execution. And then what you're looking at here, this is the template. So we
28:47
want to describe the problem statement, any context or reference. We have our implementation plan with the task list
28:54
right here. And then of course we have our testing strategy. We want to define the validation up front. And after we
29:00
create this plan, of course, we're going to validate it. We're going to make sure that we're very specific. The step by
29:06
step here's exactly how we want you to validate the application. And I am actually using the Verscell agent
29:12
browser CLI skill, which I made a video on that I'll link to right here. So we're going to build in full browser
29:18
automation. The agent is going to spin up the backend and front end, run the database migrations, go through and like
29:24
build its own link tree and basically just make sure everything is working exactly how a user would use the
29:30
application. So pretty exciting. The validation is going to be very detailed here so that by the time control is
29:36
passed back to us, we can be very confident in the implementation. Still doing validation ourself, but it's going
29:42
to be a lot less work. Okay. And our plan is created now. So let's go ahead and take a look. So, I did a bit of
29:48
validation off camerara. I'll show you that in a little bit. Usually, you will iterate a good amount because you want
29:53
to make sure that it's understanding of phase one is aligned with what you have in the PRD, what you actually want to build. Go through all of the sections. I
30:00
encourage you to do so. So, here's our implementation plan with the task list. It's very detailed, which is good. We want to be specific now that we are very
30:07
focused on a single feature. We have our validation with the whole validation pyramid as I like to call it. So, type
30:13
checking and linting and unit testing. And then we're very specific for the endto-end testing, all the user journeys
30:18
we want the agent to go through so we can be confident in the implementation when it comes back to us. And that's
30:24
something it didn't really do that well at first. And so I did have a follow-up prompt here just to give you a quick
30:30
example of how we can iterate and refine the plan before we send it off to implementation. And then one other
30:36
little golden nugget. I promise we'll get into implementation in a sec, but this is really important. Generally,
30:41
coding agents aren't the best at working with environment variables. they'll get tripped up if you don't have the
30:46
environment variable set before implementation. It'll just do a bunch of mock testing and say everything's
30:51
validated when it isn't actually. It's really frustrating. And so, usually what I like to do in parallel with the
30:57
planning is I will create av.example. And I'll have it look here so it knows
31:03
all the environment variables that I have set. And then I will set up my environment variables as well. So,
31:09
obviously I won't show this file because it has my secrets for the database URL and things like that. But because I
31:14
already have that set up now, it can rip through the entire implementation and then not just write the code, but it can
31:20
run the database migration, start up the back end and front end, use the Verscell agent browser CLI to test everything,
31:27
and it doesn't have to get interrupted for me to set my environment variables. And so I have this stage set up
31:32
perfectly now going into implementation. And I'm pretty happy with this plan. So now remember context reset because
31:39
context is precious. I am now in a brand new context window where I will use my execute command and the one parameter is
Live Feature Implementation + Validation
31:46
the plan that I'm pointing it to. This is all it needs for its context now. And so what I'll do is I'll pause and come
31:53
back once it's gone through the entire thing. And really we are delegating all the coding to the agent now reaping the
31:59
rewards of all the effort we put into planning. Every single piv loop app through this point is going to be so
32:05
fast now because of the work that we put into this. All right, our implementation is complete. We can see from the
32:10
screenshots that it did full end toend testing. So, we can be pretty confident in the implementation because the agent
32:16
already took care of everything right here. But, it's still important for us to do the human validation so we can
32:21
really make sure that we are trusting but verifying. And so, the code review that gets pretty in the weeds. So, I'm
32:27
not going to do this right now, but if you're more technical, it's definitely important that you do so. But what I am going to do is test the application live
32:34
with you. So, the only thing I did off camera is I created an account already just to make sure that the basic
32:40
authentication is working, but I haven't done anything here yet. And take a look at this. This is so cool. It already
32:45
looks really, really nice. So, I can set my display name. I can do a bio like a cool AI builder. All right. I can set my
32:51
avatar URL. So, I just uploaded a image to im. So, okay, that's looking really nice as well. I can add some links like,
32:58
okay, I'll do YouTube and then that's https youtube.com/collemine.
33:04
All right, looking nice. Add another link. I'll do LinkedIn. I don't have my LinkedIn URL right now, so I'll just do
33:09
like LinkedIn.com. Don't really care. All right, cool. And let me just add one more. I'll do X. All right, so uh let's
33:16
just do X.com. Very cool. And I can drag these around to reorder them and it's automatically reflected here. I can view
33:22
just the editor and then adjust the preview. The theme doesn't look the best right now. Like it's just white, but I
33:28
think that comes in a later phase anyway because right now we are just building the foundation. So, a lot of this isn't perfect yet, but it's still looking
33:35
extremely good for a starting point. And then I can click save. And um okay, has to load the API endpoint. So, running
33:41
this local host. There we go. Change is saved successfully. So, I can do a refresh and everything is still going to be there. All right. That's amazing. So,
33:48
this is looking really, really good. Now, what I want to talk about since we've gotten to a good foundation built
33:54
is the commit message just really quickly here. And so, I have another command called /commit. And this one's
34:00
really, really basic. You can make this more detailed if you want, but essentially you just want to provide instructions to the agent for how to
34:06
create a git message because we are going to use that as our long-term memory. So going back to the diagram
34:12
here, this is one of those golden rules. Your commit history is your long-term memory. So if we are standardizing our
34:19
message and that's why we're using a command/comit to make this reusable then
34:24
our agent when it's going through the prime it can look at the git log to see a history of what we built recently
34:29
which will guide what comes next and maybe patterns that we want it to follow. And so that's the power of this
34:36
commit message right here. So I'll do slash commit which I could just run get commit myself. It's really really easy
34:42
but this just makes it so it's always the same kind of message for consistency. So in this case there's
34:47
nothing to commit because I already ran this off camera as well. But that is important to take care of after every
34:52
single implementation. Now one other super important thing to cover after we have the foundation of our project laid
Keeping Your Codebase Reliable
34:59
out is we want to set up a framework for regression testing. We want to make sure that as we go through future piv loops,
35:06
so we go through this process over and over again for all the features we want to build, we need to make sure the old
35:11
stuff doesn't break. And so this I'm going to cover more in a different video. All the strategies that I have
35:18
for implementing this sort of testing harness yourself because essentially you go into the agent, you say like, okay,
35:24
what we have now is great, but I could also go into AquaVoice here and say, I want you to list out all of the
35:31
endto-end testing that you did. Put this into a command for me so I can run this later after I build other features so
35:38
that we can make sure that everything that we built previously is still working, right? something kind of like
35:43
that. Again, I'm not going to get too in the weeds of this right now. It takes a while to set this up and kind of create
35:49
a test harness, but this is how you make sure that your application is stable as you're continuing to build on top of it.
35:54
And it does take a lot of work to create and maintain this cuz you constantly have to update it. And so, there are
36:00
also solutions out there that take care of this for you and they are very powerful. And one of these applications
36:06
is QA tech. They have AI testing agents that evolve. They adapt with your codebase. So, as you're adding more and
36:12
more features, they add more and more test cases to make sure that everything your application is working well as
36:19
you're continuing to build it out. And so, I'll show you an example of this really quickly. It's so easy to get
36:24
started. So, you go into QA Tech, they got a free tier for you to get started and try this out. I'll create a project
36:29
here. And then you just have to paste in a URL that you want to test. And so, I took this application, since I already
36:35
made a commit and push it to GitHub, I deployed it in just like a minute to Versell. So, the easiest place to host
36:40
your sites for free, especially when you build with Nex.js. And so, I'm going to go to my project here and just paste in
36:46
this URL. And so, it'll take a little bit to create your project and analyze your codebase. And what we can do is
36:53
just say, I want a good test setup for my site. Help me create the first three to five test cases. And this is kind of
36:58
like, you know, bolt.new or lovable or you can just give a prompt for whatever you want it to do to set up the test
37:03
suite for your project. But this is what they recommend to get started. So, I'm going to go ahead and send this in. And
37:08
it's so cool because it will dig through your website like actually crawl through it, but you don't have to manage the
37:13
infrastructure at all. So it analyzes your website and comes up with the test cases. And so I'll come back once it has
37:19
done that. So mid execution just want to show you really quick that it crawled my website in just a couple of minutes. And
37:24
then one of the really important things is we need a way to log into our website. We want the automation to be able to do that. And so they have a way
37:30
for us to enter in our username and password. And then they're going to store it in a secure way. So I just have
37:35
a test account created here. Going to go ahead and save that. And then it'll use that to get into the website, really dig
37:41
in and understand all of the user journeys that we want to test here. And there we go. Ed has generated a bunch of
37:47
test cases for us. And we can even click into each one of these. And we can see the exact flow that it went through. And
37:53
so now we have all these tests that are set up. And the AI testing agents in QA Tech are going to evolve these test
38:00
cases over time to make sure it continues to cover everything in our codebase as we build more and more
38:05
features. It is super super cool. And again, we can build our own kind of command system to do something like
38:10
this. But I really appreciate having a platform that just takes care of all of this for me. And there's agents under the hood that I can chat with to even
38:17
just like work with the testing here and make sure that I am truly regression testing everything. And so then whenever
38:24
there's anything that breaks, I can come in here and say like, hey, there's a bug with the application right now. Create a
38:29
test that should be failing. Let me address the problem and then the test should be passing. And so that takes us
38:36
to the last golden rule that I have here, the system evolution mindset. So whenever we encounter a bug in our
Evolve Your Coding Agent Over Time
38:42
codebase, it is important to not just address the bug, but think about what we can fix in our AI layer so it doesn't
38:50
happen again. Like maybe we need to be more specific about our style guide and our rules or create a new ondemand
38:56
context for that. Maybe we need to have more endto-end testing that's laid out in our commands, our workflows, whatever
39:02
it takes to make sure that we don't encounter this issue again. And then we can also do what I just showed in QA or
39:08
our own command system where we add a test to make sure that we don't encounter that issue again in the
39:14
codebase. And so the power of this, even though it takes time to do it, is that we make our coding agent more reliable
39:19
and repeatable over time, evolving it along with our codebase. And so we're doing three things in parallel. As we
39:25
are building out our codebase, we are evolving our test base, our codebase, and our AI layer. And man, does that
39:32
compound over time. And so, going back to Cloud Code here, I'll just give you a really simple example of this. So, one
39:38
thing that I did do to iterate once off camerara is I worked on the style for the site cuz if you go back to the start
39:44
of the video, you'll see that I kind of forgot to talk about the style, exactly how I wanted the site to look. So, Claude Code just kind of made its own
39:51
assumptions there and it didn't look the best. And so, I had to iterate on that. And so one thing that I can do here is,
39:57
you know, at first I didn't like the style that you implemented for the front end. We definitely don't have enough in the AI layer with our rules and on
40:04
demand context for a style guideline. So I want you to do some meta reasoning here. Don't change anything, but help me
40:10
think about right now. What could we change with our rules or on demand context? something we could add or
40:15
update so that we have more consistent styles that we're going to be building as we continue to, you know, build out
40:22
the analytics and other things, other pages in this application. And so the important thing I'm doing here is
40:27
telling it to not change anything yet because usually I want to have a lot more control over changing the AI layer
40:33
versus for the codebase, I just want to delegate as much of that to the agent as possible. So I have it reason with me,
40:39
but I usually like to make these small and very focused changes myself. And you can see here that it recommends creating
40:45
a style.m MD in the reference folder. So a third piece of on demand context for us. And so this I guess would go along
40:51
with the components.mmd. That's more like here's how we should lay out things. And the styles.md is here's how
40:57
it works. Here's how we should work with Tailwind CSS and probably shad CN for example. So, I'm not going to go through
41:03
the full implementation of this and correcting everything, but just trying to give you a good example here of how when we encounter anything where we have
41:09
bugs in the code or just isn't quite aligned with us like we have right here, it's always an opportunity for us to
41:14
evolve the AI layer. And so, we're more and more in tune with our coding agent for this specific project as we continue
41:20
to build it out. And that, my friend, is the most high lever part of the entire process, really saving the best for the
41:26
end. So, that is everything. It really is a dead simple process for getting reliable and repeatable results with
41:32
your coding agents when you are starting new projects because now after the system evolution, we just take it back
41:37
up to the top and we go through more piv loops going through the exact same process to build out all the phases in
41:42
our PRD, add any other features, whatever it takes to get to that minimum viable product. And then that'll take us
41:48
into brownfield development with one of the next videos that I'll put out on my channel. And so if this all sounds good
41:54
to you and you want to dive even deeper with my full resource library of commands and rules, you want to see what
42:00
system evolution really looks like and get deep into that, definitely check out the Agentic coding course that I have in
42:06
the Dynamis community. I'll have a link to this in the description and the pinned comment. And so that's everything
42:11
that I got for you right now. So if you appreciated this video, you're looking forward to more things on Agenta coding
42:17
that brownfield development video, I'd really appreciate a like and a subscribe. And with that, I will see you in the next
