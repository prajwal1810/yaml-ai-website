import { Button } from '@/components/Button';
import { CTA } from '@/components/CTA';
import { LogoCloud } from '@/components/LogoCloud';
import { ProductMockup } from '@/components/ProductMockup';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { StatsGrid } from '@/components/StatsGrid';
import { caseStudies, services, testimonials } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <section className="soft-grid relative overflow-hidden pt-32">
        <div className="floating-wash absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-skybrand/10 blur-3xl" />
        <div className="container-x grid items-center gap-14 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:pb-28">
          <Reveal>
            <p className="mb-5 inline-flex rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-skybrand shadow-sm">
              AI automation for modern operators
            </p>
            <h1 className="font-display text-balance text-5xl font-bold tracking-[-0.055em] text-ink sm:text-6xl lg:text-7xl">
              Turn <span className="sentence-accent">manual workflows</span> into reliable AI systems.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              YAML AI builds WhatsApp agents, voice agents, CRM automations, and support workflows that help teams respond faster, qualify better, and scale without adding busywork.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Book consultation</Button>
              <Button href="/services" variant="secondary">
                Explore services
              </Button>
            </div>
          </Reveal>
          <ProductMockup />
        </div>
      </section>

      <LogoCloud />

      <section className="section-pad">
        <div className="container-x">
          <SectionHeader
            align="center"
            eyebrow="Automation showcase"
            title={
              <>
                Designed like a <span className="sentence-accent">product</span>. Built like infrastructure.
              </>
            }
            copy="Each system is scoped around one business outcome, then connected to the tools, data, and handoffs your team already depends on."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard index={index} key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad blue-wash">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Business impact"
              title={
                <>
                  A cleaner operating layer for <span className="sentence-accent">leads</span>, chats, calls and CRM.
                </>
              }
              copy="The goal is not to add another tool. It is to remove delay, prevent lead leakage, and give your team a single reliable workflow."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <StatsGrid />
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeader
            eyebrow="Proof"
            title={
              <>
                Outcomes from <span className="sentence-accent">practical</span> automation builds.
              </>
            }
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Reveal delay={index * 0.05} key={study.title}>
                <article className="premium-card-motion h-full rounded-3xl border border-line bg-white p-6 shadow-soft">
                  <p className="text-sm font-bold text-skybrand">{study.client}</p>
                  <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.03em]">{study.title}</h3>
                  <p className="mt-6 rounded-2xl bg-skysoft px-4 py-3 text-sm font-bold text-sky-800">
                    {study.result}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-x">
          <SectionHeader
            align="center"
            eyebrow="Clients"
            title={
              <>
                Built for teams that want less <span className="sentence-accent">noise</span> and more execution.
              </>
            }
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal delay={index * 0.05} key={item.name}>
                <figure className="premium-card-motion h-full rounded-3xl border border-line bg-white p-6 shadow-soft">
                  <blockquote className="text-lg leading-8 text-slate-700">"{item.quote}"</blockquote>
                  <figcaption className="mt-8 border-t border-line pt-4">
                    <div className="font-bold text-ink">{item.name}</div>
                    <div className="text-sm text-slate-500">{item.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
