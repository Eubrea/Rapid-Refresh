# Handoff: RapidRefresh Mobile IV & Wellness — Marketing Website

## Overview
A luxury, RN-led mobile IV hydration brand serving Greater Houston. This package is the full high-fidelity marketing site: a design system (tokens + components) plus a click-through recreation of every page. Goal is a modern, premium, high-converting, SEO-ready Next.js site.

## About the Design Files
The files in this bundle are **design references authored in HTML/JSX** — prototypes that show the intended look, copy, and behavior. They are **not production code to ship as-is**. Your task is to **recreate these designs in a real Next.js + TypeScript codebase**, using its idioms (React components, `next/image`, routing, etc.). The inline-JSX here runs through in-browser Babel with a global `window` namespace; that pattern is for prototyping only — rebuild it properly.

If you set up the repo from scratch, use: **Next.js (App Router) + TypeScript, Framer Motion (animation), lucide-react (icons)**.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, radii, shadows, motion, and copy are all decided and encoded as CSS custom properties in `styles.css` / `tokens/*.css`. Recreate the UI faithfully; pull every value from the tokens rather than hardcoding.

## Global art direction
Matte luxury. Deep matte navy + antique gold + off-white ivory. No gradients-as-decoration, no glow (shadows are soft/diffuse), generous whitespace. **Only the homepage hero is navy; the rest of the homepage uses the lighter ivory surfaces.** No serif fonts. No em dashes in visible copy (en dashes in number ranges like "30–60 minutes" are fine).

## Pages / Screens
All screens live in `ui_kits/website/*.jsx`. Each registers itself on `window` and is mounted by an in-page router in `index.html` (replace with Next.js routes).

- **Home** (`Home.jsx`) — Navy hero with a faint hero photo backdrop, centered display headline ("Premium Mobile IV Hydration in Houston, **and beyond.**" — last two words gold), two CTAs, and four image-topped category cards that overlap down into a rounded ivory section. Then all-ivory sections: trust marquee, "Why RapidRefresh" (4 cards, each with a photo feathered into the upper-right corner behind an icon + copy), "How It Works" (3 photo-topped steps), "The Drip Menu" featured cards (4 cards, photo fills upper half, gold icon chip straddles the image/content edge), a Boosters collage, "Who We Serve" (overlapping portraits + gold checklist), Corporate collage, Founder section (real photo), testimonials, Instagram grid, closing CTA.
- **Drip Menu** (`DripMenu.jsx`) — filterable signature drips with two-tier (Standard/Premium) pricing via `DripRow`, plus injection and IV booster grids via `BoosterRow`. Includes **NAD+ Renewal**.
- **Memberships** (`Memberships.jsx`) — three Wellness Club tiers (`MembershipCard`) + a highlighted **B12 Energy Boost Package ($155/mo, weekly B12 × 4)** band + "why members love it".
- **Pricing** (`Pricing.jsx`) — full drip table (incl. NAD+), booster groups, membership summary.
- **Service Area** (`ServiceArea.jsx`) — Google Maps embed + community chips (Houston, Sugar Land, Katy, The Woodlands, Pearland, Missouri City, Alvin, Manvel, **Fresno**) + travel/availability notes.
- **Corporate & Events** (`CorporateEvents.jsx`) — corporate wellness + private/bridal events, perks, split CTA, hero photo.
- **About** (`About.jsx`) — founder story (Rahab Njuguna, RN, 22+ years), trust badges, CTA. Real founder photography.
- **Booking** (`Booking.jsx`) — HIPAA-conscious intake form (`Input`/`Select`/`Checkbox`), a "Book on JaneApp" instant-scheduling option, "how it works", a founder card, a "Good to Know" policies card (payment, cancellations, consent), and click-to-call.
- **Gift Cards** (`GiftCards.jsx`) — amount selector + live gift-card visual + three-step "how gifting works".
- **FAQ** (`FAQ.jsx`) — accordion of 8 Q&As.

## Chrome (`Chrome.jsx`)
- **Nav — "The Infusion Line" (signature element, keep it).** The nav bar is styled as an IV line: each link is a small gold "port" mounted on a hairline gold tube; a gold **droplet glides** along the tube to the active route and **chases the hovered link**, the tube **fills** behind it, and a slow **drip** falls from the droplet. On routes with no port it parks at the logo ("reservoir"). Scroll-aware: transparent over the navy hero, solid `rgba(7,18,51,0.88)` + blur once scrolled. Rebuild the glide/fill with measured port positions (getBoundingClientRect) + Framer Motion; respect `prefers-reduced-motion` (render the static end-state).
- **Footer** — service-area list, SEO keyword row, socials, JaneApp + intake links.

## Interactions & Behavior
- Reveal-on-scroll: gentle fade + 22px rise (IntersectionObserver), `--dur-reveal` easing `--ease-out`, small stagger. Provide reduced-motion fallback (show content).
- Card hover: lift (`translateY(-6px)`) + shadow; drip/why images scale to ~1.05 on hover.
- Nav droplet: `left` transition ~520ms `--ease-out`; drip keyframe ~3.4s loop.
- Booking form: client-side required-field validation; the "consent" checkbox is required. Primary "Book" CTAs route to the internal intake; a secondary CTA opens JaneApp.
- FAQ: single-open accordion (max-height transition).

