import React from 'react';

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
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '10px 18px', fontSize: '0.8125rem', letterSpacing: '0.06em', gap: '8px' },
    md: { padding: '14px 26px', fontSize: '0.875rem',  letterSpacing: '0.06em', gap: '10px' },
    lg: { padding: '18px 34px', fontSize: '0.9375rem', letterSpacing: '0.05em', gap: '12px' },
  };

  const base = {
    fontFamily: 'var(--font-text)',
    fontWeight: 'var(--fw-semibold)',
    textTransform: 'uppercase',
    lineHeight: 1,
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid transparent',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...style,
  };

  const variants = {
    primary: {
      background: 'var(--gold-fill)',
      color: 'var(--navy-900)',
      boxShadow: 'var(--shadow-gold)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--gold-400)',
      borderColor: 'var(--gold-a40)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ivory)',
      borderColor: 'transparent',
    },
    light: {
      background: 'var(--ivory)',
      color: 'var(--navy-800)',
      boxShadow: 'var(--shadow-sm)',
    },
  };

  const handlers = disabled ? {} : {
    onMouseEnter: (e) => {
      const t = e.currentTarget;
      if (variant === 'primary') { t.style.background = 'var(--gold-fill-hover)'; t.style.transform = 'translateY(-1px)'; }
      else if (variant === 'secondary') { t.style.background = 'var(--gold-a16)'; t.style.borderColor = 'var(--gold-400)'; }
      else if (variant === 'ghost') { t.style.color = 'var(--gold-400)'; }
      else if (variant === 'light') { t.style.transform = 'translateY(-1px)'; }
    },
    onMouseLeave: (e) => {
      const t = e.currentTarget;
      t.style.background = variants[variant].background;
      t.style.color = variants[variant].color;
      t.style.borderColor = variants[variant].borderColor || 'transparent';
      t.style.transform = 'none';
    },
    onMouseDown: (e) => { e.currentTarget.style.transform = 'scale(0.98)'; },
    onMouseUp: (e) => { e.currentTarget.style.transform = 'translateY(-1px)'; },
  };

  const Tag = as === 'a' ? 'a' : 'button';
  const tagProps = as === 'a' ? { href } : { disabled, type: rest.type || 'button' };

  return (
    <Tag style={{ ...base, ...variants[variant] }} onClick={disabled ? undefined : onClick} {...tagProps} {...handlers} {...rest}>
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
