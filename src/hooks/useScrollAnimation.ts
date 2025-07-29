
import { useState, useEffect } from 'react';

const useScrollAnimation = (): Set<string> => {
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => {
      if (el.id) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return animatedElements;
};

export default useScrollAnimation;