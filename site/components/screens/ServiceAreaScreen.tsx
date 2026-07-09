import { Button } from '../ui/Button';
import { Icon, type IconName } from '../ui/Icon';
import { SectionLabel } from '../ui/SectionLabel';
import { Reveal } from '../kit/Reveal';
import { ROUTES, MAPS_EMBED, PHONE_DISPLAY, PHONE_TEL, SERVICE_AREAS } from '../../lib/site';

const pill = { borderRadius: 'var(--radius-pill)' };

export function ServiceAreaScreen() {
  const notes: [IconName, string, string][] = [
    ['navigation', 'Concierge Travel Included', 'Complimentary travel within our core service area; a modest fee may apply to outer requests.'],
    ['clock', 'Same-Day When Available', 'Book early in the day for the best chance at a same-day concierge visit.'],
    ['map-pin', 'Beyond the Map?', 'Just outside the area? Reach out and we regularly accommodate nearby requests.'],
  ];

  return (
    <div>
      <section style={{ background: 'var(--navy-900)', padding: 'clamp(56px,6vw,96px) var(--gutter) var(--section-y)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <SectionLabel>Service Area</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--ivory)', letterSpacing: '-0.02em', margin: '20px 0 0', maxWidth: '20ch' }}>
            Mobile IV therapy across Greater Houston.
          </h1>
          <p style={{ color: 'var(--ivory-a80)', fontSize: 'var(--fs-lg)', lineHeight: 1.6, margin: '20px 0 0', maxWidth: '52ch' }}>
            We bring the drip to you at home, office, gym, or hotel, throughout Houston and the surrounding communities.
          </p>

          <div className="rr-map-split" style={{ marginTop: 48 }}>
            <Reveal>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--navy-300)', boxShadow: 'var(--shadow-lift)', height: '100%', minHeight: 420 }}>
                <iframe
                  title="RapidRefresh service area, Greater Houston"
                  src={MAPS_EMBED}
                  style={{ width: '100%', height: '100%', minHeight: 420, border: 0, filter: 'grayscale(0.3) contrast(1.05)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
            <div style={{ background: 'var(--navy-800)', border: '1px solid var(--navy-300)', borderRadius: 'var(--radius-xl)', padding: '30px 30px 34px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.375rem', color: 'var(--ivory)', margin: '0 0 20px' }}>Communities we serve</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {SERVICE_AREAS.map((a) => (
                  <span
                    key={a}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '9px 14px',
                      borderRadius: 'var(--radius-pill)',
                      background: 'var(--navy-400)',
                      border: '1px solid var(--navy-300)',
                      color: 'var(--ivory-a80)',
                      fontSize: '13.5px',
                      fontWeight: 500,
                    }}
                  >
                    <Icon name="map-pin" size={14} color="var(--gold-400)" /> {a}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <Button as="a" href={ROUTES.booking} variant="primary" size="lg" fullWidth style={pill}>
                  Book Your Drip
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ivory)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div className="rr-grid-3">
            {notes.map(([ic, t, d], i) => (
              <Reveal key={t} delay={i * 70}>
                <div style={{ background: 'var(--ivory-100)', borderRadius: 'var(--radius-xl)', padding: '30px 28px', height: '100%' }}>
                  <span style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--ivory)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-600)', boxShadow: 'var(--shadow-sm)' }}>
                    <Icon name={ic} size={24} color="currentColor" />
                  </span>
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
          <p style={{ color: 'var(--slate-ink)', fontSize: 'var(--fs-lg)', margin: '16px auto 30px', maxWidth: '46ch' }}>
            Give us a call and we will confirm availability in your area right away.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button as="a" href={ROUTES.booking} variant="primary" size="lg" style={pill}>
              Book Your Drip
            </Button>
            <Button as="a" href={`tel:${PHONE_TEL}`} variant="secondary" size="lg" style={pill} iconLeft={<Icon name="phone" size={17} color="currentColor" />}>
              {PHONE_DISPLAY}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
