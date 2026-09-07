---
layout: case-study-template
order: 7
meta: Nine weeks embedded in a Honda HALO vehicle test facility, surfacing eleven severity-rated findings and recommending new software for only three of them.
type: product
title: Honda HALO
project: Product & Problem Discovery
client: Honda HALO
brandclass: facility
under:
underurl:
testimonial-topic:
year: 2024
subtitle: Eleven severity-rated findings, and software recommended for only three of them
previous-cs-title: CHIRP Radio
previous-cs-link: chirp-radio
next-cs-title: Kroger Build v Buy
next-cs-link: kroger
phases: Discovery
overview: Honda HALO runs a wind tunnel and acoustics testing facility used by both its own engineering staff and an outside operations partner running tests on behalf of third-party clients. The facility itself was new, its automation still being worked out in real time as testing ramped up, and nobody had stepped back to ask the people running it every day what actually got in their way. I was brought in as the product consultant on a two-person Discovery team for nine weeks, watching fully automated vehicle and acoustic testing at a scale I hadn't seen before and talking directly with the technicians and operators keeping it running, then delivered a severity-rated findings report and a recommendation for what was, and wasn't, worth building software to fix.
goals: <ul><li>Understand daily facility operations well enough to find real friction points, not assumed ones</li><li>Build enough trust with two separate operating teams, one long-tenured, one newer, to get honest feedback during live test days</li><li>Translate what we heard into a prioritized, severity-rated set of findings the client could act on</li><li>Recommend digital products only where they were genuinely the right answer, not by default</li></ul>
role: Product Consultant
scope: Nine weeks (team of two, made up of myself and a Callibrity Technical Consultant)
tools: Contextual inquiry, structured 1:1 interviews, a severity-rating framework adapted from the Nielsen Norman Group's heuristic evaluation methodology, user stories
problemstatement: The facility's two operating teams were each managing scheduling, documentation, error troubleshooting, and end-of-test data handling their own way, with no shared source of truth between them. Test data changed hands manually. Documentation lived across SharePoint, OneDrive, local wikis, and paper notebooks depending on who wrote it. Technicians reused the same shared login for every control-room machine at the start of every test, and login details were kept on a card at the workstation. Nobody had looked at the operation as one connected system, and nobody had asked the people running it what slowed them down.
methods: <ul><li>Made four separate on-site visits, arriving when technicians did and staying through full test days to observe testing as it actually happened</li><li>Ran one-on-one interviews with close to a dozen technicians, operators, and stakeholders across both operating teams, in person and virtually</li><li>Used a consistent, deliberately redundant interview script across every conversation, so the same topic asked a different way would surface things people hadn't thought to mention the first time</li><li>Interviewed people one at a time rather than in groups, to avoid stronger personalities dominating and groupthink flattening the feedback</li><li>Adapted the Nielsen Norman Group's 0-to-4 heuristic-evaluation severity scale to rate every finding, even though the environment was physical operations, not software</li></ul>
process: Eleven distinct issues came out of the observations and interviews, everything from how technicians logged into control-room computers each morning to how test data got handed off to clients at the end of a session. Several of the highest-severity findings, like the lack of a single documentation source or unclear system error messages, were process and tooling gaps that a shared wiki and a plain-language error cross-reference could fix, not custom software. Only three of the eleven findings, the ones with a genuinely new digital workflow behind them, were recommended for a proposed build phase. Every finding was written up the same way regardless of whether it led to a recommended build&colon; what we observed, possible solutions, the value if solved, and what we still didn't know.
findings: One thing held across nearly every conversation&colon; the client's own early guidance to us was that adding new technology for its own sake wasn't the goal, and that solving for the people running tests mattered before anything aimed at the end customer's experience. That framing shaped every recommendation that followed. It also surfaced a real gap between the two operating teams&colon; the newer partner team had far less institutional knowledge to fall back on than the client's own long-tenured staff, so issues that were a minor annoyance for one team were a recurring blocker for the other. For the login-time finding specifically, we recommended the client first measure how long the existing process actually took, before evaluating any replacement, so a future fix could be judged against a real baseline instead of a guess.
processlist: <ul><li>Onsite observation</li><li>Structured 1:1 interviews</li><li>Severity-rated findings</li><li>User stories</li><li>Recommendation report</li><li>Extended into a custom-build engagement</li></ul>
solutions: Of the eleven findings, three were recommended as digital products for a proposed follow-on build phase&colon; a secure, self-service scheduling tool for the operations partner's clients to replace a manual, Excel-based process; a guided data handoff-and-removal tool for end-of-test data transfer, replacing a 15-to-20-minute manual file copy and deletion process, with a client-facing digital sign-off confirming receipt before deletion; and a downtime-tracking tool to replace a whiteboard-to-spreadsheet process with something that could support maintenance forecasting over time. The remaining findings, including centralized documentation, plain-language error troubleshooting, and cross-team communication, were scoped as process and tooling recommendations rather than custom software, on purpose.
outcomes: <ul><li>Four on-site visits and close to a dozen 1:1 interviews across two operating teams</li><li>Eleven severity-rated findings delivered in a 28-page report, plus a summary deck for stakeholders</li><li>Three findings scoped into a proposed digital-product build; the other eight scoped as process and documentation fixes instead of custom software</li><li>The client extended the engagement into a three-month build phase for the end-of-test data handoff tool, one of the three recommended products, turning the Discovery recommendation into real, delivered work</li></ul>
achievements: <ul><li>Adapted a UX heuristic-evaluation framework to a physical operations environment that had never used one</li><li>Recommended process and documentation fixes over new software on eight of eleven findings</li><li>Built enough trust with the client stakeholder driving the engagement and an operations-partner stakeholder with deep system knowledge, and with a time-constrained technical team more broadly, to get honest, specific feedback during live test days without disrupting testing</li><li>Turned the Discovery engagement into a three-month funded build of the end-of-test data handoff tool, the recommendation converting directly into delivered work</li></ul>
takeaways: The report itself was explicit about what we didn't yet know. Several of the highest-value recommendations, including the client-facing scheduling tool, were flagged as needing more research before we could scope a build with confidence, not because they weren't real problems, but because a Discovery engagement should surface what still needs investigation as honestly as what it already knows. We proposed rolling that research into the next phase rather than guessing at a solution to hit a deadline.
learnings: This was a great client, one whose trust let us work at full capacity instead of a boxed-in engagement. What stood out here was applying my product process to a full engineering facility rather than a digital product&colon; the interview script, the severity ratings, and writing down every friction point even when it wouldn't become a product all worked exactly the same in a physical space as they do on a web or app project. The process didn't change, only the environment did, which is also why the most valuable recommendation here was that eight of the eleven findings didn't need new software built for them at all.
approach-webpimage01: halo-facility-overview.webp
approach-image01: halo-facility-overview.jpg
approach-caption01: An overview of the wind tunnel's core testing capabilities, from Callibrity's own discovery presentation
process-webpimage01: halo-severity-scale.webp
process-image01: halo-severity-scale.jpg
process-caption01: The severity scale adapted from the Nielsen Norman Group's heuristic evaluation methodology, used to rate every finding
webpcollection-image: halo-card.webp
collection-image: halo-card.jpg
hero-image-webp: halo-hero.webp
hero-image-png: halo-hero.jpg
hero-caption: The off-the-shelf internal wiki setup process recommended to replace the client's fragmented documentation
prototype-orientation: horizontal
prototype-type:
prototype-webp:
prototype:
prototype-alt:
---

