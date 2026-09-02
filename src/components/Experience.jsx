import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'Morivaná Daily',
    period: 'Freelance',
    description:
      'Built the premium e-commerce platform end-to-end. Engineered storefront, Clerk authentication, dual-gateway payments (Razorpay/Stripe), automated Delhivery logistics API, admin console, and implemented high-security server configurations (Helmet, CSP headers, rate-limiting) and Meta Pixel/CAPI tracking.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Soundabode',
    period: 'Freelance',
    description:
      'Designed and built a custom Three.js scrollytelling web experience with immersive, scroll-driven animations. Handled secure Cloudflare migration, resolved post-migration content security policy (CSP) issues, and executed a localized SEO/AEO/GEO strategy.',
  },
  {
    role: 'Customer Service Associate L2',
    company: 'Amazon',
    period: 'Sep 25 - Apr 26',
    description:
      'Operate within a high-scale, process-driven enterprise environment. Resolve critical escalations, manage queue workloads under strict SLAs, and coordinate cross-department workflows. This role funds my independent development runway while sharpening core operational habits: extreme ownership under pressure, structured communication, and high attention to detail.',
  },
];

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.exp-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          }
        );
      });

      // Animate dividers
      gsap.utils.toArray('.exp-line').forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section">
      <div className="container">
        {/* Section Label */}
        <div className="exp-reveal mb-4">
          <span className="section-label">( background & experience )</span>
        </div>

        {/* Section Heading */}
        <div className="exp-reveal mb-12">
          <h2 className="heading-lg">
            Career timeline
            <br />
            and active studies.
          </h2>
        </div>

        {/* Experience List */}
        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <div key={i} className="exp-reveal flex flex-col">
              <hr className="exp-line divider" style={{ transformOrigin: 'left' }} />

              <div className="grid grid-cols-1 lg:grid-cols-12 py-8 lg:py-10 gap-6 transition-all duration-300 hover:bg-black/[0.01] px-2 rounded-sm">
                {/* Period */}
                <div className="lg:col-span-3">
                  <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--text-muted)]">
                    {exp.period}
                  </span>
                </div>

                {/* Role & Company */}
                <div className="lg:col-span-4">
                  <h3 className="font-display text-[clamp(20px,2vw,28px)] font-bold tracking-tight leading-tight">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--text-muted)] mt-1 block">
                    {exp.company}
                  </span>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="body-lg leading-relaxed text-[var(--text-muted)]">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <hr className="exp-line divider exp-reveal" style={{ transformOrigin: 'left' }} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
