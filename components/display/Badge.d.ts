import { ReactNode, CSSProperties } from 'react';

/** Small pill marker for trust badges, "Signature", "Most Popular", statuses. */
export interface BadgeProps {
  children: ReactNode;
  variant?: 'gold' | 'outline' | 'solid' | 'light';
  /** Optional leading icon. */
  icon?: ReactNode;
  style?: CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
