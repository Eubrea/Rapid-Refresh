import React from 'react';
import { Icon } from '../media/Icon.jsx';

/**
 * DripRow — one signature IV drip as a menu line: icon, name (+ optional ™ &amp;
 * Signature tag), "best for" descriptor, and the two-tier Standard/Premium price.
 * Reveals a hairline on hover. Designed for a vertical menu list on navy.
 */
export function DripRow({
  name, bestFor, standard, premium, icon = 'droplet',
  signature = false, onSelect, style = {},
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onClick={onSelect}
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        alignItems: 'center', gap: '22px',
        padding: '26px 4px',
        borderBottom: '1px solid var(--border-on-navy)',
        cursor: onSelect ? 'pointer' : 'default',
        transition: 'padding var(--dur-base) var(--ease-out)',
        ...style,
      }}
    >
      <span style={{
        width: 52, height: 52, borderRadius: '50%',
        border: `1px solid ${hover ? 'var(--gold-400)' : 'var(--navy-300)'}`,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--gold-400)', flex: '0 0 auto',
        transition: 'border-color var(--dur-base) var(--ease-out)',
      }}>
        <Icon name={icon} size={22} />
      </span>

      <span style={{ display: 'flex', flexDirection: 'column', gap: '5px', minWidth: 0 }}>
        {signature && (
          <span style={{
            fontFamily: 'var(--font-text)', fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-semibold)',
            letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--gold-400)',
          }}>Signature</span>
        )}
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 'var(--fs-d3)', fontWeight: 'var(--fw-regular)',
          letterSpacing: '-0.01em', color: 'var(--ivory)', lineHeight: 1.1,
        }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--fs-sm)', color: 'var(--ivory-a64)' }}>{bestFor}</span>
      </span>

      <span style={{ display: 'flex', gap: '30px', alignItems: 'flex-end', flex: '0 0 auto' }}>
        <PriceCol tier="Standard" price={standard} />
        {premium != null && <PriceCol tier="Premium" price={premium} accent />}
      </span>
    </div>
  );
}

function PriceCol({ tier, price, accent = false }) {
  return (
    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
      <span style={{
        fontFamily: 'var(--font-text)', fontSize: '0.6875rem', fontWeight: 'var(--fw-semibold)',
        letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ivory-a44)',
      }}>{tier}</span>
      <span style={{
        fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 'var(--fw-light)',
        letterSpacing: '-0.01em', color: accent ? 'var(--gold-400)' : 'var(--ivory)',
      }}>${price}</span>
    </span>
  );
}
