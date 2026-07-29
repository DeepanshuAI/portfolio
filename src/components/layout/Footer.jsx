import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../../constants/portfolioData';
import { scrollToSection } from '../../utils/helpers';

const socials = [
  { icon: FiGithub,   href: personalInfo.github,                  label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.linkedin,                label: 'LinkedIn' },
  { icon: FiMail,     href: `mailto:${personalInfo.email}`,       label: 'Email' },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="relative border-t"
      style={{ borderColor: 'rgba(255,255,255,0.05)' }}
    >
      {/* Top gradient accent */}
      <div
        className="absolute inset-x-0 -top-px h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.3) 50%, transparent 100%)' }}
        aria-hidden="true"
      />

      <div className="container-custom py-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-0 sm:justify-between">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-display font-extrabold text-lg text-gradient-primary hover:scale-105 transition-transform duration-200 focus-visible:outline-none"
            aria-label="Back to top"
          >
            {personalInfo.firstName}
            <span className="text-secondary font-bold text-lg opacity-90">.</span>
          </button>
          <p className="text-text-subtle text-[0.6rem] font-mono tracking-[0.18em] uppercase">
            Full Stack Developer
          </p>
        </div>

        {/* Center — status */}
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          <span className="text-text-subtle text-xs font-mono">
            Available for opportunities
          </span>
        </div>

        {/* Right — social + back to top */}
        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-text-subtle hover:text-text-muted transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={label}
            >
              <Icon size={14} />
            </a>
          ))}

          <div className="w-px h-4 mx-0.5" style={{ background: 'rgba(255,255,255,0.08)' }} aria-hidden="true" />

          <button
            onClick={() => scrollToSection('hero')}
            className="p-1.5 rounded-lg text-text-subtle hover:text-text-muted transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Back to top"
          >
            <FiArrowUp size={14} />
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="container-custom pb-5"
        style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 pt-4">
          <p className="text-text-subtle text-xs font-body">
            © {new Date().getFullYear()} {personalInfo.name}. Designed & built with precision.
          </p>
          <p className="text-text-subtle text-xs font-mono">
            React · Framer Motion · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
