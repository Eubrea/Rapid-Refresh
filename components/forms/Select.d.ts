import { ChangeEvent, CSSProperties } from 'react';

export type SelectOption = string | { value: string; label: string };

/** Styled native dropdown for booking (service, location, time). */
export interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  tone?: 'onNavy' | 'onLight';
  id?: string;
  style?: CSSProperties;
}

export function Select(props: SelectProps): JSX.Element;
