const logos = [
  'Zoho CRM',
  'HubSpot',
  'WhatsApp Business',
  'Twilio',
  'Calendly',
  'Razorpay',
  'Google Calendar',
  'Airtable',
  'Slack',
  'Notion',
  'Make',
  'n8n'
];

export function LogoCloud() {
  const strip = [...logos, ...logos];

  return (
    <section className="relative z-20 -mt-16 pb-10 sm:-mt-20">
      <div className="container-x grid items-center gap-5 rounded-[2rem] border border-sky-100/80 bg-white/50 px-5 py-5 shadow-[0_24px_80px_rgba(14,165,233,0.11)] backdrop-blur-xl sm:px-7 lg:grid-cols-[260px_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-skybrand">Integrations</p>
          <p className="mt-1 text-sm font-semibold text-slate-600">Works with the tools your team already uses</p>
        </div>
        <div className="marquee-shell">
          <div className="marquee-track" aria-label="Supported integrations">
            {strip.map((logo, index) => (
              <div
                aria-hidden={index >= logos.length}
                className="shrink-0 rounded-full border border-sky-200/90 bg-white/75 px-4 py-2.5 text-center text-xs font-bold text-slate-700 shadow-[0_10px_30px_rgba(14,165,233,0.09)] backdrop-blur sm:px-5 sm:py-3"
                key={`${logo}-${index}`}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
