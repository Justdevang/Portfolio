import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: '01',
    name: 'Morivaná Daily',
    url: 'https://morivanadaily.com',
    repoUrl: '', // Private D2C brand
    image: '/images/morivana_work.jpeg',
    alt: 'Morivaná Daily premium organic super-greens e-commerce storefront landing page',
    problem: 'An e-commerce wellness brand needed a secure production platform (storefront, authentication, dual-gateway payments, and logistics automation) built from the ground up to serve customers globally.',
    whatIBuilt: 'Built a full MERN stack storefront. Integrated Clerk for passwordless authentication, Razorpay for domestic (India) checkouts, and Stripe for international transactions. Automated order fulfillment via the Delhivery API, set up an inventory admin dashboard, and hardened the Express backend using Helmet, strict CSP headers, and rate-limiting. Implemented Meta Pixel and Conversions API (CAPI) for privacy-compliant ad attribution.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Clerk Auth', 'Razorpay', 'Stripe', 'Delhivery API', 'Cloudflare Pages', 'Meta Pixel/CAPI'],
    outcome: 'Successfully launched and currently serving active customers across India and Canada with automated payment routing and logistics label generation.',
  },
  {
    number: '02',
    name: 'Soundabode',
    url: 'https://soundabode.com',
    repoUrl: '', // Private client project
    image: '/images/soundabode-hover-image.png',
    alt: 'Soundabode Pune DJ academy interactive scrollytelling web experience',
    problem: 'A local music academy wanted an immersive, interactive digital presence that matched the brand identity of DJing and music production, avoiding boilerplate templates.',
    whatIBuilt: 'Created a high-fidelity scrollytelling experience using React, Three.js, and GSAP ScrollTrigger for smooth, performance-optimized scroll animations. Handled server migration to Cloudflare Pages, resolved complex post-migration CSP errors, and executed local SEO/AEO/GEO optimization to secure local search authority.',
    stack: ['React', 'Three.js', 'GSAP', 'Lenis Scroll', 'Cloudflare Pages', 'Meta Pixel/CAPI'],
    outcome: 'Live site powering the academy\'s marketing, resulting in active local search leads and user engagement.',
  },
  {
    number: '03',
    name: 'Roadmaptic',
    url: 'https://roadmaptic.qzz.io',
    repoUrl: '', // Closed source
    image: '/images/roadmaptic_works.jpeg',
    alt: 'Roadmaptic AI curriculum and roadmap generator user dashboard',
    problem: 'Self-directed learners frequently struggle with "tutorial hell," consuming unstructured learning materials without a clear progression path.',
    whatIBuilt: 'Developed an AI product that parses a user\'s target role, current skills, and weekly commitment to generate a custom 12-week week-by-week learning roadmap. Curated a registry of high-quality free tutorials (FreeCodeCamp, YouTube, documentation) to inject instead of raw search links. Set up automated email delivery and an SEO-friendly blog/glossary directory.',
    stack: ['React', 'Vite', 'Node.js', 'OpenAI API', 'Tailwind CSS', 'EmailJS'],
    outcome: 'Active production deployment generating custom structured curricula for learners without requiring sign-up barriers.',
  },
  {
    number: '04',
    name: 'Gyroscope Fruit Ninja',
    url: '#',
    repoUrl: 'https://github.com/Justdevang/Gyroscope-Controlled-Fruit-Ninja',
    image: '/images/Gyro_fruitninja_work.jpeg',
    alt: 'Gyroscope-controlled Fruit Ninja browser game interaction model',
    problem: 'Exploring device interaction paradigms by creating a real-time web game controlled entirely by a smartphone\'s physical movement, with no touch or keyboard inputs.',
    whatIBuilt: 'Built a browser game using Three.js and Socket.IO. Streams phone gyroscope data (DeviceOrientation API) to a node backend in real-time, mapping quaternion sensor orientation to the slicing blade. Handled complex edge cases including sensor calibration drift and iOS Safari motion-permission requests.',
    stack: ['Three.js', 'Socket.IO', 'WebSockets', 'Node.js', 'Express', 'DeviceOrientation API'],
    outcome: 'Working cross-device real-time motion control proof-of-concept with ultra-low latency (<20ms local streaming).',
  },
  {
    number: '05',
    name: 'Desktop Pet (macOS)',
    url: '#',
    repoUrl: 'https://github.com/Justdevang/mac-desktop-pet',
    image: '/images/desktop-pet-hover-image.png',
    alt: 'SwiftUI macOS desktop pet orange cat companion application',
    problem: 'Wanted to build a native macOS utility companion with real character personality that sits directly on the user\'s desktop, bypassing static app structures.',
    whatIBuilt: 'Created a SwiftUI and AppKit utility application. Modeled and rigged a low-poly character based on my own cat in Blender, exported it to native macOS layouts, and configured borderless, transparent overlay window layering to let the character walk on top of active system windows.',
    stack: ['SwiftUI', 'AppKit', 'Blender', 'macOS SDK'],
    outcome: 'Fully functional desktop application featuring custom-rigged 3D animated companion.',
  },
];

