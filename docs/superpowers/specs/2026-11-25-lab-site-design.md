# Rayford Lab Site and Organization Redesign

Date: 2026-11-25

## Intent

rayford-ai.com and the Rayford-AI GitHub organization currently read as a
startup: products (Ray Assess, Claims, Risk), pilots, market statistics, an
AggieX execution plan. The user wants both to read as a research lab
("Rayford Lab" style) whose main job is to show the projects. The audience is
anyone: reviewers, conference attendees, students, collaborators, the public.
A visitor should see what the lab works on in seconds and reach a live demo,
paper, or code in one click.

## Goals

- Rewrite `index.html` of `Rayford-AI/Rayford-AI.github.io` as a lab project
  showcase.
- Rewrite the organization README (`Rayford-AI/.github`, `profile/README.md`)
  in the same voice.
- Fork every disaster/GeoAI research repository from `rayford295` that the
  organization lacks, and sync the stale forks the organization already has.

## Non-Goals

- No new demos or research code; the site links to what exists.
- No backend, CMS, or build step.
- The Ray Assess demo under `demo/` stays as is (linked from the site).

## Anti-Goals

- Company language anywhere on the site or README: products, pilots, pricing,
  customers, market size, competitive edge, "Discuss a pilot", AggieX plan.
- A wall of text. Projects lead with an image and a one-line claim.
- Claims the evidence does not support (venue, award, status must match the
  repos and papers).

## Approaches Considered

How repositories enter the organization:

1. Fork into the organization and sync existing forks (chosen by the user).
   Matches the current pattern; code and stars stay with `rayford295`. Cost:
   forks drift, so a sync script ships with this work.
2. Transfer ownership to the organization. Single source, but the personal
   profile loses the repos and their stars.
3. Link only, no forks. Least work, but the organization page stays sparse.

Site technology: keep the existing static HTML repository (one sensible way;
a framework adds a build step for a single page with no gain).

## Decisions by the User

- Name: **Rayford AI Lab** (site title, header, README).
- Language: bilingual English / 中文 with the existing EN·中文 toggle; every
  visible string has both versions.
- Ray Resilience: push the private `rayford295/ray-resilience` main to the
  public `Rayford-AI/ray-resilience`. The organization's main is an ancestor
  of the personal main, so this is a fast-forward push (no force). This makes
  the current code public; only committed `main` is pushed.

## Repository Scope

Fork new into `Rayford-AI`: DisasterVLP, GeoLocator, vgi-spatial-bias,
ArcGIS-SAM-TreeSegmentation, awesome-autonomous-geoai, awesome-3dgs-geoai,
rayford-knowledge-atlas.

Sync existing forks: CrossViewGate, RAPID, DamageArbiter,
Sat2Street-DisasterGen, Bi-Temporal-StreetView, GenAI4Dresilience,
drone-compression-hpc. (`debris-estimate` is organization-owned.)

Excluded: yi-town, motionmirror, Tutorial_*, academic-website-template,
IM-merged-private, profile repositories. Private repositories (PrepStreet,
geothermal-awareness, disaster-crossview-datasets) are listed on the site by
name and public page only, never with code links.

## Site Design

The user wants it to look striking ("炫酷"). Dark, cinematic theme built from
the logo palette: near-black warm background, maroon depth, gold as the glow
and accent (replacing the generic cyan). A light toggle is not required.

Signature moments (builder keeps all of these performant and honours
`prefers-reduced-motion`):

- **Hero canvas**: an animated Gulf Coast field of glowing points (hurricane
  track and wildfire sites the projects study) with a slow scan line, drawn in
  `<canvas>`; no map library.
- **Satellite to street reveal**: one image pair from Sat2Street/CrossViewGate
  with a drag or scroll-driven wipe between the satellite and street view.
- **Project cards**: tilt and gold edge glow on hover; video or GIF preview on
  hover where a project has one.
- **Scroll reveals**: staggered fade-up per section; animated counters for
  projects, papers, and demos (counts taken from the page's own data).

Fonts: a sharp display face for headings, a clean sans for body, mono for
venue tags and coordinates. Builder's call on exact fonts.

Sections, top to bottom:

1. **Header**: logo + lab name; nav Projects, Demos, Publications, People,
   GitHub.
2. **Hero**: lab name, one-sentence mission (geospatial AI for disaster
   resilience: street view, satellite, and agents that show their evidence),
   the existing Ray Assess preview video, buttons "Explore projects" and
   "GitHub".
3. **Live demos**: large cards for projects with a working page:
   Ray Resilience, CrossViewGate, PrepStreet, GenAI4Dresilience,
   vgi-spatial-bias, drone-compression-hpc, Ray Assess demo, Knowledge Atlas.
4. **All projects**: grid of every in-scope project with thumbnail, title,
   one-line claim, venue tag, and Demo / Paper / Code links. Filter chips by
   theme: Damage assessment, Generation, Agents and systems, Mapping and data,
   Resources. Cards are static HTML with `data-theme` attributes; a few lines
   of JS filter them, so the page works without JS.
5. **Publications**: compact list (venue, year, links), newest first.
6. **People**: Yifan Yang (lead), Dr. Lei Zou, Dr. Zhengzhong Tu,
   Dr. Heng Cai, with existing photos and roles rewritten as lab roles.
7. **Footer**: GitHub, contact email, LinkedIn, research origin link.

Keep: CNAME, `demo/`, `privacy.html`, 404, Plausible analytics, sitemap.
Remove from the page: the stat strip, Platform, Evidence Layer, Competitive
Edge, Initial Wedge, Market Timing, Execution Plan, the Human Evaluation entry
while its subdomain is down. Update the repository README and LICENSE note
to match the lab framing.

Thumbnails: reuse `assets/research/*`; for projects without one, take the
hero image or figure from the project's public page or repo README.

## Organization README

Same voice and structure as the site, shorter: logo, one-line mission,
featured demos table (image-led), project table by theme with Demo / Paper /
Code columns, people, links. Drop "research-to-product workspace",
"Advisor-Access", product and operations rows, and "not open source by
default".

## Sync Tooling

A small script (`scripts/sync-forks.sh` in the website repo) that runs
`gh repo sync Rayford-AI/<name>` over the in-scope fork list.

## Left to the Builder

Exact fonts and spacing, card copy (drawn from each repo's README and paper),
thumbnail crops, mobile layout (16px gutters, no horizontal scroll).

## Revision: Light Theme (2026-11-25)

The user asked for a white background with a "frontier lab" feel, keeping all
content. The page now uses a white base with near-black type, one maroon accent
taken from the logo, Newsreader (display) with Geist and Geist Mono, black pill
buttons, borderless image-led project cards, and no grain, cursor glow or card
tilt. The hero map keeps its animation, redrawn as dark dots with maroon events.
Advisors now carry their Chinese names (邹雷, 涂正中, 蔡恒).

People, same day: the advisors are listed as the Ph.D. committee (博士委员会), and
Dr. Andrew Klein (Texas A&M Geography) joins them; the grid fits five in one row.
