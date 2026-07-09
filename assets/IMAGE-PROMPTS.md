# RapidRefresh — Image Generation Prompts

The complete shot list for the website. Copy any prompt into DALL·E, Midjourney, Firefly, or your generator of choice. Drop the result into `assets/photos/` using the **exact filename** given — then tell me and I'll wire it in (or follow the "Wire it" note yourself).

Rahab's real photos are already in place (`founder-portrait-02.webp`, `founder-clinical-01.webp`) — no prompt needed for those.

---

## Global art direction (paste into every prompt or set as a style)
> **Photorealistic editorial photograph. Matte, luxury-spa mood. Warm-neutral grade with a matte deep-navy, antique-gold, and off-white ivory palette. Soft natural window light, shallow depth of field, calm and premium. Clean, uncluttered, high-end. No text, no logos, no watermarks, no on-screen graphics.**

**Negative / avoid:** text, watermarks, brand logos, harsh flash, oversaturation, glossy HDR, clutter, distorted hands, extra fingers, plastic skin, stock-photo cheesiness, cool blue cast.

**Consistency tips:** keep the same navy-scrubs wardrobe for any nurse, the same warm ivory interiors, and gold accents (IV stand, jewelry, décor). Aim for a cohesive set that looks shot by one photographer.

---

## 1 · Hero & brand (highest priority)

**`hero.webp`** — 4:5 portrait *(optional hero feature image / social share)*
> Elegant registered nurse in fitted deep-navy scrubs preparing an IV drip for a relaxed client seated in a sunlit, upscale modern living room. Ivory linen, brushed-gold décor, a slim gold IV stand. Soft window light, shallow depth of field, serene luxury mood.

---

## 2 · Homepage — "Who We Serve" (priority)
Two stacked, overlapping images.

**`serve-athlete.webp`** — 4:5 portrait
> A fit athlete in premium athleisure receiving an IV drip while seated in a modern home gym, toweling off after training. Warm cinematic light, brushed-gold IV line detail, aspirational and clean.

**`serve-athome.webp`** — 1:1 square
> Close, warm detail of a person relaxing on an ivory sofa with an IV line taped neatly on the forearm, a cup of tea and a book nearby. Cozy luxury home, soft focus background.

*Wire it:* replace the two `<Photo caption=…>` calls in `Home.jsx` "WHO WE SERVE" with `src="../../assets/photos/serve-athlete.webp"` and `serve-athome.webp`.

---

## 3 · Homepage collage — Boosters & Injections
**`boosters-flatlay.webp`** — 4:3 landscape
> Overhead flat-lay of labeled IV booster vials and glass ampoules arranged neatly on an ivory marble surface with a few eucalyptus sprigs and fresh citrus. Clinical yet luxurious, soft shadow.

**`booster-glutathione.webp`** — 3:4 portrait
> Gloved nurse's hands drawing a clear antioxidant solution into a syringe from a vial, close-up, warm light, matte navy background, shallow depth of field.

**`booster-b12.webp`** — 3:4 portrait
> Close-up of a small B12 injection being gently administered to a person's upper arm in a bright, clean home setting. Warm, reassuring, premium.

*Wire it:* on the Boosters `<Collage>` in `Home.jsx`, add `mainSrc="../../assets/photos/boosters-flatlay.webp"`, `aSrc="…/booster-glutathione.webp"`, `bSrc="…/booster-b12.webp"`.

---

## 4 · Homepage collage — Corporate & Events
**`corporate-day.webp`** — 4:3 landscape
> Sleek corporate lounge where two professionals in business attire relax with IV drips during a wellness day, floor-to-ceiling windows with a soft-focus city skyline. Warm neutral grade, navy and gold accents.

**`event-bridal.webp`** — 3:4 portrait
> Elegant bridal party in ivory robes relaxing together in a bright suite, receiving IV drips before an event. Gold jewelry, champagne-toned décor, soft romantic light.

