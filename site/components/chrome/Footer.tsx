import Link from 'next/link';
import { Icon } from '../ui/Icon';
import { Logo } from '../ui/Logo';
import {
  ROUTES,
  JANEAPP,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SEO_KEYWORDS,
  SERVICE_AREAS,
  type RouteKey,
} from '../../lib/site';

const colHead = {
  color: 'var(--gold-400)',
  fontFamily: 'var(--font-text)',
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  marginBottom: 18,
};

const linkStyle = { color: 'var(--ivory-a64)', fontSize: '14px' };

const explore: { key: RouteKey; label: string }[] = [
  { key: 'menu', label: 'Drip Menu' },
  { key: 'pricing', label: 'Pricing' },
  { key: 'memberships', label: 'Memberships' },
  { key: 'giftcards', label: 'Gift Cards' },
  { key: 'corporate', label: 'Corporate & Events' },
  { key: 'faq', label: 'FAQ' },
  { key: 'about', label: 'About the Nurse' },
];

export function Footer() {
  const socials: [string, string, string][] = [
    ['at-sign', INSTAGRAM, 'Instagram'],
    ['phone', `tel:${PHONE_TEL}`, 'Call'],
    ['mail', `mailto:${EMAIL}`, 'Email'],
  ];

  return (
    <footer style={{ background: 'var(--navy-900)', borderTop: '1px solid var(--navy-300)', paddingTop: 'var(--section-y-tight)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div className="rr-footer-grid" style={{ paddingBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Logo size={46} showWordmark={false} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.15rem', color: 'var(--ivory)' }}>
                RapidRefresh
              </span>
            </div>
            <p style={{ color: 'var(--ivory-a64)', fontSize: '14px', lineHeight: 1.6, marginTop: 20, maxWidth: '34ch' }}>
              RN-led mobile IV hydration &amp; wellness, delivered to your home, office, gym, or hotel across Greater Houston.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 22 }}>
              {socials.map(([n, href, label]) => (
                <a
                  key={n}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener' : undefined}
                  aria-label={label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    border: '1px solid var(--navy-300)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-400)',
                    transition: 'border-color var(--dur-fast) var(--ease-out)',
                  }}
                >
                  <Icon name={n} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={colHead}>Service Area</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SERVICE_AREAS.map((a) => (
                <li key={a}>
                  <Link href={ROUTES.service} style={linkStyle}>
                    {a}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={colHead}>Explore</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {explore.map(({ key, label }) => (
                <li key={key}>
                  <Link href={ROUTES[key]} style={linkStyle}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={colHead}>Book</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li>
                <a href={JANEAPP} target="_blank" rel="noopener" style={linkStyle}>
                  Book on JaneApp
                </a>
              </li>
              <li>
                <Link href={ROUTES.booking} style={linkStyle}>
                  Request an Appointment
                </Link>
              </li>
              <li>
                <a href={`tel:${PHONE_TEL}`} style={linkStyle}>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM} target="_blank" rel="noopener" style={linkStyle}>
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--navy-300)', padding: '22px 0 30px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 18px', marginBottom: 18 }}>
            {SEO_KEYWORDS.map((s) => (
              <span key={s} style={{ color: 'var(--ivory-a44)', fontSize: '12px' }}>
                {s}
              </span>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 12,
              color: 'var(--ivory-a44)',
              fontSize: '12px',
            }}
          >
            <span>© 2026 RapidRefresh Mobile IV &amp; Wellness · Houston, TX</span>
            <span>HIPAA-Conscious · Fully Insured · RN-Led</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
