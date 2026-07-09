'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';
import { Icon } from './Icon';

export interface BoosterRowProps {
  name: string;
  bestFor?: string;
  price: number;
  onAdd?: () => void;
  added?: boolean;
  tone?: 'onNavy' | 'onLight';
  style?: CSSProperties;
}

/**
 * BoosterRow — a compact add-on line (injection / vitamin / amino booster).
 */
export function BoosterRow({ name, bestFor, price, onAdd, added = false, tone = 'onNavy', style = {} }: BoosterRowProps) {
  const onNavy = tone === 'onNavy';
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        padding: '16px 18px',
        borderRadius: 'var(--radius-md)',
        border: `1px solid ${hover ? 'var(--gold-a40)' : onNavy ? 'var(--border-on-navy)' : 'var(--border-on-light)'}`,
        background: onNavy ? 'var(--navy-700)' : '#FFFFFF',
        transition: 'border-color var(--dur-fast) var(--ease-out)',
        ...style,
      }}
    >
      <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: 0 }}>
        <span
          style={{
            fontFamily: 'var(--font-text)',
            fontSize: 'var(--fs-body)',
            fontWeight: 'var(--fw-semibold)' as unknown as number,
            color: onNavy ? 'var(--ivory)' : 'var(--charcoal)',
          }}
        >
          {name}
        </span>
        {bestFor && (
          <span
            style={{
              fontFamily: 'var(--font-text)',
              fontSize: 'var(--fs-xs)',
              color: onNavy ? 'var(--ivory-a44)' : 'var(--slate-ink)',
            }}
          >
            {bestFor}
          </span>
        )}
      </span>
      <span style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: '0 0 auto' }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            fontWeight: 'var(--fw-light)' as unknown as number,
            color: 'var(--gold-400)',
          }}
        >
          ${price}
        </span>
        {onAdd && (
          <button
            type="button"
            onClick={onAdd}
            aria-label={added ? 'Remove ' + name : 'Add ' + name}
            style={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              cursor: 'pointer',
              border: `1px solid ${added ? 'var(--gold-400)' : 'var(--navy-300)'}`,
              background: added ? 'var(--gold-fill)' : 'transparent',
              color: added ? 'var(--navy-900)' : 'var(--gold-400)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
            }}
          >
            <Icon name={added ? 'check' : 'plus'} size={16} color="currentColor" />
          </button>
        )}
      </span>
    </div>
  );
}
