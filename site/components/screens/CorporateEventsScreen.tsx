import { Button } from '../ui/Button';
import { Icon, type IconName } from '../ui/Icon';
import { SectionLabel } from '../ui/SectionLabel';
import { Photo } from '../kit/Photo';
import { Reveal } from '../kit/Reveal';
import { ROUTES, PHONE_DISPLAY, PHONE_TEL } from '../../lib/site';

const pill = { borderRadius: 'var(--radius-pill)' };

export function CorporateEventsScreen() {
  const corporate = ['Corporate Offices & HQs', 'Conferences & Summits', 'Wellness Days & Retreats', 'Sales Kickoffs & Off-sites'];
  const events = ['Bridal & Bachelorette Parties', 'Birthday Celebrations', 'Fitness Competitions', 'Milestone & Private Events'];
  const perks: [IconName, string, string][] = [
    ['users', 'Custom Group Pricing', 'Flexible per-person and package rates scaled to your group size and drips.'],
    ['calendar-clock', 'On-Site & On-Schedule', 'We handle setup and timing so your event flows without interruption.'],
    ['clipboard-check', 'Clinical Peace of Mind', 'RN-led, HIPAA-conscious care with intake and consent handled discreetly.'],
    ['sparkles', 'A Luxury Touchpoint', 'A memorable, premium wellness moment your guests will talk about.'],
  ];
  const tracks: [IconName, string, string, string[], string][] = [
    ['briefcase', 'Corporate Wellness', 'On-site hydration that keeps teams sharp, energized, and cared for.', corporate, 'var(--ivory-100)'],
    ['gem', 'Private Events', 'A glowing, memorable wellness moment for your celebration.', events, 'var(--gold-a16)'],
  ];

  return (
    <div>
      <section style={{ background: 'var(--navy-900)', padding: 'clamp(56px,6vw,104px) var(--gutter)' }}>
        <div className="rr-split" style={{ maxWidth: 'var(--container)', margin: '0 auto', gridTemplateColumns: '1.05fr 0.95fr' }}>
          <div>
            <SectionLabel>Corporate &amp; Events</SectionLabel>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--ivory)', letterSpacing: '-0.02em', margin: '20px 0 0', maxWidth: '18ch' }}>
              Group wellness, delivered in style.
            </h1>
            <p style={{ color: 'var(--ivory-a80)', fontSize: 'var(--fs-lg)', lineHeight: 1.6, margin: '22px 0 0', maxWidth: '50ch' }}>
              From boardrooms to bridal suites, we bring concierge IV therapy to your team or celebration, set up on-site and tailored to your schedule.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 34, flexWrap: 'wrap' }}>
              <Button as="a" href={ROUTES.booking} variant="primary" size="lg" style={pill}>
                Request Group Pricing
              </Button>
              <Button as="a" href={ROUTES.menu} variant="secondary" size="lg" style={pill}>
                View the Drip Menu
              </Button>
            </div>
          </div>
          <Reveal>
            <Photo src="/photos/corporate-hero.webp" alt="Corporate wellness day" caption="Corporate wellness day" ratio="4 / 5" radius="var(--radius-xl)" />
          </Reveal>
        </div>
      </section>

      <section style={{ background: 'var(--ivory)', padding: 'var(--section-y) var(--gutter)' }}>
        <div className="rr-grid-2" style={{ maxWidth: 'var(--container)', margin: '0 auto', gap: 26 }}>
          {tracks.map(([ic, title, blurb, list, tint], i) => (
            <Reveal key={title} delay={i * 90}>
              <div style={{ background: tint, borderRadius: 'var(--radius-xl)', padding: 'clamp(28px,3vw,44px)', height: '100%' }}>
                <span style={{ width: 58, height: 58, borderRadius: '50%', background: 'var(--ivory)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-600)', boxShadow: 'var(--shadow-sm)' }}>
                  <Icon name={ic} size={28} color="currentColor" />
                </span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--fs-d3)', color: 'var(--charcoal)', margin: '22px 0 10px', letterSpacing: '-0.01em' }}>{title}</h2>
                <p style={{ color: 'var(--slate-ink)', fontSize: '15px', lineHeight: 1.6, margin: '0 0 22px', maxWidth: '38ch' }}>{blurb}</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {list.map((item, j) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 0', borderBottom: j < list.length - 1 ? '1px solid rgba(58,65,79,0.12)' : 'none' }}>
                      <span style={{ width: 26, height: 26, flex: '0 0 auto', borderRadius: '50%', background: 'var(--ivory)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-600)', boxShadow: 'var(--shadow-xs)' }}>
                        <Icon name="check" size={14} color="currentColor" />
                      </span>
                      <span style={{ fontSize: '15.5px', color: 'var(--charcoal)', fontWeight: 500 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--ivory-100)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SectionLabel tone="onLight" align="center">Why Book With Us</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--charcoal)', letterSpacing: '-0.02em', margin: '18px 0 0' }}>Concierge care, at any scale.</h2>
          </div>
          <div className="rr-grid-4" style={{ marginTop: 52 }}>
            {perks.map(([ic, t, d], i) => (
              <Reveal key={t} delay={i * 70}>
                <div style={{ background: 'var(--ivory)', borderRadius: 'var(--radius-xl)', padding: '30px 26px', height: '100%', boxShadow: 'var(--shadow-sm)' }}>
                  <span style={{ color: 'var(--gold-600)' }}>
                    <Icon name={ic} size={28} color="currentColor" />
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.25rem', color: 'var(--charcoal)', margin: '18px 0 10px' }}>{t}</h3>
                  <p style={{ color: 'var(--slate-ink)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ivory)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div
            className="rr-split"
            style={{
              background: 'var(--navy-800)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(44px,5vw,76px) clamp(28px,5vw,68px)',
              gridTemplateColumns: '1.4fr 1fr',
              gap: 40,
              boxShadow: 'var(--shadow-lift)',
            }}
          >
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d2)', color: 'var(--ivory)', letterSpacing: '-0.02em', margin: 0 }}>Planning something? Let us tailor it.</h2>
              <p style={{ color: 'var(--ivory-a64)', fontSize: 'var(--fs-lg)', margin: '16px 0 0', maxWidth: '48ch' }}>
                Tell us your group size, date, and location, and we will build a custom quote.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Button as="a" href={ROUTES.booking} variant="primary" size="lg" style={pill}>
                Request Group Pricing
              </Button>
              <Button as="a" href={`tel:${PHONE_TEL}`} variant="ghost" size="lg" fullWidth style={pill} iconLeft={<Icon name="phone" size={17} color="currentColor" />}>
                {PHONE_DISPLAY}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
