'use client';

import Link from 'next/link';
import type { CSSProperties, ReactNode, MouseEvent } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  style?: CSSProperties;
  'aria-label'?: string;
}

/**
 * RapidRefresh Button — antique-gold primary, outline secondary, quiet ghost.
 * Matte finish; the only sanctioned gradient is the primary gold sheen.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  href,
  target,
  rel,
  type = 'button',
  onClick,
  style = {},
  ...rest
}: ButtonProps) {
  const sizes: Record<Size, CSSProperties> = {
    sm: { padding: '10px 18px', fontSize: '0.8125rem', letterSpacing: '0.06em', gap: '8px' },
    md: { padding: '14px 26px', fontSize: '0.875rem', letterSpacing: '0.06em', gap: '10px' },
    lg: { padding: '18px 34px', fontSize: '0.9375rem', letterSpacing: '0.05em', gap: '12px' },
  };

  const variants: Record<Variant, CSSProperties> = {
    primary: { background: 'var(--gold-fill)', color: 'var(--navy-900)', boxShadow: 'var(--shadow-gold)' },
    secondary: { background: 'transparent', color: 'var(--gold-400)', borderColor: 'var(--gold-a40)' },
    ghost: { background: 'transparent', color: 'var(--ivory)', borderColor: 'transparent' },
    light: { background: 'var(--ivory)', color: 'var(--navy-800)', boxShadow: 'var(--shadow-sm)' },
  };

  const base: CSSProperties = {
    fontFamily: 'var(--font-text)',
    fontWeight: 'var(--fw-semibold)' as unknown as number,
    textTransform: 'uppercase',
    lineHeight: 1,
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid transparent',
    transition:
      'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  const handlers = disabled
    ? {}
    : {
        onMouseEnter: (e: MouseEvent<HTMLElement>) => {
          const t = e.currentTarget;
          if (variant === 'primary') {
            t.style.background = 'var(--gold-fill-hover)';
            t.style.transform = 'translateY(-1px)';
          } else if (variant === 'secondary') {
            t.style.background = 'var(--gold-a16)';
            t.style.borderColor = 'var(--gold-400)';
          } else if (variant === 'ghost') {
            t.style.color = 'var(--gold-400)';
          } else if (variant === 'light') {
            t.style.transform = 'translateY(-1px)';
          }
        },
        onMouseLeave: (e: MouseEvent<HTMLElement>) => {
          const t = e.currentTarget;
          t.style.background = (variants[variant].background as string) ?? 'transparent';
          t.style.color = variants[variant].color as string;
          t.style.borderColor = (variants[variant].borderColor as string) || 'transparent';
          t.style.transform = 'none';
        },
        onMouseDown: (e: MouseEvent<HTMLElement>) => {
          e.currentTarget.style.transform = 'scale(0.98)';
        },
        onMouseUp: (e: MouseEvent<HTMLElement>) => {
          e.currentTarget.style.transform = 'translateY(-1px)';
        },
      };

  if (as === 'a') {
    return (
      <Link
        href={href ?? '#'}
        target={target}
        rel={rel}
        onClick={disabled ? undefined : onClick}
        style={base}
        {...handlers}
        {...rest}
      >
        {iconLeft}
        {children}
        {iconRight}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      style={base}
      {...handlers}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
