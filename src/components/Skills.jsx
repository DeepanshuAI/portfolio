import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiRedux,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiPostman, SiGraphql,
  SiGit, SiDocker, SiGooglecloud, SiVercel, SiFigma, SiLinux,
} from 'react-icons/si';
import { skills } from '../data/portfolioData';

const iconMap = {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiRedux,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiPostman, SiGraphql,
  SiGit, SiDocker, SiAmazon: SiGooglecloud, SiVercel, SiFigma, SiLinux,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: 'easeOut' },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
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
            What I work with
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="section-heading text-white">
            Tech <span className="gradient-text">Stack</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-gray-500 max-w-xl mx-auto mt-4">
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {/* Category label */}
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
                <span className="text-sm font-semibold text-primary-400 uppercase tracking-widest">
                  {category.category}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-primary-500/30 to-transparent" />
              </motion.div>

              {/* Skills grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {category.items.map((skill, i) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <motion.div
                      key={skill.name}
                      variants={fadeUp}
                      custom={i + catIdx * 2}
                      className="skill-badge group"
                      whileHover={{ scale: 1.05 }}
                    >
                      {Icon && (
                        <Icon
                          size={28}
                          style={{ color: skill.color }}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      )}
                      <span className="text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
