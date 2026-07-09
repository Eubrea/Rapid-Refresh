import React from 'react';

/**
 * Select — styled native dropdown for booking (service, location, time).
 * Matches Input styling; gold chevron.
 */
export function Select({ label, options = [], value, onChange, required = false, tone = 'onNavy', id, style = {}, ...rest }) {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const onNavy = tone === 'onNavy';
  const [focused, setFocused] = React.useState(false);
  const borderColor = focused ? 'var(--gold-400)' : (onNavy ? 'var(--navy-300)' : 'var(--ivory-300)');

  return (
    <label htmlFor={selectId} style={{ display: 'flex', flexDirection: 'column', gap: '8px', ...style }}>
      {label && (
        <span style={{
          fontFamily: 'var(--font-text)', fontSize: 'var(--fs-xs)', fontWeight: 'var(--fw-semibold)',
          letterSpacing: '0.06em', textTransform: 'uppercase',
          color: onNavy ? 'var(--ivory-a80)' : 'var(--slate-ink)',
        }}>{label}{required && <span style={{ color: 'var(--gold-400)', marginLeft: 4 }}>*</span>}</span>
      )}
      <span style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <select
          id={selectId} value={value} onChange={onChange} required={required}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{
            width: '100%', boxSizing: 'border-box', appearance: 'none', WebkitAppearance: 'none',
            padding: '13px 42px 13px 16px',
            fontFamily: 'var(--font-text)', fontSize: 'var(--fs-body)',
            color: onNavy ? 'var(--ivory)' : 'var(--charcoal)',
            background: onNavy ? 'var(--navy-700)' : '#FFFFFF',
            border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
            outline: 'none', cursor: 'pointer',
            transition: 'border-color var(--dur-fast) var(--ease-out)',
          }}
          {...rest}
        >
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lab = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val} style={{ color: '#1A1E28' }}>{lab}</option>;
          })}
        </select>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="2"
          style={{ position: 'absolute', right: 16, pointerEvents: 'none' }}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </span>
    </label>
  );
}
