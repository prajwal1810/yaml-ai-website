import { Button } from '@/components/Button';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata = {
  title: 'Contact'
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
              href="https://calendly.com/yamlai/demo"
              rel="noreferrer"
              target="_blank"
            >
              Calendly integration placeholder
            </a>
            <a
              className="rounded-3xl border border-line bg-white p-5 font-semibold text-ink shadow-soft transition hover:border-skybrand/30"
              href="https://wa.me/919000000000?text=Hi%20YAML%20AI%2C%20I%20want%20to%20discuss%20automation"
              rel="noreferrer"
              target="_blank"
            >
              WhatsApp YAML AI
            </a>
          </div>
        </div>

        <form
          className="rounded-[2rem] border border-line bg-white p-5 shadow-card sm:p-7"
          data-netlify="true"
          method="POST"
          name="automation-audit"
          netlify-honeypot="bot-field"
        >
          <input name="form-name" type="hidden" value="automation-audit" />
          <p className="hidden">
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Company" name="company" required />
            <Field label="Email" name="email" required type="email" />
            <Field label="WhatsApp / Phone" name="phone" />
          </div>
          <label className="mt-4 block">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Automation needed
            </span>
            <select
              className="focus-ring w-full rounded-2xl border border-line bg-white px-4 py-4 text-ink transition focus:border-skybrand/40"
              name="workflow"
              required
            >
              {['WhatsApp AI Agents', 'AI Voice Calling', 'CRM Automation', 'Lead Qualification', 'Customer Support', 'Appointment Booking', 'Not sure yet'].map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="mt-4 block">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              What should AI handle first?
            </span>
            <textarea
              className="focus-ring min-h-36 w-full resize-y rounded-2xl border border-line bg-white px-4 py-4 text-ink transition placeholder:text-slate-400 focus:border-skybrand/40"
              name="message"
              placeholder="Example: New leads come from Meta ads and WhatsApp, but our team replies late and forgets to update Zoho."
              required
            />
          </label>
          <button
            className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink px-6 text-sm font-bold text-white transition hover:bg-slate-800"
            type="submit"
          >
            Send automation brief
          </button>
          <div className="mt-4 flex justify-center">
            <Button href="/" variant="secondary">
              Back to home
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', required = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{label}</span>
      <input
        className="focus-ring w-full rounded-2xl border border-line bg-white px-4 py-4 text-ink transition placeholder:text-slate-400 focus:border-skybrand/40"
        name={name}
        required={required}
        type={type}
      />
    </label>
  );
}
