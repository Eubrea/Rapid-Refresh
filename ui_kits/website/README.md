# Website UI Kit — RapidRefresh

High-fidelity, click-through recreation of the RapidRefresh marketing website, composed from the design-system components. Target production stack: Next.js + Framer Motion + lucide-react.

## Run
Open `index.html`. It loads React, Babel, lucide (CDN), and the compiled `_ds_bundle.js`, then mounts an in-page router. Navigation persists the current screen in `localStorage` (`rr-site-screen`).

## Screens
- **Home.jsx** — medvi-inspired: a centered hero (transparent nav over navy) with a huge display headline + four image-topped category cards that overlap up into a rounded ivory section; a scrolling trust marquee; then all-ivory sections — Why, How It Works, featured drip cards, Who We Serve (overlapping portraits + gold checklist), founder (real photo), testimonials, an Instagram strip, and a closing CTA. Only the hero is navy.
- **DripMenu.jsx** — filterable signature drips (two-tier pricing) + injection / IV booster grids (BoosterRow).
- **Memberships.jsx** — three Wellness Club tiers (MembershipCard), "why members love it", CTA.
- **ServiceArea.jsx** — Google Maps embed + community chips (incl. Fresno, Missouri City, Alvin, Manvel) + travel/availability notes.
- **CorporateEvents.jsx** — corporate wellness + private/bridal events, custom group pricing, perks, split CTA.
- **About.jsx** — founder story (real photography), trust badges, CTA.
- **Booking.jsx** — HIPAA-conscious intake form (Input / Select / Checkbox) plus a "Book on JaneApp" instant-scheduling option, "how it works", click-to-call.

## Chrome & helpers
- **Chrome.jsx** — `Nav` (“The Infusion Line”: links are ports mounted on a gold IV line; a droplet travels along the tubing to the active page, chases hover, fills the line behind it, and slowly drips; parks at the logo/reservoir on portless pages. Scroll-aware background as before) + `Footer` (service area incl. Fresno, SEO keyword row, real Instagram link, JaneApp book link). Exposes `RR_JANEAPP` / `RR_INSTAGRAM`.
- **kit.jsx** — `Photo` (real image or elegant matte placeholder — see `assets/IMAGE-PROMPTS.md`) and `Reveal` (gentle fade-rise on scroll).

## Integrations
- **JaneApp** — `https://rapidrefreshivtherapy.janeapp.com/` opens from the Booking page and footer; primary "Book" CTAs route to the internal intake form.
- **Instagram** — `https://www.instagram.com/rapidrefreshivtherapy/` in the footer + Home Instagram strip.
- **Google Maps** — embedded on the Service Area screen.

## Notes
- All color, type, spacing, radius, shadow come from `styles.css` tokens — no hard-coded brand values in screens.
- All imagery is real (assets/photos/): hero backdrop, category cards, steps, collages, Who We Serve, founder shots (Home/About/Booking), corporate hero, and the Instagram grid. Pass `src` to `Photo` to swap any of them.
- Each screen file registers itself on `window` (Babel scripts don't share scope); `index.html` boots once all are present.
