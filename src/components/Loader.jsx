import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = "HELLO, I'M DEVANG".split(' ');
      
      // Clear and prepare text container
      if (textRef.current) {
        textRef.current.innerHTML = words
          .map(word => `<span class="inline-block overflow-hidden"><span class="word-span inline-block">${word}</span></span>`)
          .join(' ');
      }

      const tl = gsap.timeline({
        onComplete: () => {
          // Final reveal animation
          gsap.to(loaderRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: "expo.inOut",
            onComplete: onComplete
          });
        }
      });

      // Animate words in
      tl.fromTo(".word-span", 
        { yPercent: 100 }, 
        { 
          yPercent: 0, 
          duration: 1, 
          stagger: 0.1, 
          ease: "expo.out",
          delay: 0.5
        }
      );

      // Hold for a moment, then animate words out
      tl.to(".word-span", {
        opacity: 0,
        yPercent: -100,
        duration: 0.8,
        ease: "expo.inOut",
        stagger: 0.05,
        delay: 1
      });

      // Progress bar animation
      gsap.fromTo(".loader-progress-bar", 
        { scaleX: 0 }, 
        { 
          scaleX: 1, 
          duration: 3.5, 
          ease: "none" 
        }
      );

    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 z-[10000] bg-[#f4f1ec] flex items-center justify-center overflow-hidden"
    >
      <h1 
        ref={textRef} 
        className="font-display font-bold text-[clamp(24px,5vw,64px)] tracking-tighter uppercase flex gap-[0.3em]"
      >
        {/* Words will be injected here */}
      </h1>
      
      {/* Progress line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--border)] overflow-hidden">
        <div className="loader-progress-bar absolute top-0 left-0 h-full w-full bg-[var(--text)] origin-left"></div>
      </div>
    </div>
  );
};

export default Loader;
