import { SectionHeading } from './Problem';

const ROWS = [
  { incumbent: 'Legacy IT architecture (non-FHIR)', medcard: 'FHIR-native from day one' },
  { incumbent: 'Incentive misalignment (lock-in)', medcard: 'Patient controls access' },
  { incumbent: 'Slow regulatory adaptation', medcard: 'Regulatory-first design' },
  { incumbent: 'Enterprise sales cycles', medcard: 'Consumer-grade UX' },
];

export default function Competitive() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Competitive Positioning"
          title="Built for what incumbents will be forced to become."
        />

        <div className="mt-14 overflow-hidden rounded-2xl ring-1 ring-navy-900/8">
          <div className="grid grid-cols-2 bg-navy-900 text-white">
            <div className="px-6 py-4 text-sm font-semibold">Incumbent Health Systems &amp; Payers</div>
            <div className="px-6 py-4 text-sm font-semibold text-teal-300">MedCard 2026</div>
          </div>
          {ROWS.map((r, i) => (
            <div
              key={r.incumbent}
              className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-sand-50' : 'bg-white'}`}
            >
              <div className="border-t border-navy-900/8 px-6 py-4 text-sm text-navy-800/60">
                {r.incumbent}
              </div>
              <div className="border-t border-l border-navy-900/8 px-6 py-4 text-sm font-medium text-navy-900">
                {r.medcard}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-teal-50 p-8 ring-1 ring-teal-600/10">
          <h3 className="font-display text-base font-semibold text-navy-900">Why this matters</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-navy-800/70">
            MedCard is not competing with health systems — we&rsquo;re leveraging the regulatory
            framework they&rsquo;ll be forced to build into. Federal mandates (TEFCA, CMS-0057-F)
            make incumbents&rsquo; legacy architecture increasingly untenable. We win by being
            first to build exclusively for the regulated future state.
          </p>
        </div>
      </div>
    </section>
  );
}
