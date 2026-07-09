/* global React */
// Shared kit helpers: elegant image placeholder + section label + reveal wrapper.
const DS = window.RapidRefreshDesignSystem_646e39;

/**
 * Photo — renders a real image if `src` given, else an elegant matte placeholder
 * (never a dashed box). Placeholder shows a faint droplet + a small gold caption.
 */
function Photo({ src, alt = '', caption = 'Pictorial', ratio = '4 / 3', radius = 'var(--radius-xl)', style = {} }) {
  const box = {
    position: 'relative', width: '100%', aspectRatio: ratio, borderRadius: radius,
    overflow: 'hidden', background: 'var(--navy-500)', ...style,
  };
  if (src) {
    return (
      <div style={box}>
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    );
  }
  return (
    <div style={{ ...box, border: '1px solid var(--navy-300)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.14 }}>
        <DS.Icon name="droplet" size={120} color="var(--gold-300)" strokeWidth={1} />
      </div>
      <span style={{
        position: 'absolute', bottom: 16, left: 18,
        fontFamily: 'var(--font-text)', fontSize: '11px', fontWeight: 600,
        letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-300)',
      }}>{caption}</span>
    </div>
  );
}

/** Reveal — gentle fade+rise on scroll into view (spa-calm, no bounce). */
function Reveal({ children, delay = 0, style = {} }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((es) => { es.forEach(e => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }); }, { threshold: 0.12 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : 'translateY(22px)',
      transition: `opacity var(--dur-reveal) var(--ease-out) ${delay}ms, transform var(--dur-reveal) var(--ease-out) ${delay}ms`,
      ...style,
    }}>{children}</div>
  );
}

/**
 * Collage — the brand's editorial two-column arrangement (medvi-inspired):
 * LEFT = a tinted panel holding one large image, with a titled gold checklist
 * beneath it. RIGHT = eyebrow + accent-word headline, a pair of tall images,
 * then a subhead, body, and CTA. `flip` mirrors the columns.
 */
function Collage({
  eyebrow, accentWord, headlineRest,
  mainCaption = 'Pictorial', captionA = 'Lifestyle', captionB = 'Detail',
  mainSrc, aSrc, bSrc,
  checklistTitle, checklist = [], subhead, body, ctaLabel, onCta,
  bg = 'var(--ivory)', tint = 'var(--gold-a16)', flip = false,
}) {
  const { SectionLabel, Button, Icon } = DS;
  const pill = { borderRadius: 'var(--radius-pill)' };

  const left = (
    <Reveal>
      <div style={{ background: tint, borderRadius: 'var(--radius-xl)', padding: 20 }}>
        <Photo src={mainSrc} caption={mainCaption} ratio="4 / 3" radius="var(--radius-lg)" />
      </div>
      <div style={{ marginTop: 32 }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.375rem', color: 'var(--charcoal)', margin: '0 0 18px', letterSpacing: '-0.01em' }}>{checklistTitle}</h3>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 13 }}>
          {checklist.map((item) => (
            <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ width: 26, height: 26, flex: '0 0 auto', borderRadius: '50%', background: 'var(--gold-a16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-600)' }}><Icon name="check" size={14} color="currentColor" /></span>
              <span style={{ fontSize: '15px', color: 'var(--slate-ink)' }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );

  const right = (
    <Reveal delay={80}>
      <SectionLabel tone="onLight">{eyebrow}</SectionLabel>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--charcoal)', letterSpacing: '-0.02em', margin: '18px 0 0', lineHeight: 1.08 }}>
        <span style={{ color: 'var(--gold-600)' }}>{accentWord}</span> {headlineRest}
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, margin: '30px 0 0' }}>
        <Photo src={aSrc} caption={captionA} ratio="3 / 4" radius="var(--radius-lg)" />
        <Photo src={bSrc} caption={captionB} ratio="3 / 4" radius="var(--radius-lg)" style={{ marginTop: 34 }} />
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--fs-d3)', color: 'var(--charcoal)', letterSpacing: '-0.01em', margin: '34px 0 0' }}>{subhead}</h3>
      <p style={{ color: 'var(--slate-ink)', fontSize: '16px', lineHeight: 1.7, margin: '14px 0 0', maxWidth: '46ch' }}>{body}</p>
      <div style={{ marginTop: 28 }}><Button variant="primary" size="lg" style={pill} onClick={onCta}>{ctaLabel}</Button></div>
    </Reveal>
  );

  return (
    <section style={{ background: bg, padding: 'var(--section-y) var(--gutter)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'start' }}>
        {flip ? [right, left].map((c, i) => <div key={i}>{c}</div>) : [left, right].map((c, i) => <div key={i}>{c}</div>)}
      </div>
    </section>
  );
}

Object.assign(window, { Photo, Reveal, Collage });
