'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Icon, type IconName } from '../ui/Icon';
import { SectionLabel } from '../ui/SectionLabel';
import { Stat } from '../ui/Stat';
import { Photo } from '../kit/Photo';
import { Reveal } from '../kit/Reveal';
import { Collage } from '../kit/Collage';
import { ROUTES, INSTAGRAM, INSTAGRAM_HANDLE } from '../../lib/site';

const pill = { borderRadius: 'var(--radius-pill)' };
const P = '/photos/';

function CatCard({ tint, img, name, blurb }: { tint: string; img: string; name: string; blurb: string }) {
  const [h, setH] = useState(false);
  return (
    <Link
      href={ROUTES.menu}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        textAlign: 'left',
        background: 'var(--ivory)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lift)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transform: h ? 'translateY(-6px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)',
      }}
    >
      <div className="rr-cat-media" style={{ background: tint, position: 'relative', overflow: 'hidden' }}>
        <Image
          src={img}
          alt={name}
          fill
          sizes="(max-width: 720px) 50vw, (max-width: 1024px) 50vw, 280px"
          style={{ objectFit: 'cover', transform: h ? 'scale(1.05)' : 'scale(1)', transition: 'transform var(--dur-base) var(--ease-out)' }}
        />
      </div>
      <div className="rr-cat-body">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.25rem', color: 'var(--charcoal)', letterSpacing: '-0.01em' }}>
            {name}
          </span>
          <span style={{ color: 'var(--gold-600)', transform: h ? 'translateX(3px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }}>
            <Icon name="arrow-right" size={20} color="currentColor" />
          </span>
        </div>
        <p style={{ margin: '6px 0 0', fontSize: '13.5px', color: 'var(--slate-ink)', lineHeight: 1.5 }}>{blurb}</p>
      </div>
    </Link>
  );
}

function DripCard({ icon, tint, img, name, bestFor, price }: { icon: IconName; tint: string; img: string; name: string; bestFor: string; price: number }) {
  const [h, setH] = useState(false);
  return (
    <Link
      href={ROUTES.menu}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        position: 'relative',
        textAlign: 'left',
        border: `1px solid ${h ? 'var(--gold-a40)' : 'var(--ivory-300)'}`,
        background: 'var(--ivory)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: h ? 'var(--shadow-lift)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      }}
    >
      <div style={{ height: 156, background: tint, position: 'relative', overflow: 'hidden' }}>
        <Image
          src={img}
          alt={name}
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 280px"
          style={{ objectFit: 'cover', transform: h ? 'scale(1.05)' : 'scale(1)', transition: 'transform var(--dur-base) var(--ease-out)' }}
        />
      </div>
      <span
        style={{
          position: 'absolute',
          top: 134,
          left: 16,
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: 'var(--ivory)',
          boxShadow: 'var(--shadow-sm)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--gold-600)',
        }}
      >
        <Icon name={icon} size={22} color="currentColor" />
      </span>
      <div style={{ padding: '30px 20px 20px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.15rem', color: 'var(--charcoal)' }}>{name}</div>
        <div style={{ fontSize: '13px', color: 'var(--slate-ink)', margin: '4px 0 14px' }}>{bestFor}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{ fontSize: '11px', color: 'var(--slate-ink)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>From</span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.5rem', color: 'var(--gold-600)' }}>${price}</span>
        </div>
      </div>
    </Link>
  );
}

