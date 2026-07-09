---
name: rapidrefresh-design
description: Use this skill to generate well-branded interfaces and assets for RapidRefresh Mobile IV & Wellness (a luxury RN-led mobile IV therapy brand in Houston), either for production or throwaway prototypes/mocks. Contains essential design guidelines, matte-navy & antique-gold colors, Jost/Hanken Grotesk type, fonts, logo & founder assets, and website UI-kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill first — it is the full design guide (brand context, content voice, visual foundations, iconography, and a file index). Then explore the other available files:

- `styles.css` + `tokens/` — the token system (matte navy, antique gold, ivory; Jost + Hanken Grotesk). Link `styles.css` to inherit everything.
- `components/` — reusable React primitives (Button, IconButton, Input, Select, Checkbox, Card, Badge, Chip, Stat, DripRow, BoosterRow, MembershipCard, Icon, Logo, SectionLabel). Each has a `.d.ts` and `.prompt.md`.
- `ui_kits/website/` — full click-through website recreation (Home, Drip Menu, Memberships, About, Booking).
- `guidelines/` — foundation specimen cards.
- `assets/` — cleaned logo (transparent), founder photography, and `IMAGE-PROMPTS.md` for generating the remaining pictorials.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files for the user to view, composing the design-system components and tokens. If working on production code (Next.js + Framer + lucide-react), copy assets and read the rules here to design as an expert in this brand.

Brand guardrails: matte navy (never glossy/saturated), antique gold used sparingly as precious metal, off-white ivory (never pure white), whitespace-forward luxury layout, no serif faces, no eyebrow pills (use the gold-hairline SectionLabel), no numbered "01/02/03" step chips, no emoji, no AI-slop gradients. Voice is calm concierge: second person to the client, first person only in the founder's voice. Signature triad: **Safety. Comfort. Results.**

If the user invokes this skill without other guidance, ask what they want to build, ask a few focused questions, and act as an expert designer who outputs HTML artifacts or production code as needed.
