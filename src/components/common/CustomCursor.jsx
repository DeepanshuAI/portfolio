import { useEffect, useRef } from 'react';

/**
 * CustomCursor — Minimal, physics-based cursor.
 * Design: 4px white dot (exact position) + 28px ring (lagging, scales on interactive).
 * Uses rAF + lerp instead of Framer Motion springs — zero re-renders, pure DOM.
 * Hidden on touch devices and prefers-reduced-motion.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouchDevice || prefersReduced) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // State
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let ring_pos = { x: mouse.x, y: mouse.y };
    let isVisible = false;
    let isHovering = false;
    let rafId;

    // lerp factor: lower = more lag (feels heavier/smoother)
    const LERP = 0.12;

    const show = () => {
      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
    };

    const hide = () => {
      isVisible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const tick = () => {
      // Lerp ring position
      ring_pos.x += (mouse.x - ring_pos.x) * LERP;
      ring_pos.y += (mouse.y - ring_pos.y) * LERP;

      // Apply transforms — use translate3d for GPU compositing
      dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ring_pos.x}px, ${ring_pos.y}px, 0) translate(-50%, -50%) scale(${isHovering ? 1.6 : 1})`;

      rafId = requestAnimationFrame(tick);
    };

    // Throttle mousemove to every other frame
    let lastMoveTime = 0;
    const onMove = (e) => {
      const now = performance.now();
      if (now - lastMoveTime < 8) return; // ~120fps cap
      lastMoveTime = now;

      mouse.x = e.clientX;
      mouse.y = e.clientY;
      show();

      const target = e.target;
      isHovering = !!target.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]'
      );
    };

    const onLeave = () => hide();
    const onEnter = () => show();

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Precise dot — follows exactly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 4,
          height: 4,
          borderRadius: '50%',
          backgroundColor: '#fff',
          opacity: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          willChange: 'transform',
          transition: 'opacity 0.2s',
        }}
      />

      {/* Lagging ring — scales on interactive elements */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 28,
          height: 28,
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.22)',
          opacity: 0,
          zIndex: 9997,
          pointerEvents: 'none',
          willChange: 'transform',
          transition: 'opacity 0.2s, transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />
    </>
  );
}
