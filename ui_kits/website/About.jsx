/* global React, Photo, Reveal */
const DSa = window.RapidRefreshDesignSystem_646e39;

function About({ onNavigate }) {
  const { Button, Icon, SectionLabel, Stat } = DSa;
  const badges = [
    ['award', '22+ Years of Acute-Care Experience'],
    ['user-round-check', 'RN-Led Concierge Care'],
    ['shield-check', 'Fully Insured Mobile Practice'],
    ['flask-conical', 'Evidence-Based Wellness'],
    ['lock', 'HIPAA-Compliant Care'],
    ['clock', 'Same-Day Mobile Appointments'],
  ];
  return (
    <div>
      <section style={{ background: 'var(--navy-900)', padding: 'clamp(56px,6vw,104px) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
          <Reveal>
            <div style={{ position: 'relative', paddingBottom: 56, paddingRight: 56 }}>
              <Photo src="../../assets/photos/Founder About Section.webp" alt="Rahab Njuguna, RN" ratio="3 / 4" />
              <div style={{ position: 'absolute', right: 0, bottom: 0, width: '46%' }}>
                <Photo src="../../assets/photos/Founder 2.webp" alt="Rahab at the RapidRefresh studio" ratio="3 / 4" radius="var(--radius-lg)" style={{ border: '6px solid var(--navy-900)' }} />
              </div>
            </div>
          </Reveal>
          <div>
            <SectionLabel>Rahab Njuguna, RN · Founder</SectionLabel>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--ivory)', letterSpacing: '-0.02em', margin: '20px 0 0', maxWidth: '18ch' }}>Hospital expertise. Concierge care.</h1>
            <p style={{ color: 'var(--ivory-a80)', fontSize: 'var(--fs-lg)', lineHeight: 1.7, margin: '26px 0 0', maxWidth: '54ch' }}>
              With over 22 years of acute-care nursing experience, I founded RapidRefresh Mobile IV &amp; Wellness to combine hospital-level clinical expertise with the comfort and convenience of luxury concierge IV therapy.
            </p>
            <p style={{ color: 'var(--ivory-a64)', fontSize: '16px', lineHeight: 1.7, margin: '18px 0 0', maxWidth: '54ch' }}>
              My mission is simple: to deliver safe, personalized IV hydration and wellness services that help you look, feel, and perform at your best, with the professionalism, compassion, and exceptional care you deserve.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, margin: '34px 0 0' }}>
              <span style={{ width: 34, height: 1, background: 'var(--gold-400)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--gold-400)', letterSpacing: '0.01em' }}>Safety. Comfort. Results.</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ivory)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <SectionLabel tone="onLight">Why You Can Trust Us</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 44 }}>
            {badges.map(([ic, t], i) => (
              <Reveal key={t} delay={i * 60}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '24px 0', borderTop: '1px solid var(--ivory-300)' }}>
                  <span style={{ color: 'var(--gold-600)', marginTop: 2 }}><Icon name={ic} size={24} color="currentColor" /></span>
                  <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--charcoal)', lineHeight: 1.4 }}>{t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--navy-800)', padding: 'var(--section-y-tight) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container-text)', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--ivory)', letterSpacing: '-0.02em' }}>Experience the difference.</h2>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 30, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => onNavigate('booking')}>Book Your Drip</Button>
            <Button variant="secondary" size="lg" onClick={() => onNavigate('menu')}>View the Drip Menu</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

window.About = About;
