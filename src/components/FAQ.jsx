import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'Who is Devang Dhakate?',
    answer: 'Devang Dhakate is a full-stack developer, product builder, and creative technologist based in Pune, India. He specializes in engineering production-ready MERN stack web applications, high-performance D2C e-commerce pipelines, and immersive 3D/creative frontend user experiences.',
  },
  {
    question: 'What is Devang Dhakate\'s technical stack?',
    answer: 'Devang\'s core stack includes React, Vite, Node.js, Express, and MongoDB (MERN). For creative and interactive experiences, he leverages Three.js, GSAP, Lenis, and Blender. For mobile and systems development, he works with SwiftUI, Socket.IO, Razorpay, Stripe, and Cloudflare Pages.',
  },
  {
    question: 'What are Devang Dhakate\'s flagship projects?',
    answer: 'His key projects include Morivaná Daily (a premium super-greens brand with automated logistics and payment routing), Soundabode (a custom Three.js scrollytelling experience), Gyroscope Fruit Ninja (a real-time device-controller game built using Socket.IO), and macOS Desktop Pet (a SwiftUI utility character modeled in Blender).',
  },
  {
    question: 'Where is Devang Dhakate located and is he open to work?',
    answer: 'Devang is based in Pune, Maharashtra, India. Having completed his studies and L2 operational operations at Amazon, he is actively open to full-time software engineering roles and freelance full-stack/creative contracts globally (remote or local).',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.faq-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="section bg-[var(--bg)]" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        {/* Header */}
        <div className="faq-reveal mb-12">
          <span className="section-label">( faq )</span>
          <h2 className="heading-lg mt-4">Common Questions</h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto flex flex-col faq-reveal">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="border-b border-[var(--border)] py-5"
                style={{ contentVisibility: 'auto' }}
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between text-left font-display font-medium text-[16px] md:text-[20px] py-2 text-[var(--text)] hover:text-[var(--text-muted)] transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-[var(--text)] rounded-sm"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{faq.question}</span>
                  <span 
                    className="font-mono text-[12px] md:text-[14px] transition-transform duration-300 ml-4 select-none"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    &#x2b;
                  </span>
                </button>

                <div
                  id={`faq-answer-${i}`}
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    opacity: isOpen ? 1 : 0,
                    visibility: isOpen ? 'visible' : 'hidden',
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="font-mono text-[12px] md:text-[14px] leading-relaxed text-[var(--text-muted)] mt-4 max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
