import React from 'react';

/**
 * Logo — the RapidRefresh droplet mark with optional wordmark.
 * Pass `src` (relative path to logo.png). Soft warm drop shadow, never a glow.
 */
export function Logo({
  src,
  size = 48,
  showWordmark = true,
  layout = 'horizontal',
  tone = 'onNavy',
  style = {},
}) {
  const wordColor = tone === 'onNavy' ? 'var(--ivory)' : 'var(--navy-800)';
  const subColor  = tone === 'onNavy' ? 'var(--gold-400)' : 'var(--gold-600)';
  const isStacked = layout === 'stacked';

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      flexDirection: isStacked ? 'column' : 'row',
      gap: isStacked ? '12px' : '14px',
      ...style,
    }}>
      {src ? (
        <img src={src} alt="RapidRefresh" width={size} height={size}
          style={{ width: size, height: size, filter: 'drop-shadow(var(--shadow-logo))' }} />
      ) : (
        <span style={{
          width: size, height: size, borderRadius: '50%', background: 'var(--navy-700)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--gold-400)', fontFamily: 'var(--font-display)', fontSize: size * 0.42,
          filter: 'drop-shadow(var(--shadow-logo))',
        }}>R</span>
      )}
      {showWordmark && (
        <span style={{
          display: 'flex', flexDirection: 'column',
          alignItems: isStacked ? 'center' : 'flex-start', lineHeight: 1,
        }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-medium)',
            fontSize: size * 0.44, letterSpacing: '-0.01em', color: wordColor,
          }}>RapidRefresh</span>
          <span style={{
            fontFamily: 'var(--font-text)', fontWeight: 'var(--fw-semibold)',
            fontSize: Math.max(9, size * 0.16), letterSpacing: '0.22em',
            textTransform: 'uppercase', color: subColor, marginTop: size * 0.11,
          }}>Mobile IV &amp; Wellness</span>
        </span>
      )}
    </div>
  );
}
