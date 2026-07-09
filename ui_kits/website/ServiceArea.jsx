/* global React, Photo, Reveal */
const DSsa = window.RapidRefreshDesignSystem_646e39;
const pillSA = { borderRadius: 'var(--radius-pill)' };

function ServiceArea({ onNavigate, onBook }) {
  const { Button, Icon, SectionLabel } = DSsa;
  const areas = ['Houston', 'Sugar Land', 'Katy', 'The Woodlands', 'Pearland', 'Missouri City', 'Alvin', 'Manvel', 'Fresno'];
  const notes = [
    ['navigation', 'Concierge Travel Included', 'Complimentary travel within our core service area; a modest fee may apply to outer requests.'],
    ['clock', 'Same-Day When Available', 'Book early in the day for the best chance at a same-day concierge visit.'],
    ['map-pin', 'Beyond the Map?', 'Just outside the area? Reach out and we regularly accommodate nearby requests.'],
  ];

  return (
    <div>
      <section style={{ background: 'var(--navy-900)', padding: 'clamp(56px,6vw,96px) var(--gutter) var(--section-y)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <SectionLabel>Service Area</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--ivory)', letterSpacing: '-0.02em', margin: '20px 0 0', maxWidth: '20ch' }}>Mobile IV therapy across Greater Houston.</h1>
          <p style={{ color: 'var(--ivory-a80)', fontSize: 'var(--fs-lg)', lineHeight: 1.6, margin: '20px 0 0', maxWidth: '52ch' }}>
            We bring the drip to you at home, office, gym, or hotel, throughout Houston and the surrounding communities.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.65fr', gap: 'clamp(24px,4vw,44px)', marginTop: 48, alignItems: 'stretch' }}>
            {/* Map */}
            <Reveal>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--navy-300)', boxShadow: 'var(--shadow-lift)', height: '100%', minHeight: 420 }}>
                <iframe
                  title="RapidRefresh service area, Greater Houston"
                  src="https://www.google.com/maps?q=Houston,+Texas&output=embed"
                  style={{ width: '100%', height: '100%', minHeight: 420, border: 0, filter: 'grayscale(0.3) contrast(1.05)' }}
                  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </Reveal>
            {/* Area chips */}
            <div style={{ background: 'var(--navy-800)', border: '1px solid var(--navy-300)', borderRadius: 'var(--radius-xl)', padding: '30px 30px 34px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.375rem', color: 'var(--ivory)', margin: '0 0 20px' }}>Communities we serve</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {areas.map(a => (
                  <span key={a} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 14px', borderRadius: 'var(--radius-pill)', background: 'var(--navy-400)', border: '1px solid var(--navy-300)', color: 'var(--ivory-a80)', fontSize: '13.5px', fontWeight: 500 }}>
                    <Icon name="map-pin" size={14} color="var(--gold-400)" /> {a}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <Button variant="primary" size="lg" fullWidth style={pillSA} onClick={onBook}>Book Your Drip</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ivory)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {notes.map(([ic, t, d], i) => (
              <Reveal key={t} delay={i * 70}>
                <div style={{ background: 'var(--ivory-100)', borderRadius: 'var(--radius-xl)', padding: '30px 28px', height: '100%' }}>
                  <span style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--ivory)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-600)', boxShadow: 'var(--shadow-sm)' }}><Icon name={ic} size={24} color="currentColor" /></span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.3rem', color: 'var(--charcoal)', margin: '18px 0 10px' }}>{t}</h3>
                  <p style={{ color: 'var(--slate-ink)', fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ivory)', padding: '0 var(--gutter) var(--section-y)' }}>
        <div style={{ maxWidth: 'var(--container-text)', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d2)', color: 'var(--charcoal)', letterSpacing: '-0.02em' }}>Not sure if we reach you?</h2>
          <p style={{ color: 'var(--slate-ink)', fontSize: 'var(--fs-lg)', margin: '16px auto 30px', maxWidth: '46ch' }}>Give us a call and we’ll confirm availability in your area right away.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" style={pillSA} onClick={onBook}>Book Your Drip</Button>
            <a href="tel:+17138517590" style={{ textDecoration: 'none' }}><Button variant="secondary" size="lg" style={pillSA} iconLeft={<Icon name="phone" size={17} color="currentColor" />}>(713) 851-7590</Button></a>
          </div>
        </div>
      </section>
    </div>
  );
}

window.ServiceArea = ServiceArea;
