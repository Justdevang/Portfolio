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
  const floatTweenRef = useRef(null);
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

    // ─── CRITICAL: Select elements BEFORE entering gsap.context (scoped to #home) ───
    const aboutSection = document.getElementById('about');
    const aboutContent = document.querySelector('.about-overlay-content');
    const aboutReveals = gsap.utils.toArray('.about-reveal');
    const aboutLine = document.querySelector('.about-line');
    const fixedOverlay = document.getElementById('hero-fixed-overlay');
    const darkOverlay = fixedOverlay?.querySelector('.hero-bg-dark-overlay');

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

      // ─── Idle float — stored so we can kill it precisely before scroll takes over ───
      floatTweenRef.current = gsap.to(cardRef.current, {
        y: -18,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // ─── Sync fixed overlay to card — reads layout ONCE, no jank ───
      const syncOverlayToCard = () => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect || !fixedOverlay) return;
        // Reset any GSAP-applied y from the float before reading rect
        gsap.set(fixedOverlay, {
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height,
          borderRadius: 20,
          scale: 1,
          opacity: 0,
        });
      };
      syncOverlayToCard();

      // ─── Master scrubbed timeline (pin = 200vh) ───
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 0.6,          // tighter scrub = no lag between scroll and image
          pin: true,
          anticipatePin: 1,
          onEnter: () => {
            // Kill idle float the instant scroll begins — prevents competing tweens
            floatTweenRef.current?.kill();
            gsap.set(cardRef.current, { y: 0 }); // snap to neutral
            syncOverlayToCard();
          },
          onLeaveBack: () => {
            // Restore float when scrolling back to top
            gsap.set(cardRef.current, { y: 0 });
            floatTweenRef.current = gsap.to(cardRef.current, {
              y: -18,
              duration: 3,
              ease: 'sine.inOut',
              repeat: -1,
              yoyo: true,
            });
          },
        },
      });

      tl
        // — 0.00: Hero text exits
        .to(headingRef.current, { opacity: 0, y: -50, duration: 0.25 }, 0)
        .to(infoRef.current,    { opacity: 0, x: 60, duration: 0.25 }, 0)

        // — 0.02: Card winks out; overlay appears pixel-perfect in its place
        .to(cardRef.current, { opacity: 0, duration: 0.08 }, 0.02)
        .to(fixedOverlay,    { opacity: 1, duration: 0.08 }, 0.02)

        // — 0.08: Portal burst — scale up from center with expo ease, no border-radius yet
        .to(fixedOverlay, {
          scale: 1.06,
          duration: 0.08,
          ease: 'expo.out',
        }, 0.08)

        // — 0.14: Expand to full screen, collapse border-radius, scale snaps back
        .to(fixedOverlay, {
          x: 0, y: 0,
          width: '100vw', height: '100vh',
          borderRadius: 0,
          scale: 1,
          duration: 0.42,
          ease: 'expo.inOut',
        }, 0.14)

        // — 0.60: Dark scrim fades in over image
        .to(darkOverlay, {
          opacity: 1,
          duration: 0.22,
          ease: 'power2.inOut',
        }, 0.58)

        // — 0.78: About content reveals
        .to(aboutContent, {
          opacity: 1,
          y: 0,
          duration: 0.22,
          ease: 'power2.out',
        }, 0.76)
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

      // ─── Retire overlay once About scrolls past ───
      ScrollTrigger.create({
        trigger: aboutSection,
        start: 'bottom bottom',
        onEnter: () => {
          gsap.to(fixedOverlay, { opacity: 0, duration: 0.7, ease: 'power2.inOut' });
          gsap.to(darkOverlay, { opacity: 0, duration: 0.4 });
        },
        onLeaveBack: () => {
          gsap.to(fixedOverlay, { opacity: 1, duration: 0.4 });
          gsap.to(darkOverlay, { opacity: 1, duration: 0.3 });
        },
      });

    }, sectionRef);

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
                fetchpriority="high"
                decoding="async"
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
        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)]">{timeCode}</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--text-muted)' }}>
          <path d="M8 4 L8 20 M3 15 L8 20 L13 15" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
