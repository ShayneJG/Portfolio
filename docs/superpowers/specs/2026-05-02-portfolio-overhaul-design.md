# Portfolio Overhaul — Design Spec

**Date:** 2026-05-02
**Status:** Design approved (brainstorming complete; awaiting implementation plan)
**Owner:** Shayne Geilman
**Repo:** `ShayneJG/Portfolio`
**Live URL (unchanged):** `https://ShayneJG.github.io/Portfolio/`

## 1. Problem & Motivation

The current portfolio sells the owner short. Its content was written when he was a self-taught beginner with five Frontendmentor-style toy projects ("1 year experience", "5 projects completed", "starting my career"). In the time since, the owner has:

- Completed a Postgraduate Diploma in IT (Software Engineering), UNE, GPA 6.88 (2025)
- Worked ~6 months at a Perth-based capital management firm building production data pipelines, LLM-powered PDF extraction (Anthropic Batch API), and a Next.js 16 / React 19 / Supabase analytics frontend
- Reviewed LLM-generated code professionally at Data Annotation Tech (2023–present)
- Shipped personal infrastructure (a self-hosted home dashboard on Proxmox + RPi)

The owner's current 6-month contract ends in ~3 weeks. The portfolio's primary purpose for the foreseeable future is **job-hunting** — specifically for agentic-coding-adjacent roles similar to the current one. A secondary purpose is **long-term professional credibility** as a stable canonical "this is who I am" page.

The existing portfolio is incompatible with both purposes. The narrative is wrong. The technology stack on display is wrong (basic React + Tailwind icons grid). The visual treatment is generic ("dark with neon green", from a CC-licensed Figma template). The project list is irrelevant. There is no work-grade evidence visible, and no mechanism for surfacing the work that exists.

This spec describes a complete overhaul: new content, new visual language, new architecture, new hosting workflow.

## 2. Audience & Positioning

### Primary audience

Hiring managers and recruiters at companies hiring for **agentic-coding-adjacent engineering roles** — i.e. roles where engineers ship production work with significant LLM/agent involvement. This is a specific niche, not "frontend developer" or "general full-stack". Tailoring decisions follow this niche.

### Positioning

**A + B combined: "Thoughtful engineer specialising in production data + LLM systems"**

- **A — The Polymath Engineer:** trades on the unusual trajectory (Philosophy BA → 2,000 manuscripts edited at MDPI → Postgrad IT → engineering). The differentiator is *thinking and communication* layered on engineering chops.
- **B — The Data + LLM Specialist:** trades on the recent production work (market data pipelines, Anthropic Batch extraction, analytics frontends). The differentiator is *current production data + AI work*.

The combination is coherent rather than two angles glued together: the editorial / ambiguity-reading skills carry directly into prompt craft and structured output design; the philosophy training carries directly into pipeline / systems thinking. The polymath stack is the operating model, not decoration.

### Implications for the work

- Visual language is editorial (literary, content-first) rather than technical-flashy. Reads as "engineer who writes."
- Content depth matters more than visual flair. Case studies and writing carry the most weight.
- The blog is framed as an editorial project with a thesis (see §8), not a chronological dev log.

## 3. Constraints

### Privacy / NDA

- **Work code is not showable.** The Altare-related repos belong to a colleague's GitHub account (`uePEL1nx`), not the owner. Showcasing them is not the owner's call.
- **Altare Capital is not named publicly.** All work case studies are anonymised as "a Perth-based capital management firm" or similar. NDA-safe content only: domain, architecture, generic stack, approximate scale, the owner's specific contribution, original diagrams. No internal product names, no customer data, no exact financial metrics, no verbatim code, no real screenshots.
- **No CV/resume on the site.** The owner's full personal details (name, phone, email, address) are not published. The resume is used to inform writing of the About narrative and case studies but not exposed as a downloadable artefact. LinkedIn handles the role of "shareable detailed CV".
- **No phone, no direct email exposed.** Contact happens through a form (Formspree-backed). GitHub and LinkedIn are the only direct external links, and both are already public via the resume.
- **Insurance:** case study drafts get reviewed by the owner's manager before publication.

### Technical

