import { CSSProperties } from 'react';

/**
 * A signature IV drip rendered as a menu line with two-tier pricing.
 * @startingPoint section="Menu" subtitle="Two-tier drip menu row" viewport="700x120"
 */
export interface DripRowProps {
  name: string;
  /** Short "best for" descriptor, e.g. "Hydration &amp; Electrolytes". */
  bestFor: string;
  /** Standard-tier price (number, no $). */
  standard: number | string;
  /** Premium-tier price. Omit for single-price items. */
  premium?: number | string;
  /** lucide icon name. Default "droplet". */
  icon?: string;
  /** Show the "Signature" marker. */
  signature?: boolean;
  onSelect?: () => void;
  style?: CSSProperties;
}

export function DripRow(props: DripRowProps): JSX.Element;
