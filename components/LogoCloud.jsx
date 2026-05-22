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
    <section className="border-y border-line bg-white py-7 sm:py-8">
      <div className="container-x grid items-center gap-5 lg:grid-cols-[260px_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-skybrand">Integrations</p>
          <p className="mt-1 text-sm font-semibold text-slate-500">Works with the tools your team already uses</p>
        </div>
        <div className="marquee-shell">
          <div className="marquee-track" aria-label="Supported integrations">
            {strip.map((logo, index) => (
              <div
                aria-hidden={index >= logos.length}
                className="shrink-0 rounded-full border border-line bg-slate-50 px-4 py-2.5 text-center text-xs font-bold text-slate-600 shadow-sm sm:px-5 sm:py-3"
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
