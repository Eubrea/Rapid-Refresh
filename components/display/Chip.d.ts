import { ReactNode, CSSProperties } from 'react';

/** Selectable filter/tag chip (drip menu categories, audience filters). */
export interface ChipProps {
  children: ReactNode;
  selected?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}

export function Chip(props: ChipProps): JSX.Element;
