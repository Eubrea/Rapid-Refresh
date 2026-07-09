'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { Logo } from '../ui/Logo';
import { NAV_LINKS, ROUTES, PHONE_DISPLAY, PHONE_TEL, type RouteKey } from '../../lib/site';

const RAIL_LEAD = 36; // tubing extends left toward the logo (the "reservoir")

/** Reverse-map a pathname to a nav route key. */
function keyFromPath(pathname: string): RouteKey | null {
  const entry = (Object.entries(ROUTES) as [RouteKey, string][]).find(([, href]) => href === pathname);
  return entry ? entry[0] : null;
}

/**
 * Nav — "The Infusion Line". The nav IS an IV line: links are ports mounted on
 * gold tubing, a droplet travels down the line to the active page (chasing hover
 * on the way), the tubing fills behind it, and a slow drip falls from the
 * droplet. On pages without a port the droplet parks at the reservoir (logo).
 */
export function Nav() {
  const pathname = usePathname();
  const current = keyFromPath(pathname);
  const overHero = pathname === ROUTES.home;

  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<RouteKey | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ports, setPorts] = useState<Record<string, number>>({});
  const railRef = useRef<HTMLElement | null>(null);
  const nodeRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const measure = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const r = rail.getBoundingClientRect();
    const next: Record<string, number> = {};
    Object.entries(nodeRefs.current).forEach(([id, el]) => {
      if (el) {
        const b = el.getBoundingClientRect();
        next[id] = b.left - r.left + b.width / 2;
      }
    });
    setPorts(next);
  }, []);

  useLayoutEffect(() => {
    measure();
    const t = setTimeout(measure, 350);
    window.addEventListener('resize', measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  const targetId = hovered || (current && NAV_LINKS.some((l) => l.key === current) ? current : null);
  const parked = targetId == null || ports[targetId] == null;
  const dropX = parked ? -RAIL_LEAD + 10 : ports[targetId as string];

  const transparent = overHero && !scrolled && !menuOpen;
  const pill = { borderRadius: 'var(--radius-pill)' };
  const glide = 'left 520ms var(--ease-out)';

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: transparent ? 'transparent' : 'rgba(7,18,51,0.88)',
        backdropFilter: transparent ? 'none' : 'blur(10px)',
        WebkitBackdropFilter: transparent ? 'none' : 'blur(10px)',
        borderBottom: transparent ? '1px solid transparent' : '1px solid var(--navy-300)',
        transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      }}
    >
      <style>{`@keyframes rr-nav-drip{0%{opacity:0;transform:translateY(0) scale(.5)}14%{opacity:.95}70%{opacity:.3}100%{opacity:0;transform:translateY(15px) scale(1)}}`}</style>
      <div
        style={{
          maxWidth: 'var(--container-wide)',
          margin: '0 auto',
          padding: '15px var(--gutter) 13px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 30,
        }}
      >
        <Link href={ROUTES.home} aria-label="RapidRefresh home" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Logo size={40} showWordmark={false} />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: '1.05rem',
              letterSpacing: '-0.01em',
              color: 'var(--ivory)',
            }}
          >
            RapidRefresh
          </span>
        </Link>

        {/* ---- the infusion line (desktop) ---- */}
        <nav
          ref={railRef}
          className="rr-nav-desktop"
          onMouseLeave={() => setHovered(null)}
          style={{ position: 'relative', alignItems: 'flex-end', gap: 30 }}
        >
          {/* empty tubing */}
          <span aria-hidden="true" style={{ position: 'absolute', left: -RAIL_LEAD, right: -18, bottom: 3, height: 1, background: 'var(--ivory-a12)' }} />
          {/* filled tubing */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: -RAIL_LEAD,
              bottom: 2.5,
              height: 2,
              width: Math.max(dropX + RAIL_LEAD, 6),
              background: 'linear-gradient(90deg, var(--gold-a40), var(--gold-400))',
              borderRadius: 2,
              transition: 'width 520ms var(--ease-out)',
            }}
          />
          {/* travelling droplet */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: dropX - 5,
              bottom: -1.5,
              width: 10,
              height: 10,
              borderRadius: '0 50% 50% 50%',
              transform: 'rotate(45deg)',
              background: 'radial-gradient(circle at 32% 30%, var(--gold-200), var(--gold-500) 72%)',
              boxShadow: '0 0 9px var(--gold-a40)',
              transition: glide,
              opacity: parked ? 0.65 : 1,
            }}
          />
          {/* slow drip */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: dropX - 2,
              bottom: -17,
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: 'var(--gold-400)',
              animation: 'rr-nav-drip 3.4s ease-in infinite',
              transition: glide,
            }}
          />

          {NAV_LINKS.map(({ key, label }) => {
            const lit = current === key || hovered === key;
            return (
              <Link
                key={key}
                href={ROUTES[key]}
                onMouseEnter={() => setHovered(key)}
                style={{
                  position: 'relative',
                  padding: '6px 1px 17px',
                  fontFamily: 'var(--font-text)',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  color: current === key ? 'var(--gold-400)' : hovered === key ? 'var(--ivory)' : 'var(--ivory-a80)',
                  transition: 'color var(--dur-fast) var(--ease-out)',
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
                <span
                  ref={(el) => {
                    nodeRefs.current[key] = el;
                  }}
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    bottom: 0,
                    transform: 'translateX(-50%)',
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    boxSizing: 'border-box',
                    background: lit ? 'var(--gold-400)' : 'transparent',
                    border: '1px solid ' + (lit ? 'var(--gold-400)' : 'var(--gold-a40)'),
                    transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
                  }}
                />
              </Link>
            );
          })}
        </nav>

        {/* ---- right cluster (desktop) ---- */}
        <div className="rr-nav-desktop" style={{ alignItems: 'center', gap: 16 }}>
          <a
            href={`tel:${PHONE_TEL}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: 'var(--ivory-a80)',
              fontSize: '13.5px',
              fontWeight: 500,
              whiteSpace: 'nowrap',
            }}
          >
            <Icon name="phone" size={15} color="var(--gold-400)" /> {PHONE_DISPLAY}
          </a>
          <Button as="a" href={ROUTES.booking} variant="primary" size="sm" style={pill}>
            Book Your Drip
          </Button>
        </div>

        {/* ---- hamburger (mobile) ---- */}
        <button
          className="rr-nav-mobile"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            background: 'none',
            border: '1px solid var(--navy-300)',
            borderRadius: 'var(--radius-md)',
            width: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--ivory)',
            cursor: 'pointer',
          }}
        >
          <Icon name={menuOpen ? 'x' : 'menu'} size={22} color="currentColor" />
        </button>
      </div>

      {/* ---- mobile drawer ---- */}
      {menuOpen && (
        <div
          className="rr-nav-mobile"
          style={{
            flexDirection: 'column',
            gap: 4,
            padding: '8px var(--gutter) 24px',
            background: 'rgba(7,18,51,0.98)',
            borderTop: '1px solid var(--navy-300)',
          }}
        >
          {NAV_LINKS.map(({ key, label }) => (
            <Link
              key={key}
              href={ROUTES[key]}
              style={{
                padding: '14px 4px',
                fontFamily: 'var(--font-text)',
                fontSize: '17px',
                fontWeight: 500,
                color: current === key ? 'var(--gold-400)' : 'var(--ivory)',
                borderBottom: '1px solid var(--navy-300)',
              }}
            >
              {label}
            </Link>
          ))}
          {[
            { key: 'giftcards' as RouteKey, label: 'Gift Cards' },
            { key: 'faq' as RouteKey, label: 'FAQ' },
          ].map(({ key, label }) => (
            <Link
              key={key}
              href={ROUTES[key]}
              style={{
                padding: '14px 4px',
                fontFamily: 'var(--font-text)',
                fontSize: '17px',
                fontWeight: 500,
                color: current === key ? 'var(--gold-400)' : 'var(--ivory)',
                borderBottom: '1px solid var(--navy-300)',
              }}
            >
              {label}
            </Link>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 18 }}>
            <Button as="a" href={ROUTES.booking} variant="primary" size="lg" fullWidth style={pill}>
              Book Your Drip
            </Button>
            <a
              href={`tel:${PHONE_TEL}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                color: 'var(--ivory-a80)',
                fontSize: '15px',
                fontWeight: 500,
                padding: '10px',
              }}
            >
              <Icon name="phone" size={16} color="var(--gold-400)" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
