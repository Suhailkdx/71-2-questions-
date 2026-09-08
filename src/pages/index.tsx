import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { home } from 'virtual:content';

const siteUrl = 'https://7andahalfquestions.com';

const episodeImages = [
  '/assets/uploads/pages-episodes-dante-miller-cover-040e8ece.jpg',
  '/assets/uploads/conner.jpg',
];

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Seven and a Half — The Interview Series</title>
        <meta
          name="description"
          content="An interview series where human depth meets machine curiosity. Seven questions by Priscilla. One half question by AI. One conversation you couldn't have planned."
        />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:title" content="Seven and a Half — The Interview Series" />
        <meta property="og:description" content="Seven questions by Priscilla. One half question by AI. One conversation you couldn't have planned." />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'Seven and a Half', url: `${siteUrl}/` },
            { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Seven and a Half', url: `${siteUrl}/` },
            {
              '@type': 'WebPage',
              '@id': `${siteUrl}/#webpage`,
              url: `${siteUrl}/`,
              name: 'Seven and a Half — The Interview Series',
              isPartOf: { '@id': `${siteUrl}/#website` },
              about: { '@id': `${siteUrl}/#organization` },
            },
          ],
        })}</script>
      </Helmet>

      <main>

        {/* ── HERO ── */}
        <section className="bg-background overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid min-h-[90vh] min-w-0 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">

              {/* Left: editorial text */}
              <div className="flex min-w-0 flex-col justify-center py-16 lg:py-24 lg:pr-16">

                {/* Masthead */}
                <h1
                  className="font-heading leading-none mb-10"
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
                </h1>

                <div className="hidden">
                  <a
                    href={home.hero.ctaHref}
                    className="font-heading font-bold uppercase tracking-widest text-foreground border-b-2 border-foreground pb-0.5 hover:border-accent hover:text-accent transition-colors duration-200"
                    style={{ fontSize: '0.7rem', letterSpacing: '0.18em' }}
                  >
                    {home.hero.ctaLabel}
                  </a>
                  <Link
                    to="/episodes"
                    className="font-body text-muted-foreground hover:text-foreground transition-colors"
                    style={{ fontSize: '0.8rem' }}
                  >
                    All Episodes →
                  </Link>
                </div>
              </div>

              {/* Right: portrait — full bleed, no overlay */}
              <div className="flex min-w-0 justify-center pb-16 lg:justify-end lg:py-16">
                <div className="aspect-[4/5] w-full max-w-[19rem] overflow-hidden rounded-3xl border border-border shadow-sm sm:max-w-[26rem] lg:max-w-[31rem]">
                  <img
                    src="/assets/uploads/port 2.png"
                    alt="Host portrait"
                    className="h-[130%] w-full -translate-y-[13%] object-cover object-center"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ORNAMENTAL RULE ── */}
        <div className="flex items-center justify-center gap-4 py-2 border-t border-border">
          <span className="h-px flex-1 bg-border" />
          <span className="font-body text-muted-foreground/50 select-none" style={{ fontSize: '0.6rem', letterSpacing: '0.3em' }}>✦</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        {/* ── PLATFORM BAR ── */}
        <section className="flex min-h-[14rem] items-center justify-center bg-foreground px-6 py-12 text-center md:min-h-[18rem] md:py-16">
          <p
            className="font-heading font-black uppercase text-background"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.75rem)', letterSpacing: '0.2em', lineHeight: 1.05 }}
          >
            <span className="block">Launching</span>
            <span className="mt-4 block text-[0.65em]">December 2026</span>
          </p>
        </section>

        {/* ── THIN RULE ── */}
        <div className="border-t border-border" />

        {/* ── EDITORIAL INTRODUCTION ── */}
        <motion.section
          className="border-b-2 border-foreground bg-background py-16 md:py-24"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' as const }}
        >
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <div className="mb-12 flex items-center gap-6">
              <span className="font-body text-sm font-black uppercase tracking-[0.22em] text-accent">
                Seven and a Half
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <h2
              className="max-w-5xl font-heading font-black leading-[0.98] text-foreground"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 5.75rem)', letterSpacing: '-0.025em' }}
            >
              Every story starts with a question.
              <span className="mt-2 block text-accent">The better ones start with seven and a half.</span>
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-8 border-t border-border pt-10 md:grid-cols-2 md:gap-16">
              <p className="font-body leading-relaxed text-foreground/80">
                Seven and a Half is a media company founded by Columbia Journalism School graduate Priscilla. Through its original interview series, it shares thoughtful conversations with compelling voices across journalism, culture, business, sports, and beyond.
              </p>
              <p className="font-body leading-relaxed text-foreground/80">
                Alongside its editorial work, Seven and a Half offers mentorship programs connecting aspiring and working writers with accomplished journalists, authors, editors, and screenwriters for thoughtful, one to one guidance. It also provides support for the moments when writers get stuck and explores how to write intelligently and honestly in the age of AI.
              </p>
            </div>

          </div>
        </motion.section>

        {/* ── FEATURED EPISODES ── */}
        <section className="bg-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">

            {/* Section label */}
            <p
              className="font-body uppercase tracking-widest text-muted-foreground mb-14"
              style={{ fontSize: '0.6rem', letterSpacing: '0.22em' }}
            >
              {home.featuredEpisodes.sectionLabel}
            </p>

            {/* Episode grid — no heavy borders, just spacing */}
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
              {home.featuredEpisodes.episodes.map((ep, i) => (
                <motion.article
                  key={ep.id}
                  className="group flex h-full cursor-pointer flex-col rounded-2xl border-2 border-foreground bg-background p-4 shadow-[6px_6px_0_hsl(var(--border))] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_hsl(var(--border))] sm:p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const }}
                >
                  {/* Portrait */}
                  <div className="relative mb-5 aspect-[3/4] overflow-hidden rounded-xl">
                    <img
                      src={episodeImages[i]}
                      alt={`${ep.guestName} portrait`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ background: `hsl(var(--accent) / 0.12)` }}
                    />
                  </div>

                  {/* Card text */}
                  <p className="font-heading font-bold text-foreground mb-1" style={{ fontSize: '1.05rem', lineHeight: 1.2 }}>
                    {ep.guestName}
                  </p>
                  <p className="font-body text-muted-foreground mb-3" style={{ fontSize: '0.78rem' }}>
                    {ep.guestTitle}
                  </p>
                  <p className="font-body italic text-foreground/60 leading-snug mb-4" style={{ fontSize: '0.85rem' }}>
                    {ep.topic}
                  </p>
                  <span
                    className="mt-auto inline-flex self-center items-center gap-2 rounded-full bg-[hsl(var(--navy))] px-5 py-2 font-heading font-black uppercase tracking-widest text-white shadow-sm"
                    style={{ fontSize: '0.7rem', letterSpacing: '0.14em' }}
                  >
                    Coming Soon
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-white shadow-[0_0_0_4px_hsl(0_0%_100%/0.18)]"
                    />
                  </span>
                </motion.article>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                to="/episodes"
                className="inline-block border-b-[3px] border-foreground px-1 pb-1 font-heading font-black uppercase tracking-widest text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                style={{ fontSize: '1rem', letterSpacing: '0.14em' }}
              >
                View All Episodes
              </Link>
            </div>
          </div>
        </section>

        {/* ── THIN RULE ── */}
        <div className="border-t border-border" />

        {/* ── THE HALF QUESTION ── */}
        <section className="bg-card py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">

              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="h-px w-6 bg-border" />
                  <p
                    className="font-body uppercase tracking-widest text-muted-foreground"
                    style={{ fontSize: '1.0', letterSpacing: '0.22em' }}
                  >
                    Question 7½
                  </p>
                  <span className="font-body text-muted-foreground/40 select-none" style={{ fontSize: '0.55rem' }}>✦</span>
                </div>
                <h2
                  className="font-heading font-black text-foreground leading-none"
                  style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', lineHeight: 0.92, letterSpacing: '-0.02em' }}
                >
                  <span className="block">The one</span>
                  <span className="block text-foreground/25">only a robot</span>
                  <span className="block">could ask.</span>
                </h2>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-6 pt-2 md:pt-16">
                <p
                  className="font-body text-foreground/75 leading-relaxed"
                  style={{ fontSize: '1.05rem', lineHeight: 1.85 }}
                >
                  Seven questions are carefully crafted by Priscilla, shaped by her curiosity about the person sitting across from her.
                </p>
                <p
                  className="font-body text-muted-foreground leading-relaxed"
                  style={{ fontSize: '0.95rem', lineHeight: 1.85 }}
                >
                  The half question is different. it comes from AI. Unexpected, unpredictable, and entirely out of Priscilla's hands a question neither interviewer nor interviewee knows in advance.
                </p>
                <p
                  className="font-heading font-bold italic text-foreground/70"
                  style={{ fontSize: '1rem' }}
                >
                  The result is a conversation that moves between the intentional and the unexpected.
                </p>
                <Link
                  to="/about"
                  className="self-start font-heading font-bold uppercase tracking-widest text-foreground border-b-2 border-foreground pb-0.5 hover:border-accent hover:text-accent transition-colors duration-200 mt-4"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.18em' }}
                >
                  Why we do it this way →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── THIN RULE ── */}
        <div className="border-t border-border" />

        {/* ── The Writer's Studio PROMO ── */}
        <section className="bg-card py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

              {/* Left */}
              <div>
                <p
                  className="font-body uppercase tracking-widest text-accent mb-6"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.22em' }}
                >
                  The Writer's Studio
                </p>
                <h2
                  className="font-heading font-black text-foreground leading-tight mb-6"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 1.05 }}
                >
                  Find your voice in the age of AI
                </h2>
                <p
                  className="font-body text-muted-foreground leading-relaxed mb-10"
                  style={{ fontSize: '0.95rem', lineHeight: 1.85 }}
                >
                  A paid mentorship program pairing emerging writers with accomplished journalists and editors. Learn to use AI as an editorialtool, not a ghostwriter, and develop an original piece from idea to published byline.
                </p>
                <span
                  className="mb-7 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--navy))] px-5 py-2 font-heading font-black uppercase tracking-widest text-white shadow-sm"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.14em' }}
                >
                  Coming Soon
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-white shadow-[0_0_0_4px_hsl(0_0%_100%/0.18)]"
                  />
                </span>
                <div>
                <Link
                  to="/writers-studio"
                  className="font-heading font-bold uppercase tracking-widest text-foreground border-b-2 border-foreground pb-0.5 hover:border-accent hover:text-accent transition-colors duration-200"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.18em' }}
                >
                  Explore the Studio →
                </Link>
                </div>
              </div>

              {/* Right: program tracks */}
              <div className="flex flex-col divide-y divide-border">
                {[
                  { name: 'Editorial Consultation', duration: 'One session' },
                  { name: 'Article Program', duration: 'Four sessions' },
                  { name: 'Idea to Byline', duration: 'Eight sessions' },
                ].map((track) => (
                  <div
                    key={track.name}
                    className="py-6"
                  >
                    <div>
                      <p className="font-heading font-bold text-foreground" style={{ fontSize: '0.95rem' }}>
                        {track.name}
                      </p>
                      <p
                        className="font-body uppercase tracking-widest text-muted-foreground mt-1"
                        style={{ fontSize: '0.58rem', letterSpacing: '0.15em' }}
                      >
                        {track.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
