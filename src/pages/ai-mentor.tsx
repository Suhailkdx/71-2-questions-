import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion } from 'motion/react';

const siteUrl = 'https://7andahalfquestions.com';

export default function AIMentorPage() {
  return (
    <>
      <Helmet>
        <title>Felix AI — Seven and a Half</title>
        <meta
          name="description"
          content="An AI mentor designed to help writers develop their craft, find their voice, and use AI as a thoughtful editorial tool."
        />
        <link rel="canonical" href={`${siteUrl}/ai-mentor`} />
      </Helmet>

      <main>
        <motion.section
          className="min-h-[calc(100vh-6rem)] border-b-2 border-foreground bg-background py-20 md:py-32"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
        >
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,3fr)_minmax(18rem,2fr)]">
            <div className="max-w-3xl">
              <div className="mb-10 flex items-center gap-6">
                <span
                  className="font-body font-bold uppercase tracking-widest text-accent"
                  style={{ fontSize: '0.85rem', letterSpacing: '0.22em' }}
                >
                  Felix AI
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>

              <h1
                className="mb-8 font-heading font-black leading-none text-foreground"
                style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)', fontWeight: 900, lineHeight: 0.88, letterSpacing: '-0.03em' }}
              >
                AI
                <br />
                <span className="text-accent">anything.</span>
              </h1>

              <p
                className="mb-6 max-w-2xl font-body leading-relaxed text-foreground/75"
                style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', lineHeight: 1.8 }}
              >
                An AI mentor trained on seasoned journalists and writers, here to help you develop your craft, find your voice, and understand how far you can take AI as a tool while keeping the writing genuinely your own.
              </p>
              <p className="font-body leading-relaxed text-muted-foreground" style={{ fontSize: '1rem', lineHeight: 1.75 }}>
                This feature is in development. Sign up for the Dispatch to be notified when it launches.
              </p>

              <Link
                to="/newsletter"
                className="mt-10 inline-flex rounded-full bg-[hsl(var(--navy))] px-9 py-4 font-heading font-bold uppercase tracking-widest text-white transition-transform duration-200 hover:-translate-y-1"
                style={{ fontSize: '0.75rem', letterSpacing: '0.15em' }}
              >
                Join the Dispatch
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="inline-flex items-center gap-5 rounded-full bg-foreground px-8 py-5 text-background shadow-[8px_8px_0_hsl(var(--navy)/0.14)] sm:px-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background text-3xl" aria-hidden="true">
                  🤖
                </span>
                <span className="font-heading text-lg font-black uppercase tracking-[0.16em] sm:text-xl">
                  Coming Soon
                </span>
              </div>
            </div>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
