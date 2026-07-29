import { motion } from 'framer-motion';
import { Zap, Radio, Bot, Cloud } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import BorderGlow from '../common/BorderGlow';
import { stats, aboutHighlights, personalInfo } from '../../constants/portfolioData';
import {
  staggerContainer, staggerItem, fadeInLeft, fadeInRight, defaultViewport,
} from '../../animations/motionVariants';
import { useCountUp } from '../../hooks/useCountUp';

const iconMap = { '⚡': Zap, '🔥': Radio, '🤖': Bot, '☁️': Cloud };

function StatCard({ value, label }) {
  const { ref, count } = useCountUp(value, 1200);
  return (
    <div
      ref={ref}
      className="flex flex-col gap-0.5 px-4 py-3 rounded-xl"
      style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)' }}
    >
      <span className="font-display font-bold text-2xl text-gradient-primary leading-none">{count}</span>
      <span className="text-text-subtle text-xs font-body leading-snug">{label}</span>
    </div>
  );
}

const valueChips = [
  'Outcome-Driven', 'Security-First', 'Clean Architecture',
  'Performance-Obsessed', 'Team Collaboration', 'Continuous Learner',
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <div className="container-custom">
        <SectionHeader
          index={1}
          label="About Me"
          title={`Who I <span class="text-gradient-primary">Am</span>`}
          subtitle="I design and engineer end-to-end digital products — from architecture to pixel-perfect interfaces."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — Bio */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex flex-col gap-5"
          >
            <div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-gradient-primary tracking-tight leading-tight">
                {personalInfo.name}
              </h3>
              <p className="text-primary-light font-body text-sm sm:text-base mt-1 font-medium">
                {personalInfo.title} · {personalInfo.location}
              </p>
            </div>

            <p className="text-text-muted font-body text-base leading-[1.7]">
              {personalInfo.shortBio}
            </p>

            <p className="text-text-muted font-body text-base leading-[1.7]">
              My sweet spot is the intersection of{' '}
              <span className="text-text font-medium">backend scalability</span> and{' '}
              <span className="text-text font-medium">frontend craft</span> — shipping products
              that are as robust under the hood as they are delightful to use.
            </p>

            {/* Currently working on */}
            <div
              className="flex items-start gap-3 px-4 py-3 rounded-xl"
              style={{ background: 'rgba(251,191,36,0.04)', border: '1px solid rgba(251,191,36,0.14)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
              <div>
                <span className="text-[0.6rem] font-mono text-accent tracking-[0.18em] uppercase font-bold block mb-0.5">
                  Currently
                </span>
                <p className="text-text-muted text-sm font-body leading-relaxed">
                  Building AI-powered automation tools and exploring LLM observability pipelines at scale.
                </p>
              </div>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'System Design', 'AI / LLMs'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-[0.7rem] font-mono font-medium"
                  style={{
                    background: 'rgba(124,58,237,0.08)',
                    border: '1px solid rgba(124,58,237,0.18)',
                    color: '#A78BFA',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              {stats.map(({ value, label }) => (
                <StatCard key={label} value={value} label={label} />
              ))}
            </div>
          </motion.div>

          {/* Right — Highlights */}
          <motion.div
            variants={staggerContainer(0.08, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex flex-col gap-3"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aboutHighlights.map(({ icon, title, description }) => {
                const LucideIcon = iconMap[icon];
                return (
                  <motion.div
                    key={title}
                    variants={staggerItem}
                  >
                    <BorderGlow
                      backgroundColor="#0D0D1A"
                      borderRadius={16}
                      glowColor="270 70 70"
                      glowRadius={28}
                      glowIntensity={0.75}
                      edgeSensitivity={32}
                      coneSpread={20}
                      colors={['#A78BFA', '#22D3EE', '#FBBF24']}
                      fillOpacity={0.28}
                      className="h-full"
                    >
                      <div className="group flex flex-col gap-3 p-5 h-full">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.18)' }}
                        >
                          {LucideIcon
                            ? <LucideIcon size={16} className="text-primary-light" />
                            : <span className="text-base">{icon}</span>}
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-sm text-text mb-1" style={{ letterSpacing: '-0.015em' }}>
                            {title}
                          </h4>
                          <p className="text-text-subtle text-xs font-body leading-relaxed">{description}</p>
                        </div>
                      </div>
                    </BorderGlow>
                  </motion.div>
                );
              })}
            </div>

            {/* Engineering values */}
            <motion.div
              variants={staggerItem}
              className="p-4 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.018)', border: '1px solid rgba(255,255,255,0.045)' }}
            >
              <p className="text-[0.6rem] font-mono text-text-subtle tracking-[0.2em] uppercase mb-3">
                Engineering Values
              </p>
              <div className="flex flex-wrap gap-1.5">
                {valueChips.map((v) => (
                  <span
                    key={v}
                    className="px-2.5 py-1 rounded-md text-xs font-body text-text-subtle"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
