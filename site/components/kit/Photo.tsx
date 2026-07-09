import Image from 'next/image';
import type { CSSProperties } from 'react';
import { Icon } from '../ui/Icon';

export interface PhotoProps {
  src?: string;
  alt?: string;
  caption?: string;
  ratio?: string;
  radius?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
  style?: CSSProperties;
}

/**
 * Photo — renders a real next/image if `src` given, else an elegant matte
 * placeholder (never a dashed box) with a faint droplet + gold caption.
 */
export function Photo({
  src,
  alt = '',
  caption = 'Pictorial',
  ratio = '4 / 3',
  radius = 'var(--radius-xl)',
  sizes = '(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 600px',
  priority = false,
  objectPosition = 'center',
  style = {},
}: PhotoProps) {
  const box: CSSProperties = {
    position: 'relative',
    width: '100%',
    aspectRatio: ratio,
    borderRadius: radius,
    overflow: 'hidden',
    background: 'var(--navy-500)',
    ...style,
  };

  if (src) {
    return (
      <div style={box}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: 'cover', objectPosition }}
        />
      </div>
    );
  }

  return (
    <div style={{ ...box, border: '1px solid var(--navy-300)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.14,
        }}
      >
        <Icon name="droplet" size={120} color="var(--gold-300)" strokeWidth={1} />
      </div>
      <span
        style={{
          position: 'absolute',
          bottom: 16,
          left: 18,
          fontFamily: 'var(--font-text)',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--gold-300)',
        }}
      >
        {caption}
      </span>
    </div>
  );
}
