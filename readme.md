# RapidRefresh Mobile IV &amp; Wellness — Design System

A luxury, matte-navy-and-gold visual system for **RapidRefresh Mobile IV &amp; Wellness**, a premium RN-led mobile IV hydration &amp; wellness concierge serving Houston, TX and surrounding areas. This system powers the marketing website (target stack: Next.js + Framer Motion + lucide-react) and any supporting collateral.

> **Designer:** Lorens · **Client:** Rahab Njuguna, RN — Founder
> **Namespace (for `@dsCard` HTML):** `window.RapidRefreshDesignSystem_646e39`

---

## 1. Company context

RapidRefresh delivers medical-grade IV hydration, vitamin injections, NAD+, and wellness drips **directly to the client's home, office, gym, or hotel**. The brand sits at the intersection of **clinical trust** (registered-nurse-led, 22+ years acute-care experience, HIPAA-conscious, fully insured) and **luxury concierge hospitality** (matte navy, antique gold, white-glove service).

**Positioning line:** *Luxury IV Hydration. Delivered To You.*

**Who it serves:** athletes &amp; high performers, corporate professionals, post-travel recovery, event &amp; bridal parties, and everyday wellness clients.

**Core surfaces (website):** Home, Drip Menu, About / Meet Your Nurse, Service Area, Corporate &amp; Events, Memberships, Booking (JaneApp integration), FAQ, Testimonials.

### Sources provided
- `uploads/Logo.png` — brand mark (gold IV-droplet + orbital ring on navy disc). **Carried a "Higgsfield AI" watermark, now removed**; rebuilt on a transparent background → `assets/logo.png` (1024²) and `assets/logo-512.png`.
- `uploads/Rah1–3.webp` — founder headshots in clinical navy scrubs (Harris Health badge). → `assets/photos/founder-clinical-0{1,2,3}.webp`
- `uploads/Rah4–5.webp` — founder portraits (red top, in-car). → `assets/photos/founder-portrait-0{1,2}.webp`
- `uploads/Rah6.webp` — founder full-length lifestyle (red dress, garden). → `assets/photos/founder-lifestyle-01.webp`
- `uploads/Rah1.jpg` — duplicate of Rah1.
- Brief PDF (pasted): brand board colors, drip &amp; injection menu with pricing, membership tiers, service areas, marketing-graphic copy, and the client's matte-luxury refinement notes.

No codebase or Figma file was provided — the system is authored from the brand board, the client's written direction, and the supplied imagery.

---

## 2. Content fundamentals — how RapidRefresh writes

**Voice:** calm, assured, concierge. Clinical authority worn lightly — never salesy, never clinical-cold. Think a five-star spa that happens to be run by a hospital nurse.

