import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight, FiX } from 'react-icons/fi';
import SectionHeader from '../common/SectionHeader';
import Badge from '../common/Badge';
import BorderGlow from '../common/BorderGlow';
import { projects } from '../../constants/portfolioData';
import { staggerContainer, staggerItem, defaultViewport } from '../../animations/motionVariants';

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0"
          style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(12px)' }}
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Sheet */}
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10 w-full sm:max-w-xl rounded-t-3xl sm:rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: '#0D0D1A',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.8)',
            maxHeight: '88vh',
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-4 flex-shrink-0"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: project.color, boxShadow: `0 0 6px ${project.color}` }}
              />
              <h3 className="font-heading font-semibold text-base text-text tracking-heading">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-text-subtle hover:text-text transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close"
            >
              <FiX size={16} />
            </button>
          </div>

          {/* Accent line */}
          <div className="h-[1px] flex-shrink-0" style={{ background: `linear-gradient(90deg, ${project.color}60, transparent)` }} />

          {/* Scrollable content */}
          <div className="overflow-y-auto flex-1 px-5 py-5 flex flex-col gap-5">
            {project.image && (
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-60 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            )}

            <p className="text-text-muted text-sm font-body leading-[1.7]">{project.description}</p>

            <div>
              <p className="text-[0.6rem] font-mono text-text-subtle tracking-[0.2em] uppercase mb-2.5">Problem Solved</p>
              <p className="text-text-muted text-sm font-body leading-[1.7]">{project.problem}</p>
            </div>

            <div>
              <p className="text-[0.6rem] font-mono text-text-subtle tracking-[0.2em] uppercase mb-2.5">Key Features</p>
              <ul className="flex flex-col gap-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-text-muted text-sm font-body leading-relaxed">
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
                      style={{ background: project.color }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[0.6rem] font-mono text-text-subtle tracking-[0.2em] uppercase mb-2.5">Tech Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => <Badge key={t}>{t}</Badge>)}
              </div>
            </div>
          </div>

          {/* Footer links */}
          <div
            className="flex items-center gap-2.5 px-5 py-4 flex-shrink-0"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-text-muted hover:text-text text-sm font-medium font-body transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <FiGithub size={14} /> Source Code
            </a>
            {project.live && project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-primary-light text-sm font-medium font-body hover:opacity-80 transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.22)' }}
              >
                <FiExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, index }) {
  const [showModal, setShowModal] = useState(false);

  // Derive a per-project glow color from the project's hex color
  // Convert hex → approximate HSL string for BorderGlow
  const hexToHSL = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) { h = s = 0; }
    else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }
    return `${Math.round(h * 360)} ${Math.round(s * 100)} ${Math.round(l * 100)}`;
  };

  const glowColorHSL = hexToHSL(project.color);

  return (
    <>
      <motion.div
        variants={staggerItem}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="cursor-pointer h-full"
        onClick={() => setShowModal(true)}
        aria-label={`View ${project.title} details`}
      >
        <BorderGlow
          backgroundColor="#0D0D1A"
          borderRadius={16}
          glowColor={glowColorHSL}
          glowRadius={32}
          glowIntensity={0.9}
          edgeSensitivity={28}
          coneSpread={20}
          colors={[project.color, '#7C3AED', '#06B6D4']}
          fillOpacity={0.35}
          className="h-full"
        >
          <article className="group flex flex-col h-full" style={{ minHeight: 0 }}>
            {/* Project image header */}
            <div
              className="relative flex-shrink-0 overflow-hidden rounded-t-[15px]"
              style={{ height: 165 }}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div
                  className="w-full h-full"
                  style={{
                    background: `
                      radial-gradient(ellipse at 20% 50%, ${project.color}22 0%, transparent 60%),
                      radial-gradient(ellipse at 80% 30%, ${project.color}0E 0%, transparent 60%),
                      rgba(255,255,255,0.012)
                    `,
                  }}
                />
              )}

              {/* Bottom gradient overlay for tag visibility & text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A] via-[#0D0D1A]/40 to-transparent" />

              {/* Category tag */}
              <div className="absolute bottom-3 left-4 z-10">
                <span
                  className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[0.65rem] font-mono font-semibold backdrop-blur-md"
                  style={{
                    background: `${project.color}25`,
                    border: `1px solid ${project.color}45`,
                    color: '#FFFFFF',
                  }}
                >
                  {project.category}
                </span>
              </div>
              {/* Ghost number */}
              <div
                className="absolute bottom-1 right-4 font-display font-extrabold leading-none select-none pointer-events-none z-10"
                style={{ fontSize: '3rem', color: project.color, opacity: 0.15 }}
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 px-5 py-4 gap-3">
              <div>
                <h3 className="font-heading font-semibold text-base text-text leading-snug group-hover:text-primary-light transition-colors duration-200" style={{ letterSpacing: '-0.015em' }}>
                  {project.title}
                </h3>
                <p className="text-text-subtle text-xs font-body mt-0.5">{project.subtitle}</p>
              </div>

              <p className="text-text-muted text-sm font-body leading-relaxed line-clamp-2 flex-1">
                {project.description}
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1 mt-auto">
                {project.tech.slice(0, 4).map((t) => <Badge key={t}>{t}</Badge>)}
                {project.tech.length > 4 && <Badge>+{project.tech.length - 4}</Badge>}
              </div>

              {/* Footer */}
              <div
                className="flex items-center gap-3 pt-3"
                style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-text-subtle hover:text-text-muted text-xs font-medium transition-colors duration-150 focus-visible:outline-none"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${project.title} GitHub`}
                >
                  <FiGithub size={12} /> Code
                </a>
                {project.live && project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-text-subtle hover:text-secondary text-xs font-medium transition-colors duration-150 focus-visible:outline-none"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`${project.title} live demo`}
                  >
                    <FiExternalLink size={12} /> Demo
                  </a>
                )}
                <button
                  className="ml-auto flex items-center gap-1 text-primary-light text-xs font-mono font-medium hover:opacity-75 transition-opacity duration-150 focus-visible:outline-none"
                  onClick={(e) => { e.stopPropagation(); setShowModal(true); }}
                  aria-label={`View ${project.title} details`}
                >
                  Details <FiArrowRight size={10} />
                </button>
              </div>
            </div>
          </article>
        </BorderGlow>
      </motion.div>

      {showModal && <ProjectModal project={project} onClose={() => setShowModal(false)} />}
    </>
  );
}



export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding" aria-labelledby="projects-heading">
      <div className="container-custom">
        <SectionHeader
          index={3}
          label="Featured Projects"
          title={`Work That <span class="text-gradient-primary">Ships</span>`}
          subtitle="Production-grade projects that solve real problems at scale."
        />

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
