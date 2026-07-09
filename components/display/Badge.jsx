import React from 'react';

/**
 * Badge — small status/trust marker. Gold for signature/featured, quiet
 * outline for neutral labels, solid navy for "on light" contexts.
 */
export function Badge({ children, variant = 'gold', icon = null, style = {} }) {
  const variants = {
    gold:    { background: 'var(--gold-a16)', color: 'var(--gold-300)', border: '1px solid var(--gold-a40)' },
    outline: { background: 'transparent', color: 'var(--ivory-a80)', border: '1px solid var(--border-on-navy)' },
    solid:   { background: 'var(--navy-700)', color: 'var(--ivory)', border: '1px solid var(--navy-300)' },
    light:   { background: 'var(--ivory-100)', color: 'var(--navy-800)', border: '1px solid var(--ivory-300)' },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '7px',
      padding: '5px 12px', borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-text)', fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-semibold)', letterSpacing: '0.04em',
      lineHeight: 1, whiteSpace: 'nowrap',
      ...variants[variant], ...style,
    }}>
      {icon}
      {children}
    </span>
  );
}