**`corporate-setup.webp`** — 3:4 portrait
> A nurse in navy scrubs setting up a tidy mobile IV station on a marble console — gold tray, neatly arranged supplies — in an upscale event space. Professional, premium.

*Wire it:* on the Corporate `<Collage>`: `mainSrc=corporate-day.webp`, `aSrc=event-bridal.webp`, `bSrc=corporate-setup.webp`.

---

## 5 · Homepage collage — The Wellness Club
**`member-kit.webp`** — 4:3 landscape
> A luxurious concierge wellness kit presented in an ivory gift box — folded navy cloth, gold-labeled vials, a handwritten card — on a marble surface. Warm, aspirational unboxing feel.

**`member-drip.webp`** — 3:4 portrait
> A serene woman relaxing in a stylish ivory-and-navy living room mid-IV-drip, eyes closed, content. Monthly-ritual calm, soft golden light.

**`member-b12.webp`** — 3:4 portrait
> Bright close-up of a quick B12 booster injection into the shoulder, nurse in navy scrubs, clean modern interior, warm tones.

*Wire it:* on the Memberships `<Collage>`: `mainSrc=member-kit.webp`, `aSrc=member-drip.webp`, `bSrc=member-b12.webp`.

---

## 6 · Corporate & Events page hero
**`corporate-hero.webp`** — 4:5 portrait
> A confident team in smart-casual attire together in a bright modern office lounge, one receiving an IV drip, others chatting with coffee. Wellness-day energy, warm neutral grade, navy and gold cues.

*Wire it:* `CorporateEvents.jsx` hero `<Photo caption="Corporate wellness day">` → add `src="../../assets/photos/corporate-hero.webp"`.

---

## 7 · Homepage category cards *(optional — currently elegant icon tiles)*
Small square lifestyle images if you'd rather show photos than the line icons. 1:1 square each.

- **`cat-hydration.webp`** — Glass of infused water and an IV bag on ivory marble, fresh and clean, warm light.
- **`cat-recovery.webp`** — Athlete's forearm with a neat IV line after a workout, gym softly blurred.
- **`cat-immunity.webp`** — Citrus, ginger, and a vitamin vial arranged on ivory, immune-boost still-life.
- **`cat-beauty.webp`** — Dewy, glowing skin close-up of a woman's face with gold jewelry, spa-luxe.

*Wire it:* ask me to switch the `CatCard` icon tiles to images — it's a small change to `Home.jsx`.

---

## 8 · Homepage "How It Works" steps *(optional — currently icon tiles)*
Landscape 3:2 each, to replace the three icon panels.

- **`step-request.webp`** — Hands holding a phone booking an appointment on a clean scheduling screen (screen blank/soft), warm desk with coffee.
- **`step-intake.webp`** — A tablet and a signed clipboard on an ivory table, nurse's hands nearby, HIPAA-conscious calm.
- **`step-arrive.webp`** — Nurse in navy scrubs at a front door with a premium medical concierge case, golden-hour, welcoming.

---

## 9 · Homepage Instagram strip *(optional — currently icon tiles)*
Six square lifestyle tiles that look like a cohesive IG grid. 1:1 each. `ig-01.webp` … `ig-06.webp`:
> Warm, on-brand lifestyle vignettes — a gold IV stand by a window, infused water, a smiling client mid-drip, eucalyptus and vials flat-lay, nurse's navy-scrubs detail, a glowing-skin selfie-style portrait. Cohesive matte-navy-and-gold grade.

---

### Priority order if generating a few first
1. `serve-athlete.webp` + `serve-athome.webp` (Who We Serve)
2. `boosters-flatlay.webp`, `corporate-day.webp`, `member-kit.webp` (the three collage anchor images)
3. `corporate-hero.webp`
4. Everything else (category / steps / IG are optional polish)

Once any of these land in `assets/photos/`, tell me the filenames and I'll wire them into the components.
