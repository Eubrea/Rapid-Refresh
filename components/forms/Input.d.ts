import { ChangeEvent, ReactNode, CSSProperties } from 'react';

/** Text field for booking &amp; intake forms; label, hint/error, optional leading icon. */
export interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  hint?: string;
  error?: string;
  required?: boolean;
  tone?: 'onNavy' | 'onLight';
  icon?: ReactNode;
  id?: string;
  style?: CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