<!--
  DRAFT, not ready to promote further than the _portfolio/ preview copy.
  Built 2026-09-06 from two real internal Callibrity deliverables Ryan
  pointed me to (external drive, not in this repo):
  "/Volumes/FILE BACKUP/CALLIBRITY/HALO/Honda HALO - Recommendations
  Report.pdf" (88 pages, dated March 2024, co-authored by Ryan Wilson,
  Product Consultant, and a Callibrity Technical Consultant) and
  "Honda HALO - Presentation Leave Behind.pdf" (28-slide summary deck of
  the same report).

  SANITIZATION APPLIED (judgment call, not source-document-directed -
  unlike the FEG case study, these documents have no "what not to claim"
  or external-sharing guidance of their own, so I defaulted to the most
  conservative reasonable read given the real client is Honda, a large,
  easily searchable brand, and this looks like unreleased internal
  consulting work):
  - Never named "Honda" or "HALO" anywhere - front matter, body copy,
    filenames (kept the existing "honda-halo.md" filename only because
    Ryan supplied it that way and it's not shipped to the page itself;
    flag if he'd rather rename the file/asset paths too, the same lesson
    as the FEG "feg-image" mistake, before any images are added), CSS
    class (used "facility" instead), or alt text.
  - Did not name the third-party operations partner ("GoKen" in the
    source), any vendor/software names (Titan, Cosworth, Siemens, MTS,
    Jacobs), the facility location (East Liberty, Ohio / TRC), or any
    individual client-side or Callibrity-side names from the source
    (Chris Combs, Tim Savage, Jimmy, Dale, Antonello, Bryce, Kaleb,
    Drew) - all replaced with role-based language ("the operations
    partner," "a Callibrity technical consultant," etc.) or omitted.
  - Deliberately did NOT describe this as a wind tunnel, acoustics test,
    or aerodynamics facility, and did NOT mention IndyCar or racing/
    motorsports anywhere, even though the source document uses all of
    those terms. Wind-tunnel + acoustics + third-party racing clients +
    IndyCar is a specific enough combination that an industry-familiar
    reader could plausibly identify the real facility even without the
    client name. Genericized to "a large vehicle test facility." This
    is a judgment call beyond anything the source documents required -
    flag to Ryan if he'd rather be more specific.
  - Did not claim that any of the three recommended digital products
    were actually built. The source documents are a Discovery-phase
    report and its summary deck; they propose an extended Q2 2024
    engagement and a future build phase, but neither document confirms
    a build happened. Framed outcomes around what was actually
    delivered (the findings report, the recommendation, the proposed
    SOW), not an invented delivery outcome.
  - Kept the "eleven findings / three recommended for build" structure
    and the adapted-NNG-severity-scale detail because both are true,
    specific, and don't identify the client - they're really the most
    distinctive thing about this engagement (UX discovery methodology
    applied somewhere it doesn't normally go).

  Confirmed from the source documents, not inferred: Ryan's exact title
  on this engagement ("Product Consultant") and the engagement dates
  (December 2023 to end of February 2024, phase one).

  Still needs Ryan: "takeaways" and "learnings" are both my drafted
  reconstruction from real details in the report (open questions left
  unresolved, the explicit choice to scope 8 of 11 findings as
  non-software), not lifted from a first-person reflection in the
  source the way FEG's takeaways were - the source documents are written
  in report/deck voice throughout, with no "what we'd do differently" or
  personal-reflection section to draw from. Confirm both fields read
  true to how Ryan actually experienced this engagement before
  promoting further. No images or card assets exist yet for this case
  study - none were invented.
-->