- Deployment stays on **GitHub Pages**, project page form (`ShayneJG.github.io/Portfolio/`). No custom domain in v1. Base path `/Portfolio/` must be configured into Astro.
- **Astro is new** for the owner. First 1–2 evenings will be slower than later phases.
- The existing portfolio code must be **preserved but never publicly accessible** during or after the migration.
- The existing **Formspree endpoint** (`mrgvlapv`) is kept; only the surrounding form is restyled.

### Identity

- **Canonical GitHub handle: `ShayneJG`** (per resume). The work-repo handle (`uePEL1nx`) is a colleague, not the owner.

## 4. Architecture & Stack

### Framework: Astro 5.x

- Static-site output. React islands available for any interactive component, but the default is zero JS to the client.
- `.md` / `.mdx` for all case studies and blog posts, with frontmatter for metadata.
- Image optimisation via `<Image>` for case study diagrams.
- Self-hosted typography via `@fontsource/*` packages — no Google Fonts CDN runtime dependency.

### Why Astro (vs. Next.js, Vite, plain HTML)

- Content-first authoring ergonomics matter more than runtime interactivity here.
- ~0 KB JS shipped by default fits the editorial aesthetic (fast, content-dense, no SPA chrome).
- The owner's work repo (`resource-explorer`) is Next.js — the portfolio benefits from being *different* technology than what's already shown in case studies. (Reading: "I'm comfortable across the modern static-site spectrum.")
- Gentle ramp-up from existing Vite/React knowledge.

### Hosting

- GitHub Pages, project page (`ShayneJG.github.io/Portfolio/`)
- Build path: `/Portfolio/` (`base: '/Portfolio/'` in `astro.config.mjs`)
- Deploy: GitHub Actions on push to `main` → builds → deploys `dist/` to `gh-pages` branch
- Replaces the existing `gh-pages` npm package + `npm run deploy` flow

### Repo strategy

```
ShayneJG/Portfolio
├── archive/v1            ← branch: snapshot of current pre-overhaul portfolio
└── main                  ← rewritten as Astro site
```

- `archive/v1` preserves the old code for posterity. It is **not deployed**, **not linked from the new site**, and **not publicly accessible** at any URL.
- `main` is wiped (excluding `.git`) and re-initialised as the new Astro project.
- Re-exposing the v1 site is a deliberate later decision, not the default.

### Integrations

- `@astrojs/sitemap` — `/sitemap-index.xml`
- `@astrojs/rss` — `/writing/rss.xml`
- `@astrojs/mdx` — for case studies and writing posts
- **Analytics: GoatCounter** — privacy-respecting, no cookies, no consent banner needed, free tier

## 5. Sitemap & Navigation

### Top-level routes (4 nav items)

```
/                Home — Editorial Lead composition
/about           Long-form polymath narrative
/work            Index of case studies + projects
/writing         Blog index — framed as editorial project
```

### Nested routes

```
/work/asx-pipeline                  Lead case study (Altare, anonymised)
/work/analytics-frontend            Secondary case study (Altare, anonymised)
/work/ha-dash                       Personal project case study
/writing/[slug]                     Individual posts
/contact                            Form-only; reachable via footer link, not in nav
/404                                Editorial 404
```

Note: Manuscript Manager appears as an entry on the `/work` index (and the home-page More Work block), but has no `/work/manuscript-manager` page — its `Read →` link goes directly to the existing GitHub repo. Same pattern for any future external-only listing.

### Header (every page)

- Left: `Shayne Geilman` (Inter 500, small caps, links to `/`)
- Right: `About · Work · Writing` (Inter 500, uppercase, letterspaced)
- Active route gets an underline / em-dash prefix
- No logo mark — name as wordmark

### Footer (every page)

- Left: `Get in touch →` (links to `/contact`)
- Centre: `© 2026 Shayne Geilman`
- Right: `GitHub · LinkedIn` (text links, no icons)
- No phone, no email visible
- RSS link on `/writing` only

## 6. Visual System

### Typography

