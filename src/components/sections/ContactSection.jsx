import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend, FiDownload, FiCopy, FiCheck } from 'react-icons/fi';
import SectionHeader from '../common/SectionHeader';
import { personalInfo } from '../../constants/portfolioData';
import { fadeInLeft, fadeInRight, defaultViewport } from '../../animations/motionVariants';

const socialLinks = [
  {
    icon: FiGithub,
    href: personalInfo.github,
    label: 'GitHub',
    handle: personalInfo.github.replace('https://github.com/', '@'),
  },
  {
    icon: FiLinkedin,
    href: personalInfo.linkedin,
    label: 'LinkedIn',
    handle: (() => {
      try {
        const parts = personalInfo.linkedin.replace(/\/$/, '').split('/');
        return 'in/' + parts[parts.length - 1];
      } catch { return personalInfo.linkedin; }
    })(),
  },
  {
    icon: FiMail,
    href: `mailto:${personalInfo.email}`,
    label: 'Email',
    handle: personalInfo.email,
  },
];

// Pure CSS floating label — uses .form-field pattern defined in index.css
function Field({ id, name, label, type = 'text', value, onChange, required, multiline, rows }) {
  const inputClass = `
    w-full bg-transparent text-text text-sm font-body
    border border-white/[0.08] rounded-xl
    placeholder-transparent
    focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/15
    transition-colors duration-200
    ${multiline ? 'pt-6 pb-2 px-4 resize-none' : 'pt-6 pb-2 px-4 h-14'}
  `;

  return (
    <div className="form-field">
      {multiline ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows || 4}
          placeholder={label}
          className={inputClass}
          aria-required={required}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={label}
          className={inputClass}
          aria-required={required}
        />
      )}
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1400));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="flex flex-col gap-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <Field id="c-name"    name="name"    label="Name"    value={form.name}    onChange={handleChange} required />
        <Field id="c-email"   name="email"   type="email" label="Email"   value={form.email}   onChange={handleChange} required />
      </div>
      <Field id="c-subject" name="subject" label="Subject" value={form.subject} onChange={handleChange} />
      <Field id="c-message" name="message" label="Message" value={form.message} onChange={handleChange} required multiline rows={4} />

      <motion.button
        type="submit"
        disabled={status !== 'idle'}
        whileHover={status === 'idle' ? { scale: 1.02 } : {}}
        whileTap={status === 'idle' ? { scale: 0.98 } : {}}
        className={`relative flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold font-body transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg overflow-hidden ${
          status === 'success'
            ? 'bg-emerald-500/10 border border-emerald-500/25 text-emerald-400'
            : status === 'loading'
            ? 'border border-white/[0.08] text-text-subtle cursor-not-allowed'
            : 'bg-gradient-to-r from-primary to-secondary text-white shadow-glow-primary-sm'
        }`}
        aria-live="polite"
      >
        {status === 'idle' && (
          <span className="absolute inset-0 shimmer opacity-0 hover:opacity-100 transition-opacity duration-700" />
        )}
        <span className="relative flex items-center gap-2">
          {status === 'loading' ? (
            <>
              <span className="h-3.5 w-3.5 rounded-full border-2 border-current border-t-transparent animate-spin" />
              Sending...
            </>
          ) : status === 'success' ? (
            <><FiCheck size={14} /> Sent!</>
          ) : (
            <><FiSend size={14} /> Send Message</>
          )}
        </span>
      </motion.button>
    </form>
  );
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch { /* ignore */ }
  };

  return (
    <section id="contact" className="section-padding" aria-labelledby="contact-heading">
      <div className="container-custom">
        <SectionHeader
          index={6}
          label="Contact"
          title={`Let's Build Something <span class="text-gradient-primary">Great</span>`}
          subtitle="Have a project, opportunity, or idea? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 max-w-4xl mx-auto">

          {/* Left — Info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex flex-col gap-5"
          >
            {/* Availability card */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(6,182,212,0.04) 100%)',
                border: '1px solid rgba(124,58,237,0.16)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                <span className="text-[0.6rem] font-mono text-emerald-400 tracking-[0.18em] uppercase font-bold">
                  Available Now
                </span>
              </div>
              <h3 className="font-heading font-semibold text-base text-text mb-1">Open to Opportunities</h3>
              <p className="text-text-muted text-sm font-body leading-relaxed">
                Exploring senior full stack roles and consulting projects.
                Response time:{' '}
                <span className="text-primary-light font-medium">within 24 hours</span>.
              </p>
            </div>

            {/* Copy email */}
            <button
              onClick={copyEmail}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-left group transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
              aria-label={copied ? 'Email copied' : 'Copy email address'}
            >
              <FiMail size={14} className="text-primary-light flex-shrink-0" />
              <span className="text-text-muted text-sm font-mono flex-1 truncate">{personalInfo.email}</span>
              <span className={`text-xs transition-colors duration-200 flex-shrink-0 ${copied ? 'text-emerald-400' : 'text-text-subtle group-hover:text-text-muted'}`}>
                {copied ? <FiCheck size={13} /> : <FiCopy size={13} />}
              </span>
            </button>

            {/* Social links */}
            <div className="flex flex-col gap-2">
              {socialLinks.map(({ icon: Icon, href, label, handle }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl group transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  style={{ border: '1px solid rgba(255,255,255,0.055)', background: 'rgba(255,255,255,0.018)' }}
                  aria-label={`${label}: ${handle}`}
                >
                  <Icon size={14} className="text-text-subtle group-hover:text-primary-light transition-colors duration-200 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-text text-sm font-medium font-body leading-none mb-0.5">{label}</div>
                    <div className="text-text-subtle text-[0.7rem] font-mono truncate">{handle}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Resume download */}
            <a
              href={personalInfo.resume}
              download
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-secondary text-sm font-medium font-body hover:opacity-75 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              style={{ border: '1px solid rgba(6,182,212,0.22)', background: 'rgba(6,182,212,0.05)' }}
              aria-label="Download resume PDF"
            >
              <FiDownload size={14} /> Download Resume
            </a>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="p-5 sm:p-6 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <h3 className="font-heading font-semibold text-base text-text tracking-heading mb-5">
              Send a Message
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
