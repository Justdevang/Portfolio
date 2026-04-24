import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tools = [
  { name: 'JavaScript', icon: 'devicon-javascript-plain', size: 36, top: '4%', left: '22%', rotate: '-3deg', float: 1 },
  { name: 'TypeScript', icon: 'devicon-typescript-plain', size: 32, top: '10%', left: '62%', rotate: '2deg', float: 2 },
  { name: 'HTML 5', icon: 'devicon-html5-plain', size: 40, top: '18%', left: '38%', rotate: '-1deg', float: 3 },
  { name: 'CSS 3', icon: 'devicon-css3-plain', size: 36, top: '6%', left: '48%', rotate: '4deg', float: 4 },
  { name: 'React.js', icon: 'devicon-react-original', size: 42, top: '22%', left: '72%', rotate: '-2deg', float: 5 },
  { name: 'Next.js', icon: 'devicon-nextjs-plain', size: 34, top: '14%', left: '55%', rotate: '1deg', float: 1 },
  { name: 'Vue.js', icon: 'devicon-vuejs-plain', size: 32, top: '36%', left: '20%', rotate: '3deg', float: 2 },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-original', size: 38, top: '42%', left: '42%', rotate: '-4deg', float: 3 },
  { name: 'Python', icon: 'devicon-python-plain', size: 38, top: '32%', left: '58%', rotate: '2deg', float: 4 },
  { name: 'SQL', icon: 'devicon-azuresqldatabase-plain', size: 30, top: '40%', left: '74%', rotate: '-1deg', float: 5 },
  { name: 'Supabase', icon: 'devicon-supabase-plain', size: 34, top: '52%', left: '26%', rotate: '5deg', float: 1 },
  { name: 'GitHub', icon: 'devicon-github-original', size: 40, top: '50%', left: '64%', rotate: '-3deg', float: 2 },
  { name: 'VS Code', icon: 'devicon-vscode-plain', size: 32, top: '60%', left: '44%', rotate: '2deg', float: 3 },
  { name: 'Cloudflare', icon: 'devicon-cloudflare-plain', size: 36, top: '62%', left: '72%', rotate: '-2deg', float: 4 },
  { name: 'Canva', icon: 'devicon-canva-original', size: 30, top: '68%', left: '22%', rotate: '4deg', float: 5 },
  { name: 'Three.js', icon: 'devicon-threejs-original', size: 36, top: '70%', left: '54%', rotate: '-1deg', float: 1 },
  { name: 'XML', icon: 'devicon-xml-plain', size: 28, top: '78%', left: '34%', rotate: '3deg', float: 2 },
  { name: 'YAML', icon: 'devicon-yaml-plain', size: 30, top: '76%', left: '66%', rotate: '-4deg', float: 3 },
  { name: 'N8N', icon: 'devicon-n8n-original', size: 32, top: '82%', left: '50%', rotate: '1deg', float: 4 },
];

const floatClass = ['', 'tool-float-1', 'tool-float-2', 'tool-float-3', 'tool-float-4', 'tool-float-5'];

const StudioLife = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.tools-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        );
      });

      gsap.utils.toArray('.tool-float').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            delay: i * 0.06,
            ease: 'back.out(1.4)',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section relative overflow-hidden">
      <div className="container relative">
        <div className="tools-reveal mb-4">
          <span className="section-label">( tools & stack )</span>
        </div>
        <div className="tools-reveal mb-4">
          <h2 className="heading-lg">
            Technologies I
            <br />
            <em style={{ fontStyle: 'italic' }}>work with.</em>
          </h2>
        </div>
      </div>

      {/* Scattered Floating Icons */}
      <div className="relative" style={{ height: '420px' }}>
        {tools.map((tool, i) => (
          <div
            key={i}
            className={`tool-float absolute ${floatClass[tool.float]}`}
            style={{
              top: tool.top,
              left: tool.left,
              transform: `rotate(${tool.rotate})`,
              opacity: 0,
            }}
          >
            <div className="tool-float-inner">
              <i
                className={tool.icon}
                style={{
                  fontSize: `${tool.size}px`,
                  color: 'var(--text)',
                  display: 'block',
                }}
              />
              <span className="tool-float-label">{tool.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudioLife;
