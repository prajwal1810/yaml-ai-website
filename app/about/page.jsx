import { CTA } from '@/components/CTA';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata = {
  title: 'About'
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32">
        <div className="container-x grid gap-12 pb-20 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeader
            eyebrow="About YAML AI"
            title={
              <>
                A practical AI automation company for teams that care about <span className="sentence-accent">execution</span>.
              </>
            }
            copy="We build AI systems that sit inside real business operations: lead response, customer support, CRM hygiene, booking flows, and follow-ups."
          />
          <div className="rounded-[2rem] border border-line bg-white p-7 shadow-soft">
            <p className="text-lg leading-8 text-slate-700">
              The companies we work with do not need a magic demo. They need reliable workflows that save time, protect revenue, and make teams faster. YAML AI combines workflow thinking, product design, automation engineering, and ongoing optimization into one focused build process.
            </p>
          </div>
        </div>
      </section>
      <section className="section-pad bg-slate-50">
        <div className="container-x grid gap-5 md:grid-cols-3">
          {[
            ['Mission', 'Make practical AI automation accessible to businesses that need operational speed, not hype.'],
            ['Vision', 'Every growing team should have AI operators handling repetitive work with clean handoffs to humans.'],
            ['Principle', 'Automation is only successful when the team trusts it enough to use it every day.']
          ].map(([title, copy]) => (
            <article className="rounded-3xl border border-line bg-white p-7 shadow-soft" key={title}>
              <h2 className="font-display text-2xl font-bold tracking-[-0.03em]">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-pad">
        <div className="container-x rounded-[2rem] border border-line bg-white p-8 shadow-soft lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="font-display text-4xl font-bold tracking-[-0.04em]">How we work</h2>
            <div className="grid gap-4">
              {['Find the workflow with the biggest revenue drag.', 'Build a focused AI system around that workflow.', 'Connect it to your existing tools and team handoffs.', 'Measure, improve, and expand only when the first system works.'].map((item, index) => (
                <div className="flex gap-4 rounded-2xl bg-slate-50 p-4" key={item}>
                  <span className="font-mono text-sm font-bold text-skybrand">0{index + 1}</span>
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
