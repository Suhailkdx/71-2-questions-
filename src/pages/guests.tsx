import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { guests } from 'virtual:content';

const siteUrl = 'https://7andahalfquestions.com';

export default function GuestsPage() {
  return (
    <>
      <Helmet>
        <title>Guests — Seven and a Half</title>
        <meta name="description" content="Meet the guests of Seven and a Half — entrepreneurs, artists, scientists, and leaders who answered the half question." />
        <link rel="canonical" href={`${siteUrl}/guests`} />
        <meta property="og:title" content="Guests — Seven and a Half" />
        <meta property="og:description" content="The people behind the questions." />
        <meta property="og:url" content={`${siteUrl}/guests`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': `${siteUrl}/guests#webpage`,
          name: 'Guests — Seven and a Half',
          url: `${siteUrl}/guests`,
          isPartOf: { '@id': `${siteUrl}/#website` },
        })}</script>
      </Helmet>

      <main>
        {/* Hero */}
        <section className="bg-background border-b-2 border-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-6 mb-8">
              <span className="font-body uppercase tracking-widest text-accent" style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}>
                {guests.hero.label}
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>
            <h1
              className="font-heading font-black text-foreground leading-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.02em' }}
            >
              {guests.hero.heading}
            </h1>
            <p className="font-body text-muted-foreground mt-6 max-w-xl" style={{ fontSize: '1rem' }}>
              {guests.hero.subheading}
            </p>
          </div>
        </section>

        {/* Guest grid */}
        <section className="bg-background py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-foreground">
              {guests.guests.map((guest, i) => (
                <motion.article
                  key={guest.id}
                  className="group p-8 md:p-10 border-b-2 md:odd:border-r-2 border-foreground last:border-b-0 even:last:border-b-0 hover:bg-muted transition-colors duration-150"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' as const }}
                >
                  {/* Episode tag */}
                  <div className="flex items-center gap-3 mb-5">
                    <a
                      href="#"
                      className="font-body uppercase tracking-widest text-primary hover:text-accent transition-colors"
                      style={{ fontSize: '0.6rem', letterSpacing: '0.18em' }}
                    >
                      <span>{guest.episode}</span>
                    </a>
                    <span className="flex-1 h-px bg-border" />
                  </div>

                  {/* Name & title */}
                  <h2 className="font-heading font-black text-foreground mb-1" style={{ fontSize: '1.5rem', lineHeight: 1.1 }}>
                    {guest.name}
                  </h2>
                  <p className="font-body text-muted-foreground mb-5" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                    {guest.title}
                  </p>

                  {/* Pull quote */}
                  <blockquote className="border-l-4 border-primary pl-4 mb-6">
                    <p className="font-heading italic text-foreground/80 leading-snug" style={{ fontSize: '1rem', fontWeight: 700 }}>
                      "{guest.quote}"
                    </p>
                  </blockquote>

                  {/* Bio */}
                  <p className="font-body text-muted-foreground leading-relaxed" style={{ fontSize: '0.85rem' }}>
                    {guest.bio}
                  </p>

                  {/* Listen link */}
                  <div className="mt-6 pt-5 border-t border-border">
                    <a
                      href="/episodes"
                      className="font-heading font-bold text-primary hover:text-accent transition-colors text-sm"
                    >
                      Listen to this episode →
                    </a>
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
