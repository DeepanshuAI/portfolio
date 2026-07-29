import { motion } from 'framer-motion';

/**
 * GlassCard — Reusable glassmorphism card with optional glow border and hover animation.
 */
export default function GlassCard({
  children,
  className = '',
  hover = true,
  glowColor = 'primary',
  onClick,
  as = 'div',
}) {
  const Tag = as === 'article' ? motion.article : motion.div;

  const glowMap = {
    primary: 'hover:border-primary/30 hover:shadow-glow-primary',
    secondary: 'hover:border-secondary/30 hover:shadow-glow-secondary',
    none: '',
  };

  return (
    <Tag
      className={`
        glass rounded-2xl border border-white/[0.06] transition-all duration-500
        ${hover ? `${glowMap[glowColor]} hover:-translate-y-1 cursor-pointer` : ''}
        ${className}
      `}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
