import { ReactNode, CSSProperties } from 'react';

/**
 * Flat matte card surface with hairline border and soft shadow (no glow).
 * @startingPoint section="Display" subtitle="Matte card surface, navy & ivory" viewport="700x220"
 */
export interface CardProps {
  children: ReactNode;
  /** Color context. */
  tone?: 'navy' | 'light';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Adds a gentle hover lift + gold hairline. */
  interactive?: boolean;
  bordered?: boolean;
  style?: CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
