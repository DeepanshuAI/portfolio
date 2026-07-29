import { useEffect, useRef } from 'react';

/**
 * AuroraBackground — Replaces CyberGridCanvas.
 *
 * Design: Three large soft-light blobs that drift slowly + a subtle mouse-following
 * highlight that adds "alive" feel without dominating.
 *
 * Performance:
 * - Single canvas, single rAF loop
 * - No grid lines (expensive per-frame loops eliminated)
 * - Mouse effect is a single radial gradient — O(1) draw
 * - Uses willChange + compositing layer via fixed position
 * - Throttled mouse updates to 60fps
 * - Respects prefers-reduced-motion
 */
export default function AuroraBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let rafId;
    let mouse = { x: -2000, y: -2000 };
    let targetMouse = { x: -2000, y: -2000 };
    let t = 0;

    // Mouse lerp state
    let mx = -2000, my = -2000;

    // Blob definitions — positions defined as 0–1 ratios, animated with sin/cos
    const blobs = [
      {
        ox: 0.25, oy: 0.3,       // origin (ratio of canvas)
        ax: 0.12, ay: 0.10,      // amplitude
        phase: 0,                 // phase offset
        freq: 0.0004,             // speed
        r: 520,                   // radius
        color: [124, 58, 237],    // RGB
        opacity: 0.055,
      },
      {
        ox: 0.75, oy: 0.65,
        ax: 0.10, ay: 0.14,
        phase: Math.PI * 0.7,
        freq: 0.00035,
        r: 480,
        color: [6, 182, 212],
        opacity: 0.042,
      },
      {
        ox: 0.50, oy: 0.15,
        ax: 0.15, ay: 0.08,
        phase: Math.PI * 1.4,
        freq: 0.00028,
        r: 400,
        color: [251, 191, 36],
        opacity: 0.022,
      },
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = (timestamp) => {
      t = timestamp;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const W = canvas.width;
      const H = canvas.height;

      // ── Draw ambient blobs ──────────────────────────────────────
      blobs.forEach((b) => {
        const bx = (b.ox + Math.sin(t * b.freq + b.phase) * b.ax) * W;
        const by = (b.oy + Math.cos(t * b.freq * 0.7 + b.phase) * b.ay) * H;
        const r = b.r;

        const g = ctx.createRadialGradient(bx, by, 0, bx, by, r);
        g.addColorStop(0, `rgba(${b.color[0]},${b.color[1]},${b.color[2]},${b.opacity})`);
        g.addColorStop(0.5, `rgba(${b.color[0]},${b.color[1]},${b.color[2]},${b.opacity * 0.35})`);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(bx, by, r, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── Mouse light — soft radial glow that follows cursor ─────
      // Lerp mouse position
      mx += (targetMouse.x - mx) * 0.06;
      my += (targetMouse.y - my) * 0.06;

      if (mx > -1000) {
        const mg = ctx.createRadialGradient(mx, my, 0, mx, my, 280);
        mg.addColorStop(0, 'rgba(167, 139, 250, 0.06)');
        mg.addColorStop(0.4, 'rgba(124, 58, 237, 0.025)');
        mg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = mg;
        ctx.beginPath();
        ctx.arc(mx, my, 280, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };

    // Throttle mouse to ~60fps (16ms gate)
    let lastMouseTime = 0;
    const onMouseMove = (e) => {
      const now = performance.now();
      if (now - lastMouseTime < 16) return;
      lastMouseTime = now;
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
    };

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };

    resize();

    if (prefersReduced) {
      // Static version: just draw one frame, no animation
      draw(0);
      cancelAnimationFrame(rafId);
    } else {
      rafId = requestAnimationFrame(draw);
      window.addEventListener('mousemove', onMouseMove, { passive: true });
    }

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    />
  );
}
