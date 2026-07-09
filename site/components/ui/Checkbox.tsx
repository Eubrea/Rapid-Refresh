'use client';

import { useState } from 'react';
import type { CSSProperties, ReactNode, ChangeEvent } from 'react';

export interface CheckboxProps {
  label?: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (next: boolean, e: ChangeEvent<HTMLInputElement>) => void;
  tone?: 'onNavy' | 'onLight';
  id?: string;
  name?: string;
  required?: boolean;
  style?: CSSProperties;
}

/**
 * Checkbox — for medical-consent, marketing opt-in, add-on toggles.
 */
export function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  tone = 'onNavy',
  id,
  name,
  required = false,
  style = {},
}: CheckboxProps) {
  const boxId =
    id || (typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-').slice(0, 24) : undefined);
  const [internal, setInternal] = useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const onNavy = tone === 'onNavy';

  const toggle = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternal(!internal);
    onChange && onChange(!on, e);
  };

  return (
    <label htmlFor={boxId} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer', ...style }}>
      <input
        id={boxId}
        name={name || boxId}
        type="checkbox"
        checked={on}
        onChange={toggle}
        required={required}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      <span
        aria-hidden="true"
        style={{
          width: 22,
          height: 22,
          flex: '0 0 auto',
          marginTop: 1,
          borderRadius: 'var(--radius-xs)',
          border: `1px solid ${on ? 'var(--gold-400)' : onNavy ? 'var(--navy-300)' : 'var(--ivory-300)'}`,
          background: on ? 'var(--gold-fill)' : 'transparent',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
        }}
      >
        {on && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--navy-900)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
      </span>
      {label && (
        <span
          style={{
            fontFamily: 'var(--font-text)',
            fontSize: 'var(--fs-sm)',
            lineHeight: 1.5,
            color: onNavy ? 'var(--ivory-a80)' : 'var(--slate-ink)',
          }}
        >
          {label}
        </span>
      )}
    </label>
  );
}
