'use client';

import { motion } from 'framer-motion';
import { Icon } from './Icon';

export function ServiceCard({ service, index = 0 }) {
  return (
    <motion.article
      className="group rounded-3xl border border-line bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-skybrand/30 hover:shadow-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
    >
      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-skysoft text-skybrand ring-1 ring-skybrand/10 transition group-hover:scale-105">
        <Icon name={service.icon} />
      </div>
      <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-ink">{service.title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{service.summary}</p>
      <div className="mt-7 flex flex-wrap gap-2">
        {service.bullets.map((item) => (
          <span
            className="rounded-full border border-line bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
