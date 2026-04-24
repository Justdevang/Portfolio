import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  // REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT URL
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyEBXKyDZciiyMbFmdD0LC77yCxofKkyyWKqMY-TpBfmvup59d58n2RkINuYGhSM9P2/exec";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    const formData = new FormData(formRef.current);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error!', error.message);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

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
            <form
              ref={formRef}
              className="flex flex-col gap-8"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="form-input"
                  required
                  disabled={status === 'submitting'}
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
                  disabled={status === 'submitting'}
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
                  disabled={status === 'submitting'}
                ></textarea>
                <div className="text-right mt-2">
                  <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest">
                    Max 1000 characters
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className={`form-submit group ${status === 'submitting' ? 'opacity-70 cursor-wait' : ''}`}
                data-cursor-hover
                disabled={status === 'submitting'}
              >
                <span className="relative z-10">
                  {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent!' : status === 'error' ? 'Failed' : 'Send Message'}
                </span>
                <span className="form-submit-bg"></span>
                {status === 'idle' && (
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                )}
              </button>

              {status === 'success' && (
                <p className="font-mono text-[11px] text-green-600 uppercase tracking-widest">
                  Thank you! Your message has been sent.
                </p>
              )}
              {status === 'error' && (
                <p className="font-mono text-[11px] text-red-600 uppercase tracking-widest">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
