import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ isReady }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const infoRef = useRef(null);
  const scrollRef = useRef(null);
  const cardRef = useRef(null);
  const fixedOverlayRef = useRef(null);
  const [timeCode, setTimeCode] = useState('00:00:00:00');

  useEffect(() => {
    if (!isReady) return;

    const startTime = Date.now();
    const timerInterval = setInterval(() => {
      const now = Date.now();
      const diff = now - startTime;
      const ms = Math.floor((diff % 1000) / 10);
      const s = Math.floor((diff / 1000) % 60);
      const m = Math.floor((diff / 60000) % 60);
      const h = Math.floor((diff / 3600000) % 24);
      setTimeCode(
        `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`
      );
    }, 40);

    // ─── CRITICAL: Select About elements BEFORE entering gsap.context ───
    // gsap.context(fn, scopeEl) scopes ALL selectors inside fn to scopeEl.
    // Since About elements live outside sectionRef (the Hero), any
    // document.querySelectorAll('.about-reveal') inside the context would
    // silently return nothing. We grab them here, in global scope.
    const aboutContent = document.querySelector('.about-overlay-content');
    const aboutReveals = gsap.utils.toArray('.about-reveal');
    const aboutLine = document.querySelector('.about-line');

    // These are already hidden via inline style in About.jsx (opacity:0, translateY:60px).
    // No gsap.set() needed — the DOM itself is the source of truth for initial state.

    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();

      // ─── Entry animations ───
      const words = headingRef.current?.querySelectorAll('.hero-word');
      gsap.fromTo(words,
        { y: 120, opacity: 0, rotateX: -40 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out', delay: 0.5 }
      );
      gsap.fromTo(infoRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 1.4 }
      );
      gsap.fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 2.2 });
      gsap.to(scrollRef.current, {
        opacity: 0,
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: '+=150', scrub: true },
      });

      // ─── Sync fixed overlay to card position ───
      const syncOverlayToCard = () => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect || !fixedOverlayRef.current) return;
        gsap.set(fixedOverlayRef.current, {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          borderRadius: 20,
          opacity: 0,
        });
      };
      syncOverlayToCard();

      // ─── Master scrubbed timeline (pin = 200vh) ───
      //
      // Progress map:
      //   0.00 → 0.20  Hero text/info exits, card fades out
      //   0.05 → 0.15  Fixed overlay fades in (seamless card→overlay swap)
      //   0.10 → 0.60  Overlay expands card rect → 100vw/100vh
      //   0.60 → 0.78  Dark scrim fades in
      //   0.78 → 1.00  About content reveals staggered
      //
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (self.progress < 0.01) syncOverlayToCard();
          },
        },
      });

      tl
        // Hero exits
        .to(headingRef.current, { opacity: 0, y: -60, duration: 0.3 }, 0)
        .to(infoRef.current, { opacity: 0, x: 80, duration: 0.3 }, 0)
        .to(cardRef.current, { opacity: 0, duration: 0.15 }, 0)

        // Fixed overlay swap
        .to(fixedOverlayRef.current, { opacity: 1, duration: 0.15 }, 0.05)
        .to(fixedOverlayRef.current, {
          top: 0, left: 0,
          width: '100vw', height: '100vh',
          borderRadius: 0,
          duration: 0.5,
          ease: 'power2.inOut',
        }, 0.1)

        // Dark scrim
        .to('.hero-bg-dark-overlay', {
          opacity: 1,
          duration: 0.25,
          ease: 'power2.inOut',
        }, 0.60)

        // ── About reveals (using pre-grabbed DOM refs, NOT string selectors) ──
        // aboutContent, aboutReveals, aboutLine were captured above the context
        // so they correctly reference the About section's DOM elements.
        .to(aboutContent, {
          opacity: 1,
          y: 0,
          duration: 0.22,
          ease: 'power2.out',
        }, 0.78)
        .to(aboutReveals, {
          opacity: 1,
          y: 0,
          duration: 0.18,
          stagger: 0.04,
          ease: 'power2.out',
        }, 0.80)
        .to(aboutLine, {
          scaleX: 1,
          duration: 0.2,
          ease: 'power2.out',
        }, 0.88);

      // ─── Phase 4: Retire overlay once About scrolls past ───
      ScrollTrigger.create({
        trigger: '#about',
        start: 'bottom bottom',
        onEnter: () => {
          gsap.to(fixedOverlayRef.current, { opacity: 0, duration: 0.7, ease: 'power2.inOut' });
          gsap.to('.hero-bg-dark-overlay', { opacity: 0, duration: 0.4 });
        },
        onLeaveBack: () => {
          gsap.to(fixedOverlayRef.current, { opacity: 1, duration: 0.4 });
          gsap.to('.hero-bg-dark-overlay', { opacity: 1, duration: 0.3 });
        },
      });

      // Idle float on card
      gsap.to(cardRef.current, {
        y: -20,
        duration: 3,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });

    }, sectionRef); // <-- context scoped to Hero only

    return () => {
      ctx.revert();
      clearInterval(timerInterval);
    };
  }, [isReady]);

  const handleTilt = (e) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    gsap.to(cardRef.current, { rotateY: x * 30 - 15, rotateX: -y * 30 + 8, duration: 0.5, ease: 'power2.out' });
  };

  const handleTiltReset = () => {
    gsap.to(cardRef.current, { rotateY: -15, rotateX: 8, duration: 0.8, ease: 'power2.out' });
  };

  return (
    <section id="home" ref={sectionRef} className="relative flex flex-col">

      {/* Fixed fullscreen overlay */}
      <div
        ref={fixedOverlayRef}
        style={{
          position: 'fixed',
          overflow: 'hidden',
          zIndex: 50,
          pointerEvents: 'none',
          opacity: 0,
          willChange: 'top, left, width, height, border-radius, opacity',
        }}
      >
        <img
          src="/images/Untitled (15).png"
          alt="Digital Experience"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
        />
        <div
          className="hero-bg-dark-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.52)',
            opacity: 0,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Hero layout */}
      <div
        className="container flex-1 flex flex-col lg:flex-row items-start justify-between gap-8"
        style={{ minHeight: '85vh', paddingTop: '50px' }}
      >
        <div className="flex-1 pt-4 lg:pt-12" ref={headingRef} style={{ perspective: '800px' }}>
          <h1 className="hero-heading">
            {[
              { text: 'I build digital', italic: false },
              { text: 'experiences with', italic: false },
              { text: 'structure and', italic: false },
              { text: 'intention.', italic: true },
              { text: 'Then I make', italic: false },
              { text: 'them move.', italic: true },
            ].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <span
                  className={`hero-word inline-block ${line.italic ? 'hero-italic' : ''}`}
                  style={{ display: 'inline-block', opacity: 0 }}
                >
                  {line.text}
                </span>
              </span>
            ))}
          </h1>
        </div>

        <div className="flex-1 flex flex-col items-center lg:items-end justify-center gap-12 lg:pt-12">
          <div
            className="hero-3d-container"
            style={{ perspective: '1200px' }}
            onMouseMove={handleTilt}
            onMouseLeave={handleTiltReset}
          >
            <div className="hero-3d-card" ref={cardRef}>
              <img
                src="/images/Untitled (15).png"
                alt="Digital Experience"
                className="hero-3d-image"
              />
              <div className="hero-3d-glow" />
            </div>
          </div>

          <div
            ref={infoRef}
            className="flex flex-col items-start lg:items-end gap-3 lg:text-right"
            style={{ opacity: 0, minWidth: '200px' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="status-dot" />
              <span className="font-mono text-[11px] tracking-[0.1em] uppercase">Available for work</span>
            </div>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--text-muted)]">Web Design</span>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--text-muted)]">Web Development</span>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--text-muted)]">Based in Pune, India.</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="flex flex-col items-center gap-2 scroll-indicator py-6" style={{ opacity: 0 }}>
        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)]">Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--text-muted)' }}>
          <path d="M8 4 L8 20 M3 15 L8 20 L13 15" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
