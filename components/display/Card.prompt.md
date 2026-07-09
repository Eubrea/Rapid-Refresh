**Card** — flat matte surface, hairline border, soft shadow (no glow). `tone="navy"|"light"`, `interactive` for hover lift.

**Badge** — small pill marker: `gold` (Signature/Featured), `outline`, `solid`, `light`. Optional `icon`.

**Chip** — selectable filter for the drip menu; toggle `selected`.

**Stat** — big display figure + label for proof rows.

```jsx
<Card tone="navy" interactive>
  <Badge variant="gold" icon={<Icon name="star" size={14}/>}>Signature</Badge>
  <Stat value="22+" label="Years Acute-Care Experience" />
</Card>
<Chip selected icon={<Icon name="activity" size={16}/>}>Recovery</Chip>
```
