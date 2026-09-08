import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { giving_half } from 'virtual:content';

const siteUrl = 'https://7andahalfquestions.com';

export default function GivingHalfPage() {
  return (
    <>
      <Helmet>
        <title>The Giving Half — Seven and a Half</title>
        <meta name="description" content="The Giving Half is the charitable side of Seven and a Half — supporting organizations that rescue, protect, and care for animals." />
        <link rel="canonical" href={`${siteUrl}/giving-half`} />
        <meta property="og:title" content="The Giving Half — Seven and a Half" />
        <meta property="og:description" content="Supporting organizations that rescue, protect, and care for animals." />
        <meta property="og:url" content={`${siteUrl}/giving-half`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${siteUrl}/giving-half#webpage`,
          name: 'The Giving Half — Seven and a Half',
          url: `${siteUrl}/giving-half`,
          isPartOf: { '@id': `${siteUrl}/#website` },
        })}</script>
      </Helmet>

      <main>
        {/* Hero */}
        <section className="bg-background border-b-4 border-foreground py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-6 mb-8">
              <span
                className="font-heading font-black uppercase text-foreground"
                style={{ fontSize: '0.85rem', letterSpacing: '0.25em' }}
              >
                {giving_half.hero.label}
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>
            <h1
              className="font-heading font-black leading-none"
              style={{ fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.02em' }}
            >
              <span
                className="block text-accent"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
              >
                The
              </span>
              <span
                className="block text-foreground uppercase"
                style={{ fontSize: 'clamp(4rem, 10vw, 8.5rem)' }}
              >
                {giving_half.hero.heading.replace('The ', '')}
              </span>
            </h1>
            <p
              className="font-heading font-bold text-muted-foreground mt-8 max-w-xl uppercase tracking-widest"
              style={{ fontSize: '0.9rem', letterSpacing: '0.12em' }}
            >
              {giving_half.hero.subheading}
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">

            {/* Ornamental divider */}
            <div className="flex items-center gap-4 mb-12">
              <span className="flex-1 h-px bg-border" />
              <span className="text-muted-foreground" style={{ fontSize: '0.9rem' }}>✦</span>
              <span className="flex-1 h-px bg-border" />
            </div>

            <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' as const }}
                className="space-y-6"
              >
                {giving_half.intro.paragraphs.map((p) => (
                  <p
                    key={p.id}
                    className="font-body text-foreground leading-relaxed"
                    style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', lineHeight: 1.75 }}
                  >
                    {p.text}
                  </p>
                ))}

                <p
                  className="font-heading font-black text-foreground mt-8"
                  style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)' }}
                >
                  {giving_half.intro.closing}
                </p>
              </motion.div>

              <motion.div
                className="mx-auto w-full max-w-sm"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, ease: 'easeOut' as const }}
                aria-label="The Giving Half photo story"
              >
                <div className="overflow-hidden rounded-3xl border-2 border-foreground bg-background p-2 shadow-[8px_8px_0_hsl(var(--border))]">
                  <img
                    src="/assets/uploads/cha-2-enhanced.png"
                    alt="Priscilla sharing a quiet moment with her dog"
                    className="aspect-[4/5] w-full rounded-2xl object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>

            {/* Ornamental divider */}
            <div className="flex items-center gap-4 mt-16">
              <span className="flex-1 h-px bg-border" />
              <span className="text-muted-foreground" style={{ fontSize: '0.9rem' }}>✦</span>
              <span className="flex-1 h-px bg-border" />
            </div>

          </div>
        </section>

        {/* Dark band */}
        <section className="bg-foreground py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p
              className="font-heading font-black text-background uppercase tracking-widest mb-4"
              style={{ fontSize: '0.8rem', letterSpacing: '0.2em' }}
            >
              Stay Informed
            </p>
            <p
              className="font-body text-background/80 leading-relaxed mb-8"
              style={{ fontSize: '1.05rem' }}
            >
              Subscribe to the Dispatch to be the first to hear when The Giving Half launches.
            </p>
            <a
              href="/newsletter"
              className="font-heading font-bold uppercase tracking-widest text-background border-b-2 border-background pb-0.5 hover:border-background/60 hover:text-background/60 transition-colors duration-150"
              style={{ fontSize: '0.8rem', letterSpacing: '0.18em' }}
            >
              Subscribe to the Dispatch
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
