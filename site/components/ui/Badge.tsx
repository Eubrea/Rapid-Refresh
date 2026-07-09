import type { CSSProperties, ReactNode } from 'react';

type Variant = 'gold' | 'outline' | 'solid' | 'light';

export interface BadgeProps {
  children?: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  style?: CSSProperties;
}

/**
 * Badge — small status/trust marker.
 */
export function Badge({ children, variant = 'gold', icon = null, style = {} }: BadgeProps) {
  const variants: Record<Variant, CSSProperties> = {
    gold: { background: 'var(--gold-a16)', color: 'var(--gold-300)', border: '1px solid var(--gold-a40)' },
    outline: { background: 'transparent', color: 'var(--ivory-a80)', border: '1px solid var(--border-on-navy)' },
    solid: { background: 'var(--navy-700)', color: 'var(--ivory)', border: '1px solid var(--navy-300)' },
    light: { background: 'var(--ivory-100)', color: 'var(--navy-800)', border: '1px solid var(--ivory-300)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        padding: '5px 12px',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-text)',
        fontSize: 'var(--fs-xs)',
        fontWeight: 'var(--fw-semibold)' as unknown as number,
        letterSpacing: '0.04em',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        ...variants[variant],
        ...style,
      }}
    >
      {icon}
      {children}
    </span>
  );
}
