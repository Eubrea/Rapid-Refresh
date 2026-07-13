'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { Icon, type IconName } from '../ui/Icon';
import { SectionLabel } from '../ui/SectionLabel';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';
import { Checkbox } from '../ui/Checkbox';
import { Card } from '../ui/Card';
import { JANEAPP, PHONE_DISPLAY, PHONE_TEL, BOOKING_EMAIL, WEB3FORMS_ACCESS_KEY } from '../../lib/site';

const pill = { borderRadius: 'var(--radius-pill)' };

export function BookingScreen() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const step = 1;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const field = (key: string) => (data.get(key) as string) || '';

    data.append('access_key', WEB3FORMS_ACCESS_KEY);
    data.append('subject', `New booking request — ${field('name') || 'website'}`);
    data.append('from_name', 'RapidRefresh Booking Form');

    setSubmitting(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.message || 'Submission failed');
      setSubmitted(true);
    } catch {
      // Web3Forms free tier caps at 250 submissions/month. If the API call fails for
      // any reason (cap hit, outage, network error), fall back to the visitor's own
      // email client so the request still reaches us, just not as a formatted form.
      const body = [
        `Name: ${field('name')}`,
        `Phone: ${field('phone')}`,
        `Email: ${field('email')}`,
        `Drip: ${field('drip')}`,
        `Location: ${field('location')}`,
        `Preferred Date: ${field('date')}`,
        `Preferred Time: ${field('time')}`,
        `Address: ${field('address')}`,
        `Message: ${field('message')}`,
      ].join('\n');
      window.location.href = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(`Booking Request — ${field('name') || 'New Client'}`)}&body=${encodeURIComponent(body)}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const steps: [IconName, string, string][] = [
    ['calendar-check', 'Request', 'Choose your drip, location, and preferred time.'],
    ['clipboard-list', 'Intake & Consent', 'Complete a quick HIPAA-conscious health intake.'],
    ['car-front', 'We Arrive', 'Your RN arrives on schedule and delivers your drip.'],
  ];

  const good: [IconName, string, string][] = [
    ['credit-card', 'Payment', 'All major cards, HSA, and FSA accepted. Secure payment through JaneApp at booking.'],
    ['calendar-x', 'Cancellations', 'Kindly give reasonable notice to reschedule. Full terms are shared when you book.'],
    ['file-check', 'Consent', 'A quick, HIPAA-conscious intake and medical consent are completed before every visit.'],
  ];

  return (
    <div>
      <section style={{ background: 'var(--navy-900)', padding: 'clamp(56px,6vw,96px) var(--gutter) var(--section-y)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <SectionLabel>Book an Appointment</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--ivory)', letterSpacing: '-0.02em', margin: '20px 0 0', maxWidth: '20ch' }}>
            Concierge IV therapy, on your schedule.
          </h1>

          {/* Instant scheduling via JaneApp */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 20,
              flexWrap: 'wrap',
              marginTop: 34,
              padding: '20px 26px',
              background: 'var(--navy-800)',
              border: '1px solid var(--gold-a40)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ width: 46, height: 46, flex: '0 0 auto', borderRadius: '50%', background: 'var(--gold-a16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-400)' }}>
                <Icon name="calendar-check" size={22} color="currentColor" />
              </span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.25rem', color: 'var(--ivory)' }}>Prefer to book instantly?</div>
                <div style={{ color: 'var(--ivory-a64)', fontSize: '14px', marginTop: 2 }}>See live availability and reserve on our JaneApp scheduler.</div>
              </div>
            </div>
            <Button as="a" href={JANEAPP} target="_blank" rel="noopener" variant="secondary" size="md" style={pill} iconRight={<Icon name="arrow-up-right" size={16} color="currentColor" />}>
              Book on JaneApp
            </Button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '30px 0 0' }}>
            <span style={{ flex: 1, height: 1, background: 'var(--navy-300)' }} />
            <span style={{ color: 'var(--ivory-a44)', fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Or request below</span>
            <span style={{ flex: 1, height: 1, background: 'var(--navy-300)' }} />
          </div>

          <div className="rr-aside-split" style={{ marginTop: 52 }}>
            {/* Form */}
            <Card tone="navy" padding="xl">
              {submitted ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18, textAlign: 'center', padding: '20px 0' }}>
                  <span style={{ width: 60, height: 60, margin: '0 auto', borderRadius: '50%', background: 'var(--gold-a16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-400)' }}>
                    <Icon name="check" size={30} color="currentColor" />
                  </span>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d3)', color: 'var(--ivory)', letterSpacing: '-0.01em', margin: 0 }}>Request received.</h2>
                  <p style={{ color: 'var(--ivory-a64)', fontSize: '15px', lineHeight: 1.6, margin: '0 auto', maxWidth: '46ch' }}>
                    Thank you. Rahab will reach out shortly to confirm your visit and complete your intake. To lock in a time now, book instantly on JaneApp or give us a call.
                  </p>
                  <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 6 }}>
                    <Button as="a" href={JANEAPP} target="_blank" rel="noopener" variant="primary" style={pill} iconRight={<Icon name="arrow-up-right" size={16} color="currentColor" />}>
                      Book on JaneApp
                    </Button>
                    <Button as="a" href={`tel:${PHONE_TEL}`} variant="secondary" style={pill} iconLeft={<Icon name="phone" size={16} color="currentColor" />}>
                      {PHONE_DISPLAY}
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
                >
                  <div className="rr-grid-2" style={{ gap: 20 }}>
                    <Input label="Full Name" name="name" required placeholder="Jane Doe" autoComplete="name" icon={<Icon name="user" size={17} color="currentColor" />} />
                    <Input label="Phone" name="phone" type="tel" required placeholder="(713) 851-7590" autoComplete="tel" icon={<Icon name="phone" size={17} color="currentColor" />} />
                  </div>
                  <Input label="Email" name="email" type="email" required placeholder="you@email.com" autoComplete="email" icon={<Icon name="mail" size={17} color="currentColor" />} />
                  <div className="rr-grid-2" style={{ gap: 20 }}>
                    <Select
                      label="Select Your Drip"
                      name="drip"
                      required
                      options={['Essential Hydration', 'Energy Reset', 'RapidRefresh Defense', "Myers' Cocktail", 'Game Day Drip™', 'Glass Skin Drip', 'Morning After Rescue™', 'NAD+ Renewal']}
                    />
                    <Select label="Service Location" name="location" required options={['Home', 'Office', 'Gym', 'Hotel']} />
                  </div>
                  <div className="rr-grid-2" style={{ gap: 20 }}>
                    <Input label="Preferred Date" name="date" type="date" required />
                    <Select label="Preferred Time" name="time" required options={['Morning (8–11 AM)', 'Midday (11 AM–2 PM)', 'Afternoon (2–5 PM)', 'Evening (5–8 PM)']} />
                  </div>
                  <Input label="Service Address" name="address" placeholder="Street, City, ZIP, Greater Houston" icon={<Icon name="map-pin" size={17} color="currentColor" />} />
                  <Textarea label="Message" name="message" placeholder="Anything else we should know? Allergies, accessibility needs, special requests…" rows={4} />
                  <div style={{ height: 1, background: 'var(--navy-300)', margin: '4px 0' }} />
                  <Checkbox required name="consent" label="I consent to treatment and confirm my intake information is accurate. (HIPAA-conscious)" />
                  <Checkbox name="marketing" label="Send me member-only offers and wellness tips." />
                  <Button variant="primary" size="lg" fullWidth type="submit" disabled={submitting} style={pill} iconRight={<Icon name="arrow-right" size={18} color="currentColor" />}>
                    {submitting ? 'Sending…' : 'Request Appointment'}
                  </Button>
                  <p style={{ color: 'var(--ivory-a44)', fontSize: '13px', textAlign: 'center', margin: 0 }}>Powered by JaneApp · Secure online booking &amp; payments</p>
                </form>
              )}
            </Card>

            {/* Aside */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', position: 'relative', border: '1px solid var(--navy-300)', aspectRatio: '4 / 5' }}>
                <Image src="/photos/founder.webp" alt="Rahab Njuguna, RN" fill sizes="(max-width: 900px) 100vw, 360px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '46px 22px 18px', background: 'linear-gradient(180deg, rgba(7,18,51,0) 0%, rgba(7,18,51,0.88) 74%)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.2rem', color: 'var(--ivory)' }}>Rahab Njuguna, RN</div>
                  <div style={{ color: 'var(--gold-400)', fontSize: '11.5px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 4 }}>Your Nurse · 22+ Years</div>
                </div>
              </div>

              <Card tone="navy" padding="lg">
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.375rem', color: 'var(--ivory)', marginBottom: 22 }}>How it works</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                  {steps.map(([ic, t, d], i) => (
                    <div key={t} style={{ display: 'flex', gap: 16, opacity: i + 1 <= step ? 1 : 0.72 }}>
                      <span style={{ width: 42, height: 42, flex: '0 0 auto', borderRadius: '50%', border: '1px solid var(--gold-a40)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-400)' }}>
                        <Icon name={ic} size={19} color="currentColor" />
                      </span>
                      <div>
                        <div style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: '15px', color: 'var(--ivory)' }}>{t}</div>
                        <div style={{ color: 'var(--ivory-a64)', fontSize: '14px', lineHeight: 1.5, marginTop: 4 }}>{d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card tone="navy" padding="lg">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--gold-400)', marginBottom: 14 }}>
                  <Icon name="shield-check" size={18} color="currentColor" />
                  <span style={{ fontFamily: 'var(--font-text)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase' }}>Good to Know</span>
                </div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {good.map(([ic, t, d]) => (
                    <li key={t} style={{ display: 'flex', gap: 14 }}>
                      <span style={{ flex: '0 0 auto', color: 'var(--gold-400)', marginTop: 1 }}>
                        <Icon name={ic} size={17} color="currentColor" />
                      </span>
                      <div>
                        <div style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: '14px', color: 'var(--ivory)' }}>{t}</div>
                        <div style={{ color: 'var(--ivory-a64)', fontSize: '13.5px', lineHeight: 1.55, marginTop: 3 }}>{d}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card tone="navy" padding="lg">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--gold-400)', marginBottom: 12 }}>
                  <Icon name="phone" size={18} color="currentColor" />
                  <span style={{ fontFamily: 'var(--font-text)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase' }}>Prefer to Call?</span>
                </div>
                <a href={`tel:${PHONE_TEL}`} style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '1.875rem', color: 'var(--ivory)', letterSpacing: '-0.01em' }}>
                  {PHONE_DISPLAY}
                </a>
                <p style={{ color: 'var(--ivory-a64)', fontSize: '14px', marginTop: 10 }}>By appointment only · Same-day when available.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
