**DripRow** — a signature IV drip as a menu line: icon, name (+ optional ™ / Signature marker), "best for" descriptor, and two-tier Standard/Premium pricing. Stack in a vertical list on navy.

**BoosterRow** — compact add-on (injection / vitamin / amino) with price and optional add toggle; use in a 2–3 column grid.

**MembershipCard** — wellness-club tier with price, benefit list, CTA; `featured` for the gold "most chosen" tier.

```jsx
<DripRow name="Game Day Drip™" bestFor="Performance &amp; Recovery" standard={219} premium={279} icon="activity" signature />
<BoosterRow name="Glutathione" bestFor="Antioxidant Support" price={65} onAdd={fn} />
<MembershipCard name="Performance Plus" price={329} tagline="For the consistently active." features={["2 Premium IV Drips Monthly","Performance Booster Every Visit"]} featured cta="Join Performance Plus" />
```
