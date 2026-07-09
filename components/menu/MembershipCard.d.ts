import { CSSProperties } from 'react';

/**
 * A wellness-club membership tier: price, benefits, CTA. `featured` = gold "most popular".
 * @startingPoint section="Menu" subtitle="Membership pricing tier" viewport="420x560"
 */
export interface MembershipCardProps {
  name: string;
  /** Monthly price (number, no $). */
  price: number | string;
  cadence?: string;
  tagline?: string;
  /** Benefit lines (each gets a gold check). */
  features: string[];
  cta?: string;
  /** Gold-accented "most popular" treatment. */
  featured?: boolean;
  onSelect?: () => void;
  style?: CSSProperties;
}

export function MembershipCard(props: MembershipCardProps): JSX.Element;
