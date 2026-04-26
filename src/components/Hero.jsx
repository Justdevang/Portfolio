import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ isReady }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const infoRef = useRef(null);
  const reelSectionRef = useRef(null);
  const scrollRef = useRef(null);
  const cardRef = useRef(null);
  const nexusGridRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timeCode, setTimeCode] = useState('00:00:00:00');

  useEffect(() => {
    if (!isReady) return;

    // Live Timecode Simulation
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

    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();

      // Stagger headline words
      const words = headingRef.current?.querySelectorAll('.hero-word');
      gsap.fromTo(
        words,
        { y: 120, opacity: 0, rotateX: -40 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power4.out',
          delay: 0.5,
        }
      );

      // Info block
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 1.4 }
      );

      // Scroll indicator
      gsap.fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 2.2 }
      );

      // Fade out scroll indicator on scroll
      gsap.to(scrollRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=150',
          scrub: true,
        },
      });

      // ─── Nexus Grid Reveal ───
      gsap.fromTo(
        nexusGridRef.current,
        {
          rotateX: 40,
          rotateZ: -10,
          scale: 0.8,
          opacity: 0,
          translateY: 100
        },
        {
          rotateX: 20,
          rotateZ: -5,
          scale: 1,
          opacity: 1,
          translateY: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: reelSectionRef.current,
            start: 'top 85%',
            end: 'top 30%',
            scrub: 1,
          },
        }
      );

      // Floating animation for 3D Card
      gsap.to(cardRef.current, {
        y: -20,
        duration: 3,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      clearInterval(timerInterval);
    };
  }, [isReady]);

  // Magnetic Button Effect
  const handleMagneticMove = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.4,
      y: y * 0.4,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMagneticReset = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  const handleTilt = (e) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();

    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    gsap.to(cardRef.current, {
      rotateY: x * 30 - 15,
      rotateX: -y * 30 + 8,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleTiltReset = () => {
    gsap.to(cardRef.current, {
      rotateY: -15,
      rotateX: 8,
      duration: 0.8,
      ease: 'power2.out',
    });
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex flex-col"
    >
      {/* Top Area: Headline + Info */}
      <div
        className="container flex-1 flex flex-col lg:flex-row items-start justify-between gap-8"
        style={{ minHeight: '85vh', paddingTop: '50px' }}
      >
        {/* Main Headline */}
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

        {/* Right Area: 3D Image + Info Block */}
        <div className="flex-1 flex flex-col items-center lg:items-end justify-center gap-12 lg:pt-12">
          {/* 3D Floating Image */}
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
              {/* Decorative elements for 3D depth */}
              <div className="hero-3d-glow" />
            </div>
          </div>

          {/* Right Info Block */}
          <div
            ref={infoRef}
            className="flex flex-col items-start lg:items-end gap-3 lg:text-right"
            style={{ opacity: 0, minWidth: '200px' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="status-dot" />
              <span className="font-mono text-[11px] tracking-[0.1em] uppercase">
                Available for work
              </span>
            </div>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--text-muted)]">
              Web Design
            </span>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--text-muted)]">
              Web Development
            </span>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--text-muted)]">
              Based in Pune, India.
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="flex flex-col items-center gap-2 scroll-indicator py-6"
        style={{ opacity: 0 }}
      >
        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)]">
          Scroll
        </span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={{ color: 'var(--text-muted)' }}
        >
          <path d="M8 4 L8 20 M3 15 L8 20 L13 15" />
        </svg>
      </div>

      {/* ── Futuristic Showreel: The Nexus Carousel ── */}
      <div ref={reelSectionRef} className="nexus-section">
        {/* Smoke Animation Background */}
        <div className="smoke-container">
          <div className="smoke-particle p1" />
          <div className="smoke-particle p2" />
          <div className="smoke-particle p3" />
        </div>

        <div className="nexus-container">
          <div className="nexus-grid" ref={nexusGridRef}>
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className={`nexus-card card-${id}`}>
                <div className="nexus-card-inner">
                  {/* Holographic Overlay */}
                  <div className="nexus-hologram" />

                  {/* Video Content */}
                  <video
                    src="/showreel.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="nexus-video"
                    style={{ filter: `hue-rotate(${id * 45}deg)` }}
                  />

                  {/* UI Elements */}
                  <div className="nexus-ui">
                    <div className="nexus-ui-top">
                      <span className="font-mono text-[9px]">PROJECT_DATA_{id}</span>
                      <div className="nexus-ui-dot" />
                    </div>
                    <div className="nexus-ui-bottom">
                      <span className="nexus-ui-title">MODULE 0{id}</span>
                      <div className="nexus-ui-bar" />
                    </div>
                  </div>

                  {/* Scanner Line */}
                  <div className="nexus-scanner" />
                </div>
              </div>
            ))}
          </div>

          {/* Center Info / Control */}
          <div className="nexus-center">
            <div className="nexus-center-ring" />
            <div className="flex flex-col items-center gap-2">
              <span className="nexus-label">Nexus Reel</span>
              <span className="font-mono text-[10px] text-white/40 tracking-[0.3em] uppercase">
                Interactive Multi-view
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
