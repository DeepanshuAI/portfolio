import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { personalInfo } from '../data/portfolioData';

const navLinks = ['hero', 'about', 'skills', 'projects', 'contact'];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-dark-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="hero" smooth duration={600} className="cursor-pointer">
            <span className="font-mono text-xl font-bold gradient-text">&lt;Alex /&gt;</span>
          </Link>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link}
                smooth
                duration={600}
                offset={-70}
                className="text-gray-500 hover:text-gray-300 text-sm capitalize transition-colors duration-200 cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, href: personalInfo.github },
              { icon: FiLinkedin, href: personalInfo.linkedin },
              { icon: FiTwitter, href: personalInfo.twitter },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-300 transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 my-8" />

        {/* Bottom line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <FiHeart size={11} className="text-pink-500 fill-pink-500" /> using React, Vite & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Back to top */}
      <motion.div
        className="flex justify-center pb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link to="hero" smooth duration={800} className="cursor-pointer">
          <button
            id="back-to-top"
            className="text-xs text-gray-600 hover:text-primary-400 transition-colors duration-200 flex flex-col items-center gap-1"
          >
            <span>↑</span>
            <span>Back to top</span>
          </button>
        </Link>
      </motion.div>
    </footer>
  );
}
