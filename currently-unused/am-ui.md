---
layout: case-study-template
order: 2
meta: Ryan Wilson has worked on many client projects. This case study is an example of some of the excellent product design work he could do on your project.
type: product
title: am-ui
project: am-ui Component Library
client: am-ui
brandclass: am-ui
under:
underurl:
testimonial-topic:
year: 2026
subtitle: A zero-dependency, AI-ready component seed with 44 production components, built solo in about a week
previous-cs-title: Callibrity Product Team
previous-cs-link: callibrity-product-team
next-cs-title: Bitovi UX Department
next-cs-link: bitovi-ux-department
phases: Discovery, Build
overview: In the late 1990s I started designing websites, and I've wanted to solve the same problem ever since&colon; get a style guide out of the design tool and keep it from drifting away from the code the moment a project gets busy. I tried to solve this a few years ago with AtoMagic, a Figma plug-in I built with a developer friend that automated a living HTML/CSS style guide. AtoMagic proved the idea worked in testing, but it never shipped past that proof of concept.<br><br>am-ui is the version of that same idea that actually exists. It's a zero-dependency, framework-free component library, with vanilla HTML and CSS as the source of truth, a 1:1 Figma library, and a token bridge that keeps the two in sync. This time I designed and built every layer of it myself, alone, in about a week.
goals: <ul><li>Give any new project a real, working set of components on day one instead of a week of rebuilding buttons and inputs</li><li>Keep Figma and code from drifting apart by making design tokens the single source of truth for both</li><li>Make every component convertible into React, Vue, or Angular without an army of manual re-implementation, by giving each one a machine-readable spec an AI can convert from reliably</li><li>Build it accessibly and responsively by default, and be honest in the documentation about what's actually been verified versus what hasn't</li></ul>
role: Product Owner, Product Designer, Front-End Developer
scope: One week to build (solo), ongoing maintenance
tools: Figma, Storybook, Playwright, Node.js, HTML, CSS, JavaScript, Claude
problemstatement: Every new product starts by rebuilding the same twenty components, and the design system that describes them almost always drifts out of sync with the code within a few sprints because nothing enforces the connection. Most component libraries solve this by becoming a shared dependency everyone has to update in lockstep, which trades one problem (drift) for another (lock-in). And most aren't built with a clear path to a specific framework, so adopting one still means a slow, error-prone manual translation.
methods: <ul><li>Defined the token architecture (color in OKLCH, spacing, radius, type scale, elevation) as the single source of truth for both Figma and code</li><li>Built 23 base components (atoms), 13 compositions (molecules), and 8 larger patterns (organisms), plus page-level templates</li><li>Wrote a fixed-schema spec file for every component (variants, sizes, states, props, tokens consumed) as an AI-facing contract, not just documentation</li><li>Built a bidirectional Figma-to-code token bridge (push/pull/watch/check) so a change on either side can be synced instead of manually re-entered</li><li>Documented every component in Storybook with full prop tables</li><li>Wrote and validated a component-by-component conversion workflow into React, including a worked example</li><li>Ran automated first-pass accessibility and responsive audits (Playwright, at 390/768/1280px)</li><li>Set up CI to fail a pull request automatically if Figma and code tokens drift out of sync</li></ul>
process: I designed am-ui as a seed, not a shared library, so a project takes its own copy and makes it theirs, rather than pulling from a central dependency that updates out from under it. That one decision shaped everything else&colon; because nobody has to ask permission to change their copy, the library could ship deliberately unstyled, in a flat gray "wireframe" theme, on purpose. Staying ugly keeps early attention on structure and flow instead of color and polish; the moment a project has a real brand or design system, retheming is a one-place change to the token values, not a rebuild.<br><br>I built the token layer first&colon; color as OKLCH with light/dark modes, spacing, radius, a type scale, elevation, and a border-width scale derived from spacing. Every component was built against those tokens, never a hardcoded value, so the same component looks right in either theme without being touched. From there I worked up through the three tiers (atoms, then molecules composed from atoms, then organisms composed from molecules), keeping each component's anatomy consistent so the pattern stays predictable as the library grows.<br><br>Because I wanted am-ui to be usable in any framework, not just vanilla HTML, I split each component into layers that convert differently&colon; the CSS is framework-agnostic and drops in verbatim, the markup is a mechanical translation, and interactive behavior (modals, dropdowns, tabs, a data table) has to be judgment-reimplemented in the target framework's idioms. I wrote that conversion model down as CONVERSION.md and validated it against a real React conversion, catching the traps a naive AI-driven conversion gets wrong along the way.<br><br>The other half of the AtoMagic problem, Figma and code drifting apart, I solved with a token bridge that treats a JSON file as canonical and generates the CSS from it, with push/pull/watch commands to sync either direction and a CI check that fails a build if the two disagree.
findings: I ran an automated first-pass accessibility and responsive audit (Playwright, three breakpoints) rather than claiming a compliance standard I hadn't actually verified. The audit passed, but I was explicit in the documentation that "built for accessibility, pending AT validation" is the accurate claim today. Real screen-reader and keyboard-only testing is still outstanding, and I'd rather say that than overstate WCAG AA compliance before it's been checked by a human.
processlist: <ul><li>Design Tokens</li><li>Component Architecture</li><li>Figma Library</li><li>Design-to-Code Bridge</li><li>Storybook Documentation</li><li>Accessibility & Responsive Audit</li><li>AI-Assisted Conversion Workflow</li></ul>
solutions: am-ui shipped as 44 components (23 atoms, 13 molecules, 8 organisms) plus app-shell and page-layout templates, all driven by one token file and mirrored 1:1 in a Figma library with matching variants, sizes, states, and property names. A CI check fails automatically if the two ever drift apart. The library targets evergreen browsers (~Baseline 2023) deliberately, since the color system is authored entirely in OKLCH with color-mix, a real constraint I documented rather than hid.
outcomes: <ul><li>44 production-ready components (23 atoms, 13 molecules, 8 organisms) plus templates, built and documented solo in about a week</li><li>A complete design-token system with light/dark theming, mirrored 1:1 between Figma and code</li><li>A CI-enforced check that catches design/code token drift automatically instead of relying on someone noticing</li><li>A validated, documented conversion path from vanilla HTML/CSS into React (and by the same method, Vue or Angular), proven against a real conversion</li><li>Full Storybook documentation with props, variants, and states for every component</li></ul>
achievements: <ul><li>Solved, on my own, the design-to-code automation problem I first went after with AtoMagic, this time without needing a developer partner to build it</li><li>Built a Figma-to-code bridge that's enforced in CI, not just a one-time export</li><li>Gave every component a machine-readable spec so it can be reliably converted to React, Vue, or Angular with AI assistance instead of manual re-implementation</li><li>Documented accessibility honestly as "pending AT validation" rather than claiming a compliance standard I hadn't verified</li></ul>
takeaways: If I did this again, I'd build the real screen-reader and keyboard-only testing pass in from day one instead of treating it as the next phase. An automated audit is a reasonable first pass, but the accurate claim right now is "built for accessibility, pending AT validation," not WCAG AA compliance, and I'd rather close that gap before calling the library done than after.
learnings: This is the same problem I first tried to solve with AtoMagic, and the same one I'd been circling since I started writing HTML and CSS in the late 1990s. What changed wasn't the idea. It was that the tooling finally caught up to it. Mature CSS (OKLCH, color-mix, :has()) and AI-assisted conversion made it possible for me to design and build every layer of this myself, solo, in about a week, something that would have taken a team and years even five years ago. The lesson from AtoMagic holds&colon; don't give up on a problem just because the tools aren't ready yet.
webpcollection-image: am-ui-hero.webp
collection-image: am-ui-hero.jpg
hero-image-webp: am-ui-hero.webp
hero-image-png: am-ui-hero.jpg
hero-caption: am-ui
approach-webpimage01: am-ui-figma-tokens.webp
approach-image01: am-ui-figma-tokens.jpg
approach-caption01: The Foundations page in the real am-ui Figma library&colon; color, type, spacing, radius, elevation, and border tokens, mirrored 1-to-1 into tokens.css
approach-webpimage02: am-ui-dashboard-template.webp
approach-image02: am-ui-dashboard-template.jpg
approach-caption02: The dashboard-page example, assembled entirely from am-ui organisms and molecules in the shipped wireframe theme
approach-webpimage03: am-ui-kitchen-sink.webp
approach-image03: am-ui-kitchen-sink.jpg
approach-caption03: A kitchen-sink page showing badges, avatars, progress, notifications, and other atoms and molecules side by side
approach-webpimage04:
approach-image04:
approach-caption04:
approach-webpimage05:
approach-image05:
approach-caption05:
process-webpimage01: am-ui-list-page-template.webp
process-image01: am-ui-list-page-template.jpg
process-caption01: The list-page example, a searchable, paginated project list composed from the library's table and pagination patterns
process-webpimage02: am-ui-form-page-template.webp
process-image02: am-ui-form-page-template.jpg
process-caption02: The form-page example, a settings form built from am-ui's form-field, input, and toggle components
process-webpimage03: am-ui-content-sidebar-template.webp
process-image03: am-ui-content-sidebar-template.jpg
process-caption03: A two-column content page with a rich sidebar, showing the library's typography and card patterns together
process-webpimage04:
process-image04:
process-caption04:
process-webpimage05:
process-image05:
process-caption05:
prototype-orientation: horizontal
prototype-type:
prototype-webp:
prototype:
prototype-alt:
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
  - The hero/card image (am-ui-hero) is NOT a UI screenshot - initial
    attempts to crop a Storybook screenshot into the fixed 1500x800 card
    size clipped the page chrome badly. Rebuilt as a wordmark card
    instead, following the same convention as every other case study's
    card (solid brand-color background + centered wordmark), using
    near-black (#18181B) rather than inventing a brand hue, since
    am-ui's own README describes its identity as a deliberately
    grayscale/neutral "wireframe theme" - the near-black card is
    consistent with that, not an arbitrary color choice.
  - Left 2 approach and 2 process slots blank rather than force
    duplicate or low-value images into every slot.
  - No prose fields were changed - README.md, USAGE.md, and
    CONVERSION.md were all read and confirmed consistent with what was
    already written; nothing needed correcting or adding.
-->

