import { SectionHeading } from './Problem';

const MILESTONES = [
  {
    period: 'Q1–Q2 2026',
    title: 'Foundation',
    items: ['Identity (SSRAA)', 'Consent Ledger', 'FHIR Substrate', '1st QHIN'],
    status: 'done',
  },
  {
    period: 'Q3–Q4 2026',
    title: 'Aggregation',
    items: ['Record Engine Live', '3 QHIN Routes', '5 Payer APIs', 'Beta (2.5K users)'],
    status: 'active',
  },
  {
    period: 'Q1–Q2 2027',
    title: 'Intelligence',
    items: ['AI Insights', 'Emergency Access', 'HITRUST Cert', 'SOC 2 Type II'],
    status: 'upcoming',
  },
  {
    period: 'Q3–Q4 2027',
    title: 'Scale',
    items: ['GA Launch', 'CMS-0057-F Live', 'Analytics Revenue', 'Research Licensing'],
    status: 'upcoming',
  },
];

const KEY_METRICS = [
  { value: '≥85%', label: 'of U.S. hospital beds connected' },
  { value: '≥80%', label: 'of ambulatory encounters covered' },
  { value: '<10 min', label: 'median time to complete record assembly' },
  { value: '≥95%', label: 'data completeness per source' },
  { value: '≥99.5%', label: 'duplicate-collapse accuracy' },
  { value: '100%', label: 'of data access events logged' },
  { value: '≤60 sec', label: 'consent revocation propagation' },
  { value: 'Zero', label: 'critical findings on HIPAA/HITRUST/SOC 2' },
];

const STATUS_STYLES = {
  done: 'bg-teal-500 text-white',
  active: 'bg-teal-500/20 text-teal-700 ring-2 ring-teal-500',
  upcoming: 'bg-white text-navy-900/40 ring-1 ring-navy-900/15',
};

export default function Roadmap() {
  return (
    <section id="traction" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="24-Month Execution Timeline"
          title="Clear gates. Staged conformance. Named accountability."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {MILESTONES.map((m) => (
            <div key={m.period} className="flex flex-col">
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-3 w-3 shrink-0 items-center justify-center rounded-full ${STATUS_STYLES[m.status]}`}
                />
                <span className="text-xs font-semibold uppercase tracking-widest text-navy-800/50">
                  {m.period}
                </span>
              </div>
              <div className="mt-4 border-l-2 border-navy-900/10 pl-5">
                <h3 className="font-display text-base font-semibold text-navy-900">{m.title}</h3>
                <ul className="mt-2 space-y-1">
                  {m.items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-navy-800/65">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-navy-800/50">
          Gate-based: no module development without substrate conformance validation.
        </p>

        <div className="mt-16 rounded-2xl bg-navy-900 p-8 lg:p-10">
          <h3 className="font-display text-lg font-semibold text-white">
            Key Success Metrics <span className="text-white/40">(end of 2027)</span>
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {KEY_METRICS.map((m) => (
              <div key={m.label}>
                <div className="font-display text-2xl font-semibold text-teal-300">{m.value}</div>
                <div className="mt-1 text-xs leading-snug text-white/55">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