- **Person:** second person to the client (*"delivered to you," "your space," "feel your best"*); first person only in the founder's own voice on the About page (*"I founded RapidRefresh…," "My mission is simple"*).
- **Casing:** Title Case for nav, buttons, and menu item names (*Book Your Drip, Game Day Drip, Elite Concierge*). Sentence case for body copy. Small-caps + wide tracking for labels/eyebrows (see §Visual — labels).
- **Tone words:** *luxury, concierge, premium, restore, replenish, revitalize, rehydrate, renew, perform, recover.* The internal triad is **Safety. Comfort. Results.** and the marketing triad **Revitalize · Rehydrate · Renew.**
- **Sentence shape:** short, declarative, benefit-first. *"Expert RN-led IV therapy delivered to your home, office, gym, or hotel."* Trailing periods on standalone taglines for gravity.
- **Numbers &amp; prices:** prices as `$169` (no cents). "Standard / Premium" two-tier columns on drips. Injections and boosters flat-priced.
- **Trademarks:** a few signature drips carry ™ — *Game Day Drip™, Morning After Rescue™*. Keep them.
- **Emoji:** **none** in product UI. (The client's brainstorm doc used ⭐ for trust badges — replace those with the gold droplet glyph / lucide icons, never emoji.)
- **No AI-slop tropes:** no eyebrow "pills," no "🚀/✨" energy, no numbered "01 / 02 / 03" step chips, no generic gradient hero blobs. Labels are hairline + small-caps, steps are named or lettered discreetly, backgrounds are matte.

**Copy examples**
- Hero H1: *Premium Mobile IV Hydration in Houston*
- Hero sub: *Expert RN-led IV therapy delivered to your home, office, gym, or hotel.*
- CTA pair: *Book Your Drip* (primary, gold) · *View the Drip Menu* (secondary, outline)
- Founder: *"With over 22 years of acute-care nursing experience, I founded RapidRefresh to combine hospital-level clinical expertise with the comfort of luxury concierge care."*
- Trust badge: *RN-Led Concierge Care · Fully Insured Mobile Practice · HIPAA-Compliant Care*

---

## 3. Visual foundations

### Color
A **matte navy** foundation with **antique-gold** accents on **off-white ivory** — never pure white, never glossy. Client-refined away from bright/saturated navy toward a flat, luxurious finish.

- **Navy scale** `--navy-900 #071233` (midnight, hero/footer) → `--navy-700 #09163D` (matte, primary dark surface) → `--navy-600 #0A1945` (brand base) → `--navy-400 #1B263B` (slate cards). Matte, desaturated, deep.
- **Gold scale** `--gold-600 #A48111` (antique gold — primary button fill, client-specified) → `--gold-400 #C9A24B` (champagne — accent text, hairlines, icons) → `--gold-200 #E8CE8A` (foil highlight). Gold is used **sparingly and precisely** so it reads as precious metal, not decoration.
- **Ivory** `--ivory #F8F7F4` — off-white for text on navy and for light sections. `--charcoal #1A1E28` for heavy text on light.
- **Gradients:** avoided globally (matte). The **one** sanctioned gradient is the subtle vertical sheen on the antique-gold button (`--gold-fill`), per client request. Section backgrounds, cards, and hero are flat fills.

### Type
- **Display — Jost** (geometric, Futura-lineage): headlines, drip names, big numbers. Light/Regular weights at large sizes with tight tracking (`--ls-display -0.02em`) for couture elegance.
- **Text — Hanken Grotesk** (humanist grotesque): body, UI, labels. Warm, highly legible, trustworthy.
- **Labels** use Hanken at 12px, 600, `letter-spacing 0.24em`, uppercase, gold — the brand's replacement for the eyebrow pill.
- Scale is fluid via `clamp()` for hero/display; fixed for body. See `tokens/typography.css`.
- ⚠️ **Font substitution flag:** the client asked for "the best Inter-family font." Inter is heavily over-used and reads as generic/AI. This system ships **Hanken Grotesk** (same neo-grotesque DNA, warmer, far less common) for text and **Jost** for display. Both are free Google Fonts. *If Rahab insists on literal Inter, swap `--font-text` in `tokens/typography.css`.*

### Space &amp; layout
4px base grid. **Whitespace-forward** — section rhythm `--section-y clamp(72px, 9vw, 152px)` for a clean luxury cadence. Content max `1200px`; readable text measure `720px`. Generous gutters.

### Surfaces, borders, radii
- **Cards on navy:** flat `--navy-400` fill, 1px `--navy-300` hairline border, `--radius-lg (18px)`, soft matte shadow `--shadow-card` (low-opacity, high-blur, navy-tinted — no glow).
- **Cards on light:** ivory fill, `--ivory-300` border, same radius.
- **Radii:** restrained — buttons/inputs `--radius-md (12px)`, cards `--radius-lg`, media `--radius-xl (28px)`, pills reserved for chips/toggles only.
- **Gold hairlines** (`--hairline-gold`, `.rr-rule`) separate sections and underline labels instead of heavy borders.

### Shadows
Matte and diffuse — low opacity, large blur, navy-tinted, offset downward. **No glow anywhere.** The logo gets a soft warm drop shadow `--shadow-logo` (amber-tinted, per client "soft shadow behind the gold logo instead of a glow"). Gold buttons use a subtle `--shadow-gold`.

### Motion
Spa-calm and restrained. Gentle fades and short upward reveals on scroll (`--dur-reveal 720ms`, `--ease-out cubic-bezier(0.22,1,0.36,1)`). No bounce, no spring overshoot, no infinite decorative loops. Hover = gentle lift + slightly brighter gold; press = subtle scale-down (0.98) + deeper gold. Respect `prefers-reduced-motion`.

### Hover / press states
- **Primary (gold) button:** hover → `--gold-fill-hover` (a touch brighter) + `--shadow-gold`; press → scale 0.98, no shadow.
- **Secondary (outline) button:** hover → gold border + faint `--gold-a16` fill; press → scale 0.98.
- **Cards / links:** hover → 2–4px lift and/or gold hairline brighten; text links → `--gold-400` → `--gold-300`.

### Imagery
Warm, editorial, true-to-life. Founder photography is authentic (provided). Generated placeholders should be **warm-neutral, softly lit, shallow depth of field**, luxury-spa mood — navy/gold/ivory palette echoes, gold IV lines, marble/linen textures, Houston high-rise and home interiors. Full-bleed hero imagery with a navy protection gradient for legible overlaid text. See `assets/IMAGE-PROMPTS.md` for copy-paste generator prompts and where each placeholder lives.

---

## 4. Iconography

- **System:** [**lucide-react**](https://lucide.dev) — the client's chosen icon set for the Next.js build. Thin, rounded, 1.75–2px stroke; matches the calm, precise brand tone. In this design system, cards and UI kits load Lucide from CDN and render via the `Icon` component wrapper (see `components/media/`).
- **Stroke &amp; size:** default 20–24px, `stroke-width 1.75`, `--gold-400` on navy / `--charcoal` on light. Never filled, never duo-tone.
- **Common glyphs:** `droplet, droplets` (hydration), `zap` (energy), `shield / shield-check` (immunity/defense), `sparkles` (beauty), `syringe` (injections), `heart-pulse / activity` (recovery/performance), `map-pin` (service area), `calendar-check` (booking), `phone` (click-to-call), `star` (reviews), `badge-check` (trust).
- **Brand glyph:** the gold **droplet from the logo** doubles as a bullet / list marker / accent — extracted usage lives in `assets/logo.png`. Do not redraw it; reference the asset or use lucide `droplet` for inline scale.
- **Emoji / unicode as icons:** never. The brainstorm doc's ⭐ badges → lucide `badge-check` in gold.

---

## 5. Repository index (manifest)

**Root**
- `styles.css` — global entry point (import this one file). `@import`s all tokens + base.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills front-matter for portable use.

**`tokens/`** — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css` (radius/shadow/motion) · `base.css` (resets + `.rr-*` helpers).

**`assets/`** — `logo.png`, `logo-512.png` (watermark removed, transparent) · `photos/` (founder imagery) · `IMAGE-PROMPTS.md` (generator prompts for placeholders).

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) rendered on the Design System tab.

**`components/`** — reusable React primitives (see below).

**`ui_kits/website/`** — high-fidelity website screen recreations (Home, Drip Menu, About, Memberships, Booking).

### Components
- `components/actions/` — **Button**, **IconButton**
- `components/forms/` — **Input**, **Select**, **Checkbox**
- `components/display/` — **Card**, **Badge**, **Chip**, **Stat**
- `components/menu/` — **DripRow** (two-tier price row), **BoosterRow**, **MembershipCard**
- `components/media/` — **Icon** (lucide wrapper), **Logo**, **SectionLabel**

### Intentional additions
- **Icon** — thin wrapper over lucide-react so glyph usage is consistent (stroke, size, color) across the system. Reason: the client's stack uses lucide; a wrapper keeps defaults on-brand.
- **DripRow / BoosterRow / MembershipCard** — domain primitives for the IV menu &amp; membership tiers, since the whole business is a productized menu. Reason: these recur on every commercial surface.
- **SectionLabel** — the hairline + small-caps label that replaces the AI-slop eyebrow pill.

---

## 6. Caveats
- Fonts are Google-hosted substitutes (Hanken Grotesk / Jost) — see §Type flag.
- The logo is an AI-generated mark with a now-removed watermark; it is raster, not vector. A clean SVG/vector redraw is recommended for print &amp; retina crispness (out of scope here — flagged for the client).
- Hero &amp; category imagery are placeholders pending generation — prompts in `assets/IMAGE-PROMPTS.md`.
