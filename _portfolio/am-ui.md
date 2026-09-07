---
layout: case-study-template
order: 2
meta: A zero-dependency, AI-ready component library with 44 production components, a live Figma-to-code token bridge, and CI-enforced drift detection.
type: product
title: am-ui
project: am-ui Component Library
client: am-ui
brandclass: am-ui
under:
underurl:
testimonial-topic: am-ui
year: 2026
subtitle: A zero-dependency component library with 44 production components and a live Figma-to-code token bridge
previous-cs-title: Callibrity Product Practice
previous-cs-link: callibrity-product-team
next-cs-title: Bitovi UX Department
next-cs-link: bitovi-ux-department
phases: Discovery, Build
overview: I've been chasing this since I started designing websites in the 1990s&colon; how to get a style guide out of the design tool without it drifting from the code. Twenty-five years of trying different tools and approaches taught me the idea was right long before I had what I needed to actually build it. AtoMagic, a Figma plug-in I built with a developer friend in 2021, got the closest of any of those attempts, proving the idea worked in usability testing, but it never shipped past that proof of concept. am-ui is the version that actually exists, a zero-dependency component library with vanilla HTML and CSS as the source of truth, a 1:1 Figma library, and a token bridge keeping the two in sync.
goals: <ul><li>Give any new project a real, working set of design tool and coded components on day one</li><li>Keep Figma and code from drifting apart by making design tokens the single source of truth for both</li><li>Make every component convertible into React, Vue, or Angular without an army of manual re-implementation, by giving each one a machine-readable spec an AI can convert from reliably</li><li>Meet accessibility and responsive-design basics from the start, then document honestly what's actually been verified versus what hasn't</li></ul>
role: Product Owner, Product Designer, Front-End Developer
scope: One week to build (independent), ongoing maintenance
tools: Figma, Storybook, Playwright, Node.js, HTML, CSS, JavaScript, Claude
approach-pull-quote: The lesson from AtoMagic holds&colon; don't give up on a problem just because the tools aren't ready yet.
problemstatement: Most teams end up choosing a design system or a component library, not both kept in sync. Starting from a design system means either building custom components from scratch in whatever front-end stack the project uses, or finding a component library and fighting its existing CSS to make it align. A handful of tools claim parity between the two at the start, but none I've found keep that connection consistent as a project evolves; the two drift apart within a few sprints because nothing enforces the link. Component libraries that avoid drift usually do it by becoming a shared dependency everyone has to update in lockstep, trading drift for lock-in instead. And most aren't built with a clear path to a specific framework, so adopting one still means a slow, error-prone manual translation.
methods: <ul><li>Defined the token architecture (color in OKLCH, spacing, radius, type scale, elevation) as the single source of truth for both the Figma design system and the coded component library</li><li>Built 23 base components (atoms), 13 compositions (molecules), and 8 larger patterns (organisms), plus page-level templates, so a new page assembles from existing pieces instead of custom one-offs</li><li>Wrote a fixed-schema spec file for every component (variants, sizes, states, props, tokens consumed) as an AI-facing contract, not just documentation</li><li>Built a bidirectional Figma-to-code token bridge (push/pull/watch/check) so a change on either side can be synced instead of manually re-entered</li><li>Documented every component in Storybook with full prop tables, so integrating one doesn't require reading source to find its API</li><li>Wrote and validated a component-by-component conversion workflow into React, including a worked example, so converting to a new framework follows a proven path instead of starting from scratch</li><li>Ran automated first-pass accessibility and responsive audits (Playwright, at 390/768/1280px)</li><li>Set up CI to fail a pull request automatically if Figma and code tokens drift out of sync</li></ul>
process: am-ui ships as a starter copy, deliberately unstyled in a flat gray "wireframe" theme, the same "stay ugly as long as possible" approach I use elsewhere&colon; keep early attention on structure and flow, not color and polish. Because every component is unstyled from day one, a team can build real, coded pages against the library immediately, before any design work is finished, pages that look like wireframes because the components genuinely are wireframes. As the real design comes together, the two sides stay in parity through the token bridge&colon; a developer changes a token in code and Figma picks it up on the next pull, or a product or design person hones a component in Figma and pushes it through, and the coded front end updates to match. Either way, the working front end is already there, filling in visually as the tokens firm up instead of getting rebuilt once the design is finalized. Retheming a project's real brand onto it later is the same one-place change to the token values, not a rebuild.
process-inline-webpimage: am-ui-wireframe-example.webp
process-inline-image: am-ui-wireframe-example.jpg
process-inline-caption: A real, working content page built entirely from am-ui components in the shipped wireframe theme, before any visual design was applied
process-continued: I built the token layer first&colon; color as OKLCH with light/dark modes, spacing, radius, a type scale, elevation, and a border-width scale derived from spacing. Every component was built against those tokens, never a hardcoded value, so the same component looks right in either theme without being touched. From there I worked up through Brad Frost's Atomic Design tiers (atoms, then molecules composed from atoms, then organisms composed from molecules), keeping each component's anatomy consistent so the pattern stays predictable as the library grows.
process-pair-04-05: true
process-webpimage04: am-ui-ds-containers.webp
process-image04: am-ui-ds-containers.jpg
process-caption04: The Alert molecule (with Card, EmptyState, and StatTile) in the Figma design system
process-webpimage05: am-ui-cl-alert.webp
process-image05: am-ui-cl-alert.jpg
process-caption05: The coded Alert component's Storybook docs, matching the Figma side variant-for-variant
process-continued-2: am-ui had to work in any framework, not just vanilla HTML&colon; fighting another framework's own CSS on top of yours is its own kind of pain, so each component splits into layers that convert differently. The CSS itself is framework-agnostic and drops in verbatim, the markup is a mechanical translation, and interactive behavior (modals, dropdowns, tabs, a data table) takes judgment to reimplement in the target framework's idioms. That conversion model is documented as CONVERSION.md and validated against a real React conversion, so the traps a naive AI-driven conversion gets wrong are already known going in, not rediscovered per project.
process-stat-text: The other half of the AtoMagic problem, Figma and code drifting apart, is handled by a token bridge that treats a JSON file as canonical and generates the CSS from it, with push/pull/watch commands to sync either direction and a CI check that fails a build if the two ever disagree.
process-stat-number: 44
process-stat-label: Production components
findings: I ran an automated first-pass accessibility and responsive audit (Playwright, three breakpoints) rather than claiming a compliance standard I hadn't actually verified. The audit passed, but real screen-reader and keyboard-only testing is still outstanding, so I'd rather call it built with accessibility in mind than claim WCAG AA compliance before a human has checked it. That's true of am-ui generally&colon; being built accessible doesn't remove the need for whoever adopts it to do their own accessibility and responsive review before going live, on any project.
processlist: <ul><li>Design Tokens</li><li>Component Architecture</li><li>Figma Library</li><li>Design-to-Code Bridge</li><li>Storybook Documentation</li><li>Accessibility & Responsive Audit</li><li>AI-Assisted Conversion Workflow</li></ul>
solutions: Every visual value in am-ui traces back to one token file, mirrored 1:1 into the Figma library, so a designer and a CI pipeline are checking the same source of truth instead of two that quietly drift apart. The library deliberately targets evergreen browsers (~Baseline 2023), since its color system is authored entirely in OKLCH with color-mix, a real constraint I documented instead of hiding it.
outcomes: <ul><li>Teams start writing real, coded pages on day one instead of waiting on final visual design before any markup exists</li><li>Design and code stay in parity for the life of a project, not just at kickoff, so there's no reconciliation pass to do before shipping</li><li>Product and engineering work from the same token source instead of a handoff that loses fidelity in translation, with drift caught automatically instead of relying on someone noticing</li><li>Moving to React, Vue, or Angular is a known, validated process, not a guessing game re-solved on every project</li><li>Accessibility and responsive basics are true from day one instead of a bolt-on audit pass at the end</li></ul>
achievements: <ul><li>Solved the design-to-code automation problem AtoMagic got closest to, this time building every layer directly</li><li>Documented accessibility honestly as "pending validation" rather than claiming a compliance standard I hadn't verified</li></ul>
takeaways: am-ui is v1.0, not a finished product. It's usable and shareable now, but there's more to learn as I actually build with it, not less. Real screen-reader and keyboard-only testing is the next thing on my list to pressure-test, and I'd rather close that gap for real than claim a compliance standard before a human has checked it.
learnings: What changed wasn't the idea. It was that the tooling finally caught up. Mature CSS (OKLCH, color-mix, :has()) and AI-assisted conversion made it possible for me to design and build every layer of this myself. The lesson from AtoMagic holds&colon; don't give up on a problem just because the tools aren't ready yet.
webpcollection-image: am-ui-hero.webp
collection-image: am-ui-hero.jpg
hero-image-webp: am-ui-hero-natural.webp
hero-image-png: am-ui-hero-natural.jpg
hero-caption: The Colors foundation page from am-ui's real Figma library and design-token system
approach-webpimage01: am-ui-ds-colors.webp
approach-image01: am-ui-ds-colors.jpg
approach-caption01: The Colors foundation page in am-ui's Figma design system
approach-webpimage02: am-ui-cl-colors.webp
approach-image02: am-ui-cl-colors.jpg
approach-caption02: The same Colors tokens documented on the coded component-library side, kept in parity by the token bridge
approach-webpimage03:
approach-image03:
approach-caption03:
approach-pair-04-05: true
approach-webpimage04: am-ui-ds-typography.webp
approach-image04: am-ui-ds-typography.jpg
approach-caption04: The Typography scale in am-ui's Figma design system
approach-webpimage05: am-ui-cl-typography.webp
approach-image05: am-ui-cl-typography.jpg
approach-caption05: The same type scale documented in the coded component library, generated from the same tokens
process-webpimage01:
process-image01:
process-caption01:
process-webpimage02:
process-image02:
process-caption02:
process-webpimage03:
process-image03:
process-caption03:
prototype-orientation: horizontal
prototype-type: image
prototype-webp: am-ui-solution-dashboard-tight.webp
prototype: am-ui-solution-dashboard-tight.jpg
prototype-alt: A dashboard page assembled from am-ui components&colon; stat tiles, tabs, and a status-badge table
---

