import { useState, useEffect } from 'react';

/**
 * Tracks scroll progress as a value between 0 and 1.
 * Also tracks the raw scrollY value.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const currentY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? currentY / docHeight : 0;
      setProgress(Math.min(Math.max(scrolled, 0), 1));
      setScrollY(currentY);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return { progress, scrollY };
}
