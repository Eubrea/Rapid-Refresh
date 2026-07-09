import type { CSSProperties } from 'react';

export interface StatProps {
  value: string;
  label: string;
  tone?: 'onNavy' | 'onLight';
  rule?: boolean;
  align?: 'left' | 'center';
  style?: CSSProperties;
}

/**
 * Stat — a large display figure with a label, for trust/proof rows.
 */
export function Stat({ value, label, tone = 'onNavy', rule = true, align = 'left', style = {} }: StatProps) {
  const labelColor = tone === 'onNavy' ? 'var(--ivory-a64)' : 'var(--slate-ink)';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        gap: '10px',
        ...style,
      }}
    >
      {rule && <span style={{ width: 34, height: 1, background: 'var(--gold-a40)' }} />}
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--fw-light)' as unknown as number,
          fontSize: 'var(--fs-d2)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          color: 'var(--gold-400)',
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-text)',
          fontSize: 'var(--fs-sm)',
          letterSpacing: '0.04em',
          color: labelColor,
          maxWidth: '22ch',
        }}
      >
        {label}
      </span>
    </div>
  );
}
