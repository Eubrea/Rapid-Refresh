/* global React */
// Site chrome: top navigation + footer.
const DSc = window.RapidRefreshDesignSystem_646e39;
const JANEAPP = 'https://rapidrefreshivtherapy.janeapp.com/';
const INSTAGRAM = 'https://www.instagram.com/rapidrefreshivtherapy/';

/**
 * Nav — "The Infusion Line".
 * The nav IS an IV line: links are ports mounted on gold tubing, a droplet of
 * fluid travels down the line to the active page (chasing your hover on the way),
 * the tubing fills behind it, and a slow drip falls from the droplet — nav as
 * infusion in progress. On pages without a port the droplet parks at the
 * reservoir (the logo).
 */
function Nav({ current = 'home', onNavigate, onBook, overHero = false }) {
  const { Button, Icon, Logo } = DSc;
  const [scrolled, setScrolled] = React.useState(false);
  const [hovered, setHovered] = React.useState(null);
  const [ports, setPorts] = React.useState({}); // link id -> x center on the rail
  const railRef = React.useRef(null);
  const nodeRefs = React.useRef({});

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['menu', 'Drip Menu'], ['memberships', 'Memberships'], ['pricing', 'Pricing'],
    ['service', 'Service Area'], ['corporate', 'Corporate'], ['about', 'About'],
  ];

  // Measure each port's position on the rail (re-measured on resize / font load).
  const measure = React.useCallback(() => {
    const rail = railRef.current; if (!rail) return;
    const r = rail.getBoundingClientRect();
    const next = {};
    Object.entries(nodeRefs.current).forEach(([id, el]) => {
      if (el) { const b = el.getBoundingClientRect(); next[id] = b.left - r.left + b.width / 2; }
    });
    setPorts(next);
  }, []);
  React.useLayoutEffect(() => {
    measure();
    const t = setTimeout(measure, 350);
    window.addEventListener('resize', measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => { clearTimeout(t); window.removeEventListener('resize', measure); };
  }, [measure]);

  const RAIL_LEAD = 36; // tubing extends left toward the logo (the "reservoir")
  const targetId = hovered || (links.some(([id]) => id === current) ? current : null);
  const parked = targetId == null || ports[targetId] == null;
  const dropX = parked ? -RAIL_LEAD + 10 : ports[targetId];

  // Transparent only when sitting over the navy hero AND not yet scrolled.
  const transparent = overHero && !scrolled;
  const pill = { borderRadius: 'var(--radius-pill)' };
  const glide = 'left 520ms var(--ease-out)';

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: transparent ? 'transparent' : 'rgba(7,18,51,0.88)',
      backdropFilter: transparent ? 'none' : 'blur(10px)', WebkitBackdropFilter: transparent ? 'none' : 'blur(10px)',
      borderBottom: transparent ? '1px solid transparent' : '1px solid var(--navy-300)',
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    }}>
      <style>{`@keyframes rr-nav-drip{0%{opacity:0;transform:translateY(0) scale(.5)}14%{opacity:.95}70%{opacity:.3}100%{opacity:0;transform:translateY(15px) scale(1)}}`}</style>
      <div style={{
        maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '15px var(--gutter) 13px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 30,
      }}>
        <button onClick={() => onNavigate('home')} style={{ background: 'none', border: 0, cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: 12 }}>
          <Logo src="../../assets/logo-512.png" size={40} showWordmark={false} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.05rem', letterSpacing: '-0.01em', color: 'var(--ivory)' }}>RapidRefresh</span>
        </button>

        {/* ---- the infusion line ---- */}
        <nav ref={railRef} onMouseLeave={() => setHovered(null)} style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', gap: 30 }}>
          {/* empty tubing */}
          <span aria-hidden="true" style={{ position: 'absolute', left: -RAIL_LEAD, right: -18, bottom: 3, height: 1, background: 'var(--ivory-a12)' }}></span>
          {/* filled tubing — fluid that has flowed up to the droplet */}
          <span aria-hidden="true" style={{ position: 'absolute', left: -RAIL_LEAD, bottom: 2.5, height: 2, width: Math.max(dropX + RAIL_LEAD, 6), background: 'linear-gradient(90deg, var(--gold-a40), var(--gold-400))', borderRadius: 2, transition: 'width 520ms var(--ease-out)' }}></span>
          {/* the travelling droplet */}
          <span aria-hidden="true" style={{ position: 'absolute', left: dropX - 5, bottom: -1.5, width: 10, height: 10, borderRadius: '0 50% 50% 50%', transform: 'rotate(45deg)', background: 'radial-gradient(circle at 32% 30%, var(--gold-200), var(--gold-500) 72%)', boxShadow: '0 0 9px var(--gold-a40)', transition: glide, opacity: parked ? 0.65 : 1 }}></span>
          {/* the slow drip falling off the droplet */}
          <span aria-hidden="true" style={{ position: 'absolute', left: dropX - 2, bottom: -17, width: 4, height: 4, borderRadius: '50%', background: 'var(--gold-400)', animation: 'rr-nav-drip 3.4s ease-in infinite', transition: glide }}></span>

          {links.map(([id, label]) => {
            const lit = current === id || hovered === id;
            return (
              <button key={id} onClick={() => onNavigate(id)} onMouseEnter={() => setHovered(id)} style={{
                position: 'relative', background: 'none', border: 0, cursor: 'pointer', padding: '6px 1px 17px',
                fontFamily: 'var(--font-text)', fontSize: '13.5px', fontWeight: 500, letterSpacing: '0.01em',
                color: current === id ? 'var(--gold-400)' : hovered === id ? 'var(--ivory)' : 'var(--ivory-a80)',
                transition: 'color var(--dur-fast) var(--ease-out)', whiteSpace: 'nowrap',
              }}>
                {label}
                {/* the port this label is mounted on */}
                <span ref={(el) => { nodeRefs.current[id] = el; }} aria-hidden="true" style={{
                  position: 'absolute', left: '50%', bottom: 0, transform: 'translateX(-50%)',
                  width: 7, height: 7, borderRadius: '50%', boxSizing: 'border-box',
                  background: lit ? 'var(--gold-400)' : 'transparent',
                  border: '1px solid ' + (lit ? 'var(--gold-400)' : 'var(--gold-a40)'),
                  transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
                }}></span>
              </button>
            );
          })}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="tel:+17138517590" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--ivory-a80)', fontSize: '13.5px', fontWeight: 500, whiteSpace: 'nowrap' }}>
            <Icon name="phone" size={15} color="var(--gold-400)" /> (713) 851-7590
          </a>
          <Button variant="primary" size="sm" style={pill} onClick={onBook}>Book Your Drip</Button>
        </div>
      </div>
    </header>
  );
}

