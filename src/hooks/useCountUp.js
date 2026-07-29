import { useEffect, useRef, useState } from 'react';

/**
 * useCountUp — Animates a number from 0 to `end` when the element enters the viewport.
 * @param {number} end - Target number
 * @param {number} duration - Animation duration in ms
 * @param {string} suffix - Optional suffix (e.g., '+', '%', 'k+')
 */
export function useCountUp(end, duration = 1500, suffix = '') {
  const [count, setCount] = useState('0');
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Parse the end value: handle suffixes like '2+', '5+', '99.9%'
    const numericEnd = parseFloat(end.toString().replace(/[^0-9.]/g, ''));
    const extractedSuffix = end.toString().replace(/[0-9.]/g, '') || suffix;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const startTime = performance.now();
          const isDecimal = numericEnd % 1 !== 0;

          const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out expo
            const eased = 1 - Math.pow(2, -10 * progress);
            const current = eased * numericEnd;
            setCount(
              isDecimal
                ? current.toFixed(1) + extractedSuffix
                : Math.floor(current) + extractedSuffix
            );
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, suffix]);

  return { ref, count };
}