| Role | Family | Weight | Size (desktop / mobile) | Line height |
|---|---|---|---|---|
| Display (page titles) | Spectral | 500 | 56 / 40 | 1.05 |
| H1 (hero name, case study title) | Spectral | 500 | 42 / 32 | 1.05 |
| H2 (section heading) | Spectral | 500 | 28 / 24 | 1.2 |
| H3 (sub-section, project title) | Spectral | 600 | 22 / 20 | 1.25 |
| Body (main content) | Spectral | 400 | 19 / 17 | 1.55 |
| Body italic (taglines, asides) | Spectral | 300 italic | 19 / 17 | 1.55 |
| Body small (secondary) | Spectral | 400 | 16 / 15 | 1.5 |
| Meta / labels | Inter | 500 | 11 | 1.4 |
| Nav | Inter | 500 | 12 | 1.4 |
| Code (inline / blocks) | IBM Plex Mono | 400 | 14 / 13 | 1.55 |

Three font families (Spectral, Inter, IBM Plex Mono), self-hosted via `@fontsource`. IBM Plex Mono only loaded on `/writing/*` posts that include code.

### Colour palette

| Token | Hex | Usage |
|---|---|---|
| `--cream` | `#f4ecdb` | Page background |
| `--cream-soft` | `#ebe2cb` | Footer background, surface contrast |
| `--ink` | `#1c1a17` | Primary text |
| `--ink-soft` | `#3a352e` | Secondary text |
| `--ink-muted` | `#8a7d62` | Labels, meta, captions |
| `--rule` | `#c5b89a` | Separator lines, borders |
| `--accent` | `#7a2820` | Links, rare emphasis |
| `--accent-hover` | `#9c3a2a` | Link hover / focus |

No dark mode in v1. Editorial palettes are designed for one mode; doing both is twice the work for marginal gain.

### Layout

- Single-column reading width: **720 px max**
- Page max width (nav, footer): **1200 px**
- Side gutters: 24 px mobile, 56 px tablet, 80 px desktop
- Vertical rhythm: 8 px base scale (4 / 8 / 16 / 24 / 36 / 56 / 80)

### Editorial motifs

These are the small details that make the visual language feel intentional rather than templated.

- **Em-dash metadata** — stack chips and dates separated by ` — ` not commas (e.g. `Python — Supabase — 2025`)
- **Italic Spectral taglines** under names and section openings
- **Small-caps Inter labels** above section blocks (`RECENT WORK`, `WRITING`)
- **`Read the case study →` link affordance** — underlined with `text-underline-offset: 3px`, ink-red colour
- **Thin horizontal rules** (`#c5b89a`, 1px) for section breaks — generous margin (24 px each side)
- **Pull quotes** in case studies / posts: indented Spectral italic, no quote marks, slightly larger size
- **Dotted underlines** on writing-index list items (`border-bottom: 1px dotted`) — gives the section a "table of contents" feel
- **No drop caps** in v1 (parking lot)

### Animation / interaction

- Hover transitions: 150 ms ease-out on link colour and underline offset
- No scroll-triggered animations, no parallax, no fancy page transitions
- Editorial = restraint; fast feels expensive

### Accessibility baselines

