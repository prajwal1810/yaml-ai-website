import Link from 'next/link';
import { Icon } from './Icon';

export function Button({ href, children, variant = 'primary', className = '' }) {
  const styles =
    variant === 'primary'
      ? 'bg-ink text-white shadow-card hover:-translate-y-0.5 hover:bg-slate-800'
      : 'border border-line bg-white text-ink hover:-translate-y-0.5 hover:border-skybrand/30 hover:bg-skysoft/40';

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition ${styles} ${className}`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4" />
    </Link>
  );
}
