'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { SectionLabel } from '../ui/SectionLabel';
import { DripRow } from '../ui/DripRow';
import { BoosterRow } from '../ui/BoosterRow';
import { ROUTES } from '../../lib/site';
import type { IconName } from '../ui/Icon';

const pill = { borderRadius: 'var(--radius-pill)' };

type Drip = [string, string, number, number, IconName, boolean];

export function PricingScreen() {
  const router = useRouter();
  const book = () => router.push(ROUTES.booking);

  const drips: Drip[] = [
    ['Essential Hydration', 'Hydration & Electrolytes', 169, 219, 'droplet', false],
    ['Energy Reset', 'Energy & Mental Clarity', 189, 239, 'zap', false],
    ['RapidRefresh Defense', 'Immune Support', 199, 249, 'shield-check', false],
    ["Myers' Cocktail", 'Overall Wellness', 199, 259, 'flask-conical', false],
    ['Game Day Drip™', 'Performance & Recovery', 219, 279, 'activity', true],
    ['Glass Skin Drip', 'Beauty & Skin Health', 239, 319, 'sparkles', true],
    ['Morning After Rescue™', 'Hangover Recovery', 249, 329, 'sunrise', true],
    // TODO(client): confirm NAD+ dosing & price. $349/$449 carried from design source, pending confirmation.
    ['NAD+ Renewal', 'Cellular Energy & Longevity', 349, 449, 'atom', true],
  ];
  const groups: [string, [string, string, number][]][] = [
    [
      'Wellness Injections',
      [
        ['Vitamin B12 Injection', 'Energy & B12 Support', 45],
        ['MIC Lipotropic Injection', 'Metabolism Support', 45],
        ['Biotin Injection', 'Hair, Skin & Nails', 45],
        ['Vitamin D3 Injection', 'Bone & Immune Health', 50],
      ],
    ],
    [
      'Vitamin & Antioxidant Boosters',
      [
        ['Vitamin C', 'Immune Support', 40],
        ['Vitamin B Complex', 'Energy Support', 30],
        ['Vitamin B12', 'Energy & Focus', 45],
        ['Glutathione', 'Antioxidant Support', 65],
        ['Biotin', 'Hair, Skin & Nails', 45],
        ['Zinc', 'Immune Health', 30],
      ],
    ],
    [
      'Recovery & Performance',
      [
        ['Magnesium', 'Muscle Recovery', 35],
        ['Calcium', 'Bone & Muscle Support', 35],
        ['L-Carnitine', 'Fat Metabolism & Energy', 50],
        ['L-Arginine', 'Blood Flow & Performance', 45],
        ['Taurine', 'Hydration & Recovery', 45],
      ],
    ],
    [
      'Comfort Add-Ons',
      [
        ['Ondansetron (Zofran)', 'Nausea Relief', 35],
        ['Famotidine (Pepcid)', 'GI Support', 35],
        ['Ketorolac (Toradol)', 'Pain Relief', 40],
      ],
    ],
  ];
  const memberships: [string, number][] = [
    ['Essential Hydration Premium', 179],
    ['Performance Plus', 329],
    ['Elite Concierge', 599],
    ['B12 Energy Boost Package', 155],
  ];

  return (
    <div>
      <section style={{ background: 'var(--navy-900)', padding: 'clamp(56px,6vw,96px) var(--gutter) var(--section-y)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <SectionLabel>Transparent Pricing</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--ivory)', letterSpacing: '-0.02em', margin: '20px 0 0', maxWidth: '20ch' }}>
            Every drip, two ways: Standard and Premium.
          </h1>
          <p style={{ color: 'var(--ivory-a80)', fontSize: 'var(--fs-lg)', lineHeight: 1.6, margin: '20px 0 40px', maxWidth: '54ch' }}>
            Standard delivers a clinically effective dose; Premium adds a higher concentration and complimentary booster. No hidden fees, and concierge travel is included in our core service area.
          </p>
          {drips.map(([n, b, s, p, ic, sig]) => (
            <DripRow key={n} name={n} bestFor={b} standard={s} premium={p} icon={ic} signature={sig} onSelect={book} />
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--ivory)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--section-y-tight)' }}>
          {groups.map(([title, rows]) => (
            <div key={title}>
              <SectionLabel tone="onLight">{title}</SectionLabel>
              <div className="rr-grid-2" style={{ gap: 14, marginTop: 24 }}>
                {rows.map(([n, b, p]) => (
                  <BoosterRow key={n} name={n} bestFor={b} price={p} tone="onLight" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--ivory-100)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <SectionLabel tone="onLight">Membership Pricing</SectionLabel>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d2)', color: 'var(--charcoal)', letterSpacing: '-0.02em', margin: '16px 0 0' }}>The Wellness Club</h2>
            </div>
            <Button as="a" href={ROUTES.memberships} variant="secondary" style={pill} iconRight={<Icon name="arrow-right" size={16} color="currentColor" />}>
              Compare Tiers
            </Button>
          </div>
          <div className="rr-grid-3" style={{ gap: 20, marginTop: 36 }}>
            {memberships.map(([n, p]) => (
              <div key={n} style={{ background: 'var(--ivory)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--ivory-300)', padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontFamily: 'var(--font-text)', fontSize: '12px', fontWeight: 600, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--gold-600)' }}>{n}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '2.25rem', color: 'var(--charcoal)' }}>
                  ${p}
                  <span style={{ fontSize: '0.9rem', color: 'var(--slate-ink)' }}> / month</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ivory)', padding: '0 var(--gutter) var(--section-y)' }}>
        <div style={{ maxWidth: 'var(--container-text)', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d2)', color: 'var(--charcoal)', letterSpacing: '-0.02em' }}>Ready when you are.</h2>
          <p style={{ color: 'var(--slate-ink)', fontSize: 'var(--fs-lg)', margin: '16px auto 30px', maxWidth: '44ch' }}>
            Prices shown are per session. Group and event pricing is quoted separately.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button as="a" href={ROUTES.booking} variant="primary" size="lg" style={pill}>
              Book Your Drip
            </Button>
            <Button as="a" href={ROUTES.corporate} variant="secondary" size="lg" style={pill}>
              Corporate & Events
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
