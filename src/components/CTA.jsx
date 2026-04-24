import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.cta-reveal').forEach((el) => {
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

  return (
    <section id="contact" ref={sectionRef} className="section">
      <div className="container">
        {/* Section Label */}
        <div className="cta-reveal mb-12">
          <span className="section-label">( let&rsquo;s connect )</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side: Text */}
          <div className="cta-reveal flex flex-col gap-8">
            <h2 className="heading-lg">
              If you&rsquo;d like to make an enquiry, please feel free to get in touch, and I will respond as soon as possible.
            </h2>
            
            <div className="flex flex-col gap-4">
              <p className="body-lg">
                If you prefer to contact me directly, send your Email to:
              </p>
              <a
                href="mailto:devangdhakate22@gmail.com"
                className="font-mono text-[clamp(14px,1.5vw,20px)] tracking-[0.02em] text-[var(--text)] hover:text-[var(--text-muted)] transition-colors duration-300 underline underline-offset-8"
                id="cta-email"
              >
                devangdhakate22@gmail.com
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="cta-reveal">
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can I help you?"
                  className="form-textarea"
                  maxLength={1000}
                  required
                ></textarea>
                <div className="text-right mt-2">
                  <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest">
                    Max 1000 characters
                  </span>
                </div>
              </div>

              <button type="submit" className="form-submit group" data-cursor-hover>
                <span className="relative z-10">Send Message</span>
                <span className="form-submit-bg"></span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
