import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'Vite', 'Three.js', 'GSAP', 'Lenis', 'SwiftUI'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'Socket.IO'],
  },
  {
    category: 'Tools & Infra',
    skills: ['Cloudflare Pages', 'Razorpay', 'Stripe', 'Delhivery API', 'Clerk Auth'],
  },
  {
    category: '3D & Character Design',
    skills: ['Blender', 'Low-Poly Modeling', '3D Character Rigging'],
  },
  {
    category: 'Motion & UI Design',
    skills: ['Adobe Illustrator', 'Adobe After Effects (AE)', 'Figma', 'Motion Graphics', 'UI/UX Design'],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.skills-reveal').forEach((el) => {
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
      gsap.utils.toArray('.skills-line').forEach((el) => {
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
    <section id="skills" ref={sectionRef} className="section">
      <div className="container">
        {/* Section Label */}
        <div className="skills-reveal mb-4">
          <span className="section-label">( skills & stack )</span>
        </div>

        {/* Section Heading */}
        <div className="skills-reveal mb-12">
          <h2 className="heading-lg">
            Tools, technology,
            <br />
            and core frameworks.
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-12">
          {skillGroups.map((group, i) => (
            <div key={i} className="skills-reveal flex flex-col">
              <hr className="skills-line divider mb-6" style={{ transformOrigin: 'left' }} />
              
              {/* Category Name */}
              <h3 className="font-mono text-[11px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-4">
                {group.category}
              </h3>

              {/* Skills List */}
              <ul className="flex flex-col gap-2 p-0 m-0 list-none">
                {group.skills.map((skill, j) => (
                  <li 
                    key={j} 
                    className="font-display text-[clamp(16px,1.5vw,22px)] font-medium tracking-tight text-[var(--text)] transition-transform duration-300 hover:translate-x-2"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
