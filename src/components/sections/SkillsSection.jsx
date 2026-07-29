import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import BorderGlow from '../common/BorderGlow';
import { skills } from '../../constants/portfolioData';
import { staggerContainer, staggerItem, defaultViewport } from '../../animations/motionVariants';

const levelMap = { Expert: 92, Advanced: 74, Intermediate: 52 };

function SkillBar({ name, level, color }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  const width = levelMap[level] ?? 50;

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-text-muted text-sm font-body">{name}</span>
        <span className="text-[0.6rem] font-mono text-text-subtle tracking-wide uppercase">{level}</span>
      </div>
      <div
        className="h-[1.5px] rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.05)' }}
        role="progressbar"
        aria-valuenow={width}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name}: ${level}`}
      >
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${width}%` } : { width: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.05 }}
          style={{ background: `linear-gradient(90deg, ${color}55, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding" aria-labelledby="skills-heading">
      <div className="container-custom">
        <SectionHeader
          index={2}
          label="Skills & Expertise"
          title={`Technical <span class="text-gradient-primary">Arsenal</span>`}
          subtitle="Technologies I rely on daily to build production-ready systems."
        />

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills.map(({ category, color, items }) => {
            // Convert hex to HSL string for BorderGlow glowColor prop
            const r = parseInt(color.slice(1, 3), 16) / 255;
            const g = parseInt(color.slice(3, 5), 16) / 255;
            const b = parseInt(color.slice(5, 7), 16) / 255;
            const max = Math.max(r, g, b), min = Math.min(r, g, b);
            let h = 0, s = 0, l = (max + min) / 2;
            if (max !== min) {
              const d = max - min;
              s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
              if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
              else if (max === g) h = ((b - r) / d + 2) / 6;
              else h = ((r - g) / d + 4) / 6;
            }
            const glowHSL = `${Math.round(h * 360)} ${Math.round(s * 100)} ${Math.round(l * 100)}`;

            return (
              <motion.div key={category} variants={staggerItem}>
                <BorderGlow
                  backgroundColor="#0D0D1A"
                  borderRadius={16}
                  glowColor={glowHSL}
                  glowRadius={28}
                  glowIntensity={0.8}
                  edgeSensitivity={30}
                  coneSpread={18}
                  colors={[color, '#7C3AED', '#06B6D4']}
                  fillOpacity={0.2}
                  className="h-full"
                >
                  <div className="relative flex flex-col gap-5 p-5 h-full">
                    {/* Top accent */}
                    <div
                      className="absolute top-0 left-6 right-6 h-px"
                      style={{ background: `linear-gradient(90deg, transparent, ${color}40, transparent)` }}
                      aria-hidden="true"
                    />
                    {/* Category header */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: color }} aria-hidden="true" />
                      <h3 className="font-heading font-semibold text-sm text-text flex-1" style={{ letterSpacing: '-0.015em' }}>
                        {category}
                      </h3>
                      <span className="font-mono text-[0.6rem] text-text-subtle">{items.length}</span>
                    </div>
                    {/* Skill bars */}
                    <div className="flex flex-col gap-3.5">
                      {items.map(({ name, level }) => (
                        <SkillBar key={name} name={name} level={level} color={color} />
                      ))}
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
