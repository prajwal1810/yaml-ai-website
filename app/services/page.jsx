import { CTA } from '@/components/CTA';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/data/site';

export const metadata = {
  title: 'Services'
};

export default function ServicesPage() {
  return (
    <>
      <section className="blue-wash pt-32">
        <div className="container-x pb-20">
          <SectionHeader
            eyebrow="Services"
            title={
              <>
                AI systems for the workflows that decide <span className="sentence-accent">revenue</span>.
              </>
            }
            copy="Pick the workflow with the highest drag on your team. We design, build, connect, test, and improve the automation until it is useful in daily operations."
          />
        </div>
      </section>
      <section className="section-pad">
        <div className="container-x grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard index={index} key={service.title} service={service} />
          ))}
        </div>
      </section>
      <section className="section-pad bg-slate-50">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {['Workflow design', 'Integration build', 'Launch support'].map((title, index) => (
            <div className="rounded-3xl border border-line bg-white p-7 shadow-soft" key={title}>
              <div className="text-sm font-bold text-skybrand">0{index + 1}</div>
              <h2 className="mt-8 font-display text-2xl font-bold tracking-[-0.03em]">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">
                We keep the engagement focused, measurable, and easy for your internal team to adopt.
              </p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
