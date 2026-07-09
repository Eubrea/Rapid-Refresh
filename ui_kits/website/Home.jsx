/* global React, Photo, Reveal */
const DSh = window.RapidRefreshDesignSystem_646e39;

// pill CTA style
const pill = { borderRadius: 'var(--radius-pill)' };

function CatCard({ icon, tint, img, name, blurb, onClick }) {
  const { Icon } = DSh;
  const [h, setH] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        textAlign: 'left', border: 0, cursor: 'pointer', padding: 0, background: 'var(--ivory)',
        borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lift)',
        display: 'flex', flexDirection: 'column',
        transform: h ? 'translateY(-6px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)',
      }}>
      <div style={{ height: 168, background: tint, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {img ? (
          <img src={img} alt={name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: h ? 'scale(1.05)' : 'scale(1)', transition: 'transform var(--dur-base) var(--ease-out)' }} />
        ) : (
          <Icon name={icon} size={54} strokeWidth={1.2} color="var(--navy-700)" />
        )}
      </div>
      <div style={{ padding: '20px 22px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.25rem', color: 'var(--charcoal)', letterSpacing: '-0.01em' }}>{name}</span>
          <span style={{ color: 'var(--gold-600)', transform: h ? 'translateX(3px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }}><Icon name="arrow-right" size={20} color="currentColor" /></span>
        </div>
        <p style={{ margin: '6px 0 0', fontSize: '13.5px', color: 'var(--slate-ink)', lineHeight: 1.5 }}>{blurb}</p>
      </div>
    </button>
  );
}

function DripCard({ icon, tint, img, name, bestFor, price, onClick }) {
  const { Icon } = DSh;
  const [h, setH] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        position: 'relative', textAlign: 'left', border: '1px solid var(--ivory-300)', cursor: 'pointer', padding: 0, background: 'var(--ivory)',
        borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'flex', flexDirection: 'column',
        boxShadow: h ? 'var(--shadow-lift)' : 'none', borderColor: h ? 'var(--gold-a40)' : 'var(--ivory-300)',
        transition: 'box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      }}>
      <div style={{ height: 156, background: tint, position: 'relative', overflow: 'hidden' }}>
        <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: h ? 'scale(1.05)' : 'scale(1)', transition: 'transform var(--dur-base) var(--ease-out)' }} />
      </div>
      <span style={{ position: 'absolute', top: 134, left: 16, width: 44, height: 44, borderRadius: '50%', background: 'var(--ivory)', boxShadow: 'var(--shadow-sm)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-600)' }}><Icon name={icon} size={22} color="currentColor" /></span>
      <div style={{ padding: '30px 20px 20px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.15rem', color: 'var(--charcoal)' }}>{name}</div>
        <div style={{ fontSize: '13px', color: 'var(--slate-ink)', margin: '4px 0 14px' }}>{bestFor}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{ fontSize: '11px', color: 'var(--slate-ink)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>From</span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.5rem', color: 'var(--gold-600)' }}>${price}</span>
        </div>
      </div>
    </button>
  );
}

