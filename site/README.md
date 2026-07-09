# RapidRefresh Mobile IV & Wellness — Marketing Site

Production build of the RapidRefresh marketing site, ported from the design system
(`../tokens`, `../components`) and the UI-kit click-through (`../ui_kits/website`).

**Stack:** Next.js 14 (App Router) · TypeScript · Framer Motion · lucide-react · next/image.

## Run

```bash
cd site
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerender static)
```

## Structure

```
app/                      Route segments; each page.tsx sets metadata + renders a screen
  layout.tsx              Root chrome (Nav + Footer), global metadata, LocalBusiness JSON-LD
  page.tsx                Home
  drip-menu/ memberships/ pricing/ service-area/ corporate-events/
  about/ booking/ gift-cards/ faq/
  sitemap.ts robots.ts    SEO groundwork
components/
  ui/                     Design-system primitives (Button, Card, Chip, DripRow, Icon, ...)
  kit/                    Photo (next/image), Reveal (Framer Motion), Collage
  chrome/                 Nav ("Infusion Line") + Footer
  screens/                One component per page
lib/site.ts               Integrations + route map + footer/SEO data (single source of truth)
styles/
  globals.css             Imports tokens (unchanged) + the responsive layer
  tokens/                 Copied verbatim from ../tokens — the styling source of truth
public/photos/            Site imagery (from ../assets/photos, kebab-cased)
```

## Styling

All color, type, spacing, radius, shadow, and motion come from the CSS custom
properties in `styles/tokens/*` (copied unmodified from the design system). No
brand hex values are hard-coded in components. The desktop-authored kit is made
responsive by the `rr-*` grid/layout classes in `globals.css` plus the mobile nav
drawer in `Nav.tsx`.

## Integrations

- **JaneApp** instant booking: `https://rapidrefreshivtherapy.janeapp.com/`
  (Booking page banner + confirmation, footer). Primary "Book" CTAs route to the
  internal `/booking` intake form.
- **Internal intake form** (`/booking`): HIPAA-conscious. Client-side only — it
  does not transmit or store PHI; on submit it confirms and points to JaneApp/call.
  Wire to a HIPAA-compliant endpoint before collecting real submissions.
- **Instagram**: `https://www.instagram.com/rapidrefreshivtherapy/` (footer + Home strip).
- **Google Maps** embed on `/service-area`.
- **Click-to-call**: `(713) 851-7590` throughout.

## SEO

Per-page `<title>`/meta and canonicals, semantic headings, footer keyword +
service-area rows, `sitemap.xml`, `robots.txt`, and `MedicalBusiness` JSON-LD.
Route map lives in `lib/site.ts`; adding the ~40 local-SEO pages is a matter of
new segments that reuse the screen components.

## Open items (pending client confirmation — not built)

- Before/after gallery (assets pending).
- NAD+ dosing/price confirmation (currently shows the design-source $349/$449).
- The three dedicated business email addresses (footer uses the single
  `hello@rapidrefreshiv.com` inbox carried from the design source).
