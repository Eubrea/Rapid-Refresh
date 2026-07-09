/* global React, Reveal */
const DSfaq = window.RapidRefreshDesignSystem_646e39;
const pillFaq = { borderRadius: 'var(--radius-pill)' };

function FaqItem({ q, a, open, onToggle }) {
  const { Icon } = DSfaq;
  return (
    <div style={{ borderBottom: '1px solid var(--ivory-300)' }}>
      <button onClick={onToggle} style={{
        width: '100%', textAlign: 'left', background: 'none', border: 0, cursor: 'pointer',
        padding: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--fs-h4)', color: 'var(--charcoal)', letterSpacing: '-0.01em' }}>{q}</span>
        <span style={{ flex: '0 0 auto', width: 36, height: 36, borderRadius: '50%', background: open ? 'var(--gold-fill)' : 'var(--ivory-100)', color: open ? 'var(--navy-900)' : 'var(--gold-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'all var(--dur-fast) var(--ease-out)' }}>
          <Icon name={open ? 'minus' : 'plus'} size={18} color="currentColor" />
        </span>
      </button>
      <div style={{ maxHeight: open ? 320 : 0, overflow: 'hidden', transition: 'max-height var(--dur-base) var(--ease-out)' }}>
        <p style={{ color: 'var(--slate-ink)', fontSize: '16px', lineHeight: 1.7, margin: '0 0 24px', maxWidth: '68ch' }}>{a}</p>
      </div>
    </div>
  );
}

function FAQ({ onNavigate, onBook }) {
  const { Button, Icon, SectionLabel } = DSfaq;
  const [open, setOpen] = React.useState(0);
  const faqs = [
    ['Who administers the IV therapy?', 'Every visit is led by Rahab Njuguna, a registered nurse with over 22 years of acute-care experience. All treatments are RN-administered to clinical standards.'],
    ['Where do you provide service?', 'We serve Houston and surrounding communities, including Sugar Land, Katy, The Woodlands, Pearland, Missouri City, Alvin, Manvel, and Fresno. Concierge travel is included within our core service area.'],
    ['How do I book an appointment?', 'Request an appointment through our online intake form, book instantly on our JaneApp scheduler, or call us at (713) 851-7590. Same-day appointments are available when scheduling allows.'],
    ['What should I expect during a visit?', 'Your nurse arrives with everything needed, reviews your intake and consent, and administers your drip in comfort. Most sessions take 30–60 minutes depending on the drip and boosters selected.'],
    ['Is it safe? Are you insured?', 'Yes. RapidRefresh is a fully insured mobile practice delivering evidence-based, medical-grade therapy. Your health intake is reviewed before every treatment to ensure it’s appropriate for you.'],
    ['How is my information handled?', 'Our intake and consent forms are HIPAA-conscious. Your personal and health information is collected securely and used only to provide safe, appropriate care.'],
    ['What is your cancellation policy?', 'Plans change, and we ask for reasonable notice so we can offer the slot to another client. Specific terms are shared at the time of booking.'],
    ['Do you offer memberships and gift cards?', 'Yes. The Wellness Club offers monthly drips and member pricing from $179/month, and digital gift cards are available in any amount and never expire.'],
  ];

  return (
    <div>
      <section style={{ background: 'var(--navy-900)', padding: 'clamp(56px,6vw,96px) var(--gutter) var(--section-y)' }}>
        <div style={{ maxWidth: 'var(--container-text)', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}><SectionLabel align="center">Questions & Answers</SectionLabel></div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d1)', color: 'var(--ivory)', letterSpacing: '-0.02em', margin: '20px auto 0', maxWidth: '18ch' }}>Everything you might be wondering.</h1>
        </div>
      </section>

      <section style={{ background: 'var(--ivory)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {faqs.map(([q, a], i) => (
            <FaqItem key={q} q={q} a={a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--fs-d2)', color: 'var(--charcoal)', letterSpacing: '-0.02em' }}>Still have a question?</h2>
            <p style={{ color: 'var(--slate-ink)', fontSize: 'var(--fs-lg)', margin: '14px auto 28px', maxWidth: '42ch' }}>We’re happy to help you choose the right drip or plan a visit.</p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" style={pillFaq} onClick={onBook}>Book Your Drip</Button>
              <a href="tel:+17138517590" style={{ textDecoration: 'none' }}><Button variant="secondary" size="lg" style={pillFaq} iconLeft={<Icon name="phone" size={17} color="currentColor" />}>(713) 851-7590</Button></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.FAQ = FAQ;
