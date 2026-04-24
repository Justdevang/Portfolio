const Footer = () => {
  const days = [
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
    'SUNDAY',
  ];
  const daysText = days.map((d) => `${d} · `).join('');

  const socials = [
    { label: 'Instagram', href: 'https://www.instagram.com/_automatewithdev/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/devang-dhakate/' },
    { label: 'GitHub', href: 'https://github.com/Justdevang' },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ borderTop: '1px solid var(--border)' }}>
      {/* Days Easter Egg — Background */}
      <div
        className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none"
        style={{ opacity: 0.03 }}
      >
        <div className="days-track">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="font-display font-bold whitespace-nowrap"
              style={{
                fontSize: 'clamp(80px, 12vw, 160px)',
                letterSpacing: '0.05em',
                paddingRight: '60px',
              }}
            >
              {daysText}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Content */}
      <div className="container relative z-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--text-muted)]">
          DEV © 2026. All Rights Reserved.
        </span>

        {/* Right — Socials */}
        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-300"
              id={`footer-${s.label.toLowerCase()}`}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
