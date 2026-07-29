/**
 * Badge — Small pill label for tech stacks, categories, skill levels, etc.
 * Updated with accent variant and sharper corner radius for modern feel.
 */
export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default:
      'bg-white/[0.05] border border-white/[0.09] text-text-muted',
    primary:
      'bg-primary/12 border border-primary/30 text-primary-light',
    secondary:
      'bg-secondary/10 border border-secondary/28 text-secondary-light',
    accent:
      'bg-accent/10 border border-accent/30 text-accent',
    expert:
      'bg-primary/12 border border-primary/35 text-primary-light font-bold',
    advanced:
      'bg-secondary/10 border border-secondary/28 text-secondary-light',
    intermediate:
      'bg-white/[0.04] border border-white/[0.08] text-text-subtle',
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10.5px] font-semibold font-mono tracking-wide ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  );
}
