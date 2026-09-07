import { Link } from 'react-router';

const footerLinks = [
  { label: 'Interviews', href: '/episodes' },
  { label: "Writers' Studio", href: '/writers-studio' },
  { label: 'About', href: '/host' },
  { label: 'Dispatch', href: '/newsletter' },
];

const platforms = [
  { label: 'Spotify', href: '#' },
  { label: 'Apple Podcasts', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'RSS', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pb-10 border-b border-border">

          {/* Wordmark + tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="block mb-4">
              <span
                role="img"
                aria-label="Seven and a Half"
                className="block h-9 w-24 bg-[hsl(var(--navy))]"
                style={{
                  WebkitMaskImage: 'url(/airo-assets/images/logo/horizontal/dark)',
                  maskImage: 'url(/airo-assets/images/logo/horizontal/dark)',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskSize: '100% 100%',
                  maskSize: '100% 100%',
                }}
              />
            </Link>
            <p
              className="font-body text-muted-foreground leading-relaxed"
              style={{ fontSize: '0.8rem', lineHeight: 1.75 }}
            >
              The interview series that asks seven questions, and one you didn't see coming.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p
              className="font-body uppercase tracking-widest text-muted-foreground mb-5"
              style={{ fontSize: '0.58rem', letterSpacing: '0.2em' }}
            >
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-foreground/70 hover:text-foreground transition-colors duration-150"
                    style={{ fontSize: '0.82rem' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Listen on */}
          <div>
            <p
              className="font-body uppercase tracking-widest text-muted-foreground mb-5"
              style={{ fontSize: '0.58rem', letterSpacing: '0.2em' }}
            >
              Listen On
            </p>
            <ul className="flex flex-col gap-3">
              {platforms.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    className="font-body text-foreground/70 hover:text-foreground transition-colors duration-150"
                    style={{ fontSize: '0.82rem' }}
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-body text-muted-foreground" style={{ fontSize: '0.68rem' }}>
            © {new Date().getFullYear()} Seven and a Half. All rights reserved.
          </p>
          <p
            className="font-body uppercase tracking-widest text-muted-foreground"
            style={{ fontSize: '0.58rem', letterSpacing: '0.18em' }}
          >
            The Interview Series
          </p>
        </div>
      </div>
    </footer>
  );
}
