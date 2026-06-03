import { CTA } from '@/components/CTA';
import { SectionHeader } from '@/components/SectionHeader';
import { caseStudies } from '@/data/site';

export const metadata = {
  title: 'AI Automation Case Studies',
  description:
    'See YAML AI case studies showing faster lead response, fewer manual follow-ups, cleaner CRM data and stronger customer workflows.',
  alternates: {
    canonical: '/case-studies/'
  },
  openGraph: {
    title: 'AI Automation Case Studies | YAML AI',
    description:
      'Real before-and-after examples of practical AI automation for lead response, appointment reminders and CRM workflows.',
    url: 'https://yamlai.in/case-studies/'
  }
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="blue-wash pt-32">
        <div className="container-x pb-20">
          <SectionHeader
            eyebrow="Case studies"
            title={
              <>
                Real workflows. Clear <span className="sentence-accent">before and after</span>.
              </>
            }
            copy="A premium AI automation build should make operations easier to see, easier to measure, and easier to scale."
          />
        </div>
      </section>
      <section className="section-pad">
        <div className="container-x grid gap-6">
          {caseStudies.map((study) => (
            <article className="rounded-[2rem] border border-line bg-white p-6 shadow-soft lg:p-8" key={study.title}>
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-sm font-bold text-skybrand">{study.client}</p>
                  <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.04em] text-ink lg:text-4xl">
                    {study.title}
                  </h2>
                  <p className="mt-6 inline-flex rounded-2xl bg-skysoft px-4 py-3 text-sm font-bold text-sky-800">
                    {study.result}
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-line bg-slate-50 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Before</p>
                    <p className="mt-4 leading-7 text-slate-700">{study.before}</p>
                  </div>
                  <div className="rounded-3xl border border-sky-200 bg-skysoft p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-skybrand">After</p>
                    <p className="mt-4 leading-7 text-slate-800">{study.after}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
