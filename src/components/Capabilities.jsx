import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    number: '01',
    title: 'Frontend Development',
    description:
      'HTML, CSS, JavaScript, React — building fast, responsive interfaces that feel as good as they look. Performance-first, always.',
    image: '/images/capability-frontend.png',
  },
  {
    number: '02',
    title: 'Web Design',
    description:
      'Figma, Framer, layouts that guide users effortlessly. Every pixel placed with purpose, every interaction considered.',
    image: '/images/capability-webdesign.png',
  },
  {
    number: '03',
    title: 'Framer & No-Code',
    description:
      'Rapid builds in Framer, Webflow — pixel-perfect, no waiting. When speed matters without sacrificing quality.',
    image: '/images/capability-nocode.png',
  },
  {
    number: '04',
    title: 'Branding & Identity',
    description:
      'Logo systems, color palettes, design systems for small businesses. Building brands that feel intentional and memorable.',
    image: '/images/capability-branding.png',
  },
];

const Capabilities = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.cap-reveal').forEach((el) => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="capabilities" ref={sectionRef} className="section">
      <div className="container">
        {/* Section Label */}
        <div className="cap-reveal mb-4">
          <span className="section-label">( capabilities )</span>
        </div>

        {/* Section Heading */}
        <div className="cap-reveal mb-16">
          <h2 className="heading-lg">
            What I design,
            <br />
            build, and move.
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col">
          {capabilities.map((cap, i) => (
            <div key={i} className="cap-reveal">
              {/* Top divider */}
              <hr className="divider" />

              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full text-left py-8 flex items-start gap-6 lg:gap-10 bg-transparent border-none group"
                aria-expanded={openIndex === i}
                id={`capability-${cap.number}`}
              >
                {/* Decorative Number */}
                <span className="font-display text-[clamp(48px,6vw,96px)] font-bold leading-none opacity-[0.08] select-none shrink-0 -mt-2">
                  {cap.number}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="heading-md mb-0 group-hover:opacity-60 transition-opacity duration-300">
                    {cap.title}
                  </h3>

                  <div
                    className="capability-content"
                    style={{
                      maxHeight: openIndex === i ? '600px' : '0',
                    }}
                  >
                    <div className="pt-4 pb-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <p className="body-lg max-w-md">{cap.description}</p>
                      <div
                        className="overflow-hidden rounded"
                        style={{
                          maxWidth: '400px',
                          aspectRatio: '16/10',
                          backgroundColor: '#E8E4DD',
                        }}
                      >
                        <img
                          src={cap.image}
                          alt={cap.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Toggle Icon */}
                <span
                  className="font-display text-[24px] leading-none shrink-0 mt-2 transition-transform duration-300"
                  style={{
                    transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)',
                  }}
                >
                  +
                </span>
              </button>
            </div>
          ))}
          {/* Bottom divider */}
          <hr className="divider cap-reveal" />
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
