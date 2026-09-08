import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { about } from 'virtual:content';
import HostPage from './host';

const siteUrl = 'https://7andahalfquestions.com';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About — Seven and a Half</title>
        <meta name="description" content="The story behind Seven and a Half — why the half question is the whole point, and the host who asks it." />
        <link rel="canonical" href={`${siteUrl}/about`} />
        <meta property="og:title" content="About — Seven and a Half" />
        <meta property="og:description" content="The story behind Seven and a Half." />
        <meta property="og:url" content={`${siteUrl}/about`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          '@id': `${siteUrl}/about#webpage`,
          name: 'About — Seven and a Half',
          url: `${siteUrl}/about`,
          isPartOf: { '@id': `${siteUrl}/#website` },
          about: { '@id': `${siteUrl}/#organization` },
        })}</script>
      </Helmet>

      <HostPage embedded>
      <main>
        {/* Hero */}
        <section className="bg-background border-b-2 border-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-6 mb-8">
              <span className="font-body uppercase tracking-widest text-accent" style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}>
                {about.hero.label}
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>
            <h1
              className="font-heading font-black text-foreground leading-none mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.02em' }}
            >
              {about.hero.heading}
            </h1>
            <p className="font-body text-muted-foreground max-w-xl" style={{ fontSize: '1rem' }}>
              {about.hero.subheading}
            </p>
          </div>
        </section>

        {/* Origin story */}
        <motion.section
          className="bg-background py-16 md:py-24 border-b-2 border-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
              <div>
                <h2
                  className="font-heading font-black text-foreground leading-tight"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.1 }}
                >
                  {about.origin.heading}
                </h2>
              </div>
              <div className="flex flex-col gap-5">
                {about.origin.body.map((p) => (
                  <p key={p.id} className="font-body text-foreground/80 leading-relaxed" style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
                    {p.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {false && (
        <motion.section
          className="bg-muted py-16 md:py-24 border-b-2 border-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Section header */}
            <div className="flex items-center gap-6 mb-12">
              <span className="flex-1 h-0.5 bg-foreground" />
              <span className="font-body uppercase tracking-widest text-muted-foreground" style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}>
                {about.halfQuestion.heading}
              </span>
              <span className="flex-1 h-0.5 bg-foreground" />
            </div>

            {/* Pull quote */}
            <div className="text-center mb-14">
              <p
                className="font-heading italic text-foreground"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.15 }}
              >
                "{about.halfQuestion.pullQuote}"
              </p>
            </div>

            {/* Body */}
            <div className="max-w-2xl mx-auto flex flex-col gap-5">
              {about.halfQuestion.body.map((p) => (
                <p key={p.id} className="font-body text-foreground/80 leading-relaxed text-center" style={{ fontSize: '1rem', lineHeight: 1.75 }}>
                  {p.text}
                </p>
              ))}
            </div>

            {/* AI badge */}
            <div className="mt-10 flex justify-center">
              <div className="border border-border px-6 py-4 max-w-lg text-center">
                <p
                  className="font-body uppercase tracking-widest text-primary mb-2"
                  style={{ fontSize: '0.55rem', letterSpacing: '0.22em' }}
                >
                  {about.halfQuestion.aiLabel}
                </p>
                <p className="font-body text-muted-foreground" style={{ fontSize: '0.85rem', lineHeight: 1.65 }}>
                  {about.halfQuestion.aiNote}
                </p>
              </div>
            </div>
          </div>
        </motion.section>
        )}

        {false && (
        <motion.section
          className="bg-background py-10 md:py-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative overflow-hidden border-2 border-foreground p-5 sm:p-8 md:p-16">
              {/* Decorative ½ */}
              <div
                className="hidden"
                style={{ fontSize: '14rem', fontWeight: 900, color: 'hsl(var(--foreground) / 0.04)' }}
                aria-hidden="true"
              >
                ½
              </div>

              <div className="relative z-10 mx-auto max-w-3xl">
                <div>
                <p
                  className="host-card-label mb-4 font-black uppercase tracking-widest text-[hsl(var(--navy))]"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.14em' }}
                >
                  {about.host.label}
                </p>
                <h2 className="host-card-heading font-black text-foreground mb-1" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
                  {about.host.name}
                </h2>
                <p className="host-card-label text-muted-foreground mb-8" style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                  {about.host.title}
                </p>
                <div className="max-w-xl flex flex-col gap-4 mb-10">
                  {about.host.bio.map((p) => (
                    <p key={p.id} className="font-body text-foreground/80 leading-relaxed" style={{ fontSize: '1rem', lineHeight: 1.75 }}>
                      {p.text}
                    </p>
                  ))}
                </div>
                <div className="flex w-full flex-col gap-3 md:flex-row md:gap-4">
                  <Link
                    to="/episodes"
                    className="inline-flex w-full items-center justify-center border-2 border-foreground px-5 py-3 text-center font-heading font-bold uppercase tracking-widest text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background md:w-auto md:px-8"
                    style={{ fontSize: '0.7rem', letterSpacing: '0.15em' }}
                  >
                    Browse Episodes
                  </Link>
                  <Link
                    to="#priscilla"
                    className="inline-flex w-full items-center justify-center border-2 border-accent px-5 py-3 text-center font-heading font-bold uppercase tracking-widest text-accent transition-colors duration-200 hover:bg-accent hover:text-background md:w-auto md:px-8"
                    style={{ fontSize: '0.7rem', letterSpacing: '0.15em' }}
                  >
                    Full Bio
                  </Link>
                </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        )}
      </main>
      </HostPage>
    </>
  );
}
