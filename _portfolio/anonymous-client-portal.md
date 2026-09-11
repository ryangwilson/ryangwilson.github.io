---
layout: case-study-template
order: 4
homepage-group: case-study
meta: How a three-person team used an AI-accelerated delivery pipeline to design, build, and usability-test a client portal for a confidential funds management firm in 13 weeks.
type: product
title: A Client Portal in 13 Weeks
project: A Client Portal in 13 Weeks
client: Confidential Funds Management Firm
brandclass: feg
under:
underurl:
testimonial-topic:
year: 2026
subtitle: A team of three, a fixed date, and an AI-accelerated delivery pipeline
previous-cs-title: Bitovi UX Department
previous-cs-link: bitovi-ux-department
next-cs-title: CHIRP Radio
next-cs-link: chirp-radio
phases: Product, Engineering, AI-Accelerated Delivery
overview: Endowments, foundations, and healthcare systems hire the client to run their investment office entirely, handing over decisions most institutions would rather keep in-house. Their client-facing portal ran on a popular file sharing application, and fewer than 10% of client users actively logged in. Every advisor organized materials their own way, so a client's experience depended entirely on who staffed the relationship, and the firm carried the entire access-control burden for every external user of every client. I was the product consultant on a three-person team that delivered a production replacement in thirteen weeks, to a fixed pilot date that never moved.
stat-number: 13
stat-label: Weeks to a Fixed Pilot Date
goals: <ul><li>Standardize how every advisor organizes and delivers client materials, so the experience stops depending on who staffs the relationship</li><li>Give the firm a portal it would be proud to put in front of a prospect</li><li>Move access-control risk for external users off the firm and onto identity systems the client organizations already own</li><li>Hit a fixed 13-week pilot date with a three-person team</li></ul>
role: Product Consultant
scope: 13 weeks to a fixed pilot date; team of three, a product consultant, a lead developer, and a front-end developer
tools: Figma, Storybook, GitHub, Claude
problemstatement: The firm needed a client experience, not a document repository. Every advisor filed and named materials their own way, so two clients of the same firm could have completely different experiences depending on who staffed them. The firm also owned access-control for every external user of every client, and only found out someone had left a client organization if somebody happened to mention it. Prospects were asking to see the portal and marketing wanted to show it, but what existed didn't reflect the quality of the firm behind it.
methods: <ul><li>Ran a pre-contract workshop and wrote an engagement brief as a starting hypothesis, not a validated plan</li><li>Built the practice's now-standard AI classification as we went&colon; green-zone work AI could transcribe or format from something a person already decided, red-zone work only a person could originate, with a hard constraint written into 10 of the 19 skills where getting it wrong would matter</li><li>Worked out the pipeline live, under deadline pressure&colon; a hand sketch became a native flow diagram, a validated flow became a wireframe, a wireframe became a click-through prototype, each step AI-produced from a human-confirmed input instead of invented</li><li>Built a governed design-token system from the client's brand refresh, then a 59-component, 137-story Storybook library against it in about three days, and the entire production front end from that library in twelve hours</li><li>Set automated checks every piece of code had to pass before it could ship, tests, accessibility, and brand consistency among them, regardless of who or what wrote it, so a known class of bug could never ship twice</li><li>Ran continuous research across six functions at the client (advisors, operations, compliance, IT, marketing, research), not as a phase up front</li><li>Logged every substantive decision in the open, 92 in total, each naming the alternative that was ruled out and who made the call</li><li>Ran usability testing before launch, five role-based test plans, 46 scored tasks, every one run cold with no training first</li></ul>
process: We treated the pre-contract brief as a hypothesis&colon; real conversations with the people who do the work refined the identity provider, the data architecture, the permission model, and the compliance retention rules well beyond what any brief could specify going in. That's how we found the real document structure&colon; the people who file and retrieve these documents every day pointed us toward a fixed set of centrally controlled categories with tags on top, instead of the folders everyone assumed going in.<br><br>Every one of those findings went into a decision log, in the open, naming the alternative that was ruled out and who made the call, so nothing got re-litigated once it was settled. That's what allowed research to run the entire length of the engagement instead of stalling the build&colon; a finding didn't have to wait for a formal handoff to matter, it just had to get logged.
process-pull-quote: AI went where its work could be verified. People went where it could not.
process-continued: The AI pipeline we built during this engagement is what let the team move fast without cutting corners on judgment. A hand sketch became a native, editable flow diagram, a validated flow became a wireframe, a wireframe became a click-through prototype anyone could test before a line of production code existed. We built the components in Figma first, accurate down to the token, then pointed Claude Code at them&colon; the shared library and its Storybook documentation came together in about three days, then Claude Code turned that library into the entire production front end in twelve hours. What became the practice's standard for doing this kind of work came out of figuring it out here first.
findings: The more the team learned about how the firm actually worked, the more complex the real problem turned out to be, and the AI pipeline was what let the team stay on top of that complexity without losing the delivery clock. The compliance team's retention rules in week two, a fixed-year SEC floor, a longer business-policy floor, and soft-delete only across all data, reshaped the data model days after the requirement was set, not weeks. An operations stakeholder's call that external "read" access had to include download moved from decision to shipped feature the same way.<br><br>The same speed showed up in the build itself&colon; the shared component library came together in about three days, and the entire production front end from that library in twelve hours. In usability testing, running every task cold with no training doubled each session as that participant's first-day onboarding, so a single session could produce both a usability finding and a productive user.
processlist: <ul><li>Continuous Research</li><li>Decision Log</li><li>Component Library</li><li>AI-Accelerated Tickets</li><li>Automated Code Checks</li><li>Usability Testing</li></ul>
pull-quote: AI is a tool. We stay in control. We review the content. We stay aware of the product. This is 100% human work with AI support to speed us up. And our expertise is the prerequisite.
solutions: The new portal gives every client the same experience, no longer dependent on who happens to manage the relationship, with materials organized the same way for everyone instead of one structure per advisor. We framed the solution directly with the people who'd use it, usability tested it before launch, iterated on what we found, and delivered it on time to a stakeholder and a set of users who were genuinely happy with the result.
outcomes: <ul><li>Launched on time, to a fixed pilot date, with a team of three</li><li>8 feature areas live in production, including sign-in through each client's own organization, per-client document isolation, and full document management</li><li>92 decisions logged with reasoning and attribution; 46 open questions tracked, 44 driven to documented resolution</li><li>A 59-component library with 137 Storybook stories behind 128 unit test files, fully reusable and ready to expand for the firm's future features</li></ul>
achievements: <ul><li>Hit a fixed delivery date with a three-person team by building the delivery pipeline itself, not just the product</li><li>Translated a brand refresh into a governed token system so a rebrand stays a config change, not a project</li><li>Ran a research and usability-testing program across six client functions concurrently with an active build</li><li>Kept a working, auditable decision record that survived a team transition with no formal handoff meeting</li><li>Built a reusable AI methodology that now helps the rest of my Product team adapt to modern tooling</li></ul>
takeaways: If we could have gotten in front of this before the 13-week clock started, I'd have preferred to run a real discovery phase first instead of building the front end alongside it. Discovery doesn't block infrastructure, the identity architecture, the document security model, and the API foundation all had to be built regardless of what research turned up, and they were, starting in week two.<br><br>Those weeks were available for research whether or not we used them for it, and we spent some of them building screens against assumptions we hadn't yet tested. The date held because the team absorbed the rework, but a real discovery phase up front would have been the cheaper way to get the same result. Discovery is human work and it takes six weeks; no tool shortens that part. What the AI toolchain shortened was the cost of carrying a decision, once a person made it, into every artifact that has to reflect it.
learnings: This project is where I learned the real value of living documentation kept current by AI, rather than a static wiki nobody updates. The client "brain" we built here, a version-controlled record of decisions, open questions, and context that stayed current through the engagement, taught me something I carry into how I run the whole practice now&colon; an unresolved question with a named owner is worth more than a guess. Once every open question is visible in one place, nothing quietly turns into an assumption someone builds on without realizing it.<br><br>This project also sharpened where I'd let AI operate and where I wouldn't, and that distinction, green-zone work AI could transcribe or format, red-zone work only a person could originate, is the classification the whole practice now runs on. The clearest lesson came from something we got wrong first&colon; we maintained a permission matrix by hand, and by week three it had quietly drifted from what the software actually did. The fix wasn't a smarter check, it was removing the hand-maintained copy entirely and generating the matrix from the code itself, so there was nothing left to drift. I didn't bring that discipline into this engagement, I built it here, under a deadline that didn't leave room to get it wrong twice, and it's the standard I've taught the rest of the practice since.
webpcollection-image: anonymous-logo.webp
collection-image: anonymous-logo.jpg
hero-image-webp: anonymous-hero-wireframe.webp
hero-image-png: anonymous-hero-wireframe.jpg
hero-caption: A stylized wireframe of the portal, built for illustration - not the client's real screen
process-inline-image: anonymous-atomic-design.jpg
process-inline-webpimage: anonymous-atomic-design.webp
process-inline-caption: The atomic design progression the component library was built on&colon; atoms, molecules, organisms, and templates, each layer assembled from the one before it
process-multistat-01:
  - number: "92"
    label: Decisions Logged in the Open
  - number: "44"
    label: Open Questions Tracked to Completion
