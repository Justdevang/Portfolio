import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ isReady }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const infoRef = useRef(null);
  const reelSectionRef = useRef(null);
  const reelContainerRef = useRef(null);
  const videoRef = useRef(null);
  const scrollRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isReady) return;

    const ctx = gsap.context(() => {
      // Refresh ScrollTrigger to ensure positions are correct after loader exit
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
          delay: 0.5, // Small extra delay for smoother entry
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

      // ─── Showreel: clip-path reveal ───
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        gsap.fromTo(
          reelContainerRef.current,
          {
            clipPath: 'inset(25% 30% 25% 30% round 12px)',
          },
          {
            clipPath: 'inset(0% 0% 0% 0% round 0px)',
            ease: 'none',
            scrollTrigger: {
              trigger: reelSectionRef.current,
              start: 'top 80%',
              end: 'top 10%',
              scrub: 0.3,
            },
          }
        );
      });

      mm.add('(max-width: 767px)', () => {
        gsap.fromTo(
          reelContainerRef.current,
          {
            clipPath: 'inset(15% 10% 15% 10% round 8px)',
          },
          {
            clipPath: 'inset(0% 0% 0% 0% round 0px)',
            ease: 'none',
            scrollTrigger: {
              trigger: reelSectionRef.current,
              start: 'top 85%',
              end: 'top 30%',
              scrub: 0.3,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isReady]);

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

        {/* Right Info Block */}
        <div
          ref={infoRef}
          className="flex flex-col items-start lg:items-end gap-3 lg:pt-20 lg:text-right"
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

      {/* Showreel — clip-path reveal */}
      <div ref={reelSectionRef} className="reel-section">
        <div ref={reelContainerRef} className="reel-container">
          <video
            ref={videoRef}
            src="/showreel.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="reel-video"
          />
          {/* Overlay controls */}
          <div className="reel-overlay">
            <button
              className="reel-play-btn"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause showreel' : 'Play showreel'}
            >
              {isPlaying ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                  <rect x="4" y="3" width="4" height="14" rx="1" />
                  <rect x="12" y="3" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                  <path d="M5 3 L17 10 L5 17Z" />
                </svg>
              )}
            </button>
            <span className="reel-label">Showreel</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