export function HomeScreen() {
  const cats: [string, string, string, string][] = [
    ['var(--ivory-100)', 'Hydration', 'Replenish fluids and restore balance fast.', P + 'cat-hydration.webp'],
    ['var(--gold-a16)', 'Recovery', 'Bounce back after training, travel, or a big night.', P + 'cat-recovery.webp'],
    ['rgba(38,50,85,0.10)', 'Immunity', 'Support your defenses with medical-grade nutrients.', P + 'cat-immunity.webp'],
    ['var(--ivory-200)', 'Beauty', 'Glow from within with skin, hair & nail support.', P + 'cat-beauty.webp'],
  ];
  const marquee: [IconName, string][] = [
    ['user-round-check', 'RN-Led Concierge Care'],
    ['stethoscope', 'Physician-Directed Care'],
    ['shield-check', 'Sterile, Hospital-Grade Supplies'],
    ['clock', 'Same-Day Appointments'],
    ['lock', 'HIPAA-Conscious'],
    ['shield', 'Fully Insured'],
    ['flask-conical', 'Medical-Grade'],
  ];
  const why: [IconName, string, string, string][] = [
    ['stethoscope', 'RN-Led, 22+ Years of Acute-Care Experience', 'Every treatment is delivered by an experienced Registered Nurse committed to safe, evidence-based care.', P + 'why-rn.webp'],
    ['car-front', 'Concierge Service', 'Luxury IV therapy delivered to your home, office, hotel, or event.', P + 'why-mobile.webp'],
    ['syringe', 'Physician-Directed Protocols', 'Premium ingredients administered using physician-approved protocols and hospital-quality standards.', P + 'why-grade.webp'],
    ['sparkles', 'Personalized Wellness', 'Every IV therapy treatment is customized to support your unique health and wellness goals.', P + 'why-custom.webp'],
  ];
  const steps: [IconName, string, string, string][] = [
    ['smartphone', 'Book Your Visit', 'Choose your drip, location, and time online or by phone.', P + 'step-request.webp'],
    ['clipboard-list', 'Personalized Health Assessment', 'Complete a quick health assessment so your RN can tailor the treatment to you.', P + 'step-intake.webp'],
    ['car-front', 'Relax While We Come to You', 'Your RN arrives on schedule and delivers your drip in comfort, wherever you are.', P + 'step-arrive.webp'],
    ['sparkles', 'Feel Your Best', 'Rehydrated, replenished, and recharged, ready to take on whatever comes next.', P + 'serve-athome.webp'],
  ];
  const drips: [IconName, string, string, string, number, string][] = [
    ['droplet', 'var(--ivory-100)', 'Essential Hydration', 'Hydration & Electrolytes', 169, P + 'drip-hydration.webp'],
    ['zap', 'var(--gold-a16)', 'Energy Reset', 'Energy & Mental Clarity', 189, P + 'drip-energy.webp'],
    ['activity', 'rgba(38,50,85,0.10)', 'Game Day Drip™', 'Performance & Recovery', 219, P + 'drip-gameday.webp'],
    ['sunrise', 'var(--ivory-200)', 'Morning After Rescue™', 'Hangover Recovery', 249, P + 'drip-rescue.webp'],
  ];
  const serve = ['Athletes & High Performers', 'Corporate Professionals', 'Post-Travel Recovery', 'Event & Bridal Parties', 'Everyday Wellness'];
  const testimonials: [string, string, string, string][] = [
    ['The nurse was professional and the whole experience felt genuinely luxurious. I booked before a half-marathon and recovered in record time.', 'Danielle R.', 'Katy, TX', P + 'testimonial-danielle.webp'],
    ['On-time, spotless, and so calming. It is the only way I will do IV therapy now, right in my living room.', 'Marcus T.', 'The Woodlands, TX', P + 'testimonial-marcus.webp'],
    ['We booked the whole bridal party. Everyone glowed for the photos. Absolutely worth it.', 'Priya S.', 'Sugar Land, TX', P + 'testimonial-priya.webp'],
  ];

  return (
    <div>
      <style>{`@keyframes rr-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>

      {/* ============ HERO (only navy section) ============ */}
      <section className="rr-hero" style={{ background: 'var(--navy-900)', position: 'relative' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <Image src={P + 'hero.webp'} alt="" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 30%', opacity: 0.16 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(7,18,51,0.72) 0%, rgba(7,18,51,0.34) 42%, rgba(7,18,51,1) 88%)' }} />
        </div>
        <div className="rr-hero-inner" style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(40px,8vw,104px) var(--gutter) 0', textAlign: 'center' }}>
          <div className="rr-hero-eyebrow" style={{ display: 'flex', justifyContent: 'center' }}>
            <SectionLabel align="center">RN-Led Mobile IV · TX, MO</SectionLabel>
          </div>
          <h1
            className="rr-hero-h1"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'var(--fs-hero)',
              lineHeight: 1.0,
              letterSpacing: '-0.025em',
              color: 'var(--ivory)',
              margin: '20px auto 0',
              maxWidth: '15ch',
            }}
          >
            Premium Mobile IV Hydration in Houston, <span style={{ color: 'var(--gold-400)' }}>and beyond.</span>
          </h1>
          <p className="rr-hero-sub" style={{ color: 'var(--ivory-a80)', fontSize: 'var(--fs-lg)', lineHeight: 1.6, margin: '20px auto 0', maxWidth: '52ch' }}>
            Expert IV therapy and wellness, delivered to your home, office, gym, or hotel, designed for comfort, safety, and results.
          </p>
          <div className="rr-hero-cta" style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 30, flexWrap: 'wrap' }}>
            <Button as="a" href={ROUTES.booking} variant="primary" size="lg" style={pill}>
              Book Your Drip
            </Button>
            <Button as="a" href={ROUTES.menu} variant="secondary" size="lg" style={pill}>
              View the Drip Menu
            </Button>
          </div>
          {/* category cards straddle hero → ivory */}
          <div className="rr-grid-4 rr-hero-cards" style={{ position: 'relative', zIndex: 3 }}>
            {cats.map(([tint, n, b, img], i) => (
              <Reveal key={n} delay={i * 70}>
                <CatCard tint={tint} img={img} name={n} blurb={b} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRUST MARQUEE ============ */}
      <section style={{ background: 'var(--ivory)', borderTopLeftRadius: 44, borderTopRightRadius: 44, marginTop: -1, paddingTop: 128, overflow: 'hidden' }}>
        <div
          style={{
            borderTop: '1px solid var(--ivory-200)',
            borderBottom: '1px solid var(--ivory-200)',
            padding: '20px 0',
            overflow: 'hidden',
            maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
          }}
        >
          <div style={{ display: 'flex', gap: 56, width: 'max-content', animation: 'rr-marquee 26s linear infinite' }}>
            {[...marquee, ...marquee, ...marquee, ...marquee].map(([ic, t], i) => (
              <span
                key={i}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                  color: 'var(--slate-ink)',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
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
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--charcoal)', letterSpacing: '-0.02em', margin: '18px 0 0', maxWidth: '18ch' }}>
              Hospital-Level Expertise. Luxury Concierge Care.
            </h2>
          </Reveal>
          <div className="rr-grid-4" style={{ marginTop: 52 }}>
            {why.map(([ic, t, d, img], i) => (
              <Reveal key={t} delay={i * 70}>
                <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--ivory-100)', borderRadius: 'var(--radius-xl)', height: '100%', minHeight: 322 }}>
                  <div style={{ position: 'relative', height: 150 }}>
                    <div
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        width: '62%',
                        WebkitMaskImage: 'linear-gradient(to bottom left, #000 30%, transparent 82%)',
                        maskImage: 'linear-gradient(to bottom left, #000 30%, transparent 82%)',
                        pointerEvents: 'none',
                      }}
                    >
                      <Image src={img} alt="" fill sizes="(max-width: 720px) 100vw, 200px" style={{ objectFit: 'cover', objectPosition: 'right top' }} />
                    </div>
                    <span
                      style={{
                        position: 'absolute',
                        top: 28,
                        left: 26,
                        width: 54,
                        height: 54,
                        borderRadius: '50%',
                        background: 'var(--ivory)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--gold-600)',
                        boxShadow: 'var(--shadow-sm)',
                      }}
                    >
                      <Icon name={ic} size={26} color="currentColor" />
                    </span>
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
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--charcoal)', letterSpacing: '-0.02em', margin: '18px 0 0' }}>
              Luxury IV therapy in four simple steps.
            </h2>
          </div>
          <div className="rr-grid-4" style={{ gap: 26, marginTop: 56 }}>
            {steps.map(([ic, t, d, img], i) => (
              <Reveal key={t} delay={i * 90}>
                <div style={{ background: 'var(--ivory)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', height: '100%' }}>
                  <div style={{ position: 'relative', height: 182, background: i % 2 ? 'var(--gold-a16)' : 'var(--ivory-200)', overflow: 'hidden' }}>
                    <Image src={img} alt={t} fill sizes="(max-width: 720px) 100vw, 380px" style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '26px 28px 30px' }}>
                    <span style={{ fontFamily: 'var(--font-text)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-600)' }}>
                      Step {['One', 'Two', 'Three', 'Four'][i]}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.4rem', color: 'var(--charcoal)', margin: '10px 0 8px' }}>{t}</h3>
                    <p style={{ color: 'var(--slate-ink)', fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED DRIPS ============ */}
      <section style={{ background: 'var(--ivory)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <SectionLabel tone="onLight">The Drip Menu</SectionLabel>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--charcoal)', letterSpacing: '-0.02em', margin: '18px 0 0' }}>Signature drips</h2>
            </div>
            <Button as="a" href={ROUTES.menu} variant="secondary" style={pill} iconRight={<Icon name="arrow-right" size={16} color="currentColor" />}>
              View Full Menu
            </Button>
          </div>
          <div className="rr-grid-4" style={{ marginTop: 48 }}>
            {drips.map(([ic, tint, n, b, p, img], i) => (
              <Reveal key={n} delay={i * 70}>
                <DripCard icon={ic} tint={tint} img={img} name={n} bestFor={b} price={p} />
              </Reveal>
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
        mainSrc={P + 'boosters-flatlay.webp'}
        aSrc={P + 'booster-glutathione.webp'}
        bSrc={P + 'booster-b12.webp'}
        checklistTitle="Most-added boosters"
        checklist={['Glutathione for antioxidant glow', 'Vitamin B12 for energy & focus', 'Vitamin C for immune support', 'Biotin for hair, skin & nails', 'Magnesium for muscle recovery']}
        subhead="Small additions, real difference"
        body="Layer clinician-selected vitamins, antioxidants, and amino acids onto any drip, or book a quick wellness injection between visits."
        ctaLabel="View the Full Menu"
        ctaHref={ROUTES.menu}
      />

      {/* ============ WHO WE SERVE ============ */}
      <section style={{ background: 'var(--ivory)', padding: 'var(--section-y) var(--gutter)' }}>
        <div className="rr-split" style={{ maxWidth: 'var(--container)', margin: '0 auto', gridTemplateColumns: '1fr 1fr' }}>
          <Reveal>
            <div style={{ position: 'relative', paddingBottom: 48, paddingRight: 48 }}>
              <Photo src={P + 'serve-athlete.webp'} alt="Athlete receiving IV therapy after training" ratio="4 / 5" radius="var(--radius-xl)" />
              <div style={{ position: 'absolute', right: 0, bottom: 0, width: '52%' }}>
                <Photo src={P + 'serve-athome.webp'} alt="Relaxing at home during an IV drip" ratio="1 / 1" radius="var(--radius-xl)" style={{ border: '6px solid var(--ivory)' }} />
              </div>
            </div>
          </Reveal>
          <div>
            <SectionLabel tone="onLight">Who We Serve</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--charcoal)', letterSpacing: '-0.02em', margin: '18px 0 26px', maxWidth: '16ch' }}>
              Wellness, tailored to how you live.
            </h2>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {serve.map((s, i) => (
                <li
                  key={s}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: '16px 0',
                    borderBottom: i < serve.length - 1 ? '1px solid var(--ivory-300)' : 'none',
                  }}
                >
                  <span style={{ width: 30, height: 30, flex: '0 0 auto', borderRadius: '50%', background: 'var(--gold-a16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-600)' }}>
                    <Icon name="check" size={16} color="currentColor" />
                  </span>
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
        mainSrc={P + 'corporate-day.webp'}
        aSrc={P + 'event-bridal.webp'}
        bSrc={P + 'corporate-setup.webp'}
        checklistTitle="Perfect for"
        checklist={['Corporate offices & HQs', 'Conferences & summits', 'Bridal & bachelorette parties', 'Fitness competitions', 'Wellness days & retreats']}
        subhead="Custom group pricing"
        body="From boardrooms to bridal suites, we arrive on-site and tailor drips to your group size, timing, and goals."
        ctaLabel="Explore Corporate & Events"
        ctaHref={ROUTES.corporate}
      />

      {/* ============ FOUNDER ============ */}
      <section style={{ background: 'var(--ivory)', padding: 'var(--section-y) var(--gutter)' }}>
        <div className="rr-split" style={{ maxWidth: 'var(--container)', margin: '0 auto', gridTemplateColumns: '0.85fr 1.15fr' }}>
          <Reveal>
            <Photo src={P + 'founder-waist-up.webp'} alt="Rahab Njuguna, RN" ratio="3 / 4" radius="var(--radius-xl)" />
          </Reveal>
          <div>
            <SectionLabel tone="onLight">Meet Your Nurse</SectionLabel>
            <blockquote style={{ margin: '22px 0 0', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d2)', lineHeight: 1.3, letterSpacing: '-0.01em', color: 'var(--charcoal)' }}>
              &ldquo;I founded RapidRefresh to combine hospital-level clinical expertise with the comfort of luxury concierge care.&rdquo;
            </blockquote>
            <p style={{ color: 'var(--slate-ink)', fontSize: '16px', lineHeight: 1.7, margin: '24px 0 0', maxWidth: '52ch' }}>
              With over 22 years of acute-care nursing experience, Rahab delivers safe, personalized IV hydration and wellness that helps you look, feel, and perform at your best.
            </p>
            <div style={{ display: 'flex', gap: 48, marginTop: 34, flexWrap: 'wrap' }}>
              <Stat tone="onLight" value="22+" label="Years Acute-Care Experience" />
              <Stat tone="onLight" value="100%" label="RN-Led Concierge Visits" />
            </div>
            <div style={{ marginTop: 34 }}>
              <Button as="a" href={ROUTES.about} variant="secondary" style={pill}>
                Read Rahab&rsquo;s Story
              </Button>
            </div>
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
        mainSrc={P + 'member-kit.webp'}
        aSrc={P + 'member-drip.webp'}
        bSrc={P + 'member-b12.webp'}
        checklistTitle="Members enjoy"
        checklist={['Monthly IV therapy sessions', 'Exclusive member pricing', 'Priority scheduling', 'Complimentary travel', 'A monthly B12 boost']}
        subhead="From $179 / month"
        body="Make wellness a habit, not an afterthought, with monthly drips, boosters, and concierge perks all year long."
        ctaLabel="Explore Memberships"
        ctaHref={ROUTES.memberships}
      />

      {/* ============ TESTIMONIALS ============ */}
      <section style={{ background: 'var(--ivory)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SectionLabel tone="onLight" align="center">Loved Across Houston</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--charcoal)', letterSpacing: '-0.02em', margin: '18px 0 0' }}>What clients say</h2>
          </div>
          <div className="rr-grid-3" style={{ marginTop: 52 }}>
            {testimonials.map(([q, n, loc, photo], i) => (
              <Reveal key={n} delay={i * 80}>
                <div style={{ background: 'var(--ivory)', borderRadius: 'var(--radius-xl)', padding: '32px 30px', boxShadow: 'var(--shadow-sm)', height: '100%', display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div style={{ display: 'flex', gap: 3, color: 'var(--gold-500)' }}>
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Icon key={s} name="star" size={16} color="currentColor" />
                    ))}
                  </div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '1.2rem', lineHeight: 1.45, color: 'var(--charcoal)', margin: 0, flex: 1 }}>&ldquo;{q}&rdquo;</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid var(--ivory-200)', paddingTop: 18 }}>
                    <span style={{ width: 42, height: 42, flex: '0 0 auto', borderRadius: '50%', overflow: 'hidden', position: 'relative', background: 'var(--gold-a16)' }}>
                      <Image src={photo} alt={n} fill sizes="42px" style={{ objectFit: 'cover' }} />
                    </span>
                    <span>
                      <span style={{ display: 'block', fontWeight: 600, fontSize: '14px', color: 'var(--charcoal)' }}>{n}</span>
                      <span style={{ fontSize: '12.5px', color: 'var(--slate-ink)' }}>{loc}</span>
                    </span>
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
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d2)', color: 'var(--charcoal)', letterSpacing: '-0.02em', margin: '16px 0 0' }}>{INSTAGRAM_HANDLE}</h2>
            </div>
            <a href={INSTAGRAM} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--gold-600)', fontWeight: 600, fontSize: '14px' }}>
              <Icon name="at-sign" size={18} color="currentColor" /> Follow along
            </a>
          </div>
          <div className="rr-grid-6">
            {['insta-inspo.webp', 'member-drip.webp', 'boosters-flatlay.webp', 'event-bridal.webp', 'cat-beauty.webp', 'serve-athome.webp'].map((f, i) => (
              <Reveal key={f} delay={i * 50}>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener"
                  style={{ position: 'relative', display: 'block', aspectRatio: '1 / 1', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--ivory-200)' }}
                >
                  <Image src={P + f} alt="RapidRefresh on Instagram" fill sizes="(max-width: 720px) 33vw, 180px" style={{ objectFit: 'cover' }} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <section style={{ background: 'var(--ivory)', padding: '0 var(--gutter) var(--section-y)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div style={{ background: 'var(--navy-800)', borderRadius: 'var(--radius-xl)', padding: 'clamp(48px,6vw,84px) clamp(28px,5vw,72px)', textAlign: 'center', boxShadow: 'var(--shadow-lift)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--ivory)', letterSpacing: '-0.02em', margin: 0 }}>Book your concierge IV experience.</h2>
            <p style={{ color: 'var(--ivory-a64)', fontSize: 'var(--fs-lg)', margin: '18px auto 0', maxWidth: '44ch' }}>
              Book a concierge IV session, or join the Wellness Club for member pricing all year.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 34, flexWrap: 'wrap' }}>
              <Button as="a" href={ROUTES.booking} variant="primary" size="lg" style={pill}>
                Book Your Drip
              </Button>
              <Button as="a" href={ROUTES.memberships} variant="ghost" size="lg" style={pill} iconRight={<Icon name="arrow-right" size={18} color="currentColor" />}>
                Explore Memberships
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
