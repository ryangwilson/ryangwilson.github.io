---
layout: case-study-template
order: 5
meta: Ryan Wilson has worked on many client projects. This case study is an example of some of the excellent product design work he could do on your project.
type: product
title: CHIRP Radio
project: CHIRP Radio
client: CHIRP Radio
brandclass: chirp
under:
underurl:
testimonial-topic: chirp
year: 2026
subtitle: Modernizing 16 years of a listener-run station's website and mobile apps, with nobody left to maintain it after launch
previous-cs-title: A Client Portal in 13 Weeks
previous-cs-link: anonymous-client-portal
next-cs-title: A Modernization Roadmap for a Legacy Insurance Platform
next-cs-link: insurance-platform-roadmap
phases: Discovery, Product & Technical Leadership, Migration
overview: CHIRP Radio is 107.1 FM in Chicago, an independent, listener-supported station run almost entirely by volunteers. Its website and mobile apps hadn't been meaningfully rebuilt in more than a decade, and I led the full modernization&colon; a new website, a new CMS, and new iOS and Android apps, all replacing a legacy ExpressionEngine site that had outgrown what it was ever built to do.
goals: <ul><li>Give CHIRP's volunteer team a CMS they can run entirely on their own, since Callibrity's support ends at launch</li><li>Unify a website and two mobile apps that had never shared a design or a database</li><li>Carry 16 years of CHIRP's content forward without losing any of it</li></ul>
role: Product Lead and Technical Lead
scope: Website (React), CMS (Payload, Postgres), and iOS/Android apps (Capacitor, including CarPlay and Android Auto), plus migrating 16 years of content off the legacy ExpressionEngine site
tools: Figma, React, Payload CMS, Postgres, Capacitor, Google Cloud Run, Cloudflare Pages, Claude
problemstatement: The website and apps had never shared a unified design, performance and usability both needed real work, and the platform had grown past what its original implementation could support. Underneath that, a harder constraint&colon; CHIRP is a volunteer nonprofit, and once this launches, there's no Callibrity developer on call to fix anything. Every feature has to be something a non-technical volunteer can run themselves, not a "put in a ticket and a developer will add it" workflow.
methods: <ul><li>Ran discovery directly with CHIRP's volunteer team, including usability testing to find where the existing tools were actually breaking down for them</li><li>Designed a unified data model connecting the website and both mobile apps for the first time, so a song saved to a listener's collection or a light/dark mode preference follows them across every device</li><li>Personally designed and built the production React front end, the same AI-assisted, component-driven approach I used at FEG, though over a much longer build timeline suited to a volunteer nonprofit's pace instead of a compressed sprint</li><li>Treated tickets from individual volunteers as their own input, not settled team consensus, and confirmed scope with the broader team before non-trivial work</li><li>Made deliberate self-service calls over technically "more correct" ones where they'd otherwise require a developer after launch</li></ul>
process: I worked directly with CHIRP's team to find out where their volunteers were actually getting stuck, not just what they were asking for. Individual requests didn't always reflect what the wider team had agreed to, so before building anything non-trivial I checked it against the group, which caught more than one ticket that would have shipped the wrong thing. The CMS self-service constraint shaped real decisions, not just talking points&colon; when the CMS and the frontend disagreed on how to render an event's time zone, I left it as-is once I confirmed every CHIRP editor works from Chicago, rather than building a heavier fix nobody needed. When a chart's display date was showing the wrong week, I traced it to the field being used to derive the header and fixed the source instead of patching the symptom.
findings:
processlist: <ul><li>Volunteer Discovery & Usability Testing</li><li>Unified Data Model</li><li>Self-Service CMS Design</li><li>Content Migration</li></ul>
solutions: The new site and apps share one Payload CMS on top of Postgres, so CHIRP's team edits content once and it's correct everywhere, on the website and on both mobile apps. A single audio service now owns playback across the apps instead of every surface managing its own player, which had been the source of recurring CarPlay bugs. All 16 years of CHIRP's content moved over from the old ExpressionEngine database, and checkout moved off PayPal onto Stripe. None of it depends on a developer being available after launch to keep working.
outcomes: <ul><li>Launched a unified website, CMS, and iOS/Android apps replacing a system unchanged for over a decade</li><li>Migrated 16 years of content with nothing lost</li><li>Built the CMS so CHIRP's volunteer team operates it with zero developer support after launch</li></ul>
achievements: <ul><li>Led product and technical direction for a from-scratch rebuild of a nonprofit's entire digital presence</li><li>Designed the shared data model that finally connected CHIRP's website and mobile apps</li><li>Kept the no-developer-after-launch constraint central to every scoping decision, not just a line in the brief</li></ul> <q>The compliments keep rolling in! Everyone is super impressed and pleased! Thanks to Ryan and Callibrity for building such cool tools for us!</q> <cite>&#8211; Shawn Campbell, Founder &amp; General Manager, CHIRP Radio</cite>
takeaways: "[NEEDS RYAN: your own retrospective here - what would you do differently, now that it's shipped]"
learnings: I'd been a CHIRP listener for 16 years before I ever worked on their site, and that mattered more than I expected&colon; caring about the station going in made it easier to hold the line on the self-service constraint even when a quicker, developer-dependent fix was tempting. The real lesson was designing for a team that won't have me around to fix anything, which meant every decision had to survive without me in the room.
webpcollection-image: chirp-logo.webp
collection-image: chirp-logo.jpg
hero-image-webp: chirp-logo.webp
hero-image-png: chirp-logo.jpg
hero-caption: CHIRP Radio, 107.1 FM Chicago
prototype-orientation: horizontal
prototype-type:
prototype-webp:
prototype:
prototype-alt:
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

  Still needs Ryan:
  - takeaways (his own "what would I do differently")
  - confirm the CHIRP brand red used for the card (#C8102E) - it's
    visually estimated from a screenshot Ryan shared, not sampled from
    an official brand asset. The logo geometry itself IS the real,
    official CHIRP horizontal lockup, found at
    "/Volumes/FILE BACKUP/CALLIBRITY/CHIRP/CHIRP BUILD STUFF/
    CHIRP_Logo_FM URL_horizontal.svg" (a React/JSX export using
    className="cls-1" rather than inline fill, so no color came with
    it - only the path geometry was reused, recolored white for this
    card).
  - confirm launch actually happened / is complete before publishing,
    and whether to add the live launch date once confirmed.
-->
