import { motion } from 'framer-motion';
import { experience } from '../../constants/portfolioData';
import SectionHeader from '../common/SectionHeader';
import Badge from '../common/Badge';
import { defaultViewport } from '../../animations/motionVariants';

const valueProps = [
  {
    number: '01',
    title: 'End-to-End Ownership',
    description: 'From architecture sketch to production deployment — schemas, APIs, UIs, CI/CD. No handoff required.',
    chips: ['System Design', 'API Architecture', 'DevOps'],
    color: '#7C3AED',
  },
  {
    number: '02',
    title: 'Performance by Default',
    description: 'Performance is a feature, not an afterthought. Every layer — from query plans to React bundle splits — is optimized.',
    chips: ['Query Optimization', 'Caching', 'Code Splitting'],
    color: '#06B6D4',
  },
  {
    number: '03',
    title: 'AI-Native Thinking',
    description: 'LLM integration as first-class capability — building observability pipelines, prompt management, voice synthesis.',
    chips: ['LLM Integration', 'Langfuse', 'ElevenLabs'],
    color: '#FBBF24',
  },
  {
    number: '04',
    title: 'Real-Time at Scale',
    description: 'WebSockets, SSE, event-driven architectures — designed for high concurrency and instant feedback loops.',
    chips: ['WebSockets', 'Redis Pub/Sub', 'Event-Driven'],
    color: '#10B981',
  },
];

function TimelineItem({ item, index, total }) {
  const isLast = index === total - 1;
  return (
    <motion.div
      className="relative flex gap-5 sm:gap-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={defaultViewport}
      transition={{ delay: index * 0.1, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Spine */}
      <div className="flex flex-col items-center flex-shrink-0 pt-1">
        <div
          className="relative z-10 w-3 h-3 rounded-full border-2 flex-shrink-0"
          style={{ borderColor: item.color }}
        >
          <div
            className="absolute inset-0.5 rounded-full"
            style={{ background: item.color }}
          />
        </div>
        {!isLast && (
          <div
            className="w-px flex-1 mt-2 min-h-[48px]"
            style={{ background: `linear-gradient(to bottom, ${item.color}40, transparent)` }}
          />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 min-w-0 pb-8 ${isLast ? 'pb-0' : ''}`}>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
          <div>
            <h3 className="font-heading font-semibold text-base text-text tracking-heading leading-snug">{item.role}</h3>
            <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium font-body hover:opacity-75 transition-opacity"
                style={{ color: item.color }}
              >
                {item.company}
              </a>
              <span className="text-text-subtle text-xs">·</span>
              <span className="text-text-subtle text-xs font-body">{item.type}</span>
              <span className="text-text-subtle text-xs">·</span>
              <span className="text-text-subtle text-xs font-body">{item.location}</span>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-0.5 flex-shrink-0">
            <span className="text-xs font-mono text-text-muted">{item.period}</span>
            <span className="text-[0.65rem] text-text-subtle font-body">{item.duration}</span>
          </div>
        </div>

        <p className="text-text-muted text-sm font-body leading-[1.7] mb-3">{item.description}</p>

        <ul className="flex flex-col gap-1.5 mb-3">
          {(item.achievements ?? []).map((a) => (
            <li key={a} className="flex items-start gap-2 text-text-muted text-sm font-body">
              <span
                className="w-3 h-[1.5px] flex-shrink-0 mt-[0.55rem] rounded-full"
                style={{ background: item.color }}
              />
              {a}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {(item.tech ?? []).map((t) => <Badge key={t}>{t}</Badge>)}
        </div>
      </div>
    </motion.div>
  );
}

function ValueCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={{ delay: index * 0.08, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative flex flex-col gap-4 p-5 sm:p-6 rounded-2xl overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.055)' }}
    >
      {/* Top accent */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${item.color}45, transparent)` }}
        aria-hidden="true"
      />

      {/* Ghost number */}
      <div
        className="font-display font-extrabold leading-none select-none"
        style={{ fontSize: '2.75rem', color: item.color, opacity: 0.1, lineHeight: 1 }}
        aria-hidden="true"
      >
        {item.number}
      </div>

      <div className="-mt-2">
        <h3 className="font-heading font-semibold text-base text-text tracking-heading mb-1.5">{item.title}</h3>
        <p className="text-text-muted text-sm font-body leading-relaxed">{item.description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {item.chips.map((chip) => (
          <span
            key={chip}
            className="px-2 py-0.5 rounded-md text-xs font-mono font-medium"
            style={{ background: `${item.color}12`, border: `1px solid ${item.color}28`, color: item.color }}
          >
            {chip}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const hasExperience = experience && experience.length > 0;

  return (
    <section id="experience" className="section-padding" aria-labelledby="experience-heading">
      <div className="container-custom">
        {hasExperience ? (
          <>
            <SectionHeader
              index={4}
              label="Experience"
              title={`Where I've <span class="text-gradient-primary">Built</span>`}
              subtitle="A track record of delivering production software with measurable impact."
            />
            <div className="max-w-2xl mx-auto">
              {experience.map((item, i) => (
                <TimelineItem key={item.id} item={item} index={i} total={experience.length} />
              ))}
            </div>
          </>
        ) : (
          <>
            <SectionHeader
              index={4}
              label="What I Bring"
              title={`My <span class="text-gradient-primary">Strengths</span>`}
              subtitle="The capabilities and engineering mindset I bring to every project."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {valueProps.map((item, i) => (
                <ValueCard key={item.number} item={item} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
