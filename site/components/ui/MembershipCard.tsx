'use client';

import type { CSSProperties } from 'react';
import { Icon } from './Icon';
import { Button } from './Button';

export interface MembershipCardProps {
  name: string;
  price: number;
  cadence?: string;
  tagline?: string;
  features?: string[];
  cta?: string;
  featured?: boolean;
  onSelect?: () => void;
  href?: string;
  style?: CSSProperties;
}

/**
 * MembershipCard — a wellness-club tier. `featured` gives the gold-accented
 * "most chosen" treatment.
 */
export function MembershipCard({
  name,
  price,
  cadence = '/month',
  tagline,
  features = [],
  cta = 'Become a Member',
  featured = false,
  onSelect,
  href,
  style = {},
}: MembershipCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: featured ? 'var(--navy-500)' : 'var(--surface-card)',
        border: `1px solid ${featured ? 'var(--gold-a40)' : 'var(--border-on-navy)'}`,
        borderRadius: 'var(--radius-lg)',
        padding: '36px 32px 32px',
        boxShadow: featured ? 'var(--shadow-lift)' : 'var(--shadow-card)',
        ...style,
      }}
    >
      {featured && (
        <span
          style={{
            fontFamily: 'var(--font-text)',
            fontSize: 'var(--fs-label)',
            fontWeight: 'var(--fw-semibold)' as unknown as number,
            letterSpacing: 'var(--ls-label)',
            textTransform: 'uppercase',
            color: 'var(--gold-400)',
            marginBottom: '10px',
          }}
        >
          Most Chosen
        </span>
      )}

      <span
        style={{
          fontFamily: 'var(--font-text)',
          fontSize: 'var(--fs-xs)',
          fontWeight: 'var(--fw-semibold)' as unknown as number,
          letterSpacing: 'var(--ls-label)',
          textTransform: 'uppercase',
          color: featured ? 'var(--ivory-a80)' : 'var(--gold-400)',
        }}
      >
        {name}
      </span>

      <span style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '16px' }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            fontWeight: 'var(--fw-light)' as unknown as number,
            letterSpacing: '-0.02em',
            color: 'var(--ivory)',
            lineHeight: 1,
          }}
        >
          ${price}
        </span>
        <span style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--fs-sm)', color: 'var(--ivory-a44)' }}>{cadence}</span>
      </span>

      {tagline && (
        <p
          style={{
            fontFamily: 'var(--font-text)',
            fontSize: 'var(--fs-sm)',
            color: 'var(--ivory-a64)',
            marginTop: '12px',
            lineHeight: 1.55,
          }}
        >
          {tagline}
        </p>
      )}

      <span style={{ height: 1, background: 'var(--gold-a40)', margin: '26px 0' }} />

      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
        {features.map((f, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              fontFamily: 'var(--font-text)',
              fontSize: 'var(--fs-sm)',
              color: 'var(--ivory-a80)',
              lineHeight: 1.45,
            }}
          >
            <span style={{ color: 'var(--gold-400)', marginTop: 1, flex: '0 0 auto', display: 'inline-flex' }}>
              <Icon name="check" size={17} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <Button
        as={href ? 'a' : 'button'}
        href={href}
        variant={featured ? 'primary' : 'secondary'}
        fullWidth
        onClick={onSelect}
        style={{ marginTop: '30px' }}
      >
        {cta}
      </Button>
    </div>
  );
}
