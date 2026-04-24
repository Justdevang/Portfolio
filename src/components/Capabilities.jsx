import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    number: '01',
    title: 'Frontend Development',
    description: 'I build fast, responsive, and visually engaging user interfaces using HTML, CSS, JavaScript, React, and modern frameworks. Every interface is optimized for performance, usability, and seamless interaction across all devices.',
    image: '/images/capabilities-frontend.png',
  },
  {
    number: '02',
    title: 'Web Design',
    description:
      'I design clean, modern, and conversion-focused websites using tools like Figma and Framer, ensuring a smooth user experience and visually appealing layouts that turn visitors into customers.',
    image: '/images/capability-webdesign.png',
  },
  {
    number: '03',
    title: 'Web Apps',
    description:
      'I develop custom web applications using React, Node.js, APIs, and databases, building scalable dashboards, tools, and systems that streamline workflows and support business growth.',
    image: '/images/capabilities-webapp.png',
  },
  {
    number: '04',
    title: 'AI Automations',
    description:
      'I create intelligent automation systems using n8n, APIs, webhooks, and AI tools like OpenAI, helping businesses automate repetitive tasks, generate leads, and operate more efficiently.',
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

              <div className="relative">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full text-left py-6 lg:py-8 flex items-center gap-6 lg:gap-10 bg-transparent border-none group"
                  aria-expanded={openIndex === i}
                  id={`capability-${cap.number}`}
                >
                  {/* Decorative Number */}
                  <span className="font-display text-[clamp(40px,5vw,72px)] font-bold leading-none opacity-[0.08] select-none shrink-0">
                    {cap.number}
                  </span>

                  {/* Title */}
                  <h3 className="heading-md mb-0 flex-1 group-hover:opacity-60 transition-opacity duration-300">
                    {cap.title}
                  </h3>

                  {/* Toggle Icon */}
                  <span
                    className="font-display text-[20px] leading-none shrink-0 transition-transform duration-300"
                    style={{
                      transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)',
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Collapsible Content (Now outside button) */}
                <div
                  className={`capability-content ${openIndex === i ? 'open' : ''}`}
                >
                  <div className="pb-8 lg:pb-12 pl-[clamp(64px,8vw,112px)]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                      <p className="body-lg max-w-md">{cap.description}</p>
                      <div
                        className="overflow-hidden rounded-sm border border-black/5"
                        style={{
                          maxWidth: '600px',
                        }}
                      >
                        <img
                          src={cap.image}
                          alt={cap.title}
                          className="w-full h-auto block"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