- Body text contrast: ink on cream = 14.6:1 (AAA)
- Accent links: ink-red on cream = 7.4:1 (AAA)
- Focus rings on all interactive elements (1 px solid accent, 2 px offset)
- `prefers-reduced-motion` respected (trivial since we're not animating much)
- Semantic HTML throughout

## 7. Page Structures

### `/` — Home (Editorial Lead)

```
[ Header ]

──────────────────────────────────────────────
HERO
   Shayne Geilman                        (Spectral 500, 42px, ink)
   Engineer working in production data   (Spectral 300 italic, 19px,
   and LLM systems. Background in         ink-soft, 720px max width)
   research editing and philosophy.
   Based in Perth.
──────────────────────────────────────────────

[FEATURED]
   ASX market data & extraction pipeline
   A six-month build at a Perth capital
   management firm — production system that
   ingests daily ASX announcements, runs
   structured LLM extraction through the
   Anthropic Batch API, and feeds a
   survivorship-bias-free point-in-time
   database.
   Python — Supabase — Anthropic — 2025
   Read the case study →
──────────────────────────────────────────────

[MORE WORK]
   Cross-company analytics frontend       Read →
   Next.js — TanStack Table — 2025

   ha-dash · self-hosted home dashboard   Read →
   React — Flask — Proxmox — 2024

   Manuscript Manager                     Source on GitHub
   MERN — OAuth — 2023
──────────────────────────────────────────────

[ABOUT — RECENT WRITING]                 (two-column on desktop, stacked on mobile)
   ABOUT                  RECENT WRITING
   One paragraph teaser   · Editing 2,000 manuscripts…
   of polymath trajectory · A debugger's mental model…
   More on /about →       All writing →
──────────────────────────────────────────────

[ Footer ]
```

### `/about`

- Page title: `About` (display, Spectral 56 px)
- Long-form narrative — 4–6 paragraphs covering the trajectory; see §8 for the beats
- Sub-heading: `What I work with` — single paragraph listing primary stack (ATS/SEO surface)
- Sub-heading: `How I work` — short philosophy-of-practice paragraph (anchors blog thesis)
- No skills grid, no PDF, no portrait

### `/work` — Index

- Page title: `Work`
- One-paragraph framing intro
- Reverse-chronological list. Each entry:
  ```
  [Title]                        (Spectral 600, 22px, link)
  [One-sentence summary]         (Spectral 400, 16px)
  [Stack — Date — Read →]        (Inter 11px, ink-muted)
  ```
- Em-dash separators between entries
- Manuscript Manager appears in list; its `Read →` links out to GitHub repo (no internal page)

### `/work/[slug]` — Individual case study

Frontmatter schema (Zod-validated content collection):

```yaml
title: string                # required
subtitle: string             # required, anonymised context line
stack: string[]              # required, used for chips
date: YYYY-MM                # required
featured: boolean            # exactly one entry has true; drives home page lead
order: number                # ordering on /work
relatedSlugs: string[]       # optional, manual selection for "related" links
```

Body sections (each rendered as H2):

1. **Context** — what the firm needed and why (anonymised)
2. **Problem** — specific technical challenge
3. **Approach** — architecture and trade-offs
4. **Architecture** — original SVG diagram, no internal names
5. **Outcomes** — approximate scale, what it does today
6. **Reflection** — what would change in v2

Bottom of page: link back to `/work` + 1–2 related case studies (manual selection in frontmatter).

### `/writing` — Blog index

- Page title: `Writing`
- Editorial frame paragraph (the thesis — also defined in §8):
  > *Notes on the literacies engineering needs in the LLM era — critical asking, prompt design as a craft, agentic workflows, and the unexpected things that carry over from research editing into engineering.*
- List of posts (reverse chrono):
  ```
  [Title]                    (Spectral 600, 20px, link)
  [Excerpt — 1 sentence]     (Spectral 400, 16px)
  [Date]                     (Inter 11px, ink-muted)
  ──── (dotted)
  ```
- RSS link in footer (`/writing/rss.xml`)
- No tag/category navigation in v1 (parking lot)

### `/writing/[slug]` — Individual post

Frontmatter:

```yaml
title: string
excerpt: string              # one-sentence, used on index
date: YYYY-MM-DD
tags: string[]               # not yet surfaced, but captured for later
```

Body:

- Title (display)
- Italic Spectral subtitle / dek (optional, from frontmatter)
- Date · est. read time (Inter 11px meta line)
- Body: MDX
- Code blocks: IBM Plex Mono on slightly darker cream surface
- Pull quotes: indented Spectral italic
- Bottom: "Back to /writing" + RSS subscribe note

### `/contact`

- Page title: `Get in touch`
- One-line italic subtitle: *"For work enquiries, conversation, or anything else."*
- Form (Formspree-backed): name · email · message · submit
- Not in primary nav — only reachable via the footer "Get in touch →" link
- Submit success state replaces the form with a short Spectral confirmation

### `/404`

- Title: *"This page is missing."* (display, Spectral)
- Italic subtitle: *"Try the work, the writing, or the front page."*
- Three text links

## 8. Content Plan

### `/about` narrative beats

1. **Opening:** who you are, what you build now ("I build production data and LLM systems")
2. **Philosophy BA (Murdoch, 2013):** systematic thinking, comfort with ambiguity, reading carefully
3. **Editing at MDPI (2018–2022):** 2,000+ manuscripts; precision under deadline; ambiguity-detection in language → carries straight into prompt craft and structured-output design
4. **Cert IV / Postgrad IT (UNE, 2025, GPA 6.88):** formal CS, systems-level thinking
5. **Now:** the work at Altare, anonymised — pipelines, extraction, analytics — what the day-to-day looks like
6. **Closing thesis:** the polymath stack isn't decoration, it's the operating model

Then short sub-sections:

- **What I work with** — stack listing for ATS surface
- **How I work** — short philosophy-of-practice paragraph; anchors the blog thesis

### Case studies

#### Lead — `ASX market data & extraction pipeline`

Combines the work captured by `norgate-data-pipeline` and `altare-pdf` into a single end-to-end story.

| Field | Value |
|---|---|
| Subtitle | A six-month build at a Perth capital management firm |
| Stack chips | Python — Supabase — Anthropic Batch — Postgres |
| Featured | true |

Beats:

- **Context:** capital firm needs structured data from PDFs of ASX exploration/mining filings; daily volume; survivorship-bias-free historical baseline matters for analysis
- **Problem:** varied PDF formats, scaled volume, cost of real-time LLM extraction, maintaining point-in-time correctness
- **Approach:** registration → extraction → detection → submission pipeline; batch LLM over real-time (~50% cost reduction); point-in-time DB to handle ticker changes/delistings; anomaly detection for data quality
- **Architecture diagram:** IRESS feed → Postgres → text extraction → batch LLM (Haiku/Sonnet) → structured tables → analytics frontend, with refresh chain & anomaly pass
- **Outcomes:** processes thousands of announcements daily; structured 5B + Quarterly Activity reports; full data-quality / anomaly pipeline
- **Reflection:** schema evolution under batch latency; classification confidence; what would change in v2

#### Secondary — `Cross-company analytics frontend`

Anonymised version of `resource-explorer`.

| Field | Value |
|---|---|
| Subtitle | A Next.js analytics frontend over Supabase RPC for an exploration-sector dataset |
| Stack chips | Next.js 16 — React 19 — Supabase — TanStack Table — ECharts |
| Featured | false |

Beats:

- **Context:** internal users need to explore the pipeline data — cross-company comparison, time-series, screening
- **Problem:** cross-company tabular data with score columns, performance over thousands of rows, time-series at company level, complex filtering
- **Approach:** App Router + Server Components, RPC functions DB-side (no ORM), TanStack Table virtualised, ECharts for time-series, server-only secrets boundary
- **Architecture diagram:** Next.js (RSC + client islands) → Supabase RPC → Postgres views/tables, with server / client boundary called out
- **Outcomes:** cross-company tables, screener with sparklines, per-company history, directors directory, admin dashboards
- **Reflection:** RPC design vs ORM trade-offs, e2e testing patterns, bundle/RSC learnings

#### Personal — `ha-dash`

Made public + cleaned up before publication (see §9 prerequisite workstream).

| Field | Value |
|---|---|
| Subtitle | A wall-mounted home dashboard, designed to reduce daily mental load |
| Stack chips | React — Flask — SQLite — Proxmox — RPi |
| Featured | false |

Beats:

- **Context:** kitchen wall display, glanceable, no unlock-the-phone friction
- **Problem:** chronic mental load fragmented across apps — meal planning, chores, weather, reminders, homelab status
- **Approach:** React kiosk frontend, Flask + SQLite backend, Proxmox LXC, Pi in Chromium kiosk mode, GitHub Actions CI/CD
- **Architecture diagram:** Pi/Chromium → React frontend / Flask API → SQLite, hosted in Proxmox LXC; CI/CD pipeline
- **Outcomes:** replaces N disparate apps; what it shows today; uptime
- **Reflection:** what's worked, what hasn't, what's planned

### Blog: editorial frame & launch posts

The blog is framed as an **editorial project with a thesis**, not a chronological dev log. The thesis: *the literacies engineering needs in the LLM era — critical asking as a parallel to critical thinking, prompt design as a craft, agentic workflows as a new modality, and the unexpected things that carry over from research editing into engineering.*

This frame is shown on `/writing` (see §7) and informs which posts get written.

#### Launch posts (two anchor pieces)

1. **"Editing 2,000 manuscripts taught me how to prompt"** — signature polymath piece; connects research-editing rigour (precision, ambiguity-detection, asking what an author *actually means*) to prompt craft. The piece nobody else can write.
2. **"A debugger's mental model for reviewing LLM-generated code"** — drawn from Data Annotation Tech experience; reading LLM output skeptically, common failure modes, where to verify.

#### Backlog (not promised, runway only)

- *"Critical asking: a literacy for the LLM era"* — philosophical anchor; pairs with editorial frame
- *"On batch vs real-time LLM extraction"* — drawn from Altare work, NDA-safe
- *"Designing for survivorship-bias-free analysis"* — drawn from Norgate pipeline
- *"What philosophy actually does for engineering practice"*

### Migration of old content

| Old item | Action |
|---|---|
| Manuscript Manager | Keep — listed in `/work` index, links to GitHub + Vercel deploy. No full case study page. |
| Dictionary App | Drop |
| Credit Card Form | Drop |
| Password Generator | Drop |
| Rating Component | Drop |
| Old "Description" / about copy | Drop entirely. Rewrite from scratch around the polymath thesis. |
| Old screenshots (`/public/assets/*.png` for the toy projects) | Drop |
| Old skills grid (icon thumbnails of JS, TS, React, etc.) | Drop |
| Old neon-green colour scheme | Drop |
| Old Yasmim Guimaraes Figma attribution in footer | Drop |
| Existing Formspree endpoint (`mrgvlapv`) | Keep — restyle the form |
| Existing Google Analytics tag (`G-HWWGFZV1CD`) | Replace with GoatCounter |

### Asset requirements for launch

- **3 architecture diagrams** — original SVGs drawn fresh (no copies, references, or screenshots of internal documentation; no internal product names). One per case study.
- **Favicon** — simple monogram (`S.G.` set in Spectral on cream, or just `S`)
- **OpenGraph image (1200 × 630)** — name + tagline in Spectral on cream; used on shared links
- **No portrait photo** in v1 — editorial portfolios go either way; absence is a stylistic choice and dodges a privacy decision

## 9. Migration & Launch

### Build phases (sequencing)

**Phase 0 — Foundation** (~1 evening)
- Archive old code: `git checkout -b archive/v1; git push -u origin archive/v1`
- Wipe `main` (preserve `.git`), `npm create astro@latest`
- `astro.config.mjs` with `base: '/Portfolio/'`, `@astrojs/sitemap`, `@astrojs/rss`, `@astrojs/mdx`
- `@fontsource/spectral`, `@fontsource/inter`, `@fontsource/ibm-plex-mono` self-hosted
- Content collections (`src/content/work/*.mdx`, `src/content/writing/*.md`) with Zod schemas
- GH Actions deploy workflow (`.github/workflows/deploy.yml`) — push to `main` → builds → deploys to `gh-pages` branch

**Phase 1 — Visual system & shell** (~1–2 evenings)
- Layout component (Header, Footer)
- Global CSS: typography baseline, colour tokens, spacing scale (CSS custom properties)
- Empty `/`, `/about`, `/work`, `/writing` pages — header/footer working, no content
- `/404` page
- Lighthouse smoke test on the shell

**Phase 2 — Static pages** (~1 evening)
- `/about` content (drafted ahead in parallel)
- `/contact` form, restyled

**Phase 3 — Work content** (~2–3 evenings; partially parallel with Phase 4)
- 3 hand-drawn SVG architecture diagrams
- 3 MDX case studies (content writing — heavy lift)
- `/work` index page rendering content collection
- `/work/[slug]` template
- Home page Featured + More Work blocks wired up
- **Prerequisite:** `ha-dash` cleanup must be complete before this phase ships (see side workstream below)

**Phase 4 — Writing content** (~2–3 evenings)
- 2 launch posts (content writing)
- `/writing` index with editorial frame
- `/writing/[slug]` template
- RSS feed
- Home page Recent Writing block wired up

**Phase 5 — Polish** (~1 evening)
- GoatCounter integration
- Favicon (`S.G.` monogram, Spectral on cream)
- OpenGraph image (static asset)
- Lighthouse pass — target ≥95 on all categories
- Manual a11y check (axe DevTools) — focus rings, contrast, semantic HTML, no keyboard traps
- Manual content review pass for any leaked personal info

**Phase 6 — Cutover** (~0.5 evening)
- Final smoke test on local preview build
- Push to `main` → GH Actions → live at `ShayneJG.github.io/Portfolio/`
- Same URL as before; cutover is just the first new build replacing the old

**Total estimate:** ~10 evenings ≈ 1.5–2 weekends + spare evenings.

### Side workstream — `ha-dash` cleanup (prerequisite for Phase 3)

Before `ha-dash` can be made public and case-studied:

1. Sweep for hardcoded names / tasks / personal data — move to `.env` or runtime config
2. Audit for committed secrets — `git log -p` scan; rotate any that leaked
3. Update README with the project's public-facing description
4. Repo visibility: private → public
5. Verify the publicly linked `ha-dash` instance won't expose home network or personal data

~1–2 evening project. Can run in parallel with Phases 0–2.

### Content prep (non-keyboard prerequisite)

3 case studies + about page + 2 blog posts ≈ 5,000–10,000 words of original writing. Most cannot happen at the keyboard alongside building. Realistic flow:

- About narrative + lead case study drafted *before* Phase 2/3 starts (or in parallel as evening writing)
- Other 2 case studies drafted during Phase 3
- Blog posts drafted during Phase 4 (or earlier — they're independent of build)
- Run case study drafts past Altare manager during Phase 3 — leaves room for revision before launch

Suggested cadence: writing on weekday evenings, building on weekends.

## 10. Out of Scope (v1)

These are deferred deliberately. Adding them later is straightforward; including them now expands scope.

- Drop caps in editorial typography
- Dark mode
- Portrait photo
- Custom domain (`shaynegeilman.dev` or similar)
- Skills/tools page
- Tag or category navigation on `/writing`
- Search across content
- Comments
- Additional case studies (the 2023 Gatsby/Shopify contract; older work)
- Re-exposing the v1 portfolio at any URL

## 11. Decisions Log

The brainstorming process locked in the following decisions. These shouldn't be re-litigated during implementation without strong cause.

| Decision | Resolution | Rationale |
|---|---|---|
| Primary purpose | Job-hunt (A), credibility-anchor (C) secondary | 6-month contract ending soon; agentic-coding-adjacent roles target |
| Positioning | A + B = "Polymath specialising in production data + LLM systems" | Coherent combination; differentiator is real, not constructed |
| Work case study strategy | Anonymised case studies (B) | NDA-safe; standard senior-engineer practice; doesn't require employer pre-approval beyond a courtesy review |
| Showable code | `ha-dash` (after cleanup) + `manuscript-manager` only | Work repos belong to a colleague; .claude config is work-adjacent |
| Scope | Hub + sub-pages + writing/blog (C) | Owner committed to ~1 post/month for 6 months |
| Tech | Astro | Content-first ergonomics; static; self-hosted fonts; new tech for owner to learn |
| Hosting | GitHub Pages, project page form | Existing infrastructure; no custom domain in v1 |
| Visual direction | Editorial-A "Literary" with light technical accents | Owner picked Editorial-A; light technical chip pattern from Editorial-B carried forward where it earns its place |
| Home composition | Editorial Lead (variant C) | One featured case study above the fold; balances polymath angle with hiring-manager scanning |
| Sitemap | Standard 4-nav (`/`, `/about`, `/work`, `/writing`) | `/about` separate (polymath narrative needs space) |
| CV | Not on site | Privacy / cyber-risk concern from owner |
| Skills section | None (chips on projects + paragraph on `/about` only) | Old grid read as "junior CV" |
| Contact | Form-only, Formspree-backed, no exposed email | Privacy constraint; existing Formspree endpoint reused |
| Featured case study | ASX pipeline (combined `norgate-data-pipeline` + `altare-pdf`) | Strongest narrative for the data + LLM angle |
| Analytics | GoatCounter | Privacy-respecting; no consent banner; fits editorial restraint |
| Existing v1 portfolio | Preserved in `archive/v1` branch; never publicly accessible | Owner's explicit constraint |
