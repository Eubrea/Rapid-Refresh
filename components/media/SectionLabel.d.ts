import { ReactNode, CSSProperties } from 'react';

/**
 * The brand's eyebrow label — wide-tracked small caps preceded by a small
 * filled gold droplet (the logo motif). Intentionally NOT a pill/capsule
 * and NOT the generic dash-prefix (avoids the AI-slop eyebrow trope).
 */
export interface SectionLabelProps {
  children: ReactNode;
  /** gold (on navy), onLight (slate on ivory), muted (faint ivory). */
  tone?: 'gold' | 'onLight' | 'muted';
  align?: 'left' | 'center';
  /** droplet = gold droplet before text; underline = gold rule beneath. */
  variant?: 'droplet' | 'underline';
  style?: CSSProperties;
}

export function SectionLabel(props: SectionLabelProps): JSX.Element;
