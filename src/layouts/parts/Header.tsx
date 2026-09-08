import { useState } from 'react';
import { Link, useLocation } from 'react-router';

const navLinks = [
  { label: 'Interviews', href: '/episodes' },
  { label: "Writers' Studio", href: '/writers-studio' },
  { label: 'Writing + AI', href: '/writing-ai' },
  { label: "Writer's Block", href: '/writers-block' },
  { label: 'About', href: '/about' },
  { label: 'Priscilla', href: '/host' },
  { label: 'The Giving Half', href: '/giving-half' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-background border-b border-border">
      <div className="mx-auto max-w-[90rem] px-6 py-2 md:px-10">
        <div className="relative flex items-center justify-between">

          {/* Logo / Wordmark */}
          <Link
            to="/"
            aria-label="Seven and a Half Questions home"
            className="flex h-20 w-36 shrink-0 items-center justify-start"
          >
            <img
              src="/assets/uploads/logo.png"
              alt=""
              className="h-20 w-auto object-contain object-left"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-transparent p-1.5 xl:flex"
          >
            {navLinks.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`whitespace-nowrap rounded-full px-4 py-2.5 font-body font-bold transition-colors duration-150 2xl:px-5 ${
                    active
                      ? 'bg-[hsl(var(--navy))] text-white shadow-sm'
                      : 'text-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))]/10'
                  }`}
                  style={{ fontSize: '0.95rem', letterSpacing: '0.02em' }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/newsletter"
              className={`whitespace-nowrap rounded-full px-4 py-2.5 font-body font-bold transition-colors duration-150 2xl:px-5 ${
                location.pathname === '/newsletter'
                  ? 'bg-[hsl(var(--navy))] text-white shadow-sm'
                  : 'text-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))]/10'
              }`}
              style={{ fontSize: '0.95rem', letterSpacing: '0.02em' }}
            >
              Stay Connected
            </Link>
            <Link
              to="/ai-mentor"
              className={`whitespace-nowrap rounded-full px-4 py-2.5 font-body font-bold transition-colors duration-150 2xl:px-5 ${
                location.pathname === '/ai-mentor'
                  ? 'bg-[hsl(var(--navy))] text-white shadow-sm'
                  : 'text-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))]/10'
              }`}
              style={{ fontSize: '0.95rem', letterSpacing: '0.02em' }}
            >
              AI Mentor
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="flex flex-col gap-1.5 p-2 xl:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-5 h-px bg-foreground transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-px bg-foreground transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-foreground transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="mt-4 flex flex-col gap-1 rounded-2xl border border-border bg-muted p-2 shadow-sm xl:hidden"
          >
            {navLinks.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-full px-5 py-3 font-body font-bold transition-colors ${
                    active
                      ? 'bg-[hsl(var(--navy))] text-white shadow-sm'
                      : 'text-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))]/10'
                  }`}
                  style={{ fontSize: '0.95rem', letterSpacing: '0.02em' }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/newsletter"
              onClick={() => setMenuOpen(false)}
              className={`rounded-full px-5 py-3 font-body font-bold transition-colors ${
                location.pathname === '/newsletter'
                  ? 'bg-[hsl(var(--navy))] text-white shadow-sm'
                  : 'text-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))]/10'
              }`}
              style={{ fontSize: '0.95rem', letterSpacing: '0.02em' }}
            >
              Stay Connected
            </Link>
            <Link
              to="/ai-mentor"
              onClick={() => setMenuOpen(false)}
              className={`rounded-full px-5 py-3 font-body font-bold transition-colors ${
                location.pathname === '/ai-mentor'
                  ? 'bg-[hsl(var(--navy))] text-white shadow-sm'
                  : 'text-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))]/10'
              }`}
              style={{ fontSize: '0.95rem', letterSpacing: '0.02em' }}
            >
              AI Mentor
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
