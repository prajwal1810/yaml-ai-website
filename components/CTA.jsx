import { Button } from './Button';

export function CTA() {
  return (
    <section className="section-pad">
      <div className="container-x rounded-[2rem] bg-ink px-6 py-14 text-center text-white shadow-card sm:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">Start with one high-impact workflow</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          Build the automation your team will actually use.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
          Book a practical audit. We will tell you what to automate first, what to ignore, and how quickly it can go live.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/contact" variant="secondary" className="border-white bg-white text-ink hover:bg-sky-100">
            Book consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
