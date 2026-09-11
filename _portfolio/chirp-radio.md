---
layout: case-study-template
order: 5
meta: A from-scratch rebuild of CHIRP Radio's website, CMS, and mobile apps, giving the station's volunteer team a modern CMS they can run themselves without a developer.
type: product
title: CHIRP Radio
project: Web & Mobile App Modernization
client: CHIRP Radio
brandclass: chirp
under:
underurl:
testimonial-topic: chirp
year: 2026
subtitle: Rebuilding 16 years of a volunteer-run station's website, CMS, and mobile apps from the ground up
previous-cs-title: A Client Portal in 13 Weeks
previous-cs-link: anonymous-client-portal
next-cs-title: Honda HALO
next-cs-link: vehicle-test-floor-discovery
phases: Early Research, Product & Technical Leadership, Migration
overview: I'd been a CHIRP listener for 16 years before I ever got the chance to work directly with them on a project. <a href="https://chirpradio.org" target="_blank" rel="noopener">CHIRP Radio</a> is 107.1 FM in Chicago, an independent, listener-supported station run almost entirely by volunteers. Its website and mobile apps hadn't been meaningfully rebuilt in more than a decade, and I owned the full modernization end to end, as product lead, UX lead, and front-end developer&colon; a new website, a new CMS, and new iOS and Android apps, all replacing a legacy ExpressionEngine site that had outgrown what it was ever built to do.
goals: <ul><li>Give CHIRP's volunteer team a modern CMS with the conveniences the old one lacked</li><li>Unify a website and two mobile apps that had never shared a design or a database</li><li>Carry 16 years of CHIRP's content forward without losing any of it</li><li>Give listeners the features they'd been asking for&colon;<ul><li>Synced saved songs and dark mode</li><li>DJ favoriting with notifications</li><li>Song requests for logged-in listeners</li><li>An easier way to browse the DJ schedule</li></ul></li></ul>
role: Owner, Product, UX & Front-End Development
scope: One year (research and rebuild), primarily myself with additional technical support brought in as needed
tools: Figma, React, Payload CMS, Postgres, Capacitor, Docker, Google Cloud Run, Cloudflare Pages, Claude
problemstatement: CHIRP's website, CMS, and mobile apps were built at different times by different people, without much input from leadership or from what listeners actually needed. The mobile app code specifically came from a now-defunct app company, handed off since then to a separate support company and, by the team's own description, held together with duct tape. The website, iOS app, and Android app existed as three separate codebases, so the same bug or feature often had to be built three different times. Updating the old CMS itself meant paying an outside vendor, so even routine changes came with a cost and a wait.<br><br>None of the pieces shared data or a branding concept&colon; a listener's saved song only existed on whichever platform they'd saved it on, and there was no dark mode. Listeners had no way to favorite a DJ or get notified when they went on air, especially for unscheduled shows, and the DJ schedule itself was a dense, table-style grid with no way to search it or see who was on now. Sixteen years of station history sat inside that same CMS, hard for volunteers to use, with no clear path to carry it forward. The new CMS had to be simple enough for CHIRP's non-technical volunteers to run themselves, not something that came with an ongoing bill.
methods: <ul><li>Oversaw the project from start to finish</li><li>Met directly with CHIRP's volunteers and listeners to find where the existing tools broke down, then ran usability testing on the web and mobile interfaces, iterating and retesting as the designs firmed up</li><li>Designed a unified data model connecting the website and both mobile apps for the first time, so a song saved to a listener's collection or a light/dark mode preference follows them across every device</li><li>Built the entire production React component library myself with Claude Code, with accessibility and responsiveness built in from day one instead of retrofitted, then used Figma's MCP integration to align the coded components to the layouts and templates already designed</li><li>Treated individual volunteers' requests as their own input, not settled team consensus, and confirmed scope with the broader team before starting non-trivial work</li></ul>
process: CHIRP had a print brand guide but nothing built for digital, so I put together recommendations for a digital adjustment&colon; fleshing out their color palette, adding type variations, and working with the team on font choices from Google Fonts. Those calls happened in bi-weekly sprint syncs, where CHIRP reviewed options and decided together, not something I handed down.<br><br>The navigation needed the same rework&colon; the old site ran almost entirely on dropdown select menus, which gave every page a bolted-on feel. I regrouped how pages were organized and gave listeners other ways to navigate besides a select menu. Low- and high-fidelity mockups went through the same rhythm&colon; Shawn and two other CHIRP stakeholders, Tony and Kevin, reviewed and discussed each round until we reached alignment, not a single sign-off at the end.<br><br>That same rigor carried into the build and testing. I built the entire component library, more than 70 components in Storybook, the same tokenized, documented discipline behind <a href="../am-ui">am-ui</a>, then built the front end for the website and both mobile apps myself, including native Android Auto support alongside CarPlay. Before launch, I ran alpha testing internally with Callibrity team members across whatever devices and platforms were available, fixed what was found, then ran two weeks of beta testing with a group of CHIRP volunteers and DJs and fixed what surfaced there too. That two-round process is why so few patches were needed after launch.
findings: CapacitorJS held up well for wrapping one build into iOS and Android apps, and I'd use it again, but getting the apps to feel genuinely native still took real custom iOS and Android code, not just what the wrapper provided out of the box.
processlist: <ul><li>Volunteer & Listener Interviews</li><li>Style Guide Refresh, Product Flows & Wireframes</li><li>Low & High-Fidelity Mockups with Usability Testing</li><li>Figma Design System & Storybook Component Library</li><li>Unified Data Model & Self-Service CMS Design</li><li>Content Migration (16 Years)</li><li>Full Front-End Build (Web, iOS, Android, Android Auto)</li><li>Testing, Launch & Bug Fixes</li></ul>
solutions: The site and both apps stream CHIRP live, with Now Playing and Recently Played pulled from the station's audio feed in real time. One React codebase, wrapped with Capacitor, now powers the website and both the iOS and Android apps, so a fix or feature ships everywhere at once instead of being built three separate times. The new site and apps share one Payload CMS on top of Postgres, so CHIRP's team edits content once and it's correct everywhere, on the website and on both mobile apps, with role-based permissions scoped to each person's job. Volunteers and DJs also got their own site login, so a DJ's bio, photo, or contact information stays current without going through someone else to make the change. A single audio service now owns playback across the apps instead of every surface managing its own player, which had been the source of recurring CarPlay bugs.<br><br>Saved songs and light/dark mode preferences now live on a listener's account instead of a single device, so they follow across the website and both apps. Listeners can favorite a DJ and get a push notification when they go on air, even for unscheduled shows, and the DJ schedule itself moved from a dense table to a tabbed day view that opens on today, highlights whoever's on now, and can be searched by name. Logged-in listeners can also request a song directly, on the website or in the app, something CHIRP never had before.<br><br>All 16 years of CHIRP's content moved over from the old ExpressionEngine database, and checkout moved off PayPal onto Stripe. None of it depends on me being available after launch to keep it running. As a listener myself, I'm proud of what I built, and I use it every week to listen to my favorite DJs, at home and in the car.
outcomes: <ul><li>CHIRP's volunteers work in a modern CMS built around their day-to-day workflow, with role-based permissions so a content editor, a store admin, and a super-admin each only have access to what their job needs, instead of one flat login for everyone</li><li>DJs and volunteers can update their own name, photo, and contact information directly instead of asking someone else to do it</li><li>One CMS feeds the website and both mobile apps at once, so nothing has to be entered or fixed three separate times across three surfaces</li><li>Listeners get synced saved songs and dark mode across every device, DJ favoriting with push notifications, song requests they never had before, and a searchable, day-view DJ schedule instead of a static table</li><li>DJs have gotten noticeably more song requests since the new apps launched</li><li>16 years of station history carried forward with nothing lost in the move</li><li>A single shared audio service ended the recurring CarPlay bugs that came from every surface managing its own player separately</li></ul>
approach-image03: chirp-archetypes.jpg
approach-webpimage03: chirp-archetypes.webp
approach-caption03: User archetypes documenting each audience&colon; listeners, DJs, volunteers, and content publishers, with their needs, activities, and permissions
approach-image04: chirp-user-stories.jpg
approach-webpimage04: chirp-user-stories.webp
approach-caption04: User stories mapped across listeners, DJs & volunteers, content publishers, and technical needs
process-inline-image: chirp-sketches.jpg
process-inline-webpimage: chirp-sketches.webp
process-inline-caption: Early hand-drawn wireframe sketches for the homepage layout, navigation, and media player placement
achievements: <ul><li>Led product and technical direction for a from-scratch rebuild of a nonprofit's entire digital presence</li><li>Designed the shared data model that finally connected CHIRP's website and mobile apps</li><li>Replaced three separate platform codebases with one shared React and Capacitor codebase powering the website and both mobile apps</li><li>Kept self-service simplicity for CHIRP's volunteers central to every scoping decision, not just a line in the brief</li></ul>
takeaways: If I did this again, I'd bring AI into the process from the very start, not just the build&colon; using it to move faster, track findings and requirements more accurately, and go from product flow to wireframe to mockup to prototype faster, then build out the component library faster too. I've carried that into every project since, the same approach I used on <a href="../anonymous-client-portal">a client portal built in 13 weeks</a>.
learnings: Building CHIRP taught me a hard lesson about React&colon; a site that depends on JavaScript to render is just a blank white page for anyone without it, screen reader users included. One of the first pieces of post-launch feedback was a listener whose screen reader wasn't picking up any content, which I fixed by building a static version of the site with Eleventy that redirects to text.chirpradio.org whenever JavaScript isn't available. I've tested with JavaScript disabled on every project since.<br><br>The gap between that early research and the actual build also changed how I think about using AI as well&colon; by the time development started, AI coding tools had matured enough that building the entire component library myself with Claude Code was faster and more thorough than it would have been on the original timeline, with accessibility and responsiveness built in from day one instead of retrofitted.
webpcollection-image: chirp-logo.webp
collection-image: chirp-logo.jpg
hero-image-webp: chirp-hero-mobile.webp
hero-image-png: chirp-hero-mobile.jpg
hero-caption: The CHIRP Radio mobile app's Now Playing screen
process-image02: chirp-landing-mockup.jpg
process-webpimage02: chirp-landing-mockup.webp
process-caption02: An earlier low-fidelity homepage mockup, part of the iteration before the design landed where it did
process-image01: chirp-typography-color.jpg
process-webpimage01: chirp-typography-color.webp
process-caption01: Typography and color exploration comparing CHIRP's print brand fonts against modern, accessible web alternatives, with the final recommendation marked
process-stat-text: The entire production component library was built from scratch, matched to the design system, before a single page was wired up.
process-stat-number: 75
process-stat-label: Components Built in Storybook
approach-pull-quote: The goal was to make the station as easy to love digitally as it's always been on the air.
prototype-orientation: horizontal
prototype-type: image
prototype-webp: chirp-landing-final.webp
prototype: chirp-landing-final.jpg
prototype-alt: The live CHIRP homepage in dark mode, showing the persistent Now Playing player, DJ card with song-request link, and recently played tracks
---

