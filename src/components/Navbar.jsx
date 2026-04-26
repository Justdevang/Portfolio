import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'WORK', href: '#work' },
    { label: 'GITHUB', href: '#github' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <nav
        id="main-nav"
        className="fixed top-0 left-0 w-full z-[1000] transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(244, 241, 236, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div className="container flex items-center justify-between" style={{ height: '72px' }}>
          {/* Logo */}
          <a href="#home" className="font-display font-bold text-[18px] tracking-[-0.02em] uppercase">
            DEV
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[6px] bg-transparent border-none"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span
              className="block w-6 h-[1.5px] bg-[var(--text)] transition-all duration-300"
              style={{
                transform: isOpen ? 'rotate(45deg) translateY(3.75px)' : 'none',
              }}
            />
            <span
              className="block w-6 h-[1.5px] bg-[var(--text)] transition-all duration-300"
              style={{
                transform: isOpen ? 'rotate(-45deg) translateY(-3.75px)' : 'none',
                opacity: isOpen ? 1 : 1,
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className="fixed inset-0 z-[999] flex flex-col items-center justify-center md:hidden transition-all duration-500"
        style={{
          backgroundColor: 'var(--bg)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transform: isOpen ? 'none' : 'translateY(-20px)',
        }}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-display text-[36px] font-bold tracking-[-0.02em] uppercase hover:opacity-50 transition-opacity duration-300"
              style={{
                transitionDelay: isOpen ? `${i * 80}ms` : '0ms',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