function Footer({ onNavigate, onJane }) {
  const { Icon, Logo } = DSc;
  const seo = ['Mobile IV Therapy Houston', 'Houston IV Hydration', 'IV Drip Near Me', 'Mobile IV Nurse Houston', 'Hangover IV Houston', 'Myers Cocktail Houston', 'Vitamin IV Therapy Houston'];
  const areas = ['Houston', 'Sugar Land', 'Katy', 'The Woodlands', 'Pearland', 'Missouri City', 'Alvin', 'Manvel', 'Fresno'];
  const socials = [['at-sign', INSTAGRAM, 'Instagram'], ['phone', 'tel:+17138517590', 'Call'], ['mail', 'mailto:hello@rapidrefreshiv.com', 'Email']];
  return (
    <footer style={{ background: 'var(--navy-900)', borderTop: '1px solid var(--navy-300)', paddingTop: 'var(--section-y-tight)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 44, paddingBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Logo src="../../assets/logo-512.png" size={46} showWordmark={false} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.15rem', color: 'var(--ivory)' }}>RapidRefresh</span>
            </div>
            <p style={{ color: 'var(--ivory-a64)', fontSize: '14px', lineHeight: 1.6, marginTop: 20, maxWidth: '34ch' }}>
              RN-led mobile IV hydration &amp; wellness, delivered to your home, office, gym, or hotel across Greater Houston.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 22 }}>
              {socials.map(([n, href, label]) => (
                <a key={n} href={href} target="_blank" rel="noopener" aria-label={label} style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--navy-300)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-400)', transition: 'border-color var(--dur-fast) var(--ease-out)' }}>
                  <Icon name={n} size={18} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: 'var(--gold-400)', fontFamily: 'var(--font-text)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 18 }}>Service Area</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {areas.map(a => <li key={a}><button onClick={() => onNavigate('service')} style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', color: 'var(--ivory-a64)', fontSize: '14px' }}>{a}</button></li>)}
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--gold-400)', fontFamily: 'var(--font-text)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 18 }}>Explore</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['menu', 'Drip Menu'], ['pricing', 'Pricing'], ['memberships', 'Memberships'], ['giftcards', 'Gift Cards'], ['corporate', 'Corporate & Events'], ['faq', 'FAQ'], ['about', 'About the Nurse']].map(([id, l]) => (
                <li key={id}><button onClick={() => onNavigate(id)} style={{ background: 'none', border: 0, cursor: 'pointer', padding: 0, color: 'var(--ivory-a64)', fontSize: '14px' }}>{l}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--gold-400)', fontFamily: 'var(--font-text)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 18 }}>Book</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li><button onClick={onJane} style={{ background: 'none', border: 0, cursor: 'pointer', padding: 0, color: 'var(--ivory-a64)', fontSize: '14px' }}>Book on JaneApp</button></li>
              <li><button onClick={() => onNavigate('booking')} style={{ background: 'none', border: 0, cursor: 'pointer', padding: 0, color: 'var(--ivory-a64)', fontSize: '14px' }}>Request an Appointment</button></li>
              <li><a href="tel:+17138517590" style={{ color: 'var(--ivory-a64)', fontSize: '14px' }}>(713) 851-7590</a></li>
              <li><a href={INSTAGRAM} target="_blank" rel="noopener" style={{ color: 'var(--ivory-a64)', fontSize: '14px' }}>@rapidrefreshivtherapy</a></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--navy-300)', padding: '22px 0 30px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 18px', marginBottom: 18 }}>
            {seo.map(s => <span key={s} style={{ color: 'var(--ivory-a44)', fontSize: '12px' }}>{s}</span>)}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, color: 'var(--ivory-a44)', fontSize: '12px' }}>
            <span>© 2026 RapidRefresh Mobile IV &amp; Wellness · Houston, TX</span>
            <span>HIPAA-Conscious · Fully Insured · RN-Led</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer, RR_JANEAPP: JANEAPP, RR_INSTAGRAM: INSTAGRAM });
