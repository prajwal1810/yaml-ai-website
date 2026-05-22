import { stats } from '@/data/site';

export function StatsGrid() {
  return (
    <div className="grid overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft md:grid-cols-4">
      {stats.map(([value, label]) => (
        <div className="border-line p-7 text-center md:border-r md:last:border-r-0" key={label}>
          <div className="font-display text-4xl font-bold tracking-[-0.05em] text-ink">{value}</div>
          <div className="mt-2 text-sm font-semibold text-slate-500">{label}</div>
        </div>
      ))}
    </div>
  );
}
