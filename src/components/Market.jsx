import { SectionHeading } from './Problem';

const MARKET_LAYERS = [
  {
    label: 'TAM',
    title: 'Global digital health records',
    value: '$45B+',
    body: 'The global personal & electronic health records market, growing at a double-digit CAGR through 2030.',
  },
  {
    label: 'SAM',
    title: 'US patient-facing health data',
    value: '$12B+',
    body: 'US-based patient record access, interoperability, and health-data-sharing platforms.',
  },
  {
    label: 'SOM',
    title: 'Initial launch markets',
    value: '$350M',
    body: 'Serviceable obtainable market across MedCard’s initial regional health systems and employer partnerships.',
  },
];

const TAILWINDS = [
  'Federal interoperability mandates (21st Century Cures Act, TEFCA) requiring patient data access',
  'Rapid consumer adoption of digital wallets and health apps post-2020',
  'Rising employer and payer demand to cut duplicate-testing costs',
  'Provider shift toward value-based care, which rewards complete patient histories',
];

export default function Market() {
  return (
    <section id="market" className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Market Opportunity"
          light
          title="A large, regulation-driven market at an inflection point."
          body="Interoperability mandates and consumer demand for data ownership are converging to make patient-controlled records inevitable."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {MARKET_LAYERS.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">{m.label}</div>
              <div className="mt-4 font-display text-4xl font-semibold text-white">{m.value}</div>
              <div className="mt-2 text-sm font-medium text-white/80">{m.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{m.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <h3 className="font-display text-lg font-semibold text-white">Why now</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {TAILWINDS.map((t) => (
              <div key={t} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 shrink-0 text-teal-400"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm leading-relaxed text-white/70">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
