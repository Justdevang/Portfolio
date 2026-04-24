import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.about-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Animate the divider line
      gsap.fromTo(
        '.about-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-line',
            start: 'top 90%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '3+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" ref={sectionRef} className="section">
      <div className="container">
        {/* Section Label */}
        <div className="about-reveal mb-12">
          <span className="section-label">( about me )</span>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          {/* Left Tag */}
          <div className="lg:col-span-4 about-reveal">
            <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--text-muted)] leading-relaxed">
              The Solo Developer ·<br />
              Working Globally ·<br />
              Based in Pune.
            </p>
          </div>

          {/* Right Paragraph */}
          <div className="lg:col-span-8 about-reveal">
            <p className="text-[clamp(20px,2.5vw,32px)] font-display font-medium leading-[1.4] tracking-[-0.01em]">
              I build websites (mostly) and brand identities (definitely).
              I spend 70% of my time perfecting layouts and the other 30%
              making sure they move like a dream. Basically, I build the
              digital stage so your brand can finally perform.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr
          className="about-line divider mb-12"
          style={{ transformOrigin: 'left' }}
        />

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 about-reveal">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="font-display text-[clamp(36px,4vw,56px)] font-bold tracking-[-0.03em] leading-none">
                {stat.number}
              </span>
              <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--text-muted)]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
