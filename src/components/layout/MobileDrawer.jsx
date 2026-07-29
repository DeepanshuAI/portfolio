import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload } from 'react-icons/fi';
import { navLinks } from '../../constants/navLinks';
import { personalInfo } from '../../constants/portfolioData';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: '0%',
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerItem = {
  hidden: { opacity: 0, x: 30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function MobileDrawer({ open, onClose, onNavClick, activeSection }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <motion.div
            key="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 bottom-0 z-[70] w-72 glass-strong border-l border-white/[0.08] md:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/[0.08]">
              <span className="font-heading font-extrabold text-xl">
                <span className="text-gradient-primary">{personalInfo.firstName}</span>
                <span className="text-secondary opacity-90">.</span>
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-text-muted hover:text-text hover:bg-white/[0.06] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Close navigation menu"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 flex flex-col justify-center px-6 gap-1" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  custom={i}
                  variants={staggerItem}
                  initial="hidden"
                  animate="visible"
                  onClick={() => onNavClick(link.id)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-left text-base font-medium font-body transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    activeSection === link.id
                      ? 'bg-primary/10 border border-primary/20 text-primary-light'
                      : 'text-text-muted hover:text-text hover:bg-white/[0.04]'
                  }`}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${activeSection === link.id ? 'bg-primary' : 'bg-text-subtle'}`} />
                  {link.label}
                </motion.button>
              ))}
            </nav>

            {/* Resume */}
            <div className="p-6 border-t border-white/[0.08]">
              <a
                href={personalInfo.resume}
                download
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/40 text-primary-light text-sm font-semibold font-body hover:border-primary/60 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-glow-primary-sm"
              >
                <FiDownload size={14} /> Download Resume
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
