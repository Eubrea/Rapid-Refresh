**Icon** — inline lucide glyph with brand defaults (1.75 stroke, currentColor). Requires the lucide UMD global on the page.

```jsx
<Icon name="droplet" size={22} color="var(--gold-400)" />
```

**Logo** — droplet mark + wordmark, soft warm drop shadow. Pass `src` (relative path to `logo-512.png`); `layout="stacked"` for vertical lockup, `tone="onLight"` on ivory.

**SectionLabel** — the brand eyebrow (gold hairline + wide-tracked small caps). The intentional replacement for pill eyebrows.

```jsx
<SectionLabel>Why RapidRefresh</SectionLabel>
```
