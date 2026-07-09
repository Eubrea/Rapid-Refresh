import { ReactNode, CSSProperties } from 'react';

/** Checkbox for consent, opt-in, and add-on toggles. Gold check when on. */
export interface CheckboxProps {
  label?: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  tone?: 'onNavy' | 'onLight';
  id?: string;
  style?: CSSProperties;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
