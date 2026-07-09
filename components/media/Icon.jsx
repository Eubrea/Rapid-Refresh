import React from 'react';

/**
 * Icon — thin wrapper over lucide (loaded globally as `window.lucide`).
 * Renders an inline SVG with on-brand defaults (1.75 stroke, currentColor).
 * Requires the lucide UMD script on the page.
 */
export function Icon({ name, size = 22, strokeWidth = 1.75, color = 'currentColor', style = {}, ...rest }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const host = ref.current;
    if (!host) return;
    host.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    host.appendChild(i);
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons({
        nameAttr: 'data-lucide',
        attrs: { width: size, height: size, 'stroke-width': strokeWidth, stroke: 'currentColor' },
      });
    }
  }, [name, size, strokeWidth]);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color, width: size, height: size, flex: '0 0 auto', ...style }}
      {...rest}
    />
  );
}
