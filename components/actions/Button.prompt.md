**Button** — the brand's primary call-to-action; antique-gold fill for the main action, gold outline for secondary, ghost for tertiary, ivory for use on photography.

```jsx
<Button variant="primary" size="lg" iconRight={<Icon name="arrow-right" />}>Book Your Drip</Button>
<Button variant="secondary">View the Drip Menu</Button>
```

Variants: `primary | secondary | ghost | light`. Sizes: `sm | md | lg`. Set `fullWidth` on forms, `as="a"` + `href` for links. Labels are Title Case, rendered uppercase with wide tracking.

**IconButton** — icon-only control for click-to-call, socials, steppers, nav toggles. Always pass `ariaLabel`. `variant: solid | outline | ghost`, `round` for circular.
