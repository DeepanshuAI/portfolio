import { motion } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiTypescript, SiJavascript, SiPython,
  SiPostgresql, SiMongodb, SiDocker, SiFirebase, SiRedis,
  SiTailwindcss, SiNextdotjs, SiPrisma, SiGit, SiGraphql,
  SiExpress, SiLinux,
} from 'react-icons/si';
import { FiCloud } from 'react-icons/fi';
import SectionHeader from '../common/SectionHeader';
import { defaultViewport } from '../../animations/motionVariants';

const techItems = [
  { name: 'React',       Icon: SiReact,       color: '#61DAFB' },
  { name: 'Node.js',    Icon: SiNodedotjs,    color: '#339933' },
  { name: 'TypeScript', Icon: SiTypescript,   color: '#3178C6' },
  { name: 'JavaScript', Icon: SiJavascript,   color: '#F7DF1E' },
  { name: 'Python',     Icon: SiPython,       color: '#3776AB' },
  { name: 'PostgreSQL', Icon: SiPostgresql,   color: '#4169E1' },
  { name: 'MongoDB',    Icon: SiMongodb,      color: '#47A248' },
  { name: 'Docker',     Icon: SiDocker,       color: '#2496ED' },
  { name: 'Firebase',   Icon: SiFirebase,     color: '#FFCA28' },
  { name: 'Redis',      Icon: SiRedis,        color: '#DC382D' },
  { name: 'Tailwind',   Icon: SiTailwindcss,  color: '#06B6D4' },
  { name: 'Next.js',    Icon: SiNextdotjs,    color: '#DDDDDD' },
  { name: 'Prisma',     Icon: SiPrisma,       color: '#A0AEC0' },
  { name: 'Git',        Icon: SiGit,          color: '#F05032' },
  { name: 'AWS',        Icon: FiCloud,        color: '#FF9900' },
  { name: 'GraphQL',    Icon: SiGraphql,      color: '#E10098' },
  { name: 'Express',    Icon: SiExpress,      color: '#888888' },
  { name: 'Linux',      Icon: SiLinux,        color: '#FCC624' },
];

const row1 = [...techItems.slice(0, 9), ...techItems.slice(0, 9)];
const row2 = [...techItems.slice(9), ...techItems.slice(9)];

function TechPill({ name, Icon, color }) {
  return (
    <div
      className="flex items-center gap-2.5 px-4 py-2 rounded-xl flex-shrink-0 cursor-default group"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.055)',
        transition: 'border-color 0.2s',
      }}
    >
      <Icon
        size={16}
        style={{ color, flexShrink: 0 }}
        aria-hidden="true"
      />
      <span className="text-sm font-mono text-text-subtle whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function TechStackSection() {
  return (
    <section id="tech" className="section-padding overflow-hidden relative" aria-labelledby="tech-heading">
      {/* Edge fades — contain the marquee */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{ background: 'linear-gradient(to right, #07070F, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{ background: 'linear-gradient(to left, #07070F, transparent)' }}
        aria-hidden="true"
      />

      <div className="container-custom mb-10">
        <SectionHeader
          index={5}
          label="Tech Stack"
          title={`Powered By <span class="text-gradient-primary">These</span>`}
          subtitle="Tools I reach for every day to build fast, reliable products."
        />
      </div>

      {/* Row 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5 }}
        className="marquee-row overflow-hidden mb-3"
        aria-hidden="true"
      >
        <div className="flex gap-2.5 marquee-inner animate-marquee w-max">
          {row1.map((tech, i) => <TechPill key={`r1-${i}`} {...tech} />)}
        </div>
      </motion.div>

      {/* Row 2 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="marquee-row overflow-hidden"
        aria-hidden="true"
      >
        <div className="flex gap-2.5 marquee-inner animate-marquee-reverse w-max">
          {row2.map((tech, i) => <TechPill key={`r2-${i}`} {...tech} />)}
        </div>
      </motion.div>

      {/* SR fallback */}
      <div className="sr-only">
        <p>Technologies I work with:</p>
        <ul>
          {techItems.map((t) => <li key={t.name}>{t.name}</li>)}
        </ul>
      </div>
    </section>
  );
}