<!--
  DRAFT, not ready to promote further than the _portfolio/ preview copy.
  Built 2026-09-06 from: the PR article draft at
  ~/Downloads/How Callibrity Modernized 16 Years of CHIRP Radio's
  Digital Experience.md, and CHIRP's real client brain at
  ~/Documents/Clients/CHIRP/brain/context/ (client-overview.md,
  project-brief.md, technical-architecture.md, decisions-log.md,
  stakeholders.md). CHIRP is a real, named, non-confidential client -
  no anonymization needed here, unlike FEG/Honda/LASer.

  Sourcing notes:
  - Shawn Campbell's quote is verbatim from the PR draft, attributed
    with her real name/title (Founder & GM) since it's already
    public-facing (used in Callibrity's own PR piece). Not added to
    _data/testimonials.json since there's no headshot image asset for
    her - hardcoded as a <q>/<cite> in achievements instead, same
    technique as the anonymous FEG testimonial.
  - James Carman (Callibrity's CTO) and Steve Bieredeli both had
    placeholder quotes in the PR draft that were never filled in. Did
    NOT invent quotes for either. Steve's last name is explicitly
    flagged "VERIFY SPELLING" in both the PR draft and Ryan's root-brain
    memory - omitted his name/role entirely rather than publish an
    unverified spelling. If Ryan wants either of them named or quoted,
    that needs a real quote and (for Steve) a confirmed spelling first.
  - "role" is written as "Product Lead and Technical Lead" because the
    client brain's stakeholders.md lists Ryan as "Technical lead...
    Owns the board and priorities" while the PR draft frames him doing
    classic product/discovery/usability work. Both seem true for this
    engagement (smaller nonprofit client, leaner team than FEG) - flag
    for Ryan to correct if that's not the right framing.
  - Decisions log (d-1 through d-10) supplied the concrete process
    detail in "process" (timezone call, chart date-header bug) and
    "solutions" (single-owner audio service fixing CarPlay bugs,
    PayPal to Stripe). Didn't use d-7 (Cloudflare Workers tier
    recommendation) or d-10 (serialized CMS migrations) - too far into
    implementation detail to be case-study-worthy, kept available if
    Ryan wants more technical depth.
  - Did not use stakeholders.md's "Kevin" ticket-scoping example by
    name (internal-only file, not meant to be client-facing/public) -
    generalized it in "methods"/"process" as "individual volunteers"
    without naming anyone by name other than Shawn (whose name is
    already public via her own quote).
  - Launch target (May 15, 2026) and current engagement status not
    stated in the case study body since the brain shows this was still
    pre-launch as of last update - avoid claiming a completed launch
    date that may not have actually happened yet. If it has shipped by
    the time this goes live, update "year" and consider adding the
    date.

  UPDATE 2026-09-06: Ryan confirmed directly he personally designed and
  built the CHIRP front end himself, applying the same AI-assisted,
  component-driven approach used on FEG (see anonymous-client-portal.md),
  but over a longer build timeline rather than FEG's compressed sprint -
  added to "methods" and "tools" (Claude). Unlike FEG, CHIRP's case study
  doesn't name a separate front-end-developer team role anywhere, so
  there's no team-credit conflict to reconcile here the way there is on
  FEG.

  UPDATE 2026-09-07: Full pass with Ryan.
  - Launch CONFIRMED&colon; shipped May 15, 2026, as planned. The earlier
    "avoid claiming completed launch" caution above is resolved -
    solutions/outcomes/overview's past-tense claims are accurate as
    written. year: 2026 stays correct as-is.
  - Callibrity de-emphasized per Ryan's request&colon; "since Callibrity's
    support ends at launch" -> "since my support ends at launch" in
    goals; "no Callibrity developer on call" -> "no developer on call"
    in problemstatement. The rest of the case study was already
    written in first-person voice, so this was a light touch, not a
    rewrite.
  - problemstatement rewritten to state three concrete pain points
    Ryan asked to be made explicit&colon; three disconnected systems
    (website/CMS/apps), a CMS volunteers found genuinely hard to use,
    and 16 years of content trapped in that same system with no clear
    path forward. outcomes rewritten earlier same session for
    resulting-value framing (not a feature list) - both changes
    checked against each other, no contradiction.
  - Read the real CHIRP client brain (~/Documents/Clients/CHIRP/brain/
    context/, plus open-questions.md, working-agreements.md, and a
    scan of the CMS training guides for usability content) looking
    for real findings/takeaways material. Found one lead (an
    infra-ownership open question, Q-1) and proposed it to Ryan before
    writing anything - he rejected it outright&colon; the project is
    done and live, that question is stale/no longer real. Nothing from
    that scan was used. Lesson&colon; a brain's "open questions" can go
    stale fast once a project ships - verify current status with Ryan
    directly rather than trusting a document's last-known state,
    especially near/after a launch.
  - The real findings/takeaways material came directly from Ryan, not
    the brain&colon; discovery and usability testing wrapped, then the
    actual build didn't start for six to eight months, for reasons
    outside his control (deliberately left vague in the case study
    itself, per Ryan&colon; "I can't say Callibrity screwed the pooch
    here" - do not add more detail to this without him supplying it
    directly). In that gap, AI coding tools matured enough that Ryan
    built the entire component library himself with Claude Code once
    development started, accessibility/responsiveness in from day
    one, then used Figma's MCP integration to align the coded
    components to the already-designed layouts - added to methods and
    learnings. CapacitorJS's real tradeoff (good, but still needed
    custom native code) went to findings. The actual "what would I do
    differently" (added to takeaways) is NOT about the timeline gap
    itself - Ryan was explicit the gap "worked out, closer to luck
    than plan" - it's about routing a project like this through his
    company at all, where the build timeline then depends on more
    than his own commitment; framed as his own future scoping
    decision, never as a criticism of Callibrity.
  - Shawn Campbell's testimonial is now a real _data/testimonials.json
    entry (id 24, topic "chirp", random_pool: false so it never
    surfaces on the About page's unfiltered random cards - see
    testimonial-card.html's updated doc comment) instead of the
    hardcoded <q>/<cite> in achievements, which was removed. Ryan
    supplied the real headshot directly (his own Desktop copy, not
    scraped from LinkedIn) - saved as
    assets/images/testimonial-images/1517721121464.jpg/webp.
  - problemstatement rewritten again same session to lead with the
    real root cause Ryan supplied&colon; CHIRP had no one who could
    touch its own site/apps directly before this - everything was
    outsourced, and the mobile app code specifically came from a
    now-defunct app company, handed to a separate support company,
    "held together with duct tape" per the team's own description.
    The three-disconnected-systems framing from the previous pass is
    kept as the visible symptom of this, not replaced.
  - scope field was wrong shape entirely (a tech-stack list, when
    every other finished case study uses duration + team composition,
    e.g. Kroger&colon; "Eight weeks (team of three...)") - fixed per
    Ryan&colon; one year, research through rebuild, primarily himself
    with additional technical support brought in as needed (not a
    fixed second team member, unlike HALO/Kroger/HaulHound's named
    co-team-members - phrased accordingly, not claiming a team size
    that isn't real).

  UPDATE 2026-09-07 (round 2)&colon; Ryan left direct bracket-note edits
  in the file rejecting several claims and asking for the corrections to
  propagate across the whole case study, which was also flagged as too
  short for a year-long engagement.
  - "No one who could touch its own site/apps directly, everything
    outsourced" was false and re-appeared despite being flagged in
    round 1 (that fix apparently never landed) - removed for good.
    Real root cause, per Ryan&colon; built at different times by
    different people, without much input from leadership or from what
    listeners needed. The "that fragmentation is why nothing
    connected" causal sentence was invented/dramatic framing Ryan
    explicitly said he hates - removed, stated plainly instead.
  - "No developer on call after launch" was flagged as false&colon;
    CHIRP has a small internal dev team. Reframed everywhere it
    repeated (meta, subtitle, problemstatement, goals, methods,
    solutions, outcomes, achievements) from "no developer" to
    "CHIRP's small dev team" / self-service-for-volunteers framing,
    since the real point was ease-of-use for non-technical volunteers,
    not zero developer capacity.
  - Added real facts Ryan supplied that were missing entirely&colon;
    saved songs and dark mode were device-locked before (no account
    sync, no dark mode at all), DJs/volunteers got their own login to
    self-service their own name/photo/contact info, listeners can now
    favorite a DJ and get push notifications when they go on air
    (including unscheduled sets), and the DJ schedule moved from a
    dense TV-guide-style table to a searchable, tabbed day view that
    opens on today and highlights who's on now. These now appear in
    problemstatement (as real listener-facing pain, which was missing
    before), process (schedule redesign as a discovery-driven "why"
    beat), solutions, outcomes, and achievements.
  - methods now actually includes the "oversaw discovery through
    launch" bullet Ryan asked for in round 1 - that edit apparently
    never landed in the live file either.

  UPDATE 2026-09-07 (round 3)&colon; Ryan called out that I was not
  actually using the sources sitting on disk - the root brain
  (~/Downloads/claude-root-brain-20260905/payload/memory/) and CHIRP's
  own client brain - and was guessing/reconstructing his voice from my
  own prior drafts instead. Read both before touching anything further.
  - hero image still hadn't actually landed as chirp-hero.jpg/webp
    (the real App Store "Now Playing" screenshot) despite being
    "applied" in an earlier round - the assets existed on disk but the
    front matter had reverted to the old chirp-logo wordmark. Fixed.
  - CMS/"no developer" framing corrected with the real fact, given
    directly by Ryan&colon; CHIRP already had CMS access before this
    project (round-1/2's "no one could touch it" and "no developer on
    call" framings were both wrong) - what was missing was modern
    conveniences, and updating the old CMS itself meant paying an
    outside third-party vendor. That's now the stated pre-project pain
    in problemstatement/goals. Everywhere the case study needed to
    state the new self-service outcome, reframed around Ryan's own
    involvement ending at launch (matches project-brief.md d-1&colon;
    "no ongoing Callibrity dev support after launch, CMS must be fully
    self-service") rather than an invented "CHIRP's small dev team" -
    that phrase was never sourced, it was this session's own guess.
  - Root brain terminology rules applied sitewide in this file&colon;
    dropped "Discovery" (client-facing consulting-jargon Ryan has
    flagged as a bad look - see feedback_discovery_word_baggage) from
    phases/methods/learnings in favor of "early research"; dropped
    "ticket" framing (feedback_consultant_vs_contractor - ticket
    language reads as contractor work, not consulting) from
    methods/process/outcomes.
  - process field&colon; cut the timezone-rendering and chart-date-bug
    anecdotes entirely per Ryan&colon; "this was not a hurdle... look
    back at the brain and case study i wrote" - neither is in the real
    decisions log as case-study-worthy, they were this session's own
    embellishment of d-5/d-6. Added the real fact that was missing -
    Ryan talked directly to listeners, not just CHIRP-team requests -
    and reframed the DJ-schedule beat around value to volunteers and
    listeners instead of "I did this."
  - Cut the "self-service calls over more correct ones" methods bullet
    entirely - vague, unsourced, no concrete example to point to.
  - subtitle went through two more corrections&colon; first fix still
    overstated "built for volunteers to run day to day" as the
    headline (Ryan&colon; "this is not correct" - they already had CMS
    access, per above). Second fix said "listener-run station," which
    is also wrong - CHIRP is volunteer-run and listener-supported
    (funded by listener donations), not run by listeners. Client
    brain's client-overview.md confirms&colon; "volunteer-powered,
    listener-supported."
  - CHIRP brand red corrected&colon; #C8102E was a visual estimate,
    never confirmed. CHIRP's own brain glossary.md states the real
    brand red as #ea1c2c - updated in case-brand.css's .chirp block
    (background, box-shadow, borders) and the file's own doc comment.
    Also pulled from that glossary but not yet used anywhere&colon;
    Chicago blue #41b6e6, accent yellow #ffc72c, and the brand fonts
    (Antonio / Roboto / Roboto Serif), if a future pass wants them.
  - tools&colon; added Docker, confirmed real via
    technical-architecture.md (CMS deploy pipeline builds/pushes a
    Docker image to Artifact Registry before the Cloud Run deploy; the
    ExpressionEngine-to-Payload migration pipeline also runs through
    Docker).
  - Also found in the root brain but not yet actioned&colon; Steve
    Berardelli's name is now confirmed-spelled (org_callibrity_roles_
    and_vocabulary.md - he's Director of Foundations), resolving the
    "VERIFY SPELLING" flag from the PR draft. Not added to this case
    study since he isn't quoted here regardless - flagging in case
    Ryan wants to use it elsewhere.

  Still needs Ryan:
  - review the round-3 rewrite of problemstatement/goals/methods/
    process/solutions/outcomes end to end - this was a large pass and
    should be read fresh, not assumed correct because it's sourced.
-->
