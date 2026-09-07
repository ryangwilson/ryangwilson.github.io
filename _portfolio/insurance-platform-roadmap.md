---
layout: case-study-template
order: 6
meta: Ryan Wilson has worked on many client projects. This case study is an example of some of the excellent product design work he could do on your project.
type: product
title: Legacy System Modernization
project: Legacy System Modernization
client: Confidential Insurance Company
brandclass: ledger
under:
underurl:
testimonial-topic:
year: 2025
subtitle: An eight-week discovery engagement that turned an aggressive one-year deadline into a phased, six-release roadmap
previous-cs-title: CHIRP Radio
previous-cs-link: chirp-radio
next-cs-title: Product & Problem Discovery
next-cs-link: vehicle-test-floor-discovery
phases: Discovery, Architecture Strategy, Roadmapping
overview: The client is a large, established insurance company running a legacy underwriting and new-business platform that had grown well past what its original design could support. The business had already committed to an aggressive goal, functional parity with the legacy system within one year, before the discovery engagement even started. I worked as a product consultant on the discovery team that assessed the current system, defined a future-state product vision, and produced a phased roadmap and team structure built specifically to de-risk that deadline.
goals: <ul><li>Understand the current workflows and pain points of underwriters, case workers, and new business associates</li><li>Document the legacy platform's architecture, risks, and inefficiencies</li><li>Define product flows and requirements for a modernized experience</li><li>Recommend a future-state architecture aligned with modern engineering practices</li><li>Provide a roadmap and team structure to support a one-year parity deadline</li></ul>
role: Product Consultant
scope: An eight-week discovery engagement for a client already committed to a one-year deadline to reach functional parity with its legacy platform
tools: Figma, .NET Core, Drools, Next.js, Kafka, MongoDB, Storybook
problemstatement: The legacy platform underpinning underwriting and new-business processing had outgrown its original design. Underwriters and new business associates worked across multiple disconnected screens with heavy manual data entry and fragmented communication tools. Managers had no way to see real-time completion rates or distribute work beyond one assignment at a time. The team supporting the platform was constrained by a monolithic architecture, fragile integrations, and release cycles of one to three months, all while the business had already committed to a near-term deadline to reach parity with the system it was replacing.
methods: <ul><li>Conducted stakeholder interviews and user observations across underwriting, case management, and new business roles</li><li>Reviewed the legacy platform's interface flows, process flows, and data ingestion patterns</li><li>Mapped current-state workflows in narrative and visual form to surface bottlenecks and pain points</li><li>Facilitated workshops to validate findings and align stakeholders on priorities</li><li>Assessed the current technical architecture, release cycles, QA process, and dependencies</li><li>Drafted a future-state roadmap, product flows, and supporting wireframes</li></ul>
process: Interviews and shadowing sessions surfaced a workflow that looked linear on paper but wasn't in practice. One underwriter described it plainly&colon; "Then I go to this window, and scroll down to this section to check this, then I scroll back up to type it out in the communication area..." Multiple windows open at once, unpredictable field order, and irrelevant content bleeding across roles (associates seeing underwriting-only data, some of it data they weren't permitted to view) were consistent themes across nearly every underwriter and new business associate we talked to, not isolated complaints.<br><br>That consistency is what drove the biggest decision in the engagement&colon; consolidate each role's work into a single, role-specific view instead of incrementally patching the existing one, and pair that redesign with a phased, dual-running architecture so the legacy and new systems could operate side by side rather than forcing a single high-risk cutover.
findings: Every user group described a version of the same problem from a different angle. Underwriters manually reconciled data that should have already been populated from upstream files. Team leads had no streamlined way to assign work or see completion rates across their team. IT and support teams were boxed in by a monolithic deployment model and a release cycle too slow to keep pace with the business. And at every level, there was no reliable audit trail of who changed what on an application after submission, a real gap in a regulated underwriting process.
processlist: <ul><li>Stakeholder Interviews</li><li>Workflow Mapping</li><li>Technical Assessment</li><li>Future-State Wireframes</li><li>Roadmap & Team Structure</li><li>Risk & Dependency Mapping</li></ul>
solutions: The future-state design consolidates each role into a single view&colon; an underwriting one-stop shop for capturing requirements and applying rules, a centralized communications hub replacing scattered notes and hand-offs, a redesigned notification and task-assignment system, and a searchable applications queue. Behind it, the proposed architecture moves the platform to a cloud-native, event-driven model in phases&colon; a modern rules engine to replace more than 130 Excel-based rule tables, an event backbone to keep the legacy and new systems synchronized during a gradual cutover, and a shared component library so every team builds against one design system instead of several.
outcomes: <ul><li>A six-phase roadmap sequencing delivery from an underwriting one-stop shop through full new-business and rules-engine parity</li><li>A target architecture proposal and full architectural decision record covering nine major technology decisions, each with alternatives considered and risk noted</li><li>A team structure recommendation for six parallel workstreams, including a dedicated team built specifically to unblock cross-team dependencies</li><li>A documented rules inventory and dependency map the client's teams could act on starting the following sprint</li></ul>
achievements: <ul><li>Turned an already-committed, aggressive one-year deadline into a phased, de-risked roadmap instead of a single high-risk cutover</li><li>Documented every architectural decision with its risks and rejected alternatives, so engineering could move without relitigating choices already made</li><li>Recommended a delivery model, including a dedicated team built to unblock dependencies, designed specifically around the timeline risk the client was already carrying</li><li>Anchored every future-state recommendation in direct observation of underwriters and new business associates doing the actual work, not assumptions about it</li></ul>
takeaways: The mitigation we leaned on hardest was keeping product a sprint ahead of engineering, so nothing gets built before it has been validated with the people who will use it. On a program with this many parallel teams and this tight a deadline, the real risk wasn't getting the direction wrong, the findings were consistent enough across every user group for that. It was letting engineering outrun validation once several teams were moving at once.
learnings: This engagement reinforced something I build into every discovery effort now&colon; a roadmap is only as trustworthy as the risks and unknowns documented next to it. Naming what we didn't know yet, the rules inventory, the legacy integration behavior, the authentication decisions still to be made, was as valuable to the client as the recommendations themselves, because it gave them a real list to close instead of a false sense that discovery had answered everything.
webpcollection-image:
collection-image:
hero-image-webp:
hero-image-png:
hero-caption:
prototype-orientation: horizontal
prototype-type:
prototype-webp:
prototype:
prototype-alt:
---