const SelectedWork = () => {
  const [hoveredIdx, setHoveredIdx] = useState(-1);
  const [expandedIdx, setExpandedIdx] = useState(-1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.work-reveal').forEach((el) => {
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

      // Animate divider lines
      gsap.utils.toArray('.work-line').forEach((el) => {
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

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const toggleExpand = (idx) => {
    setExpandedIdx(expandedIdx === idx ? -1 : idx);
    // Give lenis a scroll trigger refresh call after accordion resize animation completes
    setTimeout(() => {
      ScrollTrigger.refresh();
      if (window.lenis) {
        window.lenis.resize();
      }
    }, 550);
  };

  return (
    <section id="work" ref={sectionRef} className="section" onMouseMove={handleMouseMove}>
      <div className="container">
        {/* Section Label */}
        <div className="work-reveal mb-4">
          <span className="section-label">( case studies )</span>
        </div>

        {/* Section Heading */}
        <div className="work-reveal mb-4">
          <h2 className="heading-lg">
            Selected
            <br />
            <em className="not-italic" style={{ fontStyle: 'italic' }}>work.</em>
          </h2>
        </div>

        {/* Sub-tag */}
        <div className="work-reveal mb-16">
          <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--text-muted)]">
            Click on any project to read the full case study · ©2025–26
          </span>
        </div>

        {/* Project List */}
        <div className="flex flex-col">
          {projects.map((project, i) => {
            const isExpanded = expandedIdx === i;
            return (
              <div key={i}>
                <hr
                  className="work-line divider"
                  style={{ transformOrigin: 'left' }}
                />

                {/* Accordion Trigger Row */}
                <button
                  onClick={() => toggleExpand(i)}
                  className="w-full text-left project-row py-6 lg:py-8 flex items-center gap-6 lg:gap-10 transition-opacity duration-300 bg-transparent border-none focus:outline-none"
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(-1)}
                  style={{
                    opacity: hoveredIdx !== -1 && hoveredIdx !== i ? 0.35 : 1,
                    cursor: 'none'
                  }}
                  data-cursor-hover
                  aria-expanded={isExpanded}
                >
                  {/* Number */}
                  <span className="font-display text-[clamp(14px,1.5vw,18px)] font-medium text-[var(--text-muted)] shrink-0 w-8">
                    {project.number}
                  </span>

                  {/* Project Name */}
                  <h3 className="font-display text-[clamp(24px,3.5vw,48px)] font-bold tracking-[-0.02em] leading-none flex-1">
                    {project.name}
                  </h3>

                  {/* Toggle Indicator */}
                  <span className="font-display text-[24px] shrink-0 opacity-40 transition-transform duration-500" style={{
                    transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)'
                  }}>
                    +
                  </span>
                </button>

                {/* Case Study Content Drawer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1400px] opacity-100 pb-12 pt-2' : 'max-h-0 opacity-0'}`}
                  style={{ borderBottom: isExpanded ? 'none' : 'none' }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pl-8 lg:pl-12">
                    {/* Left Column: Case Study Details */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                      <div>
                        <h4 className="font-mono text-[10px] tracking-[0.1em] uppercase text-[var(--text-muted)] mb-1">
                          Problem / Context
                        </h4>
                        <p className="body-lg text-[var(--text)] leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-mono text-[10px] tracking-[0.1em] uppercase text-[var(--text-muted)] mb-1">
                          What I Built & Decisions Made
                        </h4>
                        <p className="body-lg text-[var(--text)] leading-relaxed">
                          {project.whatIBuilt}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-mono text-[10px] tracking-[0.1em] uppercase text-[var(--text-muted)] mb-1">
                          Outcome / Metric
                        </h4>
                        <p className="body-lg text-[var(--text)] leading-relaxed">
                          {project.outcome}
                        </p>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-4 mt-2">
                        {project.url !== '#' && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[11px] tracking-[0.1em] uppercase font-bold px-5 py-3 rounded-sm btn-primary"
                            data-cursor-hover
                          >
                            Live Site &rarr;
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[11px] tracking-[0.1em] uppercase font-bold px-5 py-3 rounded-sm btn-secondary"
                            data-cursor-hover
                          >
                            GitHub Repo &rarr;
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Stack & Thumbnail */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                      <div>
                        <h4 className="font-mono text-[10px] tracking-[0.1em] uppercase text-[var(--text-muted)] mb-3">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech, j) => (
                            <span
                              key={j}
                              className="font-mono text-[10px] tracking-[0.05em] bg-black/[0.04] px-3 py-1.5 rounded-sm text-[var(--text-muted)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="overflow-hidden rounded-sm border border-black/5 aspect-[4/3] bg-black/[0.01]">
                        <img
                          src={project.image}
                          alt={project.alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            e.target.style.opacity = '0.3';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <hr
            className="work-line divider"
            style={{ transformOrigin: 'left' }}
          />
        </div>
      </div>

      {/* Hover Preview Image */}
      {hoveredIdx >= 0 && projects[hoveredIdx]?.image && (
        <img
          ref={imgRef}
          src={projects[hoveredIdx].image}
          alt=""
          className={`project-hover-img ${hoveredIdx >= 0 ? 'visible' : ''}`}
          style={{
            transform: `translate(${mousePos.x + 30}px, ${mousePos.y}px) translateY(-50%) scale(${hoveredIdx >= 0 ? 1 : 0.95})`,
          }}
          onError={(e) => {
            e.target.style.opacity = '0';
          }}
        />
      )}
    </section>
  );
};

export default SelectedWork;
