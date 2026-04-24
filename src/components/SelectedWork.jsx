import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: '01',
    name: 'Learnpath',
    tags: ['PRODUCT DESIGN', 'WEB DEVELOPMENT'],
    image: '/Learnpath.png',
  },
  {
    number: '02',
    name: 'Soundabode',
    tags: ['BRANDING', 'WEB DEVELOPMENT'],
    image: '/project-soundabode.png',
  },
  {
    number: '03',
    name: 'Avira OS',
    tags: ['AUTOMATION', 'WEB APP'],
    image: '/project-soundabode.png',
  },
];

const SelectedWork = () => {
  const [hoveredIdx, setHoveredIdx] = useState(-1);
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

  return (
    <section id="work" ref={sectionRef} className="section" onMouseMove={handleMouseMove}>
      <div className="container">
        {/* Section Label */}
        <div className="work-reveal mb-4">
          <span className="section-label">( in the works )</span>
        </div>

        {/* Section Heading */}
        <div className="work-reveal mb-4">
          <h2 className="heading-lg">
            In the
            <br />
            <em className="not-italic" style={{ fontStyle: 'italic' }}>works.</em>
          </h2>
        </div>

        {/* Sub-tag */}
        <div className="work-reveal mb-16">
          <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--text-muted)]">
            Built by Devang Dhakate · ©2025–26
          </span>
        </div>

        {/* Project List */}
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <div key={i}>
              <hr
                className="work-line divider"
                style={{ transformOrigin: 'left' }}
              />
              <div
                className="project-row py-8 lg:py-10 flex items-center gap-6 lg:gap-10 transition-opacity duration-300"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(-1)}
                style={{
                  opacity: hoveredIdx !== -1 && hoveredIdx !== i ? 0.3 : 1,
                }}
                data-cursor-hover
              >
                {/* Number */}
                <span className="font-display text-[clamp(14px,1.5vw,18px)] font-medium text-[var(--text-muted)] shrink-0 w-8">
                  {project.number}
                </span>

                {/* Project Name */}
                <h3 className="font-display text-[clamp(28px,4vw,56px)] font-bold tracking-[-0.02em] leading-none flex-1">
                  {project.name}
                </h3>

                {/* Tags */}
                <div className="hidden md:flex items-center gap-3 shrink-0">
                  <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-[var(--text-muted)]">
                    WHAT I BUILT:
                  </span>
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="font-mono text-[10px] tracking-[0.08em] uppercase"
                    >
                      {tag}
                      {j < project.tags.length - 1 && ' · '}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <span className="font-display text-[20px] shrink-0 opacity-30">
                  →
                </span>
              </div>
            </div>
          ))}
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
            left: `${mousePos.x + 20}px`,
            top: `${mousePos.y - 140}px`,
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
