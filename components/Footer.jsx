import Link from 'next/link';
import { navLinks } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <div className="font-display text-xl font-bold tracking-[-0.03em] text-ink">YAML AI</div>
          <p className="mt-3 max-w-sm leading-7 text-slate-600">
            AI automation systems for teams that want faster response times, cleaner operations, and more qualified leads.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-ink">Pages</h3>
          <div className="mt-4 grid gap-2">
            {navLinks.map((link) => (
              <Link className="text-sm text-slate-600 transition hover:text-skybrand" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-ink">Contact</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-600">
            <a className="transition hover:text-skybrand" href="mailto:hello@yamlai.in">
              hello@yamlai.in
            </a>
            <Link className="transition hover:text-skybrand" href="/contact">
              Book a discovery call
            </Link>
            <Link className="transition hover:text-skybrand" href="/contact">
              WhatsApp YAML AI
            </Link>
          </div>
        </div>
      </div>
      <div className="container-x border-t border-line py-6 text-sm text-slate-500">
        (c) 2026 YAML AI. Built in India for modern operators.
      </div>
    </footer>
  );
}
