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

    console.log("GSAP selectors ready check:", {
      aboutSection: !!aboutSection,
      aboutContent: !!aboutContent,
      aboutRevealsCount: aboutReveals.length,
      aboutLine: !!aboutLine,
      fixedOverlay: !!fixedOverlay,
      darkOverlay: !!darkOverlay
    });

    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();

      // ─── Entry animations ───
      const words = headingRef.current?.querySelectorAll('.hero-word');
      gsap.fromTo(words,
        { y: 120, opacity: 0, rotateX: -40 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out', delay: 0.5 }
      );
      gsap.fromTo("#hero-ctas",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.2 }
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

      // ─── Master scrubbed timeline (pin = 450vh for slower, smoother transition) ───
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=180%',
          scrub: 1,            // smoother scrub damping
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
        // — 0.00: Hero text, CTAs, and info stats exit
        .fromTo(headingRef.current, { opacity: 1, y: 0 }, { opacity: 0, y: -50, duration: 0.25 }, 0)
        .fromTo("#hero-ctas",       { opacity: 1, y: 0 }, { opacity: 0, y: -30, duration: 0.25 }, 0)
        .fromTo(infoRef.current,    { opacity: 1, x: 0 }, { opacity: 0, x: 60, duration: 0.25 }, 0)

        // — 0.02: Card winks out; overlay appears pixel-perfect in its place
        .to(cardRef.current, { opacity: 0, duration: 0.08 }, 0.02)
        .to(fixedOverlay, { opacity: 1, duration: 0.08 }, 0.02)

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

        // — 0.60: Dark scrim fades in over image, and About content reveals concurrently
        .to(darkOverlay, {
          opacity: 1,
          duration: 0.20,
          ease: 'power2.inOut',
        }, 0.58)
        .to(aboutContent, {
          opacity: 1,
          y: 0,
          duration: 0.20,
          ease: 'power2.out',
        }, 0.60)
        .to(aboutReveals, {
          opacity: 1,
          y: 0,
          duration: 0.16,
          stagger: 0.03,
          ease: 'power2.out',
        }, 0.62)
        .to(aboutLine, {
          scaleX: 1,
          duration: 0.18,
          ease: 'power2.out',
        }, 0.70);

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
        <div className="flex-1 pt-4 lg:pt-12 relative z-10" ref={headingRef} style={{ perspective: '800px', zIndex: 60, position: 'relative' }}>
          <h1 className="hero-heading">
            {[
              { text: 'I build full-stack', italic: false },
              { text: 'products from', italic: false },
              { text: 'e-commerce to', italic: true },
              { text: 'interactive web', italic: false },
              { text: 'experiences.', italic: true },
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

          {/* CTAs */}
          <div
            id="hero-ctas"
            className="flex flex-wrap gap-4 mt-8 md:mt-12"
            style={{ opacity: 0, pointerEvents: 'auto' }}
          >
            <a
              href="#work"
              className="font-mono text-[11px] tracking-[0.15em] uppercase font-bold px-8 py-4 rounded-sm btn-primary"
              data-cursor-hover
            >
              View Work &rarr;
            </a>
            <a
              href="/Devang_Dhakate_Resume.pdf"
              download="Devang_Dhakate_Resume.pdf"
              className="font-mono text-[11px] tracking-[0.15em] uppercase font-bold px-8 py-4 rounded-sm btn-secondary"
              data-cursor-hover
            >
              Download Resume &darr;
            </a>
          </div>
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
            className="flex flex-col items-start lg:items-end gap-3 lg:text-right relative z-10"
            style={{ opacity: 0, minWidth: '200px', zIndex: 60, position: 'relative' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="status-dot" />
              <span className="font-mono text-[11px] tracking-[0.1em] uppercase">Available for work</span>
            </div>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--text-muted)]">Web Design</span>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--text-muted)]">Web Development</span>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--text-muted)]">3D &amp; Motion</span>
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
