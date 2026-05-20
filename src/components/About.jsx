import { useRef } from 'react';

// All animation is driven by Hero.jsx's master scrubbed timeline.
// Initial hidden state is set via inline style (not GSAP) so it's
// guaranteed to be opacity:0 before any JS runs.

const About = () => {
  const sectionRef = useRef(null);

  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '3+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        marginTop: '-100dvh',
        position: 'relative',
        zIndex: 100,
        backgroundColor: 'transparent',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // Top alignment
        paddingTop: 'clamp(40px, 8dvh, 80px)', // Reduced to move content higher
        paddingBottom: '60px',
      }}
    >
      {/* opacity:0 set here in CSS-land, not via GSAP, so it's always hidden on mount */}
      <div
        className="about-overlay-content container"
        style={{ width: '100%', pointerEvents: 'auto', opacity: 0, transform: 'translateY(40px)' }}
      >

        <div
          className="about-reveal"
          style={{ marginBottom: 'clamp(24px, 5dvh, 48px)', opacity: 0, transform: 'translateY(30px)' }}
        >
          <h2
            className="section-label"
            style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px', letterSpacing: '0.15em', display: 'inline-block' }}
          >
            ( about me )
          </h2>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16"
          style={{ marginBottom: 'clamp(32px, 6dvh, 64px)' }}
        >
          <div
            className="lg:col-span-4 about-reveal"
            style={{ opacity: 0, transform: 'translateY(30px)' }}
          >
            <p
              className="font-mono"
              style={{
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.8,
              }}
            >
              The Solo Developer ·<br />
              Working Globally ·<br />
              Based in Pune.
            </p>
          </div>

          <div
            className="lg:col-span-8 about-reveal"
            style={{ opacity: 0, transform: 'translateY(30px)' }}
          >
            <p
              className="font-display"
              style={{
                fontSize: 'clamp(18px, 4vw, 34px)',
                fontWeight: 500,
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
                color: '#ffffff',
              }}
            >
              I build websites (mostly) and brand identities (definitely).
              I spend 70% of my time perfecting layouts and the other 30%
              making sure they move like a dream. Basically, I build the
              digital stage so your brand can finally perform.
            </p>
          </div>
        </div>

        <hr
          className="about-line"
          style={{
            width: '100%',
            height: '1px',
            background: 'rgba(255,255,255,0.18)',
            border: 'none',
            marginBottom: 'clamp(32px, 6dvh, 48px)',
            transform: 'scaleX(0)',
            transformOrigin: 'left',
          }}
        />

        <div
          className="grid grid-cols-3 gap-4 about-reveal"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          {stats.map((stat, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                className="font-display"
                style={{
                  fontSize: 'clamp(24px, 6vw, 56px)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  color: '#ffffff',
                }}
              >
                {stat.number}
              </span>
              <span
                className="font-mono"
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                }}
              >
                {stat.label.split(' ')[0]}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
