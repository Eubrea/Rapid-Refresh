'use client';

import type { CSSProperties } from 'react';
import { Photo } from './Photo';
import { Reveal } from './Reveal';
import { SectionLabel } from '../ui/SectionLabel';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';

const pill: CSSProperties = { borderRadius: 'var(--radius-pill)' };

export interface CollageProps {
  eyebrow: string;
  accentWord: string;
  headlineRest: string;
  mainCaption?: string;
  captionA?: string;
  captionB?: string;
  mainSrc?: string;
  aSrc?: string;
  bSrc?: string;
  checklistTitle: string;
  checklist?: string[];
  subhead: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  bg?: string;
  tint?: string;
  flip?: boolean;
}

/**
 * Collage — the brand's editorial two-column arrangement: a tinted panel with a
 * large image + gold checklist, beside an accent-word headline, two tall images,
 * subhead, body and CTA. `flip` mirrors the columns.
 */
export function Collage({
  eyebrow,
  accentWord,
  headlineRest,
  mainCaption = 'Pictorial',
  captionA = 'Lifestyle',
  captionB = 'Detail',
  mainSrc,
  aSrc,
  bSrc,
  checklistTitle,
  checklist = [],
  subhead,
  body,
  ctaLabel,
  ctaHref,
  bg = 'var(--ivory)',
  tint = 'var(--gold-a16)',
  flip = false,
}: CollageProps) {
  const left = (
    <Reveal>
      <div style={{ background: tint, borderRadius: 'var(--radius-xl)', padding: 20 }}>
        <Photo src={mainSrc} caption={mainCaption} ratio="4 / 3" radius="var(--radius-lg)" />
      </div>
      <div style={{ marginTop: 32 }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '1.375rem',
            color: 'var(--charcoal)',
            margin: '0 0 18px',
            letterSpacing: '-0.01em',
          }}
        >
          {checklistTitle}
        </h3>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 13 }}>
          {checklist.map((item) => (
            <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span
                style={{
                  width: 26,
                  height: 26,
                  flex: '0 0 auto',
                  borderRadius: '50%',
                  background: 'var(--gold-a16)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-600)',
                }}
              >
                <Icon name="check" size={14} color="currentColor" />
              </span>
              <span style={{ fontSize: '15px', color: 'var(--slate-ink)' }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );

  const right = (
    <Reveal delay={80}>
      <SectionLabel tone="onLight">{eyebrow}</SectionLabel>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 300,
          fontSize: 'var(--fs-d1)',
          color: 'var(--charcoal)',
          letterSpacing: '-0.02em',
          margin: '18px 0 0',
          lineHeight: 1.08,
        }}
      >
        <span style={{ color: 'var(--gold-600)' }}>{accentWord}</span> {headlineRest}
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, margin: '30px 0 0' }}>
        <Photo src={aSrc} caption={captionA} ratio="3 / 4" radius="var(--radius-lg)" />
        <Photo src={bSrc} caption={captionB} ratio="3 / 4" radius="var(--radius-lg)" style={{ marginTop: 34 }} />
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: 'var(--fs-d3)',
          color: 'var(--charcoal)',
          letterSpacing: '-0.01em',
          margin: '34px 0 0',
        }}
      >
        {subhead}
      </h3>
      <p style={{ color: 'var(--slate-ink)', fontSize: '16px', lineHeight: 1.7, margin: '14px 0 0', maxWidth: '46ch' }}>{body}</p>
      <div style={{ marginTop: 28 }}>
        <Button as="a" href={ctaHref} variant="primary" size="lg" style={pill}>
          {ctaLabel}
        </Button>
      </div>
    </Reveal>
  );

  const columns = flip ? [right, left] : [left, right];

  return (
    <section style={{ background: bg, padding: 'var(--section-y) var(--gutter)' }}>
      <div
        className="rr-split"
        style={{
          maxWidth: 'var(--container)',
          margin: '0 auto',
          gridTemplateColumns: flip ? '1.05fr 0.95fr' : '0.95fr 1.05fr',
          alignItems: 'start',
        }}
      >
        {columns.map((c, i) => (
          <div key={i}>{c}</div>
        ))}
      </div>
    </section>
  );
}
