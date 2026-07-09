import { CSSProperties } from 'react';

/** RapidRefresh droplet mark + wordmark. Soft warm drop shadow (never a glow). */
export interface LogoProps {
  /** Relative path to the logo PNG (e.g. "../../assets/logo-512.png"). Falls back to a monogram disc if omitted. */
  src?: string;
  /** Mark size in px. Default 48. */
  size?: number;
  showWordmark?: boolean;
  layout?: 'horizontal' | 'stacked';
  /** Color context for the wordmark. */
  tone?: 'onNavy' | 'onLight';
  style?: CSSProperties;
}

export function Logo(props: LogoProps): JSX.Element;
