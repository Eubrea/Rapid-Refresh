**Input / Select / Checkbox** — booking &amp; intake form fields. All adapt to `tone="onNavy"|"onLight"`; focus shows a gold hairline. HIPAA-conscious forms compose these.

```jsx
<Input label="Full Name" required placeholder="Jane Doe" icon={<Icon name="user" size={18}/>} />
<Select label="Service Location" options={["Home","Office","Gym","Hotel"]} required />
<Checkbox label="I consent to treatment and confirm the intake information is accurate." />
```
