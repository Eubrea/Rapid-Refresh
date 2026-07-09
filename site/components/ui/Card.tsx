'use client';

import type { CSSProperties, ReactNode, MouseEvent } from 'react';

type Tone = 'navy' | 'ivory';
type Pad = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export interface CardProps {
  children?: ReactNode;
  tone?: Tone;
  padding?: Pad;
  interactive?: boolean;
  bordered?: boolean;
  style?: CSSProperties;
}

/**
 * Card — flat matte surface with hairline border and soft (never glowing) shadow.
 */
export function Card({
  children,
  tone = 'navy',
  padding = 'lg',
  interactive = false,
  bordered = true,
  style = {},
}: CardProps) {
  const pads: Record<Pad, string | number> = { none: 0, sm: '18px', md: '24px', lg: '32px', xl: '40px' };
  const isNavy = tone === 'navy';

  const base: CSSProperties = {
    background: isNavy ? 'var(--surface-card)' : 'var(--ivory)',
    color: isNavy ? 'var(--text-on-navy)' : 'var(--text-on-light)',
    border: bordered ? `1px solid ${isNavy ? 'var(--border-on-navy)' : 'var(--border-on-light)'}` : 'none',
    borderRadius: 'var(--radius-lg)',
    padding: pads[padding],
    boxShadow: 'var(--shadow-card)',
    transition:
      'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    ...style,
  };

  const handlers = interactive
    ? {
        onMouseEnter: (e: MouseEvent<HTMLDivElement>) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = 'var(--shadow-lift)';
          e.currentTarget.style.borderColor = 'var(--gold-a40)';
        },
        onMouseLeave: (e: MouseEvent<HTMLDivElement>) => {
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = 'var(--shadow-card)';
          e.currentTarget.style.borderColor = isNavy ? 'var(--border-on-navy)' : 'var(--border-on-light)';
        },
      }
    : {};

  return (
    <div style={base} {...handlers}>
      {children}
    </div>
  );
}
