import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { writing_ai } from 'virtual:content';

const siteUrl = 'https://7andahalfquestions.com';

export default function WritingAIPage() {
  return (
    <>
      <Helmet>
        <title>{writing_ai.meta.title}</title>
        <meta name="description" content={writing_ai.meta.description} />
        <link rel="canonical" href={`${siteUrl}/writing-ai`} />
        <meta property="og:title" content={writing_ai.meta.title} />
        <meta property="og:description" content={writing_ai.meta.description} />
        <meta property="og:url" content={`${siteUrl}/writing-ai`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'EducationalOrganization',
          '@id': `${siteUrl}/writing-ai#org`,
          name: 'Writing in the Age of AI — Seven and a Half',
          url: `${siteUrl}/writing-ai`,
          description: writing_ai.meta.description,
          isPartOf: { '@id': `${siteUrl}/#organization` },
        })}</script>
      </Helmet>

      <main>

        {/* ── HERO ── */}
        <section className="bg-background border-b-4 border-foreground py-16 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-6 mb-10">
              <span
                className="font-body uppercase tracking-widest text-accent"
                style={{ fontSize: '0.9rem', letterSpacing: '0.25em' }}
              >
                {writing_ai.hero.label}
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-end">
              <div>
                <h1
                  className="font-heading font-black text-foreground leading-none mb-8"
                  style={{
                    fontSize: 'clamp(2.6rem, 7vw, 6.5rem)',
                    fontWeight: 900,
                    lineHeight: 0.9,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {writing_ai.hero.heading}
                </h1>
                <p
                  className="font-body text-secondary leading-relaxed max-w-2xl"
                  style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)', lineHeight: 1.7 }}
                >
                  {writing_ai.hero.subheading}
                </p>
              </div>

              {/* Signature line */}
              <div className="border-l-4 border-accent pl-8 py-2">
                <p
                  className="font-heading font-black text-accent leading-snug"
                  style={{ fontSize: 'clamp(1.15rem, 1.8vw, 1.6rem)', lineHeight: 1.4 }}
                >
                  {writing_ai.hero.signatureLine}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── DESCRIPTION ── */}
        <section className="bg-background py-16 md:py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              {writing_ai.description.body.map((para) => (
                <p
                  key={para.id}
                  className="font-body text-foreground leading-relaxed mb-6"
                  style={{ fontSize: 'clamp(1.15rem, 2vw, 1.5rem)', lineHeight: 1.8 }}
                >
                  {para.text}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRACKS ── */}
        <section className="bg-muted py-16 md:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-6 mb-12">
              <span
                className="font-body uppercase tracking-widest text-muted-foreground"
                style={{ fontSize: '0.85rem', letterSpacing: '0.22em' }}
              >
                Eight tracks
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>

            <div className="grid grid-cols-1 gap-px border-2 border-foreground bg-foreground md:grid-cols-2 lg:grid-cols-3">
              {writing_ai.tracks.map((track, i) => (
                <motion.div
                  key={track.id}
                  className={`bg-muted p-8 ${i === writing_ai.tracks.length - 1 ? 'lg:col-span-2' : ''}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' as const }}
                >
                  <span
                    className="font-heading font-black text-accent block mb-3"
                    style={{ fontSize: '0.85rem', letterSpacing: '0.25em' }}
                  >
                    Track {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="font-heading font-black text-foreground mb-3 leading-tight"
                    style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}
                  >
                    {track.name}
                  </h3>
                  <p
                    className="font-body text-muted-foreground leading-relaxed"
                    style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', lineHeight: 1.7 }}
                  >
                    {track.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PHILOSOPHY ── */}
        <section className="bg-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-6 mb-12">
              <span
                className="font-body uppercase tracking-widest"
                style={{ fontSize: '0.85rem', fontWeight: 900, letterSpacing: '0.22em', color: 'hsl(var(--background) / 0.9)' }}
              >
                {writing_ai.philosophy.label}
              </span>
              <span className="flex-1 h-px bg-accent/30" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2
                  className="font-heading font-black text-background leading-none mb-10"
                  style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 0.95 }}
                >
                  {writing_ai.philosophy.heading}
                </h2>
                <div className="flex flex-col gap-6">
                  {writing_ai.philosophy.points.map((point) => (
                    <p
                      key={point.id}
                      className="font-heading font-bold text-background/80 border-l-2 border-accent pl-5"
                      style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', lineHeight: 1.5 }}
                    >
                      {point.text}
                    </p>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <p
                  className="font-body text-background/70 leading-relaxed"
                  style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', lineHeight: 1.85 }}
                >
                  {writing_ai.philosophy.body}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CURRICULUM / FIVE STAGES ── */}
        <section className="bg-background py-16 md:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-6 mb-4">
              <span
                className="font-body uppercase tracking-widest text-muted-foreground"
                style={{ fontSize: '0.85rem', letterSpacing: '0.22em' }}
              >
                {writing_ai.curriculum.label}
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>
            <h2
              className="font-heading font-black text-foreground leading-none mb-14"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 0.95 }}
            >
              {writing_ai.curriculum.heading}
            </h2>

            <div className="flex flex-col divide-y-2 divide-border border-y-2 border-foreground">
              {writing_ai.curriculum.stages.map((stage, i) => (
                <motion.div
                  key={stage.id}
                  className="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-4 md:gap-10 py-10 items-start"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' as const }}
                >
                  <div>
                    <span
                      className="font-heading font-black text-accent leading-none"
                      style={{ fontSize: 'clamp(4rem, 7vw, 6.5rem)', lineHeight: 0.9 }}
                    >
                      {stage.number}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="font-heading font-black text-foreground uppercase mb-3"
                      style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '0.02em' }}
                    >
                      {stage.name}
                    </h3>
                    <p
                      className="font-body text-muted-foreground leading-relaxed"
                      style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', lineHeight: 1.75 }}
                    >
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI TRANSPARENCY NOTE ── */}
        <section className="bg-muted py-16 md:py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span
                  className="font-body uppercase tracking-widest text-accent block mb-4"
                  style={{ fontSize: '0.85rem', letterSpacing: '0.22em' }}
                >
                  {writing_ai.transparency.label}
                </span>
                <h2
                  className="font-heading font-black text-foreground leading-none mb-6"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 0.95 }}
                >
                  {writing_ai.transparency.heading}
                </h2>
                <p
                  className="font-body text-muted-foreground leading-relaxed"
                  style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', lineHeight: 1.8 }}
                >
                  {writing_ai.transparency.body}
                </p>
              </div>

              {/* Example note */}
              <div className="border-2 border-foreground bg-background p-6 sm:p-8">
                <span
                  className="transparency-note-label mb-4 block font-body uppercase tracking-widest text-muted-foreground"
                  style={{ fontSize: '0.8rem', letterSpacing: '0.2em' }}
                >
                  <span>Example</span>{' '}
                  <span>Transparency</span>{' '}
                  <span>Note</span>
                </span>
                <p
                  className="font-body italic text-foreground leading-relaxed"
                  style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', lineHeight: 1.8 }}
                >
                  {writing_ai.transparency.example}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── GREEN / YELLOW / RED RULES ── */}
        <section className="bg-background py-16 md:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-6 mb-4">
              <span
                className="font-body uppercase tracking-widest text-muted-foreground"
                style={{ fontSize: '0.85rem', letterSpacing: '0.22em' }}
              >
                {writing_ai.rules.label}
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>
            <h2
              className="font-heading font-black text-foreground leading-none mb-4"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 0.95 }}
            >
              {writing_ai.rules.heading}
            </h2>
            <p
              className="font-body text-muted-foreground mb-12 max-w-2xl"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
            >
              {writing_ai.rules.intro}
            </p>

            <div className="flex flex-col divide-y-2 divide-border border-y-2 border-foreground">
              {writing_ai.rules.items.map((rule) => {
                const dotColor =
                  rule.color === 'green'
                    ? '#4a7c59'
                    : rule.color === 'yellow'
                    ? '#b5860d'
                    : '#9b2335';
                return (
                  <div
                    key={rule.id}
                    className="grid grid-cols-1 md:grid-cols-[12rem_1fr] gap-4 md:gap-10 py-10 items-start"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-block rounded-full flex-shrink-0"
                        style={{ width: '12px', height: '12px', backgroundColor: dotColor }}
                        aria-hidden="true"
                      />
                      <span
                        className="font-heading font-black text-foreground uppercase"
                        style={{ fontSize: 'clamp(1rem, 1.5vw, 1.3rem)', letterSpacing: '0.1em' }}
                      >
                        {rule.label}
                      </span>
                    </div>
                    <p
                      className="font-body text-muted-foreground leading-relaxed"
                      style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', lineHeight: 1.75 }}
                    >
                      {rule.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Younger students note */}
            <div className="mt-10 border-l-4 border-accent pl-6 py-1 max-w-3xl">
              <p
                className="font-body text-muted-foreground leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', lineHeight: 1.8 }}
              >
                {writing_ai.rules.youngWritersNote}
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="h-px w-12 bg-border" />
              <span className="font-body text-muted-foreground/40 select-none" style={{ fontSize: '0.9rem' }}>✦</span>
              <span className="h-px w-12 bg-border" />
            </div>
            <h2
              className="font-heading font-black text-foreground leading-none mb-6"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 0.95 }}
            >
              {writing_ai.cta.heading}
            </h2>
            <p
              className="font-body text-muted-foreground mb-10 max-w-xl mx-auto"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
            >
              {writing_ai.cta.body}
            </p>
            <Link
              to="/newsletter"
              className="inline-block px-12 py-4 bg-foreground text-background font-heading font-bold uppercase tracking-widest hover:bg-accent transition-colors duration-200"
              style={{ fontSize: '1rem', letterSpacing: '0.18em' }}
            >
              {writing_ai.cta.buttonLabel}
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