<!--
  DRAFT, not ready to promote further than the _portfolio/ preview copy.
  Built 2026-09-06 (fork task) from a real internal Callibrity discovery
  report Ryan pointed to (external drive, not in this repo):
  "/Volumes/FILE BACKUP/CALLIBRITY/CALLIBRITY-DISCOVERY-REPORT/LASer
  Discovery - Final Report.pdf" (55 pages, text-extracted via pypdf since
  no PDF-rendering tool was available locally; appendix pages with only
  diagrams/wireframes/no extractable text were not reviewed as images).

  SANITIZATION APPLIED (this document had no "what not to claim" section
  of its own, unlike the FEG source doc, so these are my own judgment
  calls, treated as confidential-by-default per Ryan's instruction):
  - Real client name "Western & Southern Financial Group" / "Lafayette
    Life" NEVER used. Set client to "Confidential Insurance Company."
  - The platform's real internal name "LASer," and related legacy
    system/module codenames used in the source doc ("NEUWS," "iNB,"
    "NOLAS"), are never used anywhere in this file. The original
    placeholder filename was "laser-discovery.md," which coincidentally
    (or not - Ryan's own placeholder name, not this draft's choice)
    echoed the real platform codename, the same de-anonymization risk
    caught on the FEG case study's "feg-image" filename. Renamed to
    "insurance-platform-roadmap.md" and set `brandclass: ledger`
    (generic, not derived from any real term in the source) as a
    follow-up fix after this draft was first written. No CSS block
    exists yet for `.ledger` in case-brand.css - still needs one added,
    and no card/logo image exists, which is normal since this client
    has no logo we could ever use anyway.
  - Dropped the client's own name for its 2030 transformation initiative
    and any specific enterprise-standard names (its design system name,
    its SSO provider, its CMS vendor) that the source doc mentioned only
    once or twice - specific enough in combination with the industry and
    platform behavior described here that they'd be identifying without
    adding anything the case study needs.
  - Kept concrete technology names that are common across the industry
    and don't identify a single company (.NET Core, Drools, Next.js,
    Kafka, MongoDB, Storybook, Figma) - same level of specificity FEG's
    case study used for its own tools field.
  - Kept the one direct, unattributed user quote from the source
    document ("Then I go to this window...") - it's attributed only to
    an unnamed underwriter in the source, already safely anonymous.
  - No named individuals anywhere (source doc is written in company
    voice - "Callibrity recommends," "the discovery surfaced" - and
    never names client-side people by name, only by role).
  - No specific rule-table count beyond "130+," no specific legacy
    release-cycle vendor/tool names, no licensing/cost figures (a
    commercial rules-engine alternative's $5k-10k/month price was
    mentioned in the source's architecture decision record purely as a
    reason it was rejected - not used here, not relevant to the case
    study and unnecessary financial detail about a third-party vendor).

  UNCONFIRMED, NEEDS RYAN:
  - Ryan's specific role. The source document never names him - it's
    written entirely in company/Callibrity voice. It does reference
    "Product Consultants" (plural) as a role that existed on this
    engagement, and recommends they "work alongside developers... stay
    at least one sprint ahead of the build team." I used "Product
    Consultant" for the role field as the most defensible inference,
    consistent with his confirmed role on the FEG engagement around the
    same period, but this needs Ryan's direct confirmation, not a
    guess held over from a different case study.
  - "learnings" is my own synthesis of a theme in the document (naming
    unknowns/risks explicitly), not Ryan's actual first-person
    reflection - there's no source material to draw a real one from,
    same gap as FEG's case study had before Ryan filled it in himself.
    Needs Ryan's real voice before this is anything but a placeholder.
  - Whether "LASer" as a term is safe to reference even generically
    (e.g. calling it "the LASer platform" instead of "the legacy
    platform") - I defaulted to fully generic since I have no way to
    judge how identifying that specific term is without knowing if it's
    publicly searchable in connection with the real client. Ryan should
    confirm or correct this.
  - No images exist for this case study yet (same status as the Honda
    HALO and original blank placeholders) - hero/collection image
    fields left blank rather than invented.
-->
