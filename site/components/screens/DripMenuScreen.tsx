'use client';

import { useState } from 'react';
import { Button } from '../ui/Button';
import { SectionLabel } from '../ui/SectionLabel';
import { Chip } from '../ui/Chip';
import { DripRow } from '../ui/DripRow';
import { BoosterRow } from '../ui/BoosterRow';
import { Icon, type IconName } from '../ui/Icon';
import { ROUTES } from '../../lib/site';

type Drip = [string, string, number, number, IconName, string, boolean];

export function DripMenuScreen() {
  const [filter, setFilter] = useState('All');

  const signature: Drip[] = [
    ['Essential Hydration', 'Hydration & Electrolytes', 169, 219, 'droplet', 'Hydration', false],
    ['Energy Reset', 'Energy & Mental Clarity', 189, 239, 'zap', 'Energy', false],
    ['RapidRefresh Defense', 'Immune Support', 199, 249, 'shield-check', 'Immunity', false],
    ["Myers' Cocktail", 'Overall Wellness', 199, 259, 'flask-conical', 'Wellness', false],
    ['Game Day Drip™', 'Performance & Recovery', 219, 279, 'activity', 'Recovery', true],
    ['Glass Skin Drip', 'Beauty & Skin Health', 239, 319, 'sparkles', 'Beauty', true],
    ['Morning After Rescue™', 'Hangover Recovery', 249, 329, 'sunrise', 'Recovery', true],
    // TODO(client): confirm NAD+ dosing & price. $349/$449 carried from design source, pending confirmation.
    ['NAD+ Renewal', 'Cellular Energy & Longevity', 349, 449, 'atom', 'Wellness', true],
  ];
  const cats = ['All', 'Hydration', 'Energy', 'Immunity', 'Recovery', 'Beauty', 'Wellness'];
  const shown = signature.filter((d) => filter === 'All' || d[5] === filter);

  const injections: [string, string, number][] = [
    ['Vitamin B12', 'Energy & B12 Support', 45],
    ['MIC Lipotropic', 'Metabolism Support', 45],
    ['Biotin', 'Hair, Skin & Nails', 45],
    ['Vitamin D3', 'Bone & Immune Health', 50],
  ];
  const boosters: [string, string, number][] = [
    ['Vitamin C', 'Immune Support', 40],
    ['Vitamin B Complex', 'Energy Support', 30],
    ['Vitamin B12', 'Energy & Focus', 45],
    ['Glutathione', 'Antioxidant Support', 65],
    ['Biotin', 'Hair, Skin & Nails', 45],
    ['Zinc', 'Immune Health', 30],
    ['Magnesium', 'Muscle Recovery', 35],
    ['L-Carnitine', 'Fat Metabolism & Energy', 50],
  ];

  return (
    <div>
      <section style={{ background: 'var(--navy-900)', padding: 'clamp(56px,6vw,96px) var(--gutter) 0' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <SectionLabel>Luxury Concierge IV Menu</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--ivory)', letterSpacing: '-0.02em', margin: '20px 0 0', maxWidth: '20ch' }}>
            Signature drips, priced two ways: Standard and Premium.
          </h1>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', margin: '40px 0 8px' }}>
            {cats.map((c) => (
              <Chip key={c} selected={filter === c} onClick={() => setFilter(c)}>
                {c}
              </Chip>
            ))}
          </div>
          <div style={{ paddingBottom: 'var(--section-y-tight)' }}>
            {shown.map(([n, b, s, p, ic, , sig]) => (
              <DripRow key={n} name={n} bestFor={b} standard={s} premium={p} icon={ic} signature={sig} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--navy-800)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <SectionLabel>Wellness Injections</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d2)', color: 'var(--ivory)', letterSpacing: '-0.02em', margin: '16px 0 32px' }}>Add-on injections</h2>
          <div className="rr-grid-2" style={{ gap: 14 }}>
            {injections.map(([n, b, p]) => (
              <BoosterRow key={n} name={n} bestFor={b} price={p} />
            ))}
          </div>

          <div style={{ height: 1, background: 'var(--gold-a40)', margin: '56px 0' }} />

          <SectionLabel>IV Boosters</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d2)', color: 'var(--ivory)', letterSpacing: '-0.02em', margin: '16px 0 32px' }}>
            Vitamins, antioxidants &amp; aminos
          </h2>
          <div className="rr-grid-2" style={{ gap: 14 }}>
            {boosters.map(([n, b, p]) => (
              <BoosterRow key={n} name={n} bestFor={b} price={p} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ivory)', padding: 'var(--section-y-tight) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container-text)', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d2)', color: 'var(--charcoal)', letterSpacing: '-0.02em' }}>Not sure which drip is right?</h2>
          <p style={{ color: 'var(--slate-ink)', fontSize: 'var(--fs-lg)', margin: '16px auto 30px', maxWidth: '46ch' }}>
            Book a consultation and Rahab will tailor a drip to your goals.
          </p>
          <Button as="a" href={ROUTES.booking} variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} color="currentColor" />}>
            Book Your Drip
          </Button>
        </div>
      </section>
    </div>
  );
}
