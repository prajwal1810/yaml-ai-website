'use client';

import { motion } from 'framer-motion';
import { Icon } from './Icon';

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 44,
    scale: 0.96,
    filter: 'blur(10px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)'
  }
};

export function ServiceCard({ service, index = 0 }) {
  return (
    <motion.article
      className="service-card group relative overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-skybrand/35 hover:shadow-card"
      initial="hidden"
      variants={cardVariants}
      whileInView="visible"
      viewport={{ once: true, amount: 0.36, margin: '0px 0px -70px 0px' }}
      transition={{
        duration: 0.72,
        delay: index * 0.11,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <div className="relative z-10 mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-skysoft text-skybrand ring-1 ring-skybrand/10 transition duration-300 group-hover:scale-105 group-hover:bg-skybrand group-hover:text-white">
        <Icon name={service.icon} />
      </div>
      <h3 className="relative z-10 font-display text-2xl font-bold tracking-[-0.03em] text-ink">{service.title}</h3>
      <p className="relative z-10 mt-3 leading-7 text-slate-600">{service.summary}</p>
      <div className="relative z-10 mt-7 flex flex-wrap gap-2">
        {service.bullets.map((item) => (
          <span
            className="rounded-full border border-line bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 transition group-hover:border-skybrand/20 group-hover:bg-skysoft/70"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
