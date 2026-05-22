'use client';

import { motion } from 'framer-motion';

const conversations = [
  ['New lead', 'WhatsApp inquiry captured from campaign'],
  ['AI agent', 'Qualified budget, timeline and use case'],
  ['CRM', 'Deal created, owner assigned, call booked']
];

export function ProductMockup() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      className="relative mx-auto w-full max-w-xl"
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="absolute -inset-6 rounded-[2rem] bg-skybrand/10 blur-3xl" />
      <div className="glass-light relative overflow-hidden rounded-[2rem]">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-skybrand">YAML OS</p>
            <h3 className="mt-1 font-display text-xl font-bold tracking-[-0.03em]">Lead automation dashboard</h3>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Live</span>
        </div>

        <div className="grid gap-4 p-5 md:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-3">
            {conversations.map(([label, text], index) => (
              <motion.div
                className="rounded-2xl border border-line bg-white p-4"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.12 }}
                key={label}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">{label}</span>
                  <span className="h-2 w-2 rounded-full bg-skybrand" />
                </div>
                <p className="text-sm leading-6 text-slate-700">{text}</p>
              </motion.div>
            ))}
          </div>

          <div className="rounded-2xl border border-line bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Today</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                ['128', 'leads'],
                ['42', 'booked'],
                ['91%', 'sync rate'],
                ['18s', 'reply']
              ].map(([num, label]) => (
                <div className="rounded-2xl bg-white p-3 ring-1 ring-line" key={label}>
                  <div className="font-display text-2xl font-bold tracking-[-0.04em] text-ink">{num}</div>
                  <div className="text-xs text-slate-500">{label}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-white p-3 ring-1 ring-line">
              <div className="mb-3 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Pipeline quality</span>
                <span>High</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  animate={{ width: '82%' }}
                  className="h-full rounded-full bg-skybrand"
                  initial={{ width: 0 }}
                  transition={{ delay: 0.4, duration: 0.9 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
