'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';
import { Icon, type IconName } from './Icon';

export interface DripRowProps {
  name: string;
  bestFor: string;
  standard: number;
  premium?: number;
  icon?: IconName;
  signature?: boolean;
  onSelect?: () => void;
  style?: CSSProperties;
}

function PriceCol({ tier, price, accent = false }: { tier: string; price: number; accent?: boolean }) {
  return (
    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
      <span
        style={{
          fontFamily: 'var(--font-text)',
          fontSize: '0.6875rem',
          fontWeight: 'var(--fw-semibold)' as unknown as number,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--ivory-a44)',
        }}
      >
        {tier}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          fontWeight: 'var(--fw-light)' as unknown as number,
          letterSpacing: '-0.01em',
          color: accent ? 'var(--gold-400)' : 'var(--ivory)',
        }}
      >
        ${price}
      </span>
    </span>
  );
}

/**
 * DripRow — one signature IV drip as a menu line with two-tier pricing.
 */
export function DripRow({
  name,
  bestFor,
  standard,
  premium,
  icon = 'droplet',
  signature = false,
  onSelect,
  style = {},
}: DripRowProps) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onSelect}
      className="rr-driprow"
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        alignItems: 'center',
        gap: '22px',
        padding: '26px 4px',
        borderBottom: '1px solid var(--border-on-navy)',
        cursor: onSelect ? 'pointer' : 'default',
        transition: 'padding var(--dur-base) var(--ease-out)',
        ...style,
      }}
    >
      <span
        style={{
          width: 52,
          height: 52,
          borderRadius: '50%',
          border: `1px solid ${hover ? 'var(--gold-400)' : 'var(--navy-300)'}`,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--gold-400)',
          flex: '0 0 auto',
          transition: 'border-color var(--dur-base) var(--ease-out)',
        }}
      >
        <Icon name={icon} size={22} />
      </span>

      <span style={{ display: 'flex', flexDirection: 'column', gap: '5px', minWidth: 0 }}>
        {signature && (
          <span
            style={{
              fontFamily: 'var(--font-text)',
              fontSize: 'var(--fs-label)',
              fontWeight: 'var(--fw-semibold)' as unknown as number,
              letterSpacing: 'var(--ls-label)',
              textTransform: 'uppercase',
              color: 'var(--gold-400)',
            }}
          >
            Signature
          </span>
        )}
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--fs-d3)',
            fontWeight: 'var(--fw-regular)' as unknown as number,
            letterSpacing: '-0.01em',
            color: 'var(--ivory)',
            lineHeight: 1.1,
          }}
        >
          {name}
        </span>
        <span style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--fs-sm)', color: 'var(--ivory-a64)' }}>{bestFor}</span>
      </span>

      <span style={{ display: 'flex', gap: '30px', alignItems: 'flex-end', flex: '0 0 auto' }}>
        <PriceCol tier="Standard" price={standard} />
        {premium != null && <PriceCol tier="Premium" price={premium} accent />}
      </span>
    </div>
  );
}