function Home({ onNavigate, onBook }) {
  const { Button, Icon, SectionLabel, Stat } = DSh;
  const Collage = window.Collage;

  const cats = [
    ['droplet', 'var(--ivory-100)', 'Hydration', 'Replenish fluids and restore balance fast.', '../../assets/photos/cat-hydration.webp'],
    ['activity', 'var(--gold-a16)', 'Recovery', 'Bounce back after training, travel, or a big night.', '../../assets/photos/cat-recovery.webp'],
    ['shield-check', 'rgba(38,50,85,0.10)', 'Immunity', 'Support your defenses with medical-grade nutrients.', '../../assets/photos/cat-immunity.webp'],
    ['sparkles', 'var(--ivory-200)', 'Beauty', 'Glow from within with skin, hair & nail support.', '../../assets/photos/cat-beauty.webp'],
  ];
  const marquee = [['user-round-check', 'RN-Led Concierge Care'], ['clock', 'Same-Day Appointments'], ['lock', 'HIPAA-Conscious'], ['shield', 'Fully Insured'], ['flask-conical', 'Medical-Grade']];
  const why = [
    ['stethoscope', 'RN-Led, 22+ Years', 'Every visit is led by a registered nurse with over two decades of acute-care experience.'],
    ['car-front', 'We Come To You', 'Concierge mobile service to your home, office, gym, or hotel, on your schedule.'],
    ['flask-conical', 'Medical-Grade', 'High-quality vitamins and medications, dosed and administered to clinical standards.'],
    ['sliders-horizontal', 'Built Around You', 'Drips customized to your goals: recovery, energy, immunity, beauty, or hydration.'],
  ];
  const whyImg = ['../../assets/photos/why-rn.webp', '../../assets/photos/why-mobile.webp', '../../assets/photos/why-grade.webp', '../../assets/photos/why-custom.webp'];
  const steps = [
    ['smartphone', 'Request', 'Choose your drip, location, and time online or by phone.', '../../assets/photos/step-request.webp'],
    ['clipboard-list', 'Intake & Consent', 'Complete a quick, HIPAA-conscious health intake.', '../../assets/photos/step-intake.webp'],
    ['car-front', 'We Arrive', 'Your RN arrives on schedule and delivers your drip in comfort.', '../../assets/photos/step-arrive.webp'],
  ];
  const drips = [
    ['droplet', 'var(--ivory-100)', 'Essential Hydration', 'Hydration & Electrolytes', 169, '../../assets/photos/drip-hydration.webp'],
    ['zap', 'var(--gold-a16)', 'Energy Reset', 'Energy & Mental Clarity', 189, '../../assets/photos/drip-energy.webp'],
    ['activity', 'rgba(38,50,85,0.10)', 'Game Day Drip™', 'Performance & Recovery', 219, '../../assets/photos/drip-gameday.webp'],
    ['sunrise', 'var(--ivory-200)', 'Morning After Rescue™', 'Hangover Recovery', 249, '../../assets/photos/drip-rescue.webp'],
  ];
  const serve = ['Athletes & High Performers', 'Corporate Professionals', 'Post-Travel Recovery', 'Event & Bridal Parties', 'Everyday Wellness'];
  const testimonials = [
    ['The nurse was professional and the whole experience felt genuinely luxurious. I booked before a half-marathon and recovered in record time.', 'Danielle R.', 'Katy, TX'],
    ['On-time, spotless, and so calming. It’s the only way I’ll do IV therapy now, right in my living room.', 'Marcus T.', 'The Woodlands, TX'],
    ['We booked the whole bridal party. Everyone glowed for the photos. Absolutely worth it.', 'Priya S.', 'Sugar Land, TX'],
  ];

  return (
    <div>
      <style>{`@keyframes rr-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>

      {/* ============ HERO (only navy section) ============ */}
      <section style={{ background: 'var(--navy-900)', position: 'relative' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img src="../../assets/photos/hero.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', opacity: 0.16 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(7,18,51,0.72) 0%, rgba(7,18,51,0.34) 42%, rgba(7,18,51,1) 88%)' }}></div>
        </div>
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(60px,8vw,116px) var(--gutter) 0', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SectionLabel align="center">RN-Led Mobile IV · Houston</SectionLabel>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-hero)', lineHeight: 1.0, letterSpacing: '-0.025em', color: 'var(--ivory)', margin: '24px auto 0', maxWidth: '15ch' }}>
            Premium Mobile IV Hydration in Houston, <span style={{ color: 'var(--gold-400)' }}>and beyond.</span>
          </h1>
          <p style={{ color: 'var(--ivory-a80)', fontSize: 'var(--fs-lg)', lineHeight: 1.6, margin: '24px auto 0', maxWidth: '52ch' }}>
            Expert IV therapy and wellness, delivered to your home, office, gym, or hotel, designed for comfort, safety, and results.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 34, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" style={pill} onClick={onBook}>Book Your Drip</Button>
            <Button variant="secondary" size="lg" style={pill} onClick={() => onNavigate('menu')}>View the Drip Menu</Button>
          </div>
          {/* category cards straddle hero → ivory */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, margin: '64px 0 -84px', position: 'relative', zIndex: 3 }}>
            {cats.map(([ic, tint, n, b, img], i) => (
              <Reveal key={n} delay={i * 70}><CatCard icon={ic} tint={tint} img={img} name={n} blurb={b} onClick={() => onNavigate('menu')} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRUST MARQUEE ============ */}
      <section style={{ background: 'var(--ivory)', borderTopLeftRadius: 44, borderTopRightRadius: 44, marginTop: -1, paddingTop: 128, overflow: 'hidden' }}>
        <div style={{ borderTop: '1px solid var(--ivory-200)', borderBottom: '1px solid var(--ivory-200)', padding: '20px 0', overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)' }}>
          <div style={{ display: 'flex', gap: 56, width: 'max-content', animation: 'rr-marquee 26s linear infinite' }}>
            {[...marquee, ...marquee, ...marquee, ...marquee].map(([ic, t], i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: 'var(--slate-ink)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                <Icon name={ic} size={18} color="var(--gold-600)" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY (ivory) ============ */}
      <section style={{ background: 'var(--ivory)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <Reveal>
            <SectionLabel tone="onLight">Why RapidRefresh</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--charcoal)', letterSpacing: '-0.02em', margin: '18px 0 0', maxWidth: '18ch' }}>Hospital-level care, concierge-level comfort.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22, marginTop: 52 }}>
            {why.map(([ic, t, d], i) => (
              <Reveal key={t} delay={i * 70}>
                <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--ivory-100)', borderRadius: 'var(--radius-xl)', height: '100%', minHeight: 322 }}>
                  <div style={{ position: 'relative', height: 150 }}>
                    <img src={whyImg[i]} alt="" aria-hidden="true" style={{ position: 'absolute', top: 0, right: 0, width: '62%', height: '100%', objectFit: 'cover', objectPosition: 'right top', WebkitMaskImage: 'linear-gradient(to bottom left, #000 30%, transparent 82%)', maskImage: 'linear-gradient(to bottom left, #000 30%, transparent 82%)', pointerEvents: 'none' }} />
                    <span style={{ position: 'absolute', top: 28, left: 26, width: 54, height: 54, borderRadius: '50%', background: 'var(--ivory)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-600)', boxShadow: 'var(--shadow-sm)' }}><Icon name={ic} size={26} color="currentColor" /></span>
                  </div>
                  <div style={{ padding: '6px 26px 30px' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.3rem', color: 'var(--charcoal)', margin: '0 0 10px' }}>{t}</h3>
                    <p style={{ color: 'var(--slate-ink)', fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS (ivory-100) ============ */}
      <section style={{ background: 'var(--ivory-100)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SectionLabel tone="onLight" align="center">How It Works</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--charcoal)', letterSpacing: '-0.02em', margin: '18px 0 0' }}>Three steps to feeling your best.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 26, marginTop: 56 }}>
            {steps.map(([ic, t, d, img], i) => (
              <Reveal key={t} delay={i * 90}>
                <div style={{ background: 'var(--ivory)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', height: '100%' }}>
                  <div style={{ height: 182, background: i % 2 ? 'var(--gold-a16)' : 'var(--ivory-200)', overflow: 'hidden' }}><img src={img} alt={t} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                  <div style={{ padding: '26px 28px 30px' }}>
                    <span style={{ fontFamily: 'var(--font-text)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-600)' }}>Step {['One', 'Two', 'Three'][i]}</span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.4rem', color: 'var(--charcoal)', margin: '10px 0 8px' }}>{t}</h3>
                    <p style={{ color: 'var(--slate-ink)', fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED DRIPS (ivory, light cards) ============ */}
      <section style={{ background: 'var(--ivory)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <SectionLabel tone="onLight">The Drip Menu</SectionLabel>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--charcoal)', letterSpacing: '-0.02em', margin: '18px 0 0' }}>Signature drips</h2>
            </div>
            <Button variant="secondary" style={pill} onClick={() => onNavigate('menu')} iconRight={<Icon name="arrow-right" size={16} color="currentColor" />}>View Full Menu</Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22, marginTop: 48 }}>
            {drips.map(([ic, tint, n, b, p, img], i) => (
              <Reveal key={n} delay={i * 70}><DripCard icon={ic} tint={tint} img={img} name={n} bestFor={b} price={p} onClick={() => onNavigate('menu')} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BOOSTERS COLLAGE ============ */}
      <Collage
        bg="var(--ivory-100)"
        eyebrow="Boosters & Injections"
        accentWord="Amplify"
        headlineRest="every drip with a targeted boost."
        mainCaption="Booster vials · flat-lay"
        captionA="Glutathione push"
        captionB="B12 injection"
        mainSrc="../../assets/photos/boosters-flatlay.webp"
        aSrc="../../assets/photos/booster-glutathione.webp"
        bSrc="../../assets/photos/booster-b12.webp"
        checklistTitle="Most-added boosters"
        checklist={['Glutathione for antioxidant glow', 'Vitamin B12 for energy & focus', 'Vitamin C for immune support', 'Biotin for hair, skin & nails', 'Magnesium for muscle recovery']}
        subhead="Small additions, real difference"
        body="Layer clinician-selected vitamins, antioxidants, and amino acids onto any drip, or book a quick wellness injection between visits."
        ctaLabel="View the Full Menu"
        onCta={() => onNavigate('menu')}
      />

      {/* ============ WHO WE SERVE (overlap imagery + checklist) ============ */}
      <section style={{ background: 'var(--ivory)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
          <Reveal>
            <div style={{ position: 'relative', paddingBottom: 48, paddingRight: 48 }}>
              <Photo src="../../assets/photos/serve-athlete.webp" alt="Athlete receiving IV therapy after training" ratio="4 / 5" radius="var(--radius-xl)" />
              <div style={{ position: 'absolute', right: 0, bottom: 0, width: '52%' }}>
                <Photo src="../../assets/photos/serve-athome.webp" alt="Relaxing at home during an IV drip" ratio="1 / 1" radius="var(--radius-xl)" style={{ border: '6px solid var(--ivory)' }} />
              </div>
            </div>
          </Reveal>
          <div>
            <SectionLabel tone="onLight">Who We Serve</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--charcoal)', letterSpacing: '-0.02em', margin: '18px 0 26px', maxWidth: '16ch' }}>Wellness, tailored to how you live.</h2>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {serve.map((s, i) => (
                <li key={s} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 0', borderBottom: i < serve.length - 1 ? '1px solid var(--ivory-300)' : 'none' }}>
                  <span style={{ width: 30, height: 30, flex: '0 0 auto', borderRadius: '50%', background: 'var(--gold-a16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-600)' }}><Icon name="check" size={16} color="currentColor" /></span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.3rem', color: 'var(--charcoal)' }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ CORPORATE & EVENTS COLLAGE ============ */}
      <Collage
        bg="var(--ivory-100)"
        flip
        eyebrow="Corporate & Events"
        accentWord="Wellness"
        headlineRest="that travels to your team."
        mainCaption="Corporate wellness day"
        captionA="Bridal party"
        captionB="On-site setup"
        mainSrc="../../assets/photos/corporate-day.webp"
        aSrc="../../assets/photos/event-bridal.webp"
        bSrc="../../assets/photos/corporate-setup.webp"
        checklistTitle="Perfect for"
        checklist={['Corporate offices & HQs', 'Conferences & summits', 'Bridal & bachelorette parties', 'Fitness competitions', 'Wellness days & retreats']}
        subhead="Custom group pricing"
        body="From boardrooms to bridal suites, we arrive on-site and tailor drips to your group size, timing, and goals."
        ctaLabel="Explore Corporate & Events"
        onCta={() => onNavigate('corporate')}
      />

      {/* ============ FOUNDER (ivory, real photo) ============ */}
      <section style={{ background: 'var(--ivory)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
          <Reveal><Photo src="../../assets/photos/Founder Waist Upwards.webp" alt="Rahab Njuguna, RN" ratio="3 / 4" radius="var(--radius-xl)" /></Reveal>
          <div>
            <SectionLabel tone="onLight">Meet Your Nurse</SectionLabel>
            <blockquote style={{ margin: '22px 0 0', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d2)', lineHeight: 1.3, letterSpacing: '-0.01em', color: 'var(--charcoal)' }}>
              “I founded RapidRefresh to combine hospital-level clinical expertise with the comfort of luxury concierge care.”
            </blockquote>
            <p style={{ color: 'var(--slate-ink)', fontSize: '16px', lineHeight: 1.7, margin: '24px 0 0', maxWidth: '52ch' }}>
              With over 22 years of acute-care nursing experience, Rahab delivers safe, personalized IV hydration and wellness that helps you look, feel, and perform at your best.
            </p>
            <div style={{ display: 'flex', gap: 48, marginTop: 34 }}>
              <Stat tone="onLight" value="22+" label="Years Acute-Care Experience" />
              <Stat tone="onLight" value="100%" label="RN-Led Concierge Visits" />
            </div>
            <div style={{ marginTop: 34 }}><Button variant="secondary" style={pill} onClick={() => onNavigate('about')}>Read Rahab’s Story</Button></div>
          </div>
        </div>
      </section>

      {/* ============ MEMBERSHIPS COLLAGE ============ */}
      <Collage
        bg="var(--ivory-100)"
        eyebrow="The Wellness Club"
        accentWord="Membership"
        headlineRest="made effortless."
        mainCaption="Concierge member kit"
        captionA="Monthly drip"
        captionB="B12 boost"
        mainSrc="../../assets/photos/member-kit.webp"
        aSrc="../../assets/photos/member-drip.webp"
        bSrc="../../assets/photos/member-b12.webp"
        checklistTitle="Members enjoy"
        checklist={['Monthly IV therapy sessions', 'Exclusive member pricing', 'Priority scheduling', 'Complimentary travel', 'A monthly B12 boost']}
        subhead="From $179 / month"
        body="Make wellness a habit, not an afterthought, with monthly drips, boosters, and concierge perks all year long."
        ctaLabel="Explore Memberships"
        onCta={() => onNavigate('memberships')}
      />

      {/* ============ TESTIMONIALS ============ */}
      <section style={{ background: 'var(--ivory)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SectionLabel tone="onLight" align="center">Loved Across Houston</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--charcoal)', letterSpacing: '-0.02em', margin: '18px 0 0' }}>What clients say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 52 }}>
            {testimonials.map(([q, n, loc], i) => (
              <Reveal key={n} delay={i * 80}>
                <div style={{ background: 'var(--ivory)', borderRadius: 'var(--radius-xl)', padding: '32px 30px', boxShadow: 'var(--shadow-sm)', height: '100%', display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div style={{ display: 'flex', gap: 3, color: 'var(--gold-500)' }}>{[0, 1, 2, 3, 4].map(s => <Icon key={s} name="star" size={16} color="currentColor" />)}</div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '1.2rem', lineHeight: 1.45, color: 'var(--charcoal)', margin: 0, flex: 1 }}>“{q}”</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid var(--ivory-200)', paddingTop: 18 }}>
                    <span style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--gold-a16)', color: 'var(--gold-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 500 }}>{n[0]}</span>
                    <span><span style={{ display: 'block', fontWeight: 600, fontSize: '14px', color: 'var(--charcoal)' }}>{n}</span><span style={{ fontSize: '12.5px', color: 'var(--slate-ink)' }}>{loc}</span></span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INSTAGRAM STRIP ============ */}
      <section style={{ background: 'var(--ivory-100)', padding: 'var(--section-y-tight) var(--gutter) var(--section-y)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 34 }}>
            <div>
              <SectionLabel tone="onLight">On Instagram</SectionLabel>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d2)', color: 'var(--charcoal)', letterSpacing: '-0.02em', margin: '16px 0 0' }}>@rapidrefreshivtherapy</h2>
            </div>
            <a href="https://www.instagram.com/rapidrefreshivtherapy/" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--gold-600)', fontWeight: 600, fontSize: '14px' }}>
              <Icon name="at-sign" size={18} color="currentColor" /> Follow along
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 14 }}>
            {['InstaInspo.webp', 'member-drip.webp', 'boosters-flatlay.webp', 'event-bridal.webp', 'cat-beauty.webp', 'serve-athome.webp'].map((f, i) => (
              <Reveal key={f} delay={i * 50}>
                <div style={{ aspectRatio: '1 / 1', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--ivory-200)' }}>
                  <img src={'../../assets/photos/' + f} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CLOSING CTA (ivory, gold) ============ */}
      <section style={{ background: 'var(--ivory)', padding: '0 var(--gutter) var(--section-y)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div style={{ background: 'var(--navy-800)', borderRadius: 'var(--radius-xl)', padding: 'clamp(48px,6vw,84px) clamp(28px,5vw,72px)', textAlign: 'center', boxShadow: 'var(--shadow-lift)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--ivory)', letterSpacing: '-0.02em', margin: 0 }}>Ready to feel your best?</h2>
            <p style={{ color: 'var(--ivory-a64)', fontSize: 'var(--fs-lg)', margin: '18px auto 0', maxWidth: '44ch' }}>Book a concierge IV session, or join the Wellness Club for member pricing all year.</p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 34, flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" style={pill} onClick={onBook}>Book Your Drip</Button>
              <Button variant="ghost" size="lg" style={pill} onClick={() => onNavigate('memberships')} iconRight={<Icon name="arrow-right" size={18} color="currentColor" />}>Explore Memberships</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.Home = Home;
