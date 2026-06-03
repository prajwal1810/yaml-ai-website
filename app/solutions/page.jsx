import { Button } from '@/components/Button';
import { CTA } from '@/components/CTA';
import { SectionHeader } from '@/components/SectionHeader';
import { solutions } from '@/data/site';

export const metadata = {
  title: 'AI Automation Solutions for Indian Businesses',
  description:
    'Industry-specific AI automation solutions for real estate, healthcare, education and local businesses in India.',
  alternates: {
    canonical: '/solutions/'
  },
  openGraph: {
    title: 'AI Automation Solutions for Indian Businesses | YAML AI',
    description:
      'See how YAML AI builds practical automation workflows for real estate, healthcare, education and local business teams.',
    url: 'https://yamlai.in/solutions/'
  }
};

export default function SolutionsPage() {
  return (
    <>
      <section className="pt-32">
        <div className="container-x pb-20">
          <SectionHeader
            eyebrow="Solutions"
            title={
              <>
                Automation designed around the way your industry <span className="sentence-accent">sells</span> and serves.
              </>
            }
            copy="The same AI agent should not be dropped into every business. YAML AI shapes the workflow around your customer journey, language, tools, and escalation rules."
          />
        </div>
      </section>
      <section className="section-pad bg-slate-50">
        <div className="container-x grid gap-5 md:grid-cols-2">
          {solutions.map((solution) => (
            <article className="rounded-[2rem] border border-line bg-white p-7 shadow-soft" key={solution.title}>
              <p className="text-sm font-bold text-skybrand">{solution.metrics}</p>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.04em]">{solution.title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{solution.summary}</p>
              <div className="mt-8">
                <Button href="/contact" variant="secondary">
                  Discuss this solution
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
