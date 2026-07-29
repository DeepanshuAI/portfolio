import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../constants/navLinks';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { scrollToSection } from '../../utils/helpers';
import { personalInfo } from '../../constants/portfolioData';
import MobileDrawer from './MobileDrawer';
import { FiMenu, FiDownload } from 'react-icons/fi';

export default function Navbar() {
  const activeSection = useActiveSection();
  const { scrollY, progress } = useScrollProgress();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isScrolled = scrollY > 48;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setDrawerOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setDrawerOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 glass-strong border-b border-white/[0.06]'
            : 'py-4 bg-transparent'
        }`}
        role="banner"
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="group flex items-center gap-1.5 focus-visible:outline-none"
            aria-label="Go to top"
          >
            <span className="font-display font-extrabold text-xl sm:text-2xl text-gradient-primary tracking-tight group-hover:scale-105 transition-transform duration-200">
              {personalInfo.firstName}
            </span>
            <span className="text-secondary font-bold text-xl sm:text-2xl opacity-90">.</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-1.5 text-sm font-body transition-colors duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  activeSection === link.id
                    ? 'text-text font-semibold'
                    : 'text-text-subtle hover:text-text-muted'
                }`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
                <AnimatePresence mode="wait">
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-3 right-3 h-px bg-primary-light"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </button>
            ))}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resume}
              download
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-primary/40 bg-primary/10 text-primary-light text-sm font-semibold hover:bg-primary/20 hover:border-primary/60 transition-all duration-200 shadow-glow-primary-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Download resume PDF"
            >
              <FiDownload size={13} />
              Resume
            </a>
            <button
              onClick={() => setDrawerOpen(true)}
              className="md:hidden p-2 rounded-lg text-text-subtle hover:text-text-muted transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
            >
              <FiMenu size={20} />
            </button>
          </div>
        </div>

        {/* Scroll progress — thin underline */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent opacity-70"
            style={{ scaleX: progress, transformOrigin: 'left' }}
          />
        </div>
      </motion.header>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onNavClick={handleNavClick}
        activeSection={activeSection}
      />
    </>
  );
}
