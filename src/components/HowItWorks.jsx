import { SectionHeading } from './Problem';

const STEPS = [
  {
    n: '01',
    title: 'Record Aggregation',
    body: 'Multi-source ingestion from hospitals, labs, pharmacies, and payers. Probabilistic matching plus clinical deduplication. ≥95% data completeness.',
  },
  {
    n: '02',
    title: 'AI Clinical Intelligence',
    body: 'Plain-language summaries, medication interactions, and care gaps — every assertion cited to its source.',
  },
  {
    n: '03',
    title: 'Emergency Access',
    body: 'Break-glass retrieval of critical data (allergies, meds, conditions). Offline-capable, with post-hoc consent disclosure.',
  },
  {
    n: '04',
    title: 'Patient Control',
    body: 'Granular, per-organization consent. Revocation propagates in ≤60 seconds. Patients audit every access event.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Product Capabilities"
          title="Four pillars, built to federal-grade metrics."
          body="Not aspirational targets — the specific, measurable thresholds MedCard is engineered to meet."
        />

        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          <div className="absolute top-8 left-0 hidden h-px w-full bg-navy-900/10 md:block" />
          {STEPS.map((s) => (
            <div key={s.n} className="relative">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 font-display text-lg font-semibold text-teal-300 shadow-md">
                {s.n}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/65">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
