import { motion } from 'framer-motion';
import { fadeInUp, defaultViewport } from '../../animations/motionVariants';

/**
 * SectionHeader — Refined. Clean indexed label, large display heading, readable subtitle.
 * Uses tighter spacing and proper typographic scale.
 */
export default function SectionHeader({ label, title, subtitle, align = 'center', index }) {
  const textAlign = align === 'left'
    ? 'text-left items-start'
    : 'text-center items-center';

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={`flex flex-col mb-12 sm:mb-14 ${textAlign}`}
      style={{ gap: '0.75rem' }}
    >
      {/* Label row */}
      {label && (
        <div className="flex items-center gap-2.5">
          {align !== 'left' && <span className="h-px w-6 bg-white/[0.12] flex-shrink-0" />}
          <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-text-subtle">
            {index !== undefined && (
              <span className="text-primary-light mr-2 font-bold">
                {String(index).padStart(2, '0')}
              </span>
            )}
            {label}
          </span>
          {align !== 'left' && <span className="h-px w-6 bg-white/[0.12] flex-shrink-0" />}
        </div>
      )}

      {/* Main heading — large, Playfair Display (serif editorial) */}
      <h2
        className="font-display font-bold text-text leading-[1.1]"
        style={{
          fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
          letterSpacing: '-0.01em',
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {/* Subtitle — comfortable reading width */}
      {subtitle && (
        <p
          className="text-text-subtle font-body leading-relaxed"
          style={{
            fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
            maxWidth: '480px',
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
