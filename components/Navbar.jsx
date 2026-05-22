'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navLinks } from '@/data/site';
import { Button } from './Button';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled
          ? 'border-b border-white/30 bg-white/10 shadow-sm backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-ink text-sm font-black text-white shadow-soft">
            Y
          </span>
          <span className="font-display text-lg font-bold tracking-[-0.03em] text-ink">YAML AI</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                className={`text-sm font-semibold transition hover:text-sky-900 ${
                  active ? 'text-ink' : 'text-slate-700'
                }`}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Button href="/contact" variant="secondary">
            Book consultation
          </Button>
        </div>

        <button
          aria-label="Toggle navigation"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-sm font-bold text-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open ? (
        <div className="container-x pb-4 lg:hidden">
          <div className="rounded-3xl border border-line bg-white p-3 shadow-card">
            {navLinks.map((link) => (
              <Link
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-skysoft"
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
