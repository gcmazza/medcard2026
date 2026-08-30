import { SectionHeading } from './Problem';

const MARKET_STATS = [
  { value: '330M', label: 'US population' },
  { value: '133M', label: 'People with chronic conditions' },
  { value: '924K', label: 'Hospital beds nationwide' },
  { value: '1.2B', label: 'Ambulatory encounters / year' },
];

const TAILWINDS = [
  { title: 'TEFCA', body: 'Trusted Exchange Framework enables patient-directed data sharing.' },
  { title: 'USCDI v3/v4', body: 'Mandates electronic access to standardized health data elements.' },
  { title: 'SSRAA', body: 'Requires strong identity verification (NIST IAL2) for patient access.' },
  { title: 'CMS-0057-F', body: 'Compels payers to expose APIs; Jan 1, 2027 go-live.' },
  { title: 'Information Blocking', body: 'ONC enforcement is tightening — data must be accessible to patients.' },
];

export default function Market() {
  return (
    <section id="market" className="relative overflow-hidden bg-sand-100 py-24 lg:py-32">
      <div className="bg-grid-muted pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Market Opportunity"
          title="A large population, an inevitable regulatory shift."
          body="Federal mandates and consumer demand for data ownership are converging to make patient-controlled records inevitable — not just possible."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MARKET_STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-navy-900/8 bg-white p-8 shadow-sm"
            >
              <div className="font-display text-4xl font-semibold text-navy-900">{s.value}</div>
              <div className="mt-2 text-sm leading-snug text-navy-800/60">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-navy-900 p-8 lg:p-10">
          <h3 className="font-display text-lg font-semibold text-white">Why Now: Federal Tailwinds</h3>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TAILWINDS.map((t) => (
              <div key={t.title} className="flex items-start gap-3">
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
                <div>
                  <div className="text-sm font-semibold text-white/90">{t.title}</div>
                  <div className="mt-0.5 text-sm leading-relaxed text-white/60">{t.body}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/50">
            These regulatory catalysts make patient-controlled data aggregation not just possible —
            it&rsquo;s inevitable.
          </p>
        </div>
      </div>
    </section>
  );
}
