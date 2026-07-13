'use client';

import { useState } from 'react';
import type { CSSProperties, ChangeEvent } from 'react';

export interface TextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  hint?: string;
  error?: string;
  required?: boolean;
  tone?: 'onNavy' | 'onLight';
  rows?: number;
  id?: string;
  name?: string;
  style?: CSSProperties;
}

/**
 * Textarea — multi-line field for booking notes & special requests. Matches Input styling.
 */
export function Textarea({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  hint,
  error,
  required = false,
  tone = 'onNavy',
  rows = 4,
  id,
  name,
  style = {},
}: TextareaProps) {
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const onNavy = tone === 'onNavy';
  const [focused, setFocused] = useState(false);

  const fieldColor = onNavy ? 'var(--ivory)' : 'var(--charcoal)';
  const fieldBg = onNavy ? 'var(--navy-700)' : '#FFFFFF';
  const borderBase = error ? 'var(--danger)' : onNavy ? 'var(--navy-300)' : 'var(--ivory-300)';
  const borderColor = focused && !error ? 'var(--gold-400)' : borderBase;

  return (
    <label htmlFor={fieldId} style={{ display: 'flex', flexDirection: 'column', gap: '8px', ...style }}>
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
      <textarea
        id={fieldId}
        name={name || fieldId}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        required={required}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          resize: 'vertical',
          padding: '13px 16px',
          fontFamily: 'var(--font-text)',
          fontSize: 'var(--fs-body)',
          lineHeight: 1.5,
          color: fieldColor,
          background: fieldBg,
          border: `1px solid ${borderColor}`,
          borderRadius: 'var(--radius-md)',
          outline: 'none',
          transition: 'border-color var(--dur-fast) var(--ease-out)',
        }}
      />
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
