import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { episodes } from 'virtual:content';

const siteUrl = 'https://7andahalfquestions.com';

export default function EpisodesPage() {
  return (
    <>
      <Helmet>
        <title>Episodes — Seven and a Half</title>
        <meta name="description" content="Browse every episode of 7 and a Half Questions — seven questions by Priscilla Beaton, one half question by AI." />
        <link rel="canonical" href={`${siteUrl}/episodes`} />
        <meta property="og:title" content="Episodes — Seven and a Half" />
        <meta property="og:description" content="Browse every episode of 7 and a Half Questions." />
        <meta property="og:url" content={`${siteUrl}/episodes`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': `${siteUrl}/episodes#webpage`,
          name: 'Episodes — Seven and a Half',
          url: `${siteUrl}/episodes`,
          isPartOf: { '@id': `${siteUrl}/#website` },
        })}</script>
      </Helmet>

      <main>
        {/* Hero */}
        <section className="bg-background border-b-4 border-foreground py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-6 mb-8">
              <span
                className="font-heading font-black uppercase tracking-widest text-foreground"
                style={{ fontSize: '0.85rem', letterSpacing: '0.25em' }}
              >
                {episodes.hero.label}
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr] md:gap-20">
              <h1
                className="font-heading font-black leading-none"
                style={{ fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.02em' }}
              >
                <span
                  className="block text-accent"
                  style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
                >
                  7 and a
                </span>
                <span
                  className="block text-foreground"
                  style={{ fontSize: 'clamp(4.25rem, 13vw, 11rem)', lineHeight: 0.88 }}
                >
                  Half
                </span>
                <span
                  className="block text-accent"
                  style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', letterSpacing: '0.03em', lineHeight: 1, marginTop: '0.1em' }}
                >
                  {episodes.hero.heading}
                </span>
              </h1>
              <p
                className="max-w-md font-heading font-black uppercase tracking-widest text-foreground md:justify-self-center md:text-center"
                style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.3rem)', fontWeight: 900, letterSpacing: '0.1em', lineHeight: 1.45 }}
              >
                {episodes.hero.subheading}
              </p>
            </div>
          </div>
        </section>

        {/* Chapter list */}
        <section className="bg-background py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col gap-8">
              {episodes.episodes.map((ep, i) => (
                <motion.article
                  key={ep.id}
                  className="group grid grid-cols-1 items-stretch gap-5 rounded-2xl border-2 border-foreground bg-background p-5 shadow-[6px_6px_0_hsl(var(--border))] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_hsl(var(--border))] md:grid-cols-[12rem_1fr] md:gap-10 md:p-6"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' as const }}
                >
                  {/* Cover image */}
                  <div className="aspect-[3/4] overflow-hidden rounded-xl bg-muted">
                    {ep.coverImage ? (
                      <img
                        src={ep.coverImage}
                        alt={`${ep.guestName} interview`}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: 'center 25%' }}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted" />
                    )}
                  </div>

                  {/* Main content */}
                  <div className="flex min-w-0 flex-col pt-1">
                    <h2
                      className="font-heading font-black text-foreground uppercase leading-none mb-3"
                      style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', letterSpacing: '-0.01em', lineHeight: 0.95 }}
                    >
                      {ep.guestName}
                    </h2>
                    <div className="mb-4 flex items-center gap-3">
                      {ep.duration ? (
                        <span
                          className="font-heading font-black uppercase tracking-widest text-foreground"
                          style={{ fontSize: '0.82rem', letterSpacing: '0.14em' }}
                        >
                          {ep.duration}
                        </span>
                      ) : null}
                      {ep.date ? (
                        <time
                          dateTime={ep.date}
                          className="font-heading font-black uppercase tracking-widest text-foreground"
                          style={{ fontSize: '0.82rem', letterSpacing: '0.14em' }}
                        >
                          {new Date(ep.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </time>
                      ) : null}
                    </div>
                    {ep.guestTitle ? (
                      <p
                        className="font-heading font-bold text-muted-foreground uppercase tracking-widest mb-2"
                        style={{ fontSize: '0.8rem', letterSpacing: '0.15em' }}
                      >
                        {ep.guestTitle}
                      </p>
                    ) : null}
                    {ep.topic ? (
                      <p className="font-body italic text-foreground/70 leading-snug" style={{ fontSize: '1.05rem' }}>
                        {ep.topic}
                      </p>
                    ) : null}
                    <span
                      className="mt-auto inline-flex self-end items-center gap-2 rounded-full bg-[hsl(var(--navy))] px-5 py-2 font-heading font-black uppercase tracking-widest text-white shadow-sm"
                      style={{ fontSize: '0.7rem', letterSpacing: '0.14em' }}
                    >
                      Coming Soon
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-white shadow-[0_0_0_4px_hsl(0_0%_100%/0.18)]"
                      />
                    </span>
                  </div>

                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
