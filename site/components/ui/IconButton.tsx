'use client';

import type { CSSProperties, ReactNode, MouseEvent } from 'react';

type Variant = 'solid' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export interface IconButtonProps {
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  round?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

/**
 * IconButton — square/circular button carrying a single lucide glyph.
 * Used for click-to-call, socials, nav toggles.
 */
export function IconButton({
  children,
  variant = 'outline',
  size = 'md',
  round = false,
  disabled = false,
  ariaLabel,
  onClick,
  style = {},
}: IconButtonProps) {
  const dims: Record<Size, number> = { sm: 36, md: 44, lg: 52 };
  const d = dims[size];

  const variants: Record<Variant, CSSProperties> = {
    solid: { background: 'var(--gold-fill)', color: 'var(--navy-900)', border: '1px solid transparent' },
    outline: { background: 'transparent', color: 'var(--gold-400)', border: '1px solid var(--gold-a40)' },
    ghost: { background: 'var(--ivory-a08)', color: 'var(--ivory)', border: '1px solid transparent' },
  };

  const base: CSSProperties = {
    width: d,
    height: d,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition:
      'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    ...variants[variant],
    ...style,
  };

  const handlers = disabled
    ? {}
    : {
        onMouseEnter: (e: MouseEvent<HTMLButtonElement>) => {
          const t = e.currentTarget;
          if (variant === 'solid') t.style.background = 'var(--gold-fill-hover)';
          else {
            t.style.background = 'var(--gold-a16)';
            t.style.borderColor = 'var(--gold-400)';
          }
        },
        onMouseLeave: (e: MouseEvent<HTMLButtonElement>) => {
          const t = e.currentTarget;
          t.style.background = (variants[variant].background as string) ?? 'transparent';
          t.style.borderColor = (variants[variant].border as string).includes('gold')
            ? 'var(--gold-a40)'
            : 'transparent';
        },
        onMouseDown: (e: MouseEvent<HTMLButtonElement>) => {
          e.currentTarget.style.transform = 'scale(0.94)';
        },
        onMouseUp: (e: MouseEvent<HTMLButtonElement>) => {
          e.currentTarget.style.transform = 'none';
        },
      };

  return (
    <button
      aria-label={ariaLabel}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={base}
      {...handlers}
    >
      {children}
    </button>
  );
}
