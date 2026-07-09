import React from 'react';

/**
 * SectionLabel — the brand's eyebrow. NOT a pill, and NOT the generic
 * "dash + caps" AI trope. A small filled gold droplet (the logo motif)
 * sits before wide-tracked small caps. `variant="underline"` swaps the
 * droplet for an editorial gold underline beneath the text instead.
 */
export function SectionLabel({ children, tone = 'gold', align = 'left', variant = 'droplet', style = {} }) {
  const color = tone === 'gold' ? 'var(--gold-500)' : (tone === 'onLight' ? 'var(--slate-ink)' : 'var(--ivory-a64)');
  const mark = tone === 'onLight' ? 'var(--gold-600)' : 'var(--gold-400)';

  const textStyle = {
    fontFamily: 'var(--font-text)',
    fontSize: 'var(--fs-label)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase',
    color,
  };

  if (variant === 'underline') {
    return (
      <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: align === 'center' ? 'center' : 'flex-start', gap: '8px', ...style }}>
        <span style={textStyle}>{children}</span>
        <span style={{ width: 26, height: 2, background: mark, borderRadius: 2 }} />
      </span>
    );
  }

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '10px',
      justifyContent: align === 'center' ? 'center' : 'flex-start', ...style,
    }}>
      <svg width="11" height="14" viewBox="0 0 24 30" aria-hidden="true" style={{ flex: '0 0 auto', display: 'block' }}>
        <path d="M12 0C12 0 2 12 2 19a10 10 0 0 0 20 0C22 12 12 0 12 0Z" fill={mark} />
      </svg>
      <span style={textStyle}>{children}</span>
    </span>
  );
}
