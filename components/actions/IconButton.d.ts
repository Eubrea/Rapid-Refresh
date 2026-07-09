import { ReactNode, CSSProperties } from 'react';

/** Square/round button carrying a single icon (call, social, stepper, nav toggle). */
export interface IconButtonProps {
  /** The glyph — typically an <Icon/>. */
  children: ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Pill/circular corners instead of rounded square. */
  round?: boolean;
  disabled?: boolean;
  /** Accessible label (required — icon-only control). */
  ariaLabel: string;
  onClick?: () => void;
  style?: CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;
