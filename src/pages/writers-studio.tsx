import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { writers_studio } from 'virtual:content';

const siteUrl = 'https://7andahalfquestions.com';

export default function WritersStudioPage() {
  return (
    <>
      <Helmet>
        <title>{writers_studio.meta.title}</title>
        <meta name="description" content={writers_studio.meta.description} />
        <link rel="canonical" href={`${siteUrl}/writers-studio`} />
        <meta property="og:title" content={writers_studio.meta.title} />
        <meta property="og:description" content={writers_studio.meta.description} />
        <meta property="og:url" content={`${siteUrl}/writers-studio`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'EducationalOrganization',
          '@id': `${siteUrl}/writers-studio#org`,
          name: "The Writer's Studio",
          url: `${siteUrl}/writers-studio`,
          description: writers_studio.meta.description,
          isPartOf: { '@id': `${siteUrl}/#organization` },
        })}</script>
      </Helmet>

      <main>

        {/* ── HERO — white bg, navy text ── */}
        <section className="overflow-hidden bg-background border-b-4 border-primary py-16 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-6 mb-10">
              <span
                className="font-body uppercase tracking-widest text-secondary"
                style={{ fontSize: '0.8rem', letterSpacing: '0.25em' }}
              >
                {writers_studio.hero.label}
              </span>
              <span className="flex-1 h-0.5 bg-primary" />
            </div>

            <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
              <div className="min-w-0">
                <h1
                  className="font-heading font-black text-primary leading-none mb-6"
                  style={{
                    fontSize: 'clamp(2.65rem, 6vw, 5.75rem)',
                    fontWeight: 900,
                    lineHeight: 0.92,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {writers_studio.hero.heading}
                </h1>
                <p
                  className="font-body text-secondary leading-relaxed max-w-xl"
                  style={{ fontSize: '1.25rem', lineHeight: 1.75 }}
                >
                  {writers_studio.hero.subheading}
                </p>
              </div>

              {/* CTA cluster */}
              <div className="flex min-w-0 w-full max-w-sm flex-col gap-4 lg:justify-self-end">
                <Link
                  to="/newsletter"
                  className="flex min-h-14 w-full items-center justify-center border-3 border-primary px-4 py-4 text-center font-heading font-bold uppercase tracking-widest text-primary transition-colors duration-200 hover:bg-primary hover:text-primary-foreground sm:px-8"
                  style={{ fontSize: 'clamp(0.7rem, 2.8vw, 0.85rem)', letterSpacing: '0.14em', borderWidth: '3px' }}
                >
                  {writers_studio.apply.mentorCtaLabel}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOUR PILLARS — denim bg ── */}
        <motion.section
          className="bg-muted py-16 md:py-24 border-b-4 border-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-primary">
              {writers_studio.pillars.map((pillar, i) => (
                <div
                  key={pillar.id}
                  className={`p-10 md:p-14 bg-background ${
                    i % 2 === 0 ? 'border-b-2 md:border-r-2 border-primary' : 'border-b-2 border-primary'
                  } ${i >= 2 ? 'border-b-0' : ''}`}
                >
                  <p
                    className="font-body uppercase tracking-widest text-secondary mb-4"
                    style={{ fontSize: '0.75rem', letterSpacing: '0.25em' }}
                  >
                    0{i + 1}
                  </p>
                  <h2
                    className="font-heading font-black text-primary mb-4"
                    style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', lineHeight: 1.1 }}
                  >
                    {pillar.heading}
                  </h2>
                  <p
                    className="font-body text-muted-foreground leading-relaxed"
                    style={{ fontSize: '1.1rem', lineHeight: 1.8 }}
                  >
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── PROGRAMS / PRICING — white bg ── */}
        <motion.section
          className="bg-background py-16 md:py-24 border-b-4 border-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Section header */}
            <div className="mb-14">
              <p
                className="font-body uppercase tracking-widest text-secondary mb-3"
                style={{ fontSize: '0.8rem', letterSpacing: '0.25em' }}
              >
                {writers_studio.programs.label}
              </p>
              <h2
                className="font-heading font-black text-primary mb-4"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.0 }}
              >
                {writers_studio.programs.heading}
              </h2>
              <p
                className="font-body text-muted-foreground max-w-2xl"
                style={{ fontSize: '1.15rem', lineHeight: 1.75 }}
              >
                {writers_studio.programs.subheading}
              </p>
            </div>

            {/* Program cards */}
            <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
              {writers_studio.programs.items.map((prog) => (
                <div
                  key={prog.id}
                  className={`relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-primary p-8 shadow-[6px_6px_0_hsl(var(--border))] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_hsl(var(--border))] md:p-10 ${
                    prog.featured ? 'bg-primary text-primary-foreground' : 'bg-background'
                  }`}
                >
                  {prog.featured && (
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent" />
                  )}

                  <div className="mb-6">
                    <p
                      className={`font-body uppercase tracking-widest mb-2 ${prog.featured ? 'text-primary-foreground' : 'text-muted-foreground'}`}
                      style={{ fontSize: '0.75rem', letterSpacing: '0.22em' }}
                    >
                      {prog.duration}
                    </p>
                    <h3
                      className={`font-heading font-black mb-3 ${prog.featured ? 'text-primary-foreground' : 'text-primary'}`}
                      style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.05 }}
                    >
                      {prog.name}
                    </h3>
                  </div>

                  <p
                    className={`font-body leading-relaxed mb-8 ${prog.featured ? 'text-primary-foreground' : 'text-muted-foreground'}`}
                    style={{ fontSize: '1rem', lineHeight: 1.75 }}
                  >
                    {prog.description}
                  </p>

                  <ul className="flex flex-col gap-3 mb-10 flex-1">
                    {prog.features.map((f) => (
                      <li key={f.id} className="flex items-start gap-3">
                        <span
                          className={`mt-1.5 flex-shrink-0 w-2 h-2 rounded-full ${prog.featured ? 'bg-accent' : 'bg-secondary'}`}
                        />
                        <span
                          className={`font-body ${prog.featured ? 'text-primary-foreground' : 'text-muted-foreground'}`}
                          style={{ fontSize: '1rem', lineHeight: 1.6 }}
                        >
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/newsletter"
                    className={`mt-auto inline-block px-6 py-3 font-heading font-bold uppercase tracking-widest text-center transition-colors duration-200 ${
                      prog.featured
                        ? 'bg-background text-primary hover:bg-accent hover:text-primary-foreground border-2 border-background'
                        : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                    }`}
                    style={{ fontSize: '0.75rem', letterSpacing: '0.18em' }}
                  >
                    {prog.ctaLabel}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── AI NOTE — deep navy bg ── */}
        <motion.section
          className="bg-primary py-16 md:py-20 border-b-4 border-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-center">
              {/* Glyph */}
              <div
                className="font-heading font-black leading-none select-none hidden md:block"
                style={{ fontSize: '10rem', fontWeight: 900, lineHeight: 1, color: 'hsl(var(--primary-foreground) / 0.5)' }}
                aria-hidden="true"
              >
                ½
              </div>
              <div>
                <p
                  className="mb-4 font-body uppercase tracking-widest"
                  style={{ fontSize: '0.8rem', letterSpacing: '0.25em', color: 'hsl(var(--primary-foreground) / 0.9)' }}
                >
                  {writers_studio.aiNote.label}
                </p>
                <h2
                  className="font-heading font-black text-primary-foreground leading-tight mb-5"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.05 }}
                >
                  {writers_studio.aiNote.heading}
                </h2>
                <p
                  className="font-body leading-relaxed max-w-2xl"
                  style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'hsl(var(--primary-foreground) / 0.75)' }}
                >
                  {writers_studio.aiNote.body}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── EDITORIAL MENTORS — denim bg ── */}
        <motion.section
          className="bg-muted py-16 md:py-24 border-b-4 border-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
              <div>
                <p
                  className="font-body uppercase tracking-widest text-secondary mb-4"
                  style={{ fontSize: '0.8rem', letterSpacing: '0.25em' }}
                >
                  {writers_studio.mentors.label}
                </p>
                <h2
                  className="font-heading font-black text-primary leading-tight"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.05 }}
                >
                  {writers_studio.mentors.heading}
                </h2>
              </div>
              <div>
                <p
                  className="font-body text-muted-foreground leading-relaxed mb-10"
                  style={{ fontSize: '1.2rem', lineHeight: 1.8 }}
                >
                  {writers_studio.mentors.body}
                </p>
                <Link
                  to="/newsletter"
                  className="inline-block px-8 py-3 border-2 border-primary text-primary font-heading font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  style={{ fontSize: '0.8rem', letterSpacing: '0.18em', borderWidth: '3px' }}
                >
                  {writers_studio.mentors.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── APPLY CTA — white bg, navy border ── */}
      </main>
    </>
  );
}