## State Management
- Current route/screen (use Next.js routing; the prototype persists to `localStorage['rr-site-screen']`).
- Nav: `scrolled` (scroll listener), `hovered` link, measured port x-positions.
- DripMenu: active category filter. GiftCards: selected amount. FAQ: open index. Booking: form field state.

## Design Tokens (from `styles.css` + `tokens/*.css` — use these, don't hardcode)
**Colors**
- Navy: `--navy-900 #071233` (hero/footer), `--navy-800 #08153A`, `--navy-700 #09163D`, `--navy-600 #0A1945` (brand base), plus 500/400/300 lighter steps.
- Gold: `--gold-600 #A48111` (button fill), `--gold-500 #B8933A`, `--gold-400 #C9A24B` (accent text/hairlines/icons), `--gold-300 #D9BC74`, `--gold-200 #E8CE8A`.
- Ivory/neutral: `--ivory #F8F7F4` (off-white base), `--ivory-100/200/300`, `--charcoal`, `--slate-ink`.
- Alpha helpers: `--ivory-a80/64/44/12/08`, `--gold-a40`, `--gold-a16`.

**Type** — Display: **Jost** (300–700). Text: **Hanken Grotesk** (300–800). Both Google Fonts, no serifs.
- Sizes: `--fs-hero` clamp(2.75rem→5.25rem), `--fs-d1`→`--fs-d3`, `--fs-lg 1.125rem`, `--fs-body 1rem`, `--fs-label .75rem`.
- Tracking: display `-0.02em`, labels `0.24em` (uppercase small-caps eyebrows). Line heights `--lh-tight 1.04`→`--lh-relaxed 1.75`.

**Spacing** — 4px grid (`--space-*`). Section rhythm: `--section-y` clamp(72–152px), `--section-y-tight` clamp(48–96px). Containers: `--container 1200px`, `--container-wide 1360px`, `--container-text 720px`. `--gutter` clamp(20–64px).

**Radii** — `--radius-md 12px` (buttons/inputs), `--radius-lg 18px` (cards), `--radius-xl 28px` (panels/images), `--radius-pill 999px`.

**Shadows** (matte, never glossy) — `--shadow-sm`, `--shadow-lift`, `--shadow-media`, `--shadow-logo` (soft warm behind gold logo), `--shadow-gold` (button).

**Motion** — `--ease-out cubic-bezier(.22,1,.36,1)`, `--dur-fast 160ms`, `--dur-base 260ms`, `--dur-reveal 720ms`.

## Components (`components/*`)
`Button` (primary/secondary/ghost, sizes, pill option), `IconButton`, `Badge`, `Card` (navy/light tones, padding scale), `Chip`, `Stat`, `Checkbox`, `Input`, `Select`, `Icon` (lucide wrapper — keep the lucide names used), `Logo`, `SectionLabel` (the small-caps eyebrow), plus menu components `DripRow`, `BoosterRow`, `MembershipCard`. Reference the `.jsx` for exact structure and the `.d.ts` for props.

## Assets
Photos are in `assets/photos/` (webp): hero, category (`cat-*`), steps (`step-*`), collage anchors (`boosters-flatlay`, `corporate-*`, `member-*`, `event-bridal`, `booster-*`, `serve-*`), founder shots (`Founder*.webp`), "Why" images (`why-rn/mobile/grade/custom`), drip images (`drip-hydration/energy/gameday/rescue`), and `InstaInspo`. Logo at `assets/logo-512.png`. Migrate to `next/image`. (Not duplicated into this folder to keep it light — pull from the repo's `assets/photos/`.)

## Integrations
- **JaneApp**: `https://rapidrefreshivtherapy.janeapp.com/` (instant booking; also from footer). Internal intake form is the primary conversion path.
- **Instagram**: `https://www.instagram.com/rapidrefreshivtherapy/`.
- **Google Maps**: embed on Service Area.
- **Phone (click-to-call)**: `(713) 851-7590`.

## SEO
Keep semantic headings, the footer keyword + service-area rows, per-page `<title>`/meta, and structure for ~40 local SEO pages. HIPAA-conscious forms. Fast loading (optimize the webp assets via `next/image`).

## Do / Don't
- **Do** drive all styling from the tokens; keep the Infusion Line nav; mobile-first responsive (kit is designed desktop-width — add breakpoints).
- **Don't** introduce new brand colors, add em dashes to visible copy, or make the navy bleed past the homepage hero.

## Ask the client before
- Before/after gallery (assets pending).
- NAD+ dosing/price confirmation (currently $349 Standard / $449 Premium placeholder).
- The three business email addresses.

## Files in this bundle
This bundle is a **reference companion** to the project repo — hand Claude Code the repo itself (which holds the live source), and use these files for the spec and token values:
- `README.md` — this document (self-sufficient spec).
- `styles.css` and `tokens/` — the design tokens (source of truth for every color, type, spacing, radius, shadow, and motion value).

The live source to recreate lives in the repo:
- `ui_kits/website/*.jsx` — all page + chrome + kit source, the prototype `index.html`, and the kit README.
- `components/**` — the design-system component source (`.jsx` + `.d.ts`).
- `assets/photos/**` and `assets/logo-512.png` — imagery.

(The compilable `.jsx`/`.d.ts` source is intentionally NOT duplicated into this folder — a second copy would collide with the live design-system sources. Share the repo, not just this folder, when you need the code.)
