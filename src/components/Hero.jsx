import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowDown, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const TAGLINES = personalInfo.taglines;

export default function Hero() {
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TAGLINES[taglineIdx];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTaglineIdx((i) => (i + 1) % TAGLINES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, taglineIdx]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900 bg-mesh noise"
    >
      {/* Animated blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-primary-300 font-medium border border-primary-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-none tracking-tight"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text text-shadow-glow">{personalInfo.name}</span>
        </motion.h1>

        {/* Typewriter tagline */}
        <motion.div
          variants={itemVariants}
          className="h-12 md:h-16 flex items-center justify-center mb-6"
        >
          <p className="text-xl md:text-3xl font-semibold text-gray-300">
            {displayed}
            <span className="inline-block w-0.5 h-7 md:h-9 bg-primary-400 ml-1 animate-pulse" />
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <Link to="projects" smooth duration={600} offset={-70}>
            <button id="hero-view-work" className="btn-primary text-base px-8 py-4">
              View My Work
            </button>
          </Link>
          <a id="hero-download-resume" href={personalInfo.resumeUrl} download className="btn-outline text-base px-8 py-4">
            <FiDownload size={18} />
            Download Resume
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-5 mb-16">
          {[
            { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
            { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
            { icon: FiTwitter, href: personalInfo.twitter, label: 'Twitter' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 glass rounded-2xl text-gray-400 hover:text-white hover:border-primary-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/10"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2 text-gray-600"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <FiArrowDown size={18} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
