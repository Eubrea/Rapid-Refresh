/* global React, Photo, Reveal */
const DSgc = window.RapidRefreshDesignSystem_646e39;
const pillGc = { borderRadius: 'var(--radius-pill)' };

function GiftCards({ onNavigate, onBook }) {
  const { Button, Icon, SectionLabel } = DSgc;
  const [amount, setAmount] = React.useState(250);
  const amounts = [100, 150, 250, 500];
  const steps = [
    ['gift', 'Choose an amount', 'Pick a preset or enter a custom value, any amount works.'],
    ['mail', 'Personalize & send', 'Add a note and we’ll deliver a beautiful digital card by email.'],
    ['calendar-check', 'They book', 'Your recipient redeems it toward any drip, injection, or membership.'],
  ];

  return (
    <div>
      <section style={{ background: 'var(--navy-900)', padding: 'clamp(56px,6vw,104px) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
          <div>
            <SectionLabel>Gift Cards</SectionLabel>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--ivory)', letterSpacing: '-0.02em', margin: '20px 0 0', maxWidth: '18ch' }}>Give the gift of feeling exceptional.</h1>
            <p style={{ color: 'var(--ivory-a80)', fontSize: 'var(--fs-lg)', lineHeight: 1.6, margin: '22px 0 0', maxWidth: '50ch' }}>
              A RapidRefresh gift card is wellness they’ll actually use: concierge IV therapy delivered wherever they are.
            </p>

            {/* amount selector */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', margin: '34px 0 0' }}>
              {amounts.map(a => (
                <button key={a} onClick={() => setAmount(a)} style={{
                  cursor: 'pointer', padding: '14px 24px', borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.25rem',
                  background: amount === a ? 'var(--gold-fill)' : 'transparent',
                  color: amount === a ? 'var(--navy-900)' : 'var(--ivory)',
                  border: `1px solid ${amount === a ? 'transparent' : 'var(--gold-a40)'}`,
                  boxShadow: amount === a ? 'var(--shadow-gold)' : 'none',
                  transition: 'all var(--dur-fast) var(--ease-out)',
                }}>${a}</button>
              ))}
              <span style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--ivory-a44)', fontSize: '13px', paddingLeft: 6 }}>or a custom amount</span>
            </div>
            <div style={{ display: 'flex', gap: 14, marginTop: 34, flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" style={pillGc} onClick={onBook}>Send a ${amount} Card</Button>
              <Button variant="secondary" size="lg" style={pillGc} onClick={() => onNavigate('menu')}>See What It Covers</Button>
            </div>
          </div>

          {/* gift card visual */}
          <Reveal>
            <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: 'var(--navy-700)', border: '1px solid var(--gold-a40)', boxShadow: 'var(--shadow-lift)', aspectRatio: '1.6 / 1', padding: 'clamp(24px,3vw,38px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.4rem', color: 'var(--ivory)' }}>RapidRefresh</span>
                <Icon name="droplet" size={30} color="var(--gold-400)" />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-text)', fontSize: '11px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold-400)' }}>Digital Gift Card</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(2.5rem,6vw,4rem)', color: 'var(--ivory)', letterSpacing: '-0.02em', lineHeight: 1 }}>${amount}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ background: 'var(--ivory)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SectionLabel tone="onLight" align="center">How Gifting Works</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--charcoal)', letterSpacing: '-0.02em', margin: '18px 0 0' }}>Thoughtful in three steps.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 52 }}>
            {steps.map(([ic, t, d], i) => (
              <Reveal key={t} delay={i * 80}>
                <div style={{ background: 'var(--ivory-100)', borderRadius: 'var(--radius-xl)', padding: '32px 28px', height: '100%' }}>
                  <span style={{ width: 54, height: 54, borderRadius: '50%', background: 'var(--ivory)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-600)', boxShadow: 'var(--shadow-sm)' }}><Icon name={ic} size={26} color="currentColor" /></span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.3rem', color: 'var(--charcoal)', margin: '18px 0 10px' }}>{t}</h3>
                  <p style={{ color: 'var(--slate-ink)', fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <p style={{ color: 'var(--slate-ink)', fontSize: '14px', margin: '0 0 20px' }}>Gift cards never expire and can be applied to any service, booster, or membership.</p>
            <Button variant="primary" size="lg" style={pillGc} onClick={onBook}>Send a Gift Card</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

window.GiftCards = GiftCards;