<!--
  Images added 2026-09-06 (fork task), sourced from two places:
  - Storybook (~/Documents/am-ui/am-ui-main, `npm run storybook`), which
    runs the library's own real _examples stories. Screenshotted 5 of
    the 6 example pages directly from the story iframe (no Storybook
    chrome): dashboard-page, list-page, form-page, kitchen-sink,
    and content-page-2-3-1-3 (the "With Rich Sidebar" variant). The
    6th example (content-page-full-width) was not used, to avoid
    overlapping too closely with the sidebar variant already used.
  - The real am-ui Figma library (figma.com file rCrDuX6zDOoUUWk3bjQwQG,
    node 119:2, "Foundation/Colors" frame) via Figma MCP - a genuine
    screenshot of the live file, not a mockup. Note: this Figma file's
    top-level structure only exposed a single "Foundations" page to the
    MCP tooling, not the separate Atoms/Molecules/Organisms/Templates
    pages the README describes - possibly a permissions/sharing-scope
    limit on this file link, not a claim that those pages don't exist.
    Only the Foundations/Colors frame was used since it was the
    cleanest, most self-contained screenshot available.
  - The collection-image/card (am-ui-hero.jpg/webp, used only for the
    /work/ grid card now - see 2026-09-07 note below for the hero) is
    NOT a UI screenshot - initial attempts to crop a Storybook
    screenshot into the fixed 1500x800 card size clipped the page
    chrome badly. Built as a wordmark card instead, following the same
    convention as every other case study's card (solid brand-color
    background + centered wordmark), using near-black (#18181B) rather
    than inventing a brand hue, since am-ui's own README describes its
    identity as a deliberately grayscale/neutral "wireframe theme" -
    the near-black card is consistent with that, not an arbitrary
    color choice.
  - Left 2 approach and 2 process slots blank rather than force
    duplicate or low-value images into every slot.

  UPDATE 2026-09-07, full prose + hero review pass with Ryan (this
  superseded the "no prose fields were changed" note originally here -
  nearly every field changed):
  - Corrected the AtoMagic backstory throughout (overview, achievements,
    learnings): it was NOT Ryan's first attempt at this problem - he'd
    been circling it since the 1990s, with real tries in 1997, 2002,
    and 2007 per AtoMagic's own retired case study in
    currently-unused/atomagic.md; AtoMagic itself was built with a
    developer friend in 2021 and was the attempt that got closest, not
    "the first try."
  - Rewrote problemstatement twice per Ryan's corrections: first, the
    real problem is teams choosing a design system OR a component
    library and none staying in sync, not "component libraries solving
    drift via shared-dependency lock-in" (a separate, real but distinct
    problem, no longer conflated with drift); second, added a concrete
    line on what "starting from a design system" actually costs
    (building custom components from scratch, or fighting an existing
    library's CSS to align it) - Ryan's own words, not invented.
  - Cut "solo, in about a week" down from five restatements
    (subtitle, meta, overview, outcomes, learnings) to two structural
    ones (subtitle, scope) - Ryan: "it comes off as 'I did this myself
    na-na-na.'" Also cut a comparative/boastful clause in learnings
    ("something that would have taken a team and years even five years
    ago") per the standing no-boastful-framing rule. Overview gained a
    line crediting the real arc instead - 25 years of trying different
    tools and approaches, not solo genius - per Ryan: "thought,
    experience, trial and error, support from others... that all led
    to this once the tooling was available."
  - Rewrote methods/process/findings/solutions/outcomes/achievements/
    takeaways/learnings across several passes to cut restated facts
    (44/23/13/8 components, the CI drift check, and the
    React/Vue/Angular conversion path were each stated 3-4 times
    across solutions/outcomes/achievements before trimming) and to
    replace pure action-log sentences ("I did X") with what each
    decision actually buys the reader or a project that adopts am-ui.
  - process's opening paragraph was rewritten twice: the first version
    still framed "ships as a starter copy, not a shared dependency" as
    if it were a notable decision - Ryan: "that is how all component
    libraries and design systems work, this is not revolutionary."
    Cut that framing and replaced it with the actual distinctive
    content, which had been missing entirely: shipping unstyled from
    day one means a team can build real coded pages against the
    library before any design work is finished, and as the real design
    comes together, changes can happen from either side (a dev edits a
    token in code and Figma picks it up on next pull, or a
    product/design person hones a component in Figma and pushes it)
    and the coded front end updates to match either way - all from
    Ryan directly, not inferred.
  - findings reframed per Ryan: dropped a quoted internal-doc phrase
    ("why are we even saying this?") and repositioned the accessibility
    caveat as a general truth about adopting am-ui (any project still
    needs its own accessibility/responsive review), not just a
    statement about am-ui's current unvalidated state.
  - takeaways dropped a "if I did this again, I'd build screen-reader
    testing in from day one" hindsight claim Ryan said wasn't honestly
    true (am-ui is v1.0, ongoing, not a closed retrospective) and
    replaced it with present-tense framing instead.
  - Fixed a grammar slip in solutions ("documented rather than hid" ->
    "documented instead of hiding it").
  - Hero image replaced: was the same wordmark card as collection-image;
    is now the real am-ui Figma "Colors" token screenshot (source:
    Ryan's own ~/Desktop/Foundation/amui-colors.png, RGBA with a
    transparent background), shown at its natural crop (NOT padded
    onto a wide manufactured canvas - an earlier attempt at that was
    corrected per Ryan: "why is the hero image so wide?"). The
    .am-ui .case-study hero section background was changed to #FAFAFA
    (was #18181B) in case-brand.css so the image's real alpha channel
    drops onto it with no visible seam - h1/byline/subtitle text color
    overridden to #18181B there too, since they default to white
    sitewide and would otherwise be invisible on the light background.
    Collection-image (work-page card) intentionally left unchanged,
    still the near-black wordmark card described above.

  Deferred, not an open bug: hero-image and approach-image01 are
  currently the same underlying Figma "Colors" screenshot (different
  crop/treatment). Ryan: "we are not at the image placement or
  addition in this process yet... we will get there soon after the
  copy is solid" - revisit once the prose pass is done, not before.
-->

