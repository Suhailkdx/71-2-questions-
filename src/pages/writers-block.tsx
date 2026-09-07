import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { writers_block } from 'virtual:content';

export default function WritersBlockPage() {
  return (
    <>
      <Helmet>
        <title>{writers_block.meta.title}</title>
        <meta name="description" content={writers_block.meta.description} />
        <link rel="canonical" href="https://okd6uenwmh.preview.c36.airoapp.ai/writers-block" />
        <meta property="og:title" content={writers_block.meta.title} />
        <meta property="og:description" content={writers_block.meta.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>

        {/* ── Hero ── */}
        <section className="bg-background border-b border-border pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-6 mb-10">
              <span
                className="font-body uppercase tracking-widest text-muted-foreground"
                style={{ fontSize: '0.65rem', letterSpacing: '0.22em' }}
              >
                {writers_block.hero.label}
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>

            <div className="max-w-3xl">
              <h1
                className="font-heading font-black text-foreground leading-none mb-6"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1.06 }}
              >
                {writers_block.hero.heading}
              </h1>
              <p
                className="font-body text-muted-foreground leading-relaxed"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', lineHeight: 1.7 }}
              >
                {writers_block.hero.subheading}
              </p>
            </div>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="bg-background py-16 md:py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              {writers_block.intro.body.map((p) => (
                <p
                  key={p.id}
                  className="font-body text-foreground leading-relaxed mb-6 last:mb-0"
                  style={{ fontSize: '1.1rem', lineHeight: 1.8 }}
                >
                  {p.text}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── What visitors can receive help with ── */}
        <section className="bg-background py-16 md:py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-6 mb-12">
              <span
                className="font-body uppercase tracking-widest text-muted-foreground"
                style={{ fontSize: '0.65rem', letterSpacing: '0.22em' }}
              >
                {writers_block.helpList.heading}
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>

            <ul className="max-w-2xl">
              {writers_block.helpList.items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start gap-4 py-4 border-b border-border last:border-0"
                >
                  <span
                    className="font-body text-accent mt-1 select-none"
                    style={{ fontSize: '0.7rem' }}
                  >
                    ✦
                  </span>
                  <span
                    className="font-body text-foreground leading-relaxed"
                    style={{ fontSize: '1.05rem', lineHeight: 1.7 }}
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Types of support ── */}
        <section className="bg-background py-16 md:py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-6 mb-4">
              <span
                className="font-body uppercase tracking-widest text-muted-foreground"
                style={{ fontSize: '0.65rem', letterSpacing: '0.22em' }}
              >
                {writers_block.supportTypes.heading}
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>

            <p
              className="font-body text-muted-foreground mb-10"
              style={{ fontSize: '0.95rem' }}
            >
              {writers_block.supportTypes.intro}
            </p>

            <div className="max-w-2xl">
              {/* Table header */}
              <div className="grid grid-cols-2 pb-3 border-b-2 border-foreground mb-0">
                <span
                  className="font-heading font-bold text-foreground uppercase tracking-widest"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.18em' }}
                >
                  Support
                </span>
                <span
                  className="font-heading font-bold text-foreground uppercase tracking-widest"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.18em' }}
                >
                  Who provides it
                </span>
              </div>

              {writers_block.supportTypes.items.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-2 py-5 border-b border-border last:border-0"
                >
                  <span
                    className="font-heading font-bold text-foreground"
                    style={{ fontSize: '1rem' }}
                  >
                    {item.name}
                  </span>
                  <span
                    className="font-body text-muted-foreground leading-snug"
                    style={{ fontSize: '0.95rem' }}
                  >
                    {item.provider}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Boundary language ── */}
        <section className="bg-foreground py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-6 mb-10">
              <span
                className="font-body uppercase tracking-widest text-white"
                style={{ fontSize: '0.65rem', letterSpacing: '0.22em' }}
              >
                {writers_block.boundary.heading}
              </span>
              <span className="flex-1 h-px bg-background/20" />
            </div>

            <div className="max-w-2xl">
              <div className="border-l-4 border-accent pl-6 mb-10">
                <p
                  className="font-body leading-relaxed text-white"
                  style={{ fontSize: '1rem', lineHeight: 1.85 }}
                >
                  {writers_block.boundary.note}
                </p>
              </div>

              <p
                className="font-body leading-relaxed text-white"
                style={{ fontSize: '0.95rem', lineHeight: 1.8 }}
              >
                {writers_block.boundary.minors}
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="h-px w-12 bg-border" />
              <span className="font-body text-muted-foreground/40 select-none" style={{ fontSize: '0.7rem' }}>✦</span>
              <span className="h-px w-12 bg-border" />
            </div>
            <h2
              className="font-heading font-black text-foreground leading-none mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 0.95 }}
            >
              {writers_block.cta.heading}
            </h2>
            <p
              className="font-body text-muted-foreground mb-10 max-w-md mx-auto"
              style={{ fontSize: '1rem' }}
            >
              {writers_block.cta.body}
            </p>
            <Link
              to="/newsletter"
              className="inline-block px-12 py-4 bg-foreground text-background font-heading font-bold uppercase tracking-widest hover:bg-accent transition-colors duration-200"
              style={{ fontSize: '0.8rem', letterSpacing: '0.18em' }}
            >
              <span>{writers_block.cta.buttonLabel}</span>
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
