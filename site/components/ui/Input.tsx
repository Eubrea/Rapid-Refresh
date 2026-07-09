'use client';

import { useState } from 'react';
import type { CSSProperties, ReactNode, ChangeEvent } from 'react';

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
  name?: string;
  autoComplete?: string;
  style?: CSSProperties;
}

/**
 * Input — text field for booking & intake forms. Focus = gold hairline.
 */
export function Input({
  label,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  hint,
  error,
  required = false,
  tone = 'onNavy',
  icon = null,
  id,
  name,
  autoComplete,
  style = {},
}: InputProps) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const onNavy = tone === 'onNavy';
  const [focused, setFocused] = useState(false);

  const fieldColor = onNavy ? 'var(--ivory)' : 'var(--charcoal)';
  const fieldBg = onNavy ? 'var(--navy-700)' : '#FFFFFF';
  const borderBase = error ? 'var(--danger)' : onNavy ? 'var(--navy-300)' : 'var(--ivory-300)';
  const borderColor = focused && !error ? 'var(--gold-400)' : borderBase;

  return (
    <label htmlFor={inputId} style={{ display: 'flex', flexDirection: 'column', gap: '8px', ...style }}>
      {label && (
        <span
          style={{
            fontFamily: 'var(--font-text)',
            fontSize: 'var(--fs-xs)',
            fontWeight: 'var(--fw-semibold)' as unknown as number,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: onNavy ? 'var(--ivory-a80)' : 'var(--slate-ink)',
          }}
        >
          {label}
          {required && <span style={{ color: 'var(--gold-400)', marginLeft: 4 }}>*</span>}
        </span>
      )}
      <span style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {icon && (
          <span style={{ position: 'absolute', left: 14, display: 'inline-flex', color: 'var(--gold-400)' }}>{icon}</span>
        )}
        <input
          id={inputId}
          name={name || inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: icon ? '13px 16px 13px 42px' : '13px 16px',
            fontFamily: 'var(--font-text)',
            fontSize: 'var(--fs-body)',
            color: fieldColor,
            background: fieldBg,
            border: `1px solid ${borderColor}`,
            borderRadius: 'var(--radius-md)',
            outline: 'none',
            transition: 'border-color var(--dur-fast) var(--ease-out)',
          }}
        />
      </span>
      {(hint || error) && (
        <span
          style={{
            fontFamily: 'var(--font-text)',
            fontSize: 'var(--fs-xs)',
            color: error ? 'var(--danger)' : onNavy ? 'var(--ivory-a44)' : 'var(--slate-ink)',
          }}
        >
          {error || hint}
        </span>
      )}
    </label>
  );
}