process-multistat-02:
  - number: "59"
    label: Components
  - number: "137"
    label: Storybook Stories
  - number: "128"
    label: Unit Test Files
prototype-orientation: horizontal
prototype-type:
prototype-webp:
prototype:
prototype-alt:
---

<!--
  DRAFT, not ready to promote further than the _portfolio/ preview copy.
  Built 2026-09-06 from a real internal Callibrity case-study document
  Ryan pointed me to (external drive, not in this repo):
  "/Volumes/FILE BACKUP/CALLIBRITY/WRITING/FEG Investment Advisors_ A
  Client Portal in 13 Weeks.md" - a multi-format document (One Pager,
  Full/Medium/Web Case Study, an internal-only sales talk track, and a
  value-prop memo). Only the "Web Case Study" section (the most already
  externally-appropriate version) and selected specifics from the
  Full/Medium versions were used here. The "Internal talk track" section
  is explicitly marked "For sellers. NOT client-facing. Do not send
  externally." - none of its content (objection handling, competitive
  positioning, pricing-adjacent detail) was used or should ever be used
  publicly.

  SANITIZATION APPLIED (the source document itself specifies most of
  this, in its own "What not to claim" section):
  - Real client name "FEG Investment Advisors" (Fund Evaluation Group)
    NEVER used. The source document's own line: "Confirm with FEG before
    using their name externally. Anonymized fallback: 'a Cincinnati-
    based OCIO firm managing institutional endowments.'" - Ryan told me
    (2026-09-05) he can't cite the client name, so treated as
    unconfirmed and used that exact fallback framing.
  - Went further than the source's own minimum bar: also dropped the
    specific AUM figure (~$100B), the 1988 founding date, and the list
    of four named competitors (Cambridge Associates, NEPC, Mercer,
    Commonfund) - that specific combination would identify the real
    firm to anyone in the OCIO industry even without using its name.
    This is a judgment call beyond what the source doc required; flag
    to Ryan if he'd rather keep those specifics in.
  - Did not use the <10% usage figure as a "solved" metric - source doc
    explicitly warns this is the BEFORE state / problem statement only,
    not a proven result, since post-pilot adoption data doesn't exist
    yet (pilot went live June 30, 2026, per the source doc - just over
    two months before this was written).
  - No time-saved/productivity-multiplier percentage anywhere - source
    doc is explicit there's no telemetry for this and any number would
    be invented.
  - No pilot client names, no adoption metrics, no billing/rate/margin
    figures (Section 10 of the real engagement brief, explicitly marked
    never to share).
  - Kept the source's own neutral framing on the old system ("SharePoint
    is a document management system, the firm needed a client
    experience") rather than anything that reads as calling the old
    system unprofessional or embarrassing - the source doc is explicit
    this is a category-mismatch framing, not a quality judgment, partly
    because many prospects run on SharePoint too.
  - No individual client-side people named (the source doc itself only
    ever refers to them by role - "the chief compliance officer," "an
    operations stakeholder" - already safely anonymized at that level).

  RESOLVED 2026-09-06: Ryan asked to remove the anonymized Holly Delaney
  excerpt that had been hardcoded into "achievements" as a <q>/<cite>
  block. Removed entirely - this page carries no testimonial now. Her
  full, named testimonial (_data/testimonials.json id 23, company "FEG",
  title "CTO") still exists and is untouched; it was never wired to this
  page via testimonial-topic, so there's no de-anonymization risk left
  to resolve here.

  Confirmed assumption, NOT yet verified with Ryan: that Ryan personally
  was "the product consultant" referenced throughout the source
  document (the doc is written in company voice, "our product
  consultant," not naming him). Inferred from context (he's Director of
  Product at Callibrity, the practice is small, and the specific work
  described - Figma token translation, AI-driven workflow tooling -
  matches his documented skillset elsewhere on this site, e.g. am-ui).
  Confirm before promoting further.

  Still needs Ryan: "learnings" (personal "how did I grow" reflection -
  the source document is written in company voice throughout, so there
  is no first-person personal reflection to draw from, unlike the
  "takeaways" field which IS close to Ryan's own words already in the
  source's "What we would do differently" section); no images exist for
  this case study.

  RELATED: the Callibrity Product Practice case study's "learnings" field
  already describes an AI/component-library story (Figma + Storybook +
  Claude Code, 12-hour front-end build, converting skeptical
  developers) that Ryan confirmed happened on this same (FEG) engagement.
  That 12-hour anecdote is likely a specific moment within this larger
  13-week/3-person delivery, not the same scope as the whole engagement
  - be careful not to conflate the two when these two case studies sit
  side by side. Whether that story stays in Callibrity's case study,
  moves here, or becomes its own thing is still an open question noted
  in project_portfolio_content_backlog memory.

  UPDATE 2026-09-07&colon; Review pass with Ryan, same treatment as the
  other case studies.
  - De-anonymization fix&colon; "Cincinnati-based OCIO firm" (the
    source document's OWN suggested anonymized fallback, quoted above)
    is not actually safe - Ryan tested it directly&colon; a search for
    that exact phrase resolves straight to FEG via Google's AI
    Overview, naming FEG Investment Advisors as "the most prominent"
    match. Removed "Cincinnati-based" from overview. Ryan then asked to
    drop "OCIO" entirely too, in meta/client/overview, replaced with
    the more generic "funds management firm" - OCIO is a narrow
    enough term on its own (a specific, named category with a small
    real-world firm count) that he'd rather not use it at all, even
    without geography attached. Lesson&colon; a source document's own
    suggested anonymization is a starting point, not a guarantee -
    verify it actually holds before trusting it, same discipline as
    not trusting a stale open-questions doc.
  - Added two real pull-quotes, both already in the public-facing
    sections of the source doc (One Pager and Full Case Study, not the
    internal talk track) - not invented&colon; "AI went where its work
    could be verified. People went where it could not." (approach-
    pull-quote) and "A PRD that is half open questions early on is a
    good PRD, not a failure." (solution's pull-quote, already in
    quotes in the source as a stated PRD standard). Both are general
    practice philosophy, no client-identifying content.
  - Added an Overview-level stat callout, first as 3 / Person Team,
    then Ryan swapped it for 13 / Weeks to a Fixed Pilot Date - the
    deadline framing, not team size, is the more interesting number
    here. The three process-image stat cards already cover 92
    decisions / 19-step gate / 59 components, so this uses a number
    not already visualized elsewhere on the page.
  - Goals bullet made concrete&colon; "Hit a fixed pilot date" ->
    "Hit a fixed 13-week pilot date," per Ryan. Left the similar line
    in achievements alone since he only flagged this one - adding the
    number there too would just restate the same fact a third time.
  - Further de-anonymization&colon; "SharePoint" (both mentions -
    overview and process) replaced with "a popular file sharing
    application," per Ryan.
  - Trimmed the process paragraph's over-detailed explanation of the
    OLD system&colon; cut "because that's what the old SharePoint site
    had" and "which was exactly the behavior that made the old system
    unusable." Ryan's framing&colon; that level of legacy-system detail
    wasn't adding story value - the point of the paragraph is the real
    decision (folders assumed, then dropped after talking to real
    users), not a diagnosis of what was wrong with the old tool.
  - "What does 'that research happened' mean?" - a real clarity bug in
    the process field's second paragraph, not a root-brain rule: the
    sentence opened with "that research," a pronoun pointing back to
    something paragraph one never actually called "research." Rewrote
    to open with "Conversations like that" instead, which echoes
    paragraph one's actual language ("talking to the people who...").

  UPDATE 2026-09-07 (round 2)&colon; Ryan reframed the whole story&colon;
  "this is the story of Product AI Enablement told through a client
  project where i learned how to do that." Not just "we used AI to
  deliver fast" but this engagement is where the AI-enablement
  methodology now taught practice-wide (the Product Team Trainings
  folder&colon; product-flow, wireframe, and figma-component skills,
  the green-zone/red-zone classification) actually came from - it was
  being built under this deadline, not applied from an existing
  playbook. That resolves what looked like a date conflict&colon; the
  training docs are dated August 2026, after FEG's June 30 pilot -
  because they formalize what this engagement produced, not the other
  way around.
  - Verified the pipeline Ryan described (sketch -> vector flow ->
    wireframe -> click-through prototype -> component library -> front
    end) against the real Product Team Trainings docs (external drive,
    "/Volumes/FILE BACKUP/CALLIBRITY/Product Team/Trainings/") - "05 -
    Product Flows.md" (sketch to native FigJam via the product-flow
    skill), "wireframe-skill.md" (flow to Figma wireframes, always
    ending by offering a click-through prototype), "figma-component-
    skill.md" (a correct Figma component to code + Storybook,
    Playwright-verified, accessibility/responsiveness baked in). This
    matches FEG's own source doc, which independently confirms flows
    and wireframes were "generated natively into Figma as editable
    objects, not screenshots" - two real sources agreeing, not one
    guess extended.
  - Numbers conflict resolved&colon; Ryan initially said "2 days" for
    the component library and "2 days" for library-to-front-end, but
    callibrity-product-team.md already tells this exact story with
    different, Ryan-confirmed numbers - about three days for the
    library, twelve hours for the front end. Flagged the conflict
    rather than picking one silently; Ryan confirmed use 3 days /
    12 hours. Added to methods and process.
  - Added the green-zone/red-zone AI classification (10 of 19 skills
    carry an explicit constraint) to methods, and the permission-
    matrix-drift story (hand-maintained matrix silently wrong by week
    three, fixed by generating it from code instead) to learnings as
    the concrete "what we learned AI could and couldn't do" moment -
    both real, sourced directly from the FEG document's "guardrails"
    section, not invented for this framing.
  - Did not touch findings (client-driven decisions theme), takeaways
    (discovery-sequencing reflection), achievements, outcomes, or
    solutions - none of those were flagged and the new AI-enablement
    material has its own real estate in methods/process/learnings
    without needing to compress what was already there.

  UPDATE 2026-09-07 (round 8)&colon; Small follow-ups after round 7.
  - Cut the cross-client-search sentence from findings entirely, per
    Ryan - the compliance-retention and download-access examples carry
    the point on their own.
  - Overview's opening sentence reworked - Ryan&colon; "this seems
    lazy." The old version ("The client is a funds management firm,
    the kind of firm an endowment...") was a dictionary-definition
    structure. Rewritten active-voice, institutions as the subject&colon;
    "Endowments, foundations, and healthcare systems hire the client
    to run their investment office entirely, handing over decisions
    most institutions would rather keep in-house."
  - Fixed the site's Prev/Next pagination chain to wrap end-to-end
    (Yum -> Callibrity Product Practice -> am-ui -> ... -> Yum)
    instead of dead-ending at both ends, per Ryan.
  - Hero image v3 (the dashboard variant) reworked per Ryan's
    feedback&colon; the main content panel was the same dark green as
    the sidebar and the page background behind it, so nothing stood
    out; changed it to off-white to contrast against both. Also fixed
    real pixelation - the previous export had been through a heavier
    Gaussian blur pass and a smaller source screenshot; re-rendered at
    native resolution with a lighter blur/mask radius on the chroma-
    key edge, quality 96 instead of 92.

  UPDATE 2026-09-07 (round 7)&colon; Major structural/tone pass.
  - The AI pull-quote moved from Approach into Process, positioned
    right after the decision-log paragraph, per Ryan. Discovered mid-
    edit that embedding a &lt;blockquote&gt; directly inside the
    "process" field's text would nest a block element inside the
    template's &lt;p&gt;{{ page.process }}&lt;/p&gt; wrapper - invalid
    HTML, and it would render squeezed into the narrow flex-third
    column instead of full width like every other pull-quote on the
    site. Added real template support instead&colon; `process-pull-
    quote`/`process-pull-quote-attribution`, rendered full-width
    right after the two-col process/processlist block, reusing the
    same `.pull-quote` markup/CSS as approach-pull-quote and Solution's
    pull-quote. The AI-pipeline paragraph moved into the pre-existing
    `process-continued` field (full-width, single-col) rather than
    staying crammed in the narrow column too.
  - Cut "not a plan to defend" and softened the "brief assumed
    folders" framing - Ryan&colon; "why are you trying so hard to say
    the brief was wrong?" The beat is now about the research method
    (talking to the people who do the work) with the folders detail
    as one supporting example, not a sentence structured around
    proving the brief wrong.
  - Removed every mention of the PRD standard/skill from process, per
    Ryan&colon; "do we have to talk about the PRD skill at all? i saw
    remove all mentions." Also cut the "not yet defined... never an
    invented answer" open-questions-discipline sentence entirely
    along with it, since it existed only to set up the PRD mention.
  - Simplified the "word salad" transition (Ryan's words) - "Keeping
    that pace by hand would have been its own full-time job... None
    of that pipeline existed as a playbook going in. It got built
    under the same deadline it was meant to protect" - down to one
    clear sentence&colon; "The AI pipeline we built during this
    engagement is what let the team move fast without cutting corners
    on judgment."
  - Findings' opening reframed per Ryan directly&colon; not "the build
    kept changing shape" (implies instability), but "the more the
    team learned... the more complex the real problem turned out to
    be, and the AI pipeline was what let the team stay on top of that
    complexity" - his own words, almost verbatim.
  - Solutions drastically cut - Ryan&colon; "a lot of unnecessary tech
    information" if the message is "we moved faster because of AI."
    Removed the sign-in/credentials mechanism, storage isolation, and
    ticket-decision-citation detail entirely (this is also consistent
    with Ryan not wanting to assert technical specifics he can't
    personally stand behind, same as the earlier "federated identity"
    cut). Replaced with his own framing&colon; framed the solution with
    real users, usability tested, iterated, delivered on time to a
    happy stakeholder and users.
  - Outcomes&colon; the component-library bullet now states it's
    "fully reusable and ready to expand for the firm's future
    features," per Ryan, rather than just the raw numbers.
  - Achievements&colon; dropped "mid-engagement" from two bullets (the
    brand-refresh one and the team-transition one) per Ryan, and added
    a new bullet - a reusable AI methodology now helping the rest of
    his Product team adapt to modern tooling.

  UPDATE 2026-09-07 (round 6)&colon; Hero image&colon; Ryan asked for "a
  fun, stylized wireframe," not a literal screenshot (safe by
  construction for a confidential client - nothing real to leak).
  Built from scratch&colon; a tilted browser-chrome card with a sidebar
  nav, a document list (icon + greeked lines + a tag pill per row),
  and a hand-drawn-style dashed address bar, in a hand-drawn/sticker
  aesthetic (thick dark outline, a drop-shadow offset in FEG's yellow
  accent, a circular "13 WEEKS" badge tilted like a sticker). Replaced
  the old wireframe.jpg's plain white background with a magenta
  chroma-key so it could be masked out properly (the first pass just
  left a plain white card with no visible brand color - screenshots
  from Chrome are always opaque, "background&colon; transparent" in the
  page's own CSS doesn't survive a screenshot). Composited onto the
  real `.feg` brand green (#16281F) to match the page. Replaced
  anonymous-logo.jpg/webp in the hero slot (logo remains the
  collection-image/card thumbnail, unchanged).

  UPDATE 2026-09-07 (round 5)&colon; Ryan gave a real quote, in his own
  words, to replace the pull-quote slot left empty since round 4&colon;
  "AI is a tool. We stay in control. We review the content. We stay
  aware of the product. This is 100% human work with AI support to
  speed us up. And our expertise is the prerequisite." Attributed to
  Ryan Wilson (the field's default attribution) since it's genuinely
  his - unlike the earlier prd-writer-skill.md line, which was real
  but not his own voice. Placed as the Solution section's pull-quote.

  UPDATE 2026-09-07 (round 4)&colon; Tightened process paragraph 1 (was
  wasting words on the same brief/folders point already made once).
  Used the reclaimed space to actually go deep on the decision log and
  open-questions mechanism instead of a passing mention - grounded in
  the real prd-writer-skill.md doc ("not yet defined... never an
  invented answer... a PRD that is half open questions early on is a
  good PRD, not a failure" - that's where the removed pull-quote's
  line actually lives; Ryan said the quote didn't sound like him, so
  folded the same real standard into prose instead of quoting it) -
  then added a transition sentence into the AI-pipeline paragraph so
  the section reads as one throughline (research discipline -> AI
  speed) instead of three separate topics.
  findings reworked from "client-driven decisions changed the build in
  ways nobody would have anticipated" (read as complaint, per Ryan) to
  active framing&colon; the team acting on real findings fast because of
  the AI pipeline. Added the three-day component library / twelve-hour
  front-end fact here too, since Ryan felt it hadn't been said
  anywhere yet (it's also in methods/process - kept the confirmed
  3-day/12-hour numbers from earlier this session rather than the "2
  days" he said in passing this round, since he explicitly locked in
  3/12 last time and this message read as a structural note, not a
  new number correction).
  Paragraph break added to takeaways at "starting in week two."

  UPDATE 2026-09-07 (round 3)&colon; Large review pass with Ryan, who
  worked this engagement himself.
  - Tone&colon; the process paragraphs read as "the project was poorly
    scoped and we had to absorb and solve for that," "things were
    constantly changing," and complained about the client a bit -
    not intentional, a real voice miss. Rewrote both paragraphs
    around deliberate methodology (a brief treated as a hypothesis to
    test, continuous research as a design choice) instead of a team
    reacting to chaos it didn't control. Same underlying facts, no
    new claims - only the framing changed.
  - "Why aren't we using the numbers layout in html and css?" - the
    decision-log and component-library stat visuals were flattened
    screenshot images (see the original IMAGES ADDED note below) when
    a live, native version already existed elsewhere on the site
    (bitovi-ux-department.md's `cs-stat-group`). Added real template
    support for it here&colon; `process-multistat-01`/`-02` (arrays of
    {number, label}) in case-study-template.html, reusing the
    existing `cs-stat-group`/`stat-callout` CSS rather than inventing
    new classes. Replaced the decision-log and component-library
    images with these. Deleted the now-unused image files.
  - Decision-log numbers simplified per Ryan&colon; dropped 46 (total
    open questions tracked) since it wasn't adding anything next to
    92 (total decisions) and 44 (open questions tracked to
    completion) - the two numbers that actually matter.
  - "I don't understand the 19-step automated gate and I worked this
    project" - if the person who lived it can't parse the copy, the
    copy is wrong. Removed process-image02 (the quality-gate stat
    image) entirely rather than replacing it with a native version -
    the concept itself needed to simplify, not just the layout.
    Reworded the methods bullet and the processlist label away from
    "19-step gate / 13 custom guards" to plain language&colon; automated
    checks (tests, accessibility, brand consistency) every push had
    to clear, regardless of who or what wrote it.
  - Takeaways rewritten to open with Ryan's own framing&colon; "If we
    could have gotten in front of this before the 13-week clock
    started, I'd have preferred to run a real discovery phase first."
    Also cut "four to" from "it takes four to six weeks" per Ryan,
    leaving "it takes six weeks."
  - "The client brain" -> the client "brain" (quotes around brain
    only), per Ryan.
  - Removed "federated identity" from solutions and outcomes&colon;
    Ryan's own words, "i can't honestly tell you i know what
    federated it except some level of access probably related to
    RBAC" - he's the product consultant, not the developer who built
    it, and won't assert a technical architecture term he can't
    personally stand behind. Restated the same real behavior in
    plain language instead (sign in with your own org's credentials;
    access ends when that org revokes it) - nothing about WHAT
    happens changed, only the unclaimed HOW.
  - New image&colon; Ryan asked whether any imagery from the Product
    Team Trainings decks could be pulled in. The decks themselves are
    mostly text/no embedded diagrams (confirmed by paging through
    "S2-07 - Sketch to Product Flow.html" - its own "live demo" slide
    is a placeholder, not a real screenshot), except "S2-11 - Design
    Systems and Component Libraries.html," slide 3, a clean atomic-
    design diagram (atoms/molecules/organisms/templates) with no
    client data. Did not screenshot the slide itself - rebuilt it
    from scratch in the case study's own visual language (own layout,
    own colors, no Callibrity slide-deck branding) via the same local
    HTML+Chrome-screenshot pipeline used for the other images. Saved
    as anonymous-atomic-design.jpg/webp, placed as process-inline-image
    right before the two new stat groups.

  IMAGES ADDED 2026-09-06 (fork task): three original, abstract stat
  diagrams, NOT real product screenshots - a real screenshot of the
  actual portal would show the real client's branding/content and undo
  the anonymization above. Each visualizes real numbers already stated
  in this file's own copy, pulled from the source document to confirm
  exact figures (92 decisions / 46 open questions / 44 resolved; the
  19-step gate's 5/7/3/4 four-group breakdown and 13 custom guards;
  59 components / 137 Storybook stories / 128 unit test files). Built
  as clean typographic stat cards in the FEG brand green (#16281F, the
  existing `.feg` CSS class color) via a local HTML+Chrome-screenshot
  pipeline, cropped/resized with PIL. Saved as
  anonymous-decision-log.*, anonymous-quality-gate.*, and
  anonymous-component-library.* (no "feg" in any filename, consistent
  with the earlier "feg-image" de-anonymization fix). Deliberately did
  NOT build a federated-identity/SSO diagram - Ryan said that concept
  doesn't matter to him. Placed all three under process-image01-03;
  approach-image01-05 are still empty, left that way rather than
  forcing a fourth/fifth diagram that would repeat these same numbers
  differently.
-->
