import Image from 'next/image';
import type { CSSProperties } from 'react';

export interface LogoProps {
  src?: string;
  size?: number;
  showWordmark?: boolean;
  layout?: 'horizontal' | 'stacked';
  tone?: 'onNavy' | 'onLight';
  style?: CSSProperties;
}

/**
 * Logo — the RapidRefresh droplet mark with optional wordmark. Soft warm drop
 * shadow, never a glow.
 */
export function Logo({
  src = '/logo-512.png',
  size = 48,
  showWordmark = true,
  layout = 'horizontal',
  tone = 'onNavy',
  style = {},
}: LogoProps) {
  const wordColor = tone === 'onNavy' ? 'var(--ivory)' : 'var(--navy-800)';
  const subColor = tone === 'onNavy' ? 'var(--gold-400)' : 'var(--gold-600)';
  const isStacked = layout === 'stacked';

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        flexDirection: isStacked ? 'column' : 'row',
        gap: isStacked ? '12px' : '14px',
        ...style,
      }}
    >
      <Image
        src={src}
        alt="RapidRefresh"
        width={size}
        height={size}
        priority
        style={{ width: size, height: size, filter: 'drop-shadow(var(--shadow-logo))' }}
      />
      {showWordmark && (
        <span
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: isStacked ? 'center' : 'flex-start',
            lineHeight: 1,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--fw-medium)' as unknown as number,
              fontSize: size * 0.44,
              letterSpacing: '-0.01em',
              color: wordColor,
            }}
          >
            RapidRefresh
          </span>
          <span
            style={{
              fontFamily: 'var(--font-text)',
              fontWeight: 'var(--fw-semibold)' as unknown as number,
              fontSize: Math.max(9, size * 0.16),
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: subColor,
              marginTop: size * 0.11,
            }}
          >
            Mobile IV &amp; Wellness
          </span>
        </span>
      )}
    </span>
  );
}
