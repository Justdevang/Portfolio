import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Check for touch device
    if ('ontouchstart' in window) {
      cursor.style.display = 'none';
      return;
    }

    const onMouseMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const onMouseEnterInteractive = () => cursor.classList.add('hovering');
    const onMouseLeaveInteractive = () => cursor.classList.remove('hovering');

    // Smooth follow loop
    let raf;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;
      cursor.style.left = `${pos.current.x}px`;
      cursor.style.top = `${pos.current.y}px`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    animate();

    // Observe interactive elements
    const addListeners = () => {
      const interactives = document.querySelectorAll(
        'a, button, [data-cursor-hover], .project-row'
      );
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterInteractive);
        el.addEventListener('mouseleave', onMouseLeaveInteractive);
      });
      return interactives;
    };

    // Use MutationObserver to handle dynamically added elements
    let interactives = addListeners();
    const observer = new MutationObserver(() => {
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
      interactives = addListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;
