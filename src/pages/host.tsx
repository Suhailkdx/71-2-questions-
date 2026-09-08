import { useState, type ReactNode } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { about, host } from 'virtual:content';

const siteUrl = 'https://7andahalfquestions.com';

const tabs = [
  { id: 'bio', label: 'Priscilla' },
  { id: 'half-question', label: 'The Half Question' },
] as const;

type TabId = (typeof tabs)[number]['id'];

export default function HostPage({ embedded = false, children }: { embedded?: boolean; children?: ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabId>('bio');
  const PageWrapper = embedded ? 'div' : 'main';

  return (
    <>
      {!embedded && <Helmet>
        <title>{host.meta.title}</title>
        <meta name="description" content={host.meta.description} />
        <link rel="canonical" href={`${siteUrl}/host`} />
        <meta property="og:title" content={host.meta.title} />
        <meta property="og:description" content={host.meta.description} />
        <meta property="og:url" content={`${siteUrl}/host`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          '@id': `${siteUrl}/host#webpage`,
          name: host.meta.title,
          url: `${siteUrl}/host`,
          isPartOf: { '@id': `${siteUrl}/#website` },
          about: {
            '@type': 'Person',
            name: 'Priscilla Beaton',
            jobTitle: 'Creator & Host',
            worksFor: { '@id': `${siteUrl}/#organization` },
          },
        })}</script>
      </Helmet>}

      <PageWrapper id={embedded ? 'priscilla' : undefined}>
        {/* ── HERO ── */}
        <section className="bg-background border-b-2 border-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-6 mb-10">
              <span
                className="font-body uppercase tracking-widest text-accent"
                style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}
              >
                {host.hero.label}
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[2fr_1fr]">
              <div>
                <h1
                  className="font-heading font-black text-foreground leading-none mb-4"
                  style={{
                    fontSize: 'clamp(2.75rem, 9vw, 7.5rem)',
                    fontWeight: 900,
                    lineHeight: 0.92,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {host.hero.name}
                </h1>
                <p
                  className="font-body uppercase tracking-widest text-muted-foreground mt-4"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}
                >
                  {host.hero.title}
                </p>
              </div>

              <div className="mx-auto flex w-full max-w-sm flex-col lg:mr-0">
                <img
                  src="/assets/uploads/port-1-enhanced.png"
                  alt="Priscilla Beaton"
                  className="aspect-[4/5] w-full rounded-3xl border border-border object-cover object-[center_42%] shadow-md"
                  style={{ filter: 'blur(0.4px)' }}
                />
                <div className="mt-6 border-l-4 border-accent pl-5">
                  <p
                    className="font-heading italic text-foreground/80 leading-snug"
                    style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', fontWeight: 700 }}
                  >
                    "{host.hero.intro}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TABS ── */}
        {children}

        <div className="bg-background border-b-2 border-foreground sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6">
            <nav
              aria-label="Host page sections"
              className="flex items-end justify-center gap-0"
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const isComingSoon = false;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex flex-1 items-center justify-center gap-1 px-2 py-4 text-center font-heading text-[0.72rem] font-black uppercase leading-tight tracking-[0.06em] [overflow-wrap:normal] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground sm:px-4 sm:text-sm md:flex-none md:gap-2 md:px-8 md:py-6 md:text-[1.2rem] md:tracking-[0.2em] ${
                      isActive
                        ? 'text-foreground border-b-[6px] border-foreground -mb-px'
                        : 'text-muted-foreground hover:text-foreground border-b-[6px] border-transparent -mb-px'
                    }`}
                    style={{ fontWeight: 900, WebkitTextStroke: '0.5px currentColor' }}
                    aria-selected={isActive}
                    role="tab"
                  >
                    {tab.label}
                    {isComingSoon && (
                      <span
                        className="font-body uppercase tracking-widest text-muted-foreground/60 border border-border px-1.5 py-0.5"
                        style={{ fontSize: '0.45rem', letterSpacing: '0.15em' }}
                      >
                        Soon
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* ── TAB PANELS ── */}
        <AnimatePresence mode="wait">

          {/* BIO */}
          {activeTab === 'bio' && (
            <motion.section
              key="bio"
              className="bg-background py-16 md:py-24 border-b-2 border-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' as const }}
              role="tabpanel"
              aria-label="Bio"
            >
              <div className="max-w-7xl mx-auto px-6">
                <div className="mx-auto max-w-4xl">
                  {/* Left: decorative ½ watermark */}
                  {/* Bio paragraphs */}
                  <div className="flex flex-col gap-6">
                    {host.bio.paragraphs.map((p) => (
                      <p
                        key={p.id}
                        className="font-body text-foreground/80 leading-relaxed"
                        style={{ fontSize: '1.05rem', lineHeight: 1.8 }}
                      >
                        {p.text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* THE HALF QUESTION */}
          {activeTab === 'half-question' && (
            <motion.section
              key="half-question"
              className="bg-muted py-16 md:py-24 border-b-2 border-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' as const }}
              role="tabpanel"
              aria-label="The Half Question"
            >
              <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="flex items-center gap-6 mb-14">
                  <span className="flex-1 h-0.5 bg-foreground" />
                  <span
                    className="font-body uppercase tracking-widest text-muted-foreground"
                    style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}
                  >
                    {host.halfQuestion.label}
                  </span>
                  <span className="flex-1 h-0.5 bg-foreground" />
                </div>

                <div className="text-center mb-14">
                  <p
                    className="font-heading italic text-foreground"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.15 }}
                  >
                    "{about.halfQuestion.pullQuote}"
                  </p>
                </div>

                <div className="max-w-2xl mx-auto flex flex-col gap-5">
                  {about.halfQuestion.body.map((p) => (
                    <p key={p.id} className="font-body text-foreground/80 leading-relaxed text-center" style={{ fontSize: '1rem', lineHeight: 1.75 }}>
                      {p.text}
                    </p>
                  ))}
                </div>

                <div className="mt-10 flex justify-center">
                  <div className="border border-border px-6 py-4 max-w-lg text-center">
                    <p className="font-body uppercase tracking-widest text-primary mb-2" style={{ fontSize: '0.55rem', letterSpacing: '0.22em' }}>
                      {about.halfQuestion.aiLabel}
                    </p>
                    <p className="font-body text-muted-foreground" style={{ fontSize: '0.85rem', lineHeight: 1.65 }}>
                      {about.halfQuestion.aiNote}
                    </p>
                  </div>
                </div>

                {false && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
                  {/* Pull quote */}
                  <div className="border-l-4 border-foreground pl-8">
                    <p
                      className="font-heading italic text-foreground leading-tight"
                      style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, lineHeight: 1.15 }}
                    >
                      "{host.halfQuestion.pullQuote}"
                    </p>
                    <p
                      className="font-body uppercase tracking-widest text-muted-foreground mt-6"
                      style={{ fontSize: '0.6rem', letterSpacing: '0.18em' }}
                    >
                      — Priscilla Beaton
                    </p>
                  </div>

                  {/* Explanation */}
                  <div>
                    <h2
                      className="font-heading font-black text-foreground mb-6"
                      style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', lineHeight: 1.15 }}
                    >
                      {host.halfQuestion.heading}
                    </h2>
                    <p
                      className="font-body text-foreground/80 leading-relaxed"
                      style={{ fontSize: '1rem', lineHeight: 1.8 }}
                    >
                      {host.halfQuestion.body}
                    </p>

                    {/* AI badge */}
                    <div className="mt-8 inline-flex items-center gap-3 border border-border px-4 py-2">
                      <span
                        className="font-body uppercase tracking-widest text-primary"
                        style={{ fontSize: '0.55rem', letterSpacing: '0.2em' }}
                      >
                        AI&#8209;generated
                      </span>
                      <span className="w-px h-4 bg-border" />
                      <span
                        className="font-body text-muted-foreground"
                        style={{ fontSize: '0.75rem' }}
                      >
                        From the live transcript
                      </span>
                    </div>
                  </div>
                </div>
                )}
              </div>
            </motion.section>
          )}

          {/* AI MENTOR */}
          {false && (
            <motion.section
              key="ai-mentor"
              className="bg-background py-16 md:py-32 border-b-2 border-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' as const }}
              role="tabpanel"
              aria-label="AI Mentor"
            >
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-2xl">
                  {/* Eyebrow */}
                  <div className="flex items-center gap-6 mb-10">
                    <span
                      className="font-body uppercase tracking-widest text-accent"
                      style={{ fontSize: '0.75rem', letterSpacing: '0.22em' }}
                    >
                      AI Mentor
                    </span>
                    <span className="flex-1 h-px bg-border" />
                  </div>

                  {/* Heading */}
                  <h2
                    className="font-heading font-black text-foreground leading-none mb-8"
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.02em' }}
                  >
                    AI
                    <br />
                    <span style={{ color: 'hsl(var(--muted-foreground))' }}>anything.</span>
                  </h2>

                  {/* Description */}
                  <p
                    className="font-body text-foreground/70 leading-relaxed mb-6"
                    style={{ fontSize: '1.05rem', lineHeight: 1.8 }}
                  >
                    An AI mentor trained on seasoned journalists and writers — here to help you develop your craft, find your voice, and understand how far you can take AI as a tool while keeping the writing genuinely your own.
                  </p>
                  <p
                    className="font-body text-muted-foreground leading-relaxed"
                    style={{ fontSize: '0.95rem', lineHeight: 1.75 }}
                  >
                    This feature is in development. Sign up for the Dispatch to be notified when it launches.
                  </p>

                  {/* CTA */}
                  <div className="mt-10">
                    <Link
                      to="/newsletter"
                      className="inline-block px-10 py-4 bg-foreground text-background font-heading font-bold uppercase tracking-widest hover:opacity-80 transition-opacity duration-200"
                      style={{ fontSize: '0.7rem', letterSpacing: '0.15em' }}
                    >
                      Join the Dispatch
                    </Link>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

        </AnimatePresence>

        {/* ── CONNECT ── */}
        <motion.section
          className="bg-background py-16 md:py-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="border-2 border-foreground p-10 md:p-16 relative overflow-hidden">
              {/* Decorative watermark */}
              <div
                className="absolute right-8 top-1/2 -translate-y-1/2 font-heading font-black leading-none pointer-events-none select-none hidden md:block"
                style={{ fontSize: '14rem', fontWeight: 900, color: 'hsl(var(--foreground) / 0.04)' }}
                aria-hidden="true"
              >
                ½
              </div>

              <div className="relative z-10 max-w-xl">
                <p
                  className="font-body uppercase tracking-widest text-accent mb-4"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}
                >
                  {host.connect.label}
                </p>
                <h2
                  className="font-heading font-black text-foreground mb-4"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.1 }}
                >
                  {host.connect.heading}
                </h2>
                <p
                  className="font-body text-muted-foreground mb-8"
                  style={{ fontSize: '1rem', lineHeight: 1.7 }}
                >
                  {host.connect.body}
                </p>
                <Link
                  to="/newsletter"
                  className="inline-block px-10 py-4 bg-foreground text-background font-heading font-bold uppercase tracking-widest hover:opacity-80 transition-opacity duration-200"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.15em' }}
                >
                  {host.connect.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </PageWrapper>
    </>
  );
}
