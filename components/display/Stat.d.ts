import { ReactNode, CSSProperties } from 'react';

/** Large display figure + label for trust/proof rows. */
export interface StatProps {
  /** The headline figure, e.g. "22+" or "100%". */
  value: ReactNode;
  /** Supporting label, e.g. "Years Acute-Care Experience". */
  label: ReactNode;
  tone?: 'onNavy' | 'onLight';
  /** Gold hairline above the figure. */
  rule?: boolean;
  align?: 'left' | 'center';
  style?: CSSProperties;
}

export function Stat(props: StatProps): JSX.Element;
