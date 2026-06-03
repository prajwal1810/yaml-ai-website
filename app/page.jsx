import { Button } from '@/components/Button';
import { CTA } from '@/components/CTA';
import { LogoCloud } from '@/components/LogoCloud';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { StatsGrid } from '@/components/StatsGrid';
import { caseStudies, services, testimonials } from '@/data/site';

const faqs = [
  [
    'What is YAML AI?',
    'YAML AI is an AI automation company that helps real estate professionals and businesses automate lead response, follow-ups, CRM updates, appointment booking and customer communication.'
  ],
  [
    'How does AI automation help real estate agents in India?',
    'AI automation helps real estate agents respond to leads instantly, send follow-up messages, qualify buyers, schedule site visits and keep CRM data updated without manual work.'
  ],
  [
    'Does YAML AI work for Indian real estate teams?',
    'Yes. YAML AI is designed for Indian businesses and can support workflows around WhatsApp, voice calls, lead forms, property inquiries, CRM tools and appointment booking.'
  ],
  [
    'How does YAML AI build an automation?',
    'We start with a discovery call, map the workflow, design the automation logic, connect your tools, test the handoffs and launch the first working version with your team.'
  ],
  [
    'How much time is required to launch?',
    'Most focused automations can go live in 2 to 4 weeks, depending on the workflow, integrations and testing needed.'
  ]
];

export default function HomePage() {
  return (
    <>
      <section className="hero-video-scene relative overflow-hidden pt-32">
        <video
          aria-hidden="true"
          autoPlay
          className="hero-bg-video"
          loop
          muted
          playsInline
          poster="/hero-background.png"
        >
          <source src="/hero-background-video.mp4" type="video/mp4" />
        </video>
        <div className="container-x relative z-10 pb-20 lg:pb-28">
          <Reveal className="mx-auto max-w-5xl text-center">
            <p className="mb-5 inline-flex rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-skybrand shadow-sm">
              AI automation for modern operators
            </p>
            <h1 className="font-display text-balance text-5xl font-bold tracking-[-0.055em] text-ink sm:text-6xl lg:text-7xl">
              Turn <span className="sentence-accent">manual workflows</span> into reliable AI systems.
            </h1>
            <div className="mt-16 flex flex-col justify-center gap-3 sm:mt-20 sm:flex-row">
              <Button href="/contact">Book consultation</Button>
              <Button href="/services" variant="secondary">
                Explore services
              </Button>
            </div>
          </Reveal>
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

      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="FAQ"
            title={
              <>
                Questions teams ask before using <span className="sentence-accent">AI automation</span>.
              </>
            }
            copy="Short answers on how YAML AI fits into real workflows, from lead response to CRM updates."
          />
          <div className="grid gap-4">
            {faqs.map(([question, answer]) => (
              <details className="faq-item rounded-3xl border border-line bg-white p-6 shadow-soft" key={question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-xl font-bold tracking-[-0.03em] text-ink">
                  <span>{question}</span>
                  <span className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full border border-sky-100 bg-skysoft text-skybrand">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
