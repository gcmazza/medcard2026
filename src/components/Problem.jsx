const PAIN_POINTS = [
  {
    title: 'Fragmented records',
    body: 'The average patient’s history is scattered across 5+ disconnected provider systems, with no single source of truth.',
  },
  {
    title: 'Costly duplication',
    body: 'Missing records drive an estimated $25B+ a year in unnecessary, duplicate testing and imaging in the US alone.',
  },
  {
    title: 'Dangerous gaps in care',
    body: 'Emergency and urgent care teams routinely treat patients without allergy, medication, or history data — raising real clinical risk.',
  },
  {
    title: 'Patients locked out',
    body: 'Patients rarely have a usable, portable copy of their own health data — despite owning the legal right to it.',
  },
];

export default function Problem() {
  return (
    <section id="problem" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Problem"
          title="Health records were built for institutions, not patients."
          body="Every provider, pharmacy, and payer keeps its own version of the truth. The patient — the one person who touches every part of their own care — is left without a complete picture."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PAIN_POINTS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.3 3.9L1.8 18a1.7 1.7 0 001.5 2.5h17.4a1.7 1.7 0 001.5-2.5L13.7 3.9a1.7 1.7 0 00-3.4 0z" />
                </svg>
              </div>
              <h3 className="font-display text-base font-semibold text-navy-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/65">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, body, light = false, align = 'left' }) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : '';
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <div
        className={`mb-4 text-xs font-semibold uppercase tracking-widest ${
          light ? 'text-teal-300' : 'text-teal-600'
        }`}
      >
        {eyebrow}
      </div>
      <h2
        className={`text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {body && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-white/70' : 'text-navy-800/65'}`}>
          {body}
        </p>
      )}
    </div>
  );
}
