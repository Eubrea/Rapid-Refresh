import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { SectionLabel } from '../ui/SectionLabel';
import { MembershipCard } from '../ui/MembershipCard';
import { Reveal } from '../kit/Reveal';
import { ROUTES } from '../../lib/site';

type Tier = [string, number, string, string[], string, boolean];

export function MembershipsScreen() {
  const tiers: Tier[] = [
    [
      'Essential Hydration Premium',
      179,
      'Consistent monthly hydration to keep you feeling your best.',
      ['1 IV Therapy Session Monthly', 'Monthly Vitamin B12 Injection', '10% Off Additional IVs', 'Priority Scheduling', 'Exclusive Member Pricing'],
      'Become a Member',
      false,
    ],
    [
      'Performance Plus',
      329,
      'For the consistently active and high-performing.',
      ['2 Premium IV Drips Monthly', 'Performance Booster Every Visit', 'High-Dose Vitamin B12', 'Priority Booking', 'Complimentary Travel (within service area)'],
      'Join Performance Plus',
      true,
    ],
    [
      'Elite Concierge',
      599,
      'White-glove wellness, prioritized all year.',
      ['4 Premium IV Drips Monthly', 'Monthly Glutathione Push', 'Unlimited Boosters on Member Visits', 'VIP Concierge Scheduling', 'Premium Travel Included', 'Quarterly Guest Pass'],
      'Become Elite',
      false,
    ],
  ];
  const love = [
    'Save hundreds every year',
    'Consistent hydration & wellness',
    'Priority appointments',
    'Concierge to home, office, or hotel',
    'Exclusive member-only pricing',
  ];

  return (
    <div>
      <section style={{ background: 'var(--navy-900)', padding: 'clamp(56px,6vw,96px) var(--gutter) 0' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SectionLabel align="center">The Wellness Club</SectionLabel>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--ivory)', letterSpacing: '-0.02em', margin: '20px auto 0', maxWidth: '20ch' }}>
            Make wellness part of your lifestyle.
          </h1>
          <p style={{ color: 'var(--ivory-a64)', fontSize: 'var(--fs-lg)', margin: '18px auto 0', maxWidth: '52ch' }}>
            Monthly IV therapy, exclusive savings, and concierge-level care, designed to keep you feeling your best.
          </p>
        </div>
        <div className="rr-grid-3" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '56px 0 var(--section-y)', alignItems: 'stretch' }}>
          {tiers.map(([n, p, tag, feats, cta, feat], i) => (
            <Reveal key={n} delay={i * 80} style={{ display: 'flex' }}>
              <MembershipCard name={n} price={p} tagline={tag} features={feats} cta={cta} featured={feat} href={ROUTES.booking} style={{ width: '100%' }} />
            </Reveal>
          ))}
        </div>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 0 var(--section-y)' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 24,
              flexWrap: 'wrap',
              padding: '24px 30px',
              background: 'var(--navy-800)',
              border: '1px solid var(--gold-a40)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <span style={{ width: 50, height: 50, flex: '0 0 auto', borderRadius: '50%', background: 'var(--gold-a16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-400)' }}>
                <Icon name="syringe" size={22} color="currentColor" />
              </span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.3rem', color: 'var(--ivory)' }}>B12 Energy Boost Package</div>
                <div style={{ color: 'var(--ivory-a64)', fontSize: '14px', marginTop: 3 }}>A weekly Vitamin B12 injection, four per month, to keep your energy steady.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '2rem', color: 'var(--gold-400)' }}>$155</span>
              <span style={{ color: 'var(--ivory-a64)', fontSize: '14px' }}>/ month</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ivory)', padding: 'var(--section-y) var(--gutter)' }}>
        <div className="rr-split" style={{ maxWidth: 'var(--container)', margin: '0 auto', gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <SectionLabel tone="onLight">Why Members Love It</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--charcoal)', letterSpacing: '-0.02em', margin: '18px 0 0', maxWidth: '16ch' }}>
              The smarter way to stay well.
            </h2>
          </div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {love.map((l, i) => (
              <li key={l} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 0', borderBottom: i < love.length - 1 ? '1px solid var(--ivory-300)' : 'none' }}>
                <Icon name="check" size={20} color="var(--gold-600)" />
                <span style={{ fontSize: '17px', color: 'var(--charcoal)', fontWeight: 500 }}>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ background: 'var(--navy-800)', padding: 'var(--section-y-tight) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container-text)', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--ivory)', letterSpacing: '-0.02em' }}>Join the Wellness Club</h2>
          <p style={{ color: 'var(--ivory-a64)', fontSize: 'var(--fs-lg)', margin: '16px auto 30px', maxWidth: '42ch' }}>
            Premium IV therapy with exclusive member benefits, all year long.
          </p>
          <Button as="a" href={ROUTES.booking} variant="primary" size="lg">
            Become a Member
          </Button>
        </div>
      </section>
    </div>
  );
}
