import { ReactNode, CSSProperties } from 'react';

/**
 * Primary call-to-action button for RapidRefresh.
 *
 * @startingPoint section="Actions" subtitle="Antique-gold CTA + variants" viewport="700x150"
 */
export interface ButtonProps {
  children: ReactNode;
  /** Visual style. primary = antique-gold fill; secondary = gold outline; ghost = text-only; light = ivory on navy. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'light';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  /** Optional element rendered before the label (e.g. an <Icon/>). */
  iconLeft?: ReactNode;
  /** Optional element rendered after the label. */
  iconRight?: ReactNode;
  /** Render as an anchor instead of a button. */
  as?: 'button' | 'a';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  style?: CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
