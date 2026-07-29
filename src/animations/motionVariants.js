// Reusable Framer Motion animation variants
// Refined: lighter distances, faster durations, premium ease curves

// The "standard" ease — feels like iOS spring but without overshoot
const EASE = [0.25, 0.46, 0.45, 0.94];
// Fast-exit ease — content exits quickly, enters slowly
const EASE_OUT = [0.0, 0.0, 0.2, 1.0];

export const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.34, 1.2, 0.64, 1] },
  },
};

export const staggerContainer = (staggerChildren = 0.07, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

export const slideInFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const slideInFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.015,
    y: -4,
    transition: { duration: 0.25, ease: EASE },
  },
};

export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.03 },
  tap: { scale: 0.97 },
};

// Hero text: subtle blur + slide, staggered by custom delay index
// Reduced distances and blur — feels more refined
export const heroTextVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.09,
      duration: 0.65,
      ease: EASE,
    },
  }),
};

// Display headline: clip-path wipe reveal
export const clipReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
  visible: (i = 0) => ({
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.85,
      ease: EASE,
    },
  }),
};

export const timelineVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.45,
      ease: EASE,
    },
  }),
};

// Viewport options — fire a bit earlier for snappier feel
export const defaultViewport = { once: true, margin: '-40px' };
