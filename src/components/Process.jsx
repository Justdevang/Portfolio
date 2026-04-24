import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'A focused session to understand your vision, goals, and what kind of digital presence you need.',
    duration: '30 mins',
  },
  {
    number: '02',
    title: 'Proposal & Direction',
    description:
      'I define the visual direction, scope, and timeline. You get a clear picture before any work begins.',
    duration: '3–5 days',
  },
  {
    number: '03',
    title: 'Design & Build',
    description:
      'Where the magic happens. Bold layouts, smooth motion, and clean code — built to impress.',
    duration: '2–4 weeks',
  },
  {
    number: '04',
    title: 'Launch & Deliver',
    description:
      'Final polish, testing, and handoff. Your project goes live, ready to perform.',
    duration: '1 week',
  },
];

const Process = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.process-reveal').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            delay: i * 0.1,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="section">
      <div className="container">
        {/* Section Label */}
        <div className="process-reveal mb-4">
          <span className="section-label">( our process )</span>
        </div>

        {/* Section Heading */}
        <div className="process-reveal mb-16 lg:mb-24">
          <h2 className="heading-lg" style={{ maxWidth: '800px' }}>
            How I turn your
            <br />
            &ldquo;I&rsquo;m not sure&rdquo; into
            <br />
            &ldquo;I love it&rdquo;
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={i}
              className="process-reveal relative flex flex-col gap-4 py-8 lg:py-0 lg:pr-8"
              style={{
                borderTop: '1px solid var(--border)',
                paddingTop: '32px',
              }}
            >
              {/* Number */}
              <span className="font-display text-[48px] font-bold leading-none opacity-[0.08]">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="font-display text-[20px] font-bold tracking-[-0.01em]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="body-lg text-[14px] leading-relaxed">
                {step.description}
              </p>

              {/* Duration Pill */}
              <div className="mt-auto pt-4">
                <span className="duration-pill">{step.duration}</span>
              </div>

              {/* Connector arrow (not on last) */}
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-8 -right-3 text-[var(--text-muted)] text-[16px]">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
