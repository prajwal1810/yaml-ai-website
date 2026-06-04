import { ContactForm } from '@/components/ContactForm';
import { SectionHeader } from '@/components/SectionHeader';

const calendlyUrl = 'https://calendly.com/prajwalmurkewar/30min';

export const metadata = {
  title: 'Contact YAML AI',
  description:
    'Contact YAML AI to discuss AI agents, real estate automation, WhatsApp automation, CRM workflows and lead conversion systems.',
  alternates: {
    canonical: '/contact/'
  },
  openGraph: {
    title: 'Contact YAML AI',
    description:
      'Book a consultation or send your automation brief to YAML AI for practical AI workflow recommendations.',
    url: 'https://yamlai.in/contact/'
  }
};

export default function ContactPage() {
  return (
    <section className="blue-wash min-h-screen pt-32">
      <div className="container-x grid gap-10 pb-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title={
              <>
                Tell us what your team is still doing <span className="sentence-accent">manually</span>.
              </>
            }
            copy="We will look at your workflow, suggest the first automation worth building, and give you a practical launch path."
          />
          <div className="mt-8 grid gap-3">
            <a
              className="rounded-3xl border border-line bg-white p-5 font-semibold text-ink shadow-soft transition hover:border-skybrand/30"
              href={calendlyUrl}
              rel="noreferrer"
              target="_blank"
            >
              Book directly on Calendly
            </a>
            <a
              className="rounded-3xl border border-line bg-white p-5 font-semibold text-ink shadow-soft transition hover:border-skybrand/30"
              href="https://wa.me/918149351697?text=hii%20i%20need%20automation"
              rel="noreferrer"
              target="_blank"
            >
              WhatsApp YAML AI
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
      <div className="container-x pb-20">
        <section className="overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-card">
          <div className="border-b border-line px-5 py-5 sm:px-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-skybrand">Schedule a call</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.04em] text-ink">
              Pick a time that works for you.
            </h2>
          </div>
          <iframe
            className="h-[760px] w-full border-0"
            loading="lazy"
            src={calendlyUrl}
            title="Schedule a YAML AI consultation on Calendly"
          />
        </section>
      </div>
    </section>
  );
}
