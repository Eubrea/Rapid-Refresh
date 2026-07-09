import React from 'react';

/**
 * Card — flat matte surface with hairline border and soft (never glowing) shadow.
 * `tone` sets navy vs ivory context; `interactive` adds a gentle hover lift.
 */
export function Card({
  children,
  tone = 'navy',
  padding = 'lg',
  interactive = false,
  bordered = true,
  style = {},
  ...rest
}) {
  const pads = { none: 0, sm: '18px', md: '24px', lg: '32px', xl: '40px' };
  const isNavy = tone === 'navy';

  const base = {
    background: isNavy ? 'var(--surface-card)' : 'var(--ivory)',
    color: isNavy ? 'var(--text-on-navy)' : 'var(--text-on-light)',
    border: bordered ? `1px solid ${isNavy ? 'var(--border-on-navy)' : 'var(--border-on-light)'}` : 'none',
    borderRadius: 'var(--radius-lg)',
    padding: pads[padding],
    boxShadow: 'var(--shadow-card)',
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    ...style,
  };

  const handlers = interactive ? {
    onMouseEnter: (e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lift)';
      e.currentTarget.style.borderColor = 'var(--gold-a40)';
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = 'var(--shadow-card)';
      e.currentTarget.style.borderColor = isNavy ? 'var(--border-on-navy)' : 'var(--border-on-light)';
    },
  } : {};

  return <div style={base} {...handlers} {...rest}>{children}</div>;
}
