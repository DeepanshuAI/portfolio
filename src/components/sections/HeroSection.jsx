import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiArrowRight, FiDownload } from 'react-icons/fi';
import { personalInfo, stats } from '../../constants/portfolioData';
import { scrollToSection } from '../../utils/helpers';
import { heroTextVariants } from '../../animations/motionVariants';

const socialLinks = [
  { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

// Clip-up word reveal — each word clips from bottom
function AnimatedWord({ word, delay, className = '' }) {
  return (
    <span className={`inline-block overflow-hidden pb-[0.08em] ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ delay, duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      /* Reduced: min-h-screen → 88svh, justified slightly higher */
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: '82svh', paddingTop: '4.5rem', paddingBottom: '3rem' }}
      aria-label="Hero section"
    >
      <div
        className="container-custom relative z-10 flex flex-col items-center text-center"
        style={{ gap: '1rem' }}
      >
        {/* ─── Status chip ───────────────────────────────────────────── */}
        <motion.div
          custom={0}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/[0.06] font-mono text-[0.6875rem] tracking-[0.18em] text-emerald-400 uppercase">
            <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            Available · Open to Work
          </span>
        </motion.div>

        {/* ─── Display headline ──────────────────────────────────────── */}
        <div style={{ maxWidth: '950px' }}>
          {/* Greeting label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-mono text-xs sm:text-sm text-primary-light font-semibold tracking-[0.25em] uppercase mb-1"
          >
            Hi, I am
          </motion.p>

          {/* Giant display name */}
          <h1
            className="font-display font-extrabold leading-[1.02] tracking-[-0.02em] mb-3"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 6.25rem)' }}
          >
            <div className="flex flex-wrap justify-center gap-x-[0.3em]">
              <AnimatedWord word="DEEPANSHU" delay={0.25} className="text-gradient-primary drop-shadow-[0_0_35px_rgba(124,58,237,0.3)]" />
              <AnimatedWord word="YADAV" delay={0.38} className="text-text" />
            </div>
          </h1>

          {/* Role headline */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="font-heading font-bold text-lg sm:text-2xl text-text-muted tracking-tight mb-2"
          >
            Full Stack Developer & Systems Architect
          </motion.h2>

          {/* Discipline line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="font-mono text-[0.65rem] text-text-subtle tracking-[0.16em] uppercase"
          >
            {personalInfo.location} · React · Node.js · AI Integration · Scalable Apps
          </motion.p>
        </div>

        {/* ─── Sub-headline ──────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-body text-text-muted leading-relaxed"
          style={{ maxWidth: '580px', fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}
        >
          I architect and ship production-grade web applications — from{' '}
          <span className="text-text font-medium">real-time platforms</span> to{' '}
          <span className="text-text font-medium">AI-driven tools</span> — focused on
          performance, clean code, and delightful user experiences.
        </motion.p>

        {/* ─── CTAs ──────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-row flex-wrap items-center justify-center gap-3"
        >
          {/* Primary */}
          <motion.button
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl overflow-hidden bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm shadow-glow-primary-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            aria-label="View my projects"
          >
            <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <span className="relative flex items-center gap-2">
              View Projects
              <FiArrowRight className="group-hover:translate-x-0.5 transition-transform duration-200" size={14} />
            </span>
          </motion.button>

          {/* Resume Download CTA */}
          <motion.a
            href={personalInfo.resume}
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-cyan-500/30 bg-cyan-500/[0.08] text-cyan-300 font-semibold text-sm hover:bg-cyan-500/[0.16] hover:border-cyan-500/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Download Deepanshu's Resume PDF"
          >
            <FiDownload size={14} />
            Resume PDF
          </motion.a>

          {/* Secondary */}
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-white/[0.10] text-text-muted font-semibold text-sm hover:text-text hover:border-white/[0.18] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            aria-label="Contact me"
          >
            <FiMail size={14} />
            Get in Touch
          </motion.button>
        </motion.div>

        {/* ─── Social + stats row ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          {/* Social icons */}
          <div className="flex items-center gap-1.5" aria-label="Social links">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="p-2 rounded-lg text-text-subtle hover:text-text transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <span className="hidden sm:block w-px h-4 bg-white/[0.10]" aria-hidden="true" />

          {/* Stats — inline, compact */}
          <div className="flex items-center gap-5" aria-label="Key statistics">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex items-baseline gap-1.5">
                <span className="font-display font-bold text-xl text-gradient-primary leading-none">
                  {value}
                </span>
                <span className="text-text-subtle text-[0.6rem] font-mono tracking-[0.12em] uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ─── Scroll indicator ──────────────────────────────────────────── */}
      <motion.button
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-subtle hover:text-text-muted transition-colors duration-200 focus-visible:outline-none"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={13} />
        </motion.div>
      </motion.button>
    </section>
  );
}
