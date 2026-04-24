const Marquee = () => {
  const items = [
    'CODE WITH INTENTION',
    'PIXELS WITH PURPOSE',
    'BUILT IN PUNE',
    'OPEN TO WORK',
    'NO BOREDOM ALLOWED',
    'BOLD OR NOTHING',
    'VISUAL DRIP',
    'COFFEE IN · MAGIC OUT',
  ];

  const content = items.map((item) => `${item} · `).join('');

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-dark)',
        padding: '16px 0',
      }}
    >
      <div className="marquee-track">
        {/* Duplicate content for seamless loop */}
        {[0, 1].map((dupeIdx) => (
          <span
            key={dupeIdx}
            className="font-display font-bold text-[14px] md:text-[16px] tracking-[0.15em] uppercase whitespace-nowrap"
            style={{
              color: 'var(--text-light)',
              paddingRight: '40px',
            }}
          >
            {content}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
