import { useState, type FormEvent } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { newsletter } from 'virtual:content';

const siteUrl = 'https://7andahalfquestions.com';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

// ─── Newsletter / listener signup form ───────────────────────────────────────
function NewsletterForm({ onSuccess }: { onSuccess: () => void }) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (formData.get('_gotcha')) return;

    const email = String(formData.get('email') ?? '').trim();
    const name = String(formData.get('name') ?? '').trim();

    setStatus('sending');
    setErrorMsg('');

    try {
      // Field mapping: only the message textarea goes in messages_attributes[0].body.
      // All other fields (dropdowns, radios, checkboxes) must be added to conversation.data as { "Label": value } pairs.
      const res = await fetch('/api/contact/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversation: {
            messages_attributes: [{ body: 'New newsletter subscription request' }],
            data: {
              __gd_contact_form_title: 'Newsletter Subscription',
            },
          },
          user: { email, name },
        }),
      });

      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
        onSuccess();
      } else {
        throw new Error(json.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="border-2 border-primary p-8 text-center" role="status">
        <p className="font-heading font-bold text-primary" style={{ fontSize: '1.3rem' }}>
          You're in the dispatch.
        </p>
        <p className="font-body text-muted-foreground mt-2" style={{ fontSize: '0.9rem' }}>
          Watch your inbox — something good is coming.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot — never included in POST body */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true" />

      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="nl-name" className="mb-2 block font-body uppercase tracking-widest text-muted-foreground" style={{ fontSize: '0.6rem', letterSpacing: '0.18em' }}>
            Your name *
          </label>
          <input
            id="nl-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={newsletter.newsletter.placeholder.replace('your@email.com', 'First name')}
            className="w-full bg-transparent border-2 border-foreground px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
            style={{ fontSize: '0.95rem' }}
          />
        </div>

        <div>
          <label htmlFor="nl-email" className="mb-2 block font-body uppercase tracking-widest text-muted-foreground" style={{ fontSize: '0.6rem', letterSpacing: '0.18em' }}>
            Email address *
          </label>
          <input
            id="nl-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={newsletter.newsletter.placeholder}
            className="w-full bg-transparent border-2 border-foreground px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
            style={{ fontSize: '0.95rem' }}
          />
        </div>

        {status === 'error' && (
          <p className="font-body text-destructive" style={{ fontSize: '0.85rem' }} role="alert">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full border-2 border-foreground bg-foreground text-background font-heading font-bold uppercase tracking-widest py-3 hover:bg-primary hover:border-primary transition-colors duration-200 disabled:opacity-50"
          style={{ fontSize: '0.7rem', letterSpacing: '0.18em' }}
        >
          {status === 'sending' ? 'Subscribing…' : newsletter.newsletter.buttonLabel}
        </button>

        <p className="font-body text-muted-foreground text-center" style={{ fontSize: '0.75rem' }}>
          {newsletter.newsletter.frequency}
        </p>
      </div>
    </form>
  );
}

// ─── Guest pitch form ─────────────────────────────────────────────────────────
function PitchForm({ onSuccess }: { onSuccess: () => void }) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (formData.get('_gotcha')) return;

    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const guestName = String(formData.get('guestName') ?? '').trim();
    const guestTitle = String(formData.get('guestTitle') ?? '').trim();
    const why = String(formData.get('why') ?? '').trim();

    setStatus('sending');
    setErrorMsg('');

    try {
      // Field mapping: only the message textarea goes in messages_attributes[0].body.
      // All other fields (dropdowns, radios, checkboxes) must be added to conversation.data as { "Label": value } pairs.
      const res = await fetch('/api/contact/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversation: {
            messages_attributes: [{ body: why || 'New guest pitch submission' }],
            data: {
              __gd_contact_form_title: 'Guest Pitch',
              'Guest Name': guestName,
              'Guest Title': guestTitle,
            },
          },
          user: { email, name },
        }),
      });

      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
        onSuccess();
      } else {
        throw new Error(json.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="border-2 border-primary p-8 text-center" role="status">
        <p className="font-heading font-bold text-primary" style={{ fontSize: '1.3rem' }}>
          Pitch received.
        </p>
        <p className="font-body text-muted-foreground mt-2" style={{ fontSize: '0.9rem' }}>
          We read every one. If it's the right fit, we'll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot — never included in POST body */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true" />

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 [&>div]:flex [&>div]:flex-col">
          <div>
            <label htmlFor="pitch-name" className="mb-2 block flex-1 font-body uppercase tracking-widest text-muted-foreground" style={{ fontSize: '0.6rem', letterSpacing: '0.18em' }}>
              Your name *
            </label>
            <input
              id="pitch-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder={newsletter.pitch.fields.namePlaceholder}
              className="w-full bg-transparent border-2 border-foreground px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
              style={{ fontSize: '0.95rem' }}
            />
          </div>
          <div>
            <label htmlFor="pitch-email" className="mb-2 block flex-1 font-body uppercase tracking-widest text-muted-foreground" style={{ fontSize: '0.6rem', letterSpacing: '0.18em' }}>
              Your email *
            </label>
            <input
              id="pitch-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={newsletter.pitch.fields.emailPlaceholder}
              className="w-full bg-transparent border-2 border-foreground px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
              style={{ fontSize: '0.95rem' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 [&>div]:flex [&>div]:flex-col">
          <div>
            <label htmlFor="pitch-guest-name" className="mb-2 block flex-1 font-body uppercase tracking-widest text-muted-foreground" style={{ fontSize: '0.6rem', letterSpacing: '0.18em' }}>
              Guest's name *
            </label>
            <input
              id="pitch-guest-name"
              name="guestName"
              type="text"
              required
              placeholder={newsletter.pitch.fields.guestNamePlaceholder}
              className="w-full bg-transparent border-2 border-foreground px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
              style={{ fontSize: '0.95rem' }}
            />
          </div>
          <div>
            <label htmlFor="pitch-guest-title" className="mb-2 block flex-1 font-body uppercase tracking-widest text-muted-foreground" style={{ fontSize: '0.6rem', letterSpacing: '0.18em' }}>
              Their title / role
            </label>
            <input
              id="pitch-guest-title"
              name="guestTitle"
              type="text"
              placeholder={newsletter.pitch.fields.guestTitlePlaceholder}
              className="w-full bg-transparent border-2 border-foreground px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
              style={{ fontSize: '0.95rem' }}
            />
          </div>
        </div>

        <div>
          <label htmlFor="pitch-why" className="mb-2 block font-body uppercase tracking-widest text-muted-foreground" style={{ fontSize: '0.6rem', letterSpacing: '0.18em' }}>
            Why them? *
          </label>
          <textarea
            id="pitch-why"
            name="why"
            required
            rows={5}
            placeholder={newsletter.pitch.fields.whyPlaceholder}
            className="w-full bg-transparent border-2 border-foreground px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
            style={{ fontSize: '0.95rem' }}
          />
        </div>

        {status === 'error' && (
          <p className="font-body text-destructive" style={{ fontSize: '0.85rem' }} role="alert">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full border-2 border-foreground bg-foreground text-background font-heading font-bold uppercase tracking-widest py-3 hover:bg-primary hover:border-primary transition-colors duration-200 disabled:opacity-50"
          style={{ fontSize: '0.7rem', letterSpacing: '0.18em' }}
        >
          {status === 'sending' ? 'Sending…' : 'Submit Pitch'}
        </button>
      </div>
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
function SubmissionSuccess({ title, message }: { title: string; message: string }) {
  return (
    <motion.div
      key="success"
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' as const }}
      className="flex min-h-[28rem] flex-col items-center justify-center text-center"
      role="status"
      style={{ transformPerspective: 1000 }}
    >
      <span className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[hsl(var(--navy))] text-white shadow-[0_0_0_10px_hsl(var(--navy)/0.1)]">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <h2 className="font-heading font-black text-foreground" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
        {title}
      </h2>
      <p className="mt-3 max-w-sm font-body text-muted-foreground" style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
        {message}
      </p>
    </motion.div>
  );
}

export default function NewsletterPage() {
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [pitchSubmitted, setPitchSubmitted] = useState(false);

  return (
    <>
      <Helmet>
        <title>Get the Dispatch — Seven and a Half</title>
        <meta name="description" content="Subscribe to the Seven and a Half listener dispatch, pitch a guest, or get in touch with the show." />
        <link rel="canonical" href={`${siteUrl}/newsletter`} />
        <meta property="og:title" content="Get the Dispatch — Seven and a Half" />
        <meta property="og:description" content="Subscribe to the listener dispatch or pitch a guest for the show." />
        <meta property="og:url" content={`${siteUrl}/newsletter`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          '@id': `${siteUrl}/newsletter#webpage`,
          name: 'Get the Dispatch — Seven and a Half',
          url: `${siteUrl}/newsletter`,
          isPartOf: { '@id': `${siteUrl}/#website` },
        })}</script>
      </Helmet>

      <main>
        {/* Hero */}
        <section className="bg-background border-b-2 border-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">

            {/* Vintage masthead bar */}
            <div className="mb-10 grid grid-cols-2 items-center gap-4 border-b border-border pb-4 md:flex md:justify-between md:gap-6">
              <span className="whitespace-nowrap font-body text-[0.62rem] font-bold uppercase tracking-[0.1em] text-muted-foreground md:text-[0.7rem] md:tracking-[0.18em]">
                Vol. I &nbsp;·&nbsp; No. 1
              </span>
              <span className="whitespace-nowrap text-right font-body text-[0.62rem] font-bold uppercase tracking-[0.1em] text-muted-foreground md:text-[0.7rem] md:tracking-[0.18em]">
                The Listener Dispatch
              </span>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <span className="font-body uppercase tracking-widest text-accent" style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}>
                {newsletter.hero.label}
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>
            <h1
              className="font-heading font-black text-foreground leading-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.02em' }}
            >
              {newsletter.hero.heading}
            </h1>
            <p className="font-body text-muted-foreground mt-6 max-w-xl" style={{ fontSize: '1rem' }}>
              {newsletter.hero.subheading}
            </p>
          </div>
        </section>

        {/* Two-column: newsletter + pitch */}
        <section className="bg-background py-16 md:py-24 border-b-2 border-foreground">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">

              {/* Newsletter signup */}
              <motion.div
                className="rounded-2xl border-2 border-foreground bg-background p-8 shadow-[6px_6px_0_hsl(var(--border))] md:p-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const }}
              >
                {newsletterSubmitted ? (
                  <SubmissionSuccess
                    title="Subscription submitted"
                    message="You're in the dispatch. Watch your inbox — something good is coming."
                  />
                ) : (
                  <motion.div
                    key="newsletter-form"
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.45, ease: 'easeOut' as const }}
                    style={{ transformPerspective: 1000 }}
                  >
                {/* Decorative rule */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-8 h-0.5 bg-secondary" />
                  <span className="font-body uppercase tracking-widest text-secondary" style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}>
                    For listeners
                  </span>
                  <span className="font-body text-muted-foreground/40 select-none" style={{ fontSize: '0.55rem' }}>✦</span>
                </div>

                <h2 className="font-heading font-black text-foreground mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', lineHeight: 1.1 }}>
                  {newsletter.newsletter.heading}
                </h2>
                <p className="font-body text-muted-foreground mb-8 leading-relaxed" style={{ fontSize: '0.9rem' }}>
                  {newsletter.newsletter.description}
                </p>

                <NewsletterForm onSuccess={() => setNewsletterSubmitted(true)} />
                  </motion.div>
                )}
              </motion.div>

              {/* Guest pitch */}
              <motion.div
                className="rounded-2xl border-2 border-foreground bg-background p-8 shadow-[6px_6px_0_hsl(var(--border))] md:p-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' as const }}
              >
                {pitchSubmitted ? (
                  <SubmissionSuccess
                    title="Pitch submitted"
                    message="Your guest suggestion has been received. If it's the right fit, we'll be in touch."
                  />
                ) : (
                  <motion.div
                    key="pitch-form"
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.45, ease: 'easeOut' as const }}
                    style={{ transformPerspective: 1000 }}
                  >
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-8 h-0.5 bg-accent" />
                  <span className="font-body uppercase tracking-widest text-accent" style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}>
                    {newsletter.pitch.label}
                  </span>
                  <span className="font-body text-muted-foreground/40 select-none" style={{ fontSize: '0.55rem' }}>✦</span>
                </div>

                <h2 className="font-heading font-black text-foreground mb-3" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', lineHeight: 1.15 }}>
                  {newsletter.pitch.heading}
                </h2>
                <p className="font-body text-muted-foreground mb-8 leading-relaxed" style={{ fontSize: '0.9rem' }}>
                  {newsletter.pitch.description}
                </p>

                <PitchForm onSuccess={() => setPitchSubmitted(true)} />
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* General contact strip */}
        <motion.section
          className="bg-muted py-14 md:py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Ornamental rule */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="h-px w-12 bg-border" />
              <span className="font-body text-muted-foreground/40 select-none" style={{ fontSize: '0.7rem', letterSpacing: '0.3em' }}>✦ ✦ ✦</span>
              <span className="h-px w-12 bg-border" />
            </div>
            <p className="font-body uppercase tracking-widest text-muted-foreground mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}>
              {newsletter.contact.label}
            </p>
            <h2 className="font-heading font-black text-foreground mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.1 }}>
              {newsletter.contact.heading}
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-md mx-auto" style={{ fontSize: '0.9rem' }}>
              {newsletter.contact.description}
            </p>
            <a
              href={`mailto:${newsletter.contact.email}`}
              className="font-heading font-bold text-primary hover:text-accent transition-colors"
              style={{ fontSize: '1.1rem' }}
            >
              {newsletter.contact.email}
            </a>
          </div>
        </motion.section>
      </main>
    </>
  );
}
