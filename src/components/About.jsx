import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiCode } from 'react-icons/fi';
import { personalInfo, stats } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-28 relative bg-dark-800/30">
      {/* Section divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-20"
        >
          <motion.p variants={fadeUp} className="text-primary-400 font-mono text-sm mb-3 tracking-widest uppercase">
            Get to know me
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="section-heading text-white">
            About <span className="gradient-text">Me</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Avatar + glow */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/30 to-accent-500/30 blur-2xl scale-110" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-white/10">
                <div className="w-full h-full bg-gradient-to-br from-primary-600/30 via-dark-700 to-accent-600/30 flex items-center justify-center">
                  <span className="text-8xl select-none">👨‍💻</span>
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-2xl border border-primary-500/20"
              >
                <div className="flex items-center gap-2">
                  <FiCode className="text-primary-400" size={14} />
                  <span className="text-xs font-semibold text-gray-300">Full-Stack Dev</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-6"
          >
            <motion.p variants={fadeUp} className="text-gray-300 text-lg leading-relaxed">
              {personalInfo.bio}
            </motion.p>
            <motion.p variants={fadeUp} custom={1} className="text-gray-400 leading-relaxed">
              {personalInfo.bio2}
            </motion.p>

            {/* Info chips */}
            <motion.div variants={fadeUp} custom={2} className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm text-gray-300">
                <FiMapPin className="text-primary-400" size={14} />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm text-gray-300">
                <FiMail className="text-primary-400" size={14} />
                {personalInfo.email}
              </span>
            </motion.div>

            <motion.a
              variants={fadeUp}
              custom={3}
              href={personalInfo.resumeUrl}
              download
              className="btn-primary inline-flex mt-2"
              id="about-resume-btn"
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i}
              className="glass rounded-2xl p-6 text-center hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-3xl md:text-4xl font-black gradient-text mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
