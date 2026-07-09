'use client';

import type { CSSProperties, ReactNode, MouseEvent } from 'react';

export interface ChipProps {
  children?: ReactNode;
  selected?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}

/**
 * Chip — selectable filter/tag for the drip menu. Toggles between quiet and
 * gold-selected.
 */
export function Chip({ children, selected = false, icon = null, onClick, style = {} }: ChipProps) {
  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 18px',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-text)',
    fontSize: 'var(--fs-sm)',
    fontWeight: 'var(--fw-medium)' as unknown as number,
    cursor: 'pointer',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    transition:
      'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
    border: selected ? '1px solid var(--gold-400)' : '1px solid var(--border-on-navy)',
    background: selected ? 'var(--gold-a16)' : 'transparent',
    color: selected ? 'var(--gold-300)' : 'var(--ivory-a80)',
    ...style,
  };
  const handlers = {
    onMouseEnter: (e: MouseEvent<HTMLButtonElement>) => {
      if (!selected) {
        e.currentTarget.style.borderColor = 'var(--gold-a40)';
        e.currentTarget.style.color = 'var(--ivory)';
      }
    },
    onMouseLeave: (e: MouseEvent<HTMLButtonElement>) => {
      if (!selected) {
        e.currentTarget.style.borderColor = 'var(--border-on-navy)';
        e.currentTarget.style.color = 'var(--ivory-a80)';
      }
    },
  };
  return (
    <button type="button" onClick={onClick} style={base} {...handlers}>
      {icon}
      {children}
    </button>
  );
}
