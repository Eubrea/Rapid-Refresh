import { CSSProperties } from 'react';

/** Inline lucide icon with RapidRefresh defaults (thin stroke, currentColor). Requires the lucide UMD global. */
export interface IconProps {
  /** kebab-case lucide icon name, e.g. "droplet", "shield-check", "calendar-check". */
  name: string;
  /** Pixel size (width & height). Default 22. */
  size?: number;
  /** Stroke width. Default 1.75. */
  strokeWidth?: number;
  /** Icon color (defaults to currentColor so it inherits text color). */
  color?: string;
  style?: CSSProperties;
}

export function Icon(props: IconProps): JSX.Element;
