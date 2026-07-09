import React from 'react';

/**
 * Input — text field for booking &amp; intake forms. Label + optional hint/error.
 * Tone adapts to navy or ivory surfaces. Focus = gold hairline.
 */
export function Input({
  label, type = 'text', placeholder, value, defaultValue, onChange,
  hint, error, required = false, tone = 'onNavy', icon = null, id, style = {}, ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const onNavy = tone === 'onNavy';
  const [focused, setFocused] = React.useState(false);

  const fieldColor = onNavy ? 'var(--ivory)' : 'var(--charcoal)';
  const fieldBg = onNavy ? 'var(--navy-700)' : '#FFFFFF';
  const borderBase = error ? 'var(--danger)' : (onNavy ? 'var(--navy-300)' : 'var(--ivory-300)');
  const borderColor = focused && !error ? 'var(--gold-400)' : borderBase;

  return (
    <label htmlFor={inputId} style={{ display: 'flex', flexDirection: 'column', gap: '8px', ...style }}>
      {label && (
        <span style={{
          fontFamily: 'var(--font-text)', fontSize: 'var(--fs-xs)', fontWeight: 'var(--fw-semibold)',
          letterSpacing: '0.06em', textTransform: 'uppercase',
          color: onNavy ? 'var(--ivory-a80)' : 'var(--slate-ink)',
        }}>
          {label}{required && <span style={{ color: 'var(--gold-400)', marginLeft: 4 }}>*</span>}
        </span>
      )}
      <span style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {icon && <span style={{ position: 'absolute', left: 14, display: 'inline-flex', color: 'var(--gold-400)' }}>{icon}</span>}
        <input
          id={inputId} type={type} placeholder={placeholder} value={value} defaultValue={defaultValue}
          onChange={onChange} required={required}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{
            width: '100%', boxSizing: 'border-box',
            padding: icon ? '13px 16px 13px 42px' : '13px 16px',
            fontFamily: 'var(--font-text)', fontSize: 'var(--fs-body)', color: fieldColor,
            background: fieldBg, border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
            outline: 'none', transition: 'border-color var(--dur-fast) var(--ease-out)',
          }}
          {...rest}
        />
      </span>
      {(hint || error) && (
        <span style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--fs-xs)', color: error ? 'var(--danger)' : (onNavy ? 'var(--ivory-a44)' : 'var(--slate-ink)') }}>
          {error || hint}
        </span>
      )}
    </label>
  );
}
