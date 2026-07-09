import { CSSProperties } from 'react';

/** Compact add-on line (injection / vitamin / amino booster) with price and optional add control. */
export interface BoosterRowProps {
  name: string;
  bestFor?: string;
  price: number | string;
  /** Show a round add/added toggle. */
  onAdd?: () => void;
  added?: boolean;
  tone?: 'onNavy' | 'onLight';
  style?: CSSProperties;
}

export function BoosterRow(props: BoosterRowProps): JSX.Element;
