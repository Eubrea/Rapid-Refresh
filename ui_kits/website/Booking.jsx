/* global React */
const DSb = window.RapidRefreshDesignSystem_646e39;

function Booking({ onJane }) {
  const { Button, Icon, SectionLabel, Input, Select, Checkbox, Card } = DSb;
  const pill = { borderRadius: 'var(--radius-pill)' };
  const [step] = React.useState(1);
  const steps = [
    ['calendar-check', 'Request', 'Choose your drip, location, and preferred time.'],
    ['clipboard-list', 'Intake & Consent', 'Complete a quick HIPAA-conscious health intake.'],
    ['car-front', 'We Arrive', 'Your RN arrives on schedule and delivers your drip.'],
  ];
  return (
    <div>
      <section style={{ background: 'var(--navy-900)', padding: 'clamp(56px,6vw,96px) var(--gutter) var(--section-y)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <SectionLabel>Book an Appointment</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--ivory)', letterSpacing: '-0.02em', margin: '20px 0 0', maxWidth: '20ch' }}>Concierge IV therapy, on your schedule.</h1>

          {/* Instant scheduling via JaneApp */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginTop: 34, padding: '20px 26px', background: 'var(--navy-800)', border: '1px solid var(--gold-a40)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ width: 46, height: 46, flex: '0 0 auto', borderRadius: '50%', background: 'var(--gold-a16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-400)' }}><Icon name="calendar-check" size={22} color="currentColor" /></span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.25rem', color: 'var(--ivory)' }}>Prefer to book instantly?</div>
                <div style={{ color: 'var(--ivory-a64)', fontSize: '14px', marginTop: 2 }}>See live availability and reserve on our JaneApp scheduler.</div>
              </div>
            </div>
            <Button variant="secondary" size="md" style={pill} onClick={onJane} iconRight={<Icon name="arrow-up-right" size={16} color="currentColor" />}>Book on JaneApp</Button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '30px 0 0' }}>
            <span style={{ flex: 1, height: 1, background: 'var(--navy-300)' }} />
            <span style={{ color: 'var(--ivory-a44)', fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Or request below</span>
            <span style={{ flex: 1, height: 1, background: 'var(--navy-300)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'clamp(28px,4vw,56px)', marginTop: 52, alignItems: 'start' }}>
            {/* Form */}
            <Card tone="navy" padding="xl">
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <Input label="Full Name" required placeholder="Jane Doe" icon={<Icon name="user" size={17} color="currentColor" />} />
                  <Input label="Phone" type="tel" required placeholder="(713) 851-7590" icon={<Icon name="phone" size={17} color="currentColor" />} />
                </div>
                <Input label="Email" type="email" required placeholder="you@email.com" icon={<Icon name="mail" size={17} color="currentColor" />} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <Select label="Select Your Drip" required options={['Essential Hydration', 'Energy Reset', 'RapidRefresh Defense', "Myers' Cocktail", 'Game Day Drip™', 'Glass Skin Drip', 'Morning After Rescue™', 'NAD+ Renewal']} />
                  <Select label="Service Location" required options={['Home', 'Office', 'Gym', 'Hotel']} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <Input label="Preferred Date" type="date" required />
                  <Select label="Preferred Time" required options={['Morning (8–11 AM)', 'Midday (11 AM–2 PM)', 'Afternoon (2–5 PM)', 'Evening (5–8 PM)']} />
                </div>
                <Input label="Service Address" placeholder="Street, City, ZIP, Greater Houston" icon={<Icon name="map-pin" size={17} color="currentColor" />} />
                <div style={{ height: 1, background: 'var(--navy-300)', margin: '4px 0' }} />
                <Checkbox required label="I consent to treatment and confirm my intake information is accurate. (HIPAA-conscious)" />
                <Checkbox label="Send me member-only offers and wellness tips." />
                <Button variant="primary" size="lg" fullWidth style={pill} type="submit" iconRight={<Icon name="arrow-right" size={18} color="currentColor" />}>Request Appointment</Button>
                <p style={{ color: 'var(--ivory-a44)', fontSize: '13px', textAlign: 'center', margin: 0 }}>Powered by JaneApp · Secure online booking &amp; payments</p>
              </form>
            </Card>

            {/* Aside */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', position: 'relative', border: '1px solid var(--navy-300)' }}>
                <img src="../../assets/photos/Founder.webp" alt="Rahab Njuguna, RN" style={{ width: '100%', display: 'block', aspectRatio: '4 / 5', objectFit: 'cover', objectPosition: 'center top' }} />
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '46px 22px 18px', background: 'linear-gradient(180deg, rgba(7,18,51,0) 0%, rgba(7,18,51,0.88) 74%)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.2rem', color: 'var(--ivory)' }}>Rahab Njuguna, RN</div>
                  <div style={{ color: 'var(--gold-400)', fontSize: '11.5px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 4 }}>Your Nurse · 22+ Years</div>
                </div>
              </div>
              <Card tone="navy" padding="lg">
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.375rem', color: 'var(--ivory)', marginBottom: 22 }}>How it works</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                  {steps.map(([ic, t, d], i) => (
                    <div key={t} style={{ display: 'flex', gap: 16, opacity: i + 1 <= step ? 1 : 0.72 }}>
                      <span style={{ width: 42, height: 42, flex: '0 0 auto', borderRadius: '50%', border: '1px solid var(--gold-a40)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-400)' }}><Icon name={ic} size={19} color="currentColor" /></span>
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
                  {[['credit-card', 'Payment', 'All major cards, HSA, and FSA accepted. Secure payment through JaneApp at booking.'], ['calendar-x', 'Cancellations', 'Kindly give reasonable notice to reschedule. Full terms are shared when you book.'], ['file-check', 'Consent', 'A quick, HIPAA-conscious intake and medical consent are completed before every visit.']].map(([ic, t, d]) => (
                    <li key={t} style={{ display: 'flex', gap: 14 }}>
                      <span style={{ flex: '0 0 auto', color: 'var(--gold-400)', marginTop: 1 }}><Icon name={ic} size={17} color="currentColor" /></span>
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
                <a href="tel:+17138517590" style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '1.875rem', color: 'var(--ivory)', letterSpacing: '-0.01em' }}>(713) 851-7590</a>
                <p style={{ color: 'var(--ivory-a64)', fontSize: '14px', marginTop: 10 }}>By appointment only · Same-day when available.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.Booking = Booking;
