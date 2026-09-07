---
layout: case-study-template
order: 4
meta: How a three-person team used an AI-accelerated delivery pipeline to design, build, and usability-test a client portal for a confidential OCIO firm in 13 weeks.
type: product
title: A Client Portal in 13 Weeks
project: A Client Portal in 13 Weeks
client: Confidential OCIO Firm
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
overview: The client is a Cincinnati-based OCIO (Outsourced Chief Investment Officer) firm, the kind of firm an endowment, foundation, or healthcare system hires to run its investment office instead of staffing one internally. Their client-facing portal was a SharePoint site, and fewer than 10% of client users actively logged in. Every advisor organized materials their own way, so a client's experience depended entirely on who staffed the relationship, and the firm carried the entire access-control burden for every external user of every client. I was the product consultant on a three-person team that delivered a production replacement in thirteen weeks, to a fixed pilot date that never moved.
goals: <ul><li>Standardize how every advisor organizes and delivers client materials, so the experience stops depending on who staffs the relationship</li><li>Give the firm a portal it would be proud to put in front of a prospect</li><li>Move access-control risk for external users off the firm and onto identity systems the client organizations already own</li><li>Hit a fixed pilot date with a three-person team</li></ul>
role: Product Consultant
scope: 13 weeks to a fixed pilot date; team of three, a product consultant, a lead developer, and a front-end developer
tools: Figma, Azure, Angular, .NET, Storybook, GitHub, Claude
problemstatement: The firm needed a client experience, not a document repository. Every advisor filed and named materials their own way, so two clients of the same firm could have completely different experiences depending on who staffed them. The firm also owned access-control for every external user of every client, and only found out someone had left a client organization if somebody happened to mention it. Prospects were asking to see the portal and marketing wanted to show it, but what existed didn't reflect the quality of the firm behind it.
methods: <ul><li>Ran a pre-contract workshop and wrote an engagement brief as a starting hypothesis, not a validated plan</li><li>Built a repeatable AI toolchain, 19 purpose-built skills, that turned research findings into flow specs, tickets, and requirements traceable back to their source</li><li>Built the front end as a component library first (59 components, 137 documented Storybook stories) rather than as a set of hand-built screens</li><li>Set a 19-step automated gate, 13 of them custom guards written in response to specific bugs, that every push had to clear regardless of who or what authored it</li><li>Ran continuous research across six functions at the client (advisors, operations, compliance, IT, marketing, research), not as a phase up front</li><li>Logged every substantive decision in the open, 92 in total, each naming the alternative that was ruled out and who made the call</li><li>Ran usability testing before launch, five role-based test plans, 46 scored tasks, every one run cold with no training first</li></ul>
process: The engagement brief we wrote before the contract was signed was useful as a starting point and wrong in four places once we actually talked to the people who do the work&colon; the identity provider, the data architecture, the permission model, and the compliance retention rules all changed. The clearest example was the document structure itself. The brief assumed folders, because that's what the old SharePoint site had. Talking to the people who file and retrieve these documents every day led somewhere else&colon; the portal ended up with no folders at all, just a fixed set of centrally controlled categories with tags on top, so nobody could invent their own structure for their own convenience, which was exactly the behavior that made the old system unusable.<br><br>That research happened, it just happened alongside the build instead of in front of it, which meant each finding landed as a change to something already in progress instead of an input to the design. The date held because the team absorbed the rework, not because the original plan was right.
findings: Client-driven decisions changed the build in ways nobody would have anticipated from outside. The compliance team set retention rules in week two, a fixed-year SEC floor, a longer business-policy floor, and soft-delete only across all data, that shaped the data model. An operations stakeholder established that external "read" access had to include download, since clients need to download signed paperwork, not just view it. An advisor lead and an IT admin killed cross-client search entirely, because advisors work one client at a time and IT admins don't search, which removed scope rather than adding it. In usability testing, running every task cold with no training doubled each session as that participant's first-day onboarding, so a single session could produce both a usability finding and a productive user.
processlist: <ul><li>Continuous Research</li><li>Decision Log</li><li>Component Library</li><li>AI-Accelerated Tickets</li><li>Automated Quality Gate</li><li>Usability Testing</li></ul>
solutions: Identity is federated rather than owned by the firm&colon; internal staff and external client staff both sign in with credentials issued by their own organizations, so when a client disables an employee's account, portal access ends with it, because the identity was never the firm's to hold. Client data is isolated at the storage layer, with no document ever served from a public URL. Every acceptance criterion on every engineering ticket cites the logged decision that grounds it, so nothing gets re-litigated. And the component library, tokens, and API were built so a second phase adds to the foundation instead of rebuilding it, which was one of the client's own stated success criteria.
outcomes: <ul><li>Launched on time, to a fixed pilot date, with a team of three</li><li>8 feature areas live in production, including federated identity, per-client document isolation, and full document management</li><li>92 decisions logged with reasoning and attribution; 46 open questions tracked, 44 driven to documented resolution</li><li>A 59-component library with 137 Storybook stories behind 128 unit test files</li></ul>
achievements: <ul><li>Hit a fixed delivery date with a three-person team by building the delivery pipeline itself, not just the product</li><li>Translated a mid-engagement brand refresh into a governed token system so a rebrand stays a config change, not a project</li><li>Ran a research and usability-testing program across six client functions concurrently with an active build</li><li>Kept a working, auditable decision record that survived a mid-engagement team transition with no formal handoff meeting</li></ul>
takeaways: We would run real discovery before the front-end build instead of alongside it. Discovery doesn't block infrastructure, the identity architecture, the document security model, and the API foundation all had to be built regardless of what research turned up, and they were, starting in week two. Those weeks were available for research whether or not we used them for it, and we spent some of them building screens against assumptions we hadn't yet tested. The date held because the team absorbed the rework, but a real discovery phase up front would have been the cheaper way to get the same result. Discovery is human work and it takes four to six weeks; no tool shortens that part. What the AI toolchain shortened was the cost of carrying a decision, once a person made it, into every artifact that has to reflect it.
learnings: This project is where I learned the real value of living documentation kept current by AI, rather than a static wiki nobody updates. The client brain we built here, a version-controlled record of decisions, open questions, and context that stayed current through the engagement, taught me something I carry into how I run the whole practice now&colon; an unresolved question with a named owner is worth more than a guess. Once every open question is visible in one place, nothing quietly turns into an assumption someone builds on without realizing it.
webpcollection-image: anonymous-logo.webp
collection-image: anonymous-logo.jpg
hero-image-webp: anonymous-logo.webp
hero-image-png: anonymous-logo.jpg
hero-caption: Anonymous client
process-webpimage01: anonymous-decision-log.webp
process-image01: anonymous-decision-log.jpg
process-caption01: 92 decisions logged in the open, with 46 open questions tracked and 44 driven to documented resolution
process-webpimage02: anonymous-quality-gate.webp
process-image02: anonymous-quality-gate.jpg
process-caption02: The 19-step automated gate every push had to survive, 13 of them custom guards written after a real bug shipped
process-webpimage03: anonymous-component-library.webp
process-image03: anonymous-component-library.jpg
process-caption03: The shared component library&colon; 59 components, 137 Storybook stories, 128 unit test files
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
