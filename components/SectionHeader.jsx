export function SectionHeader({ eyebrow, title, copy, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-skybrand">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-balance text-4xl font-bold tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-lg leading-8 text-slate-600">{copy}</p> : null}
    </div>
  );
}
