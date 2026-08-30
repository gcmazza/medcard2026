import { SectionHeading } from './Problem';

const MILESTONES = [
  {
    period: 'H1 2025',
    title: 'Founding & discovery',
    body: 'Company founded. Clinical and regulatory advisory board established. 40+ provider and patient interviews completed.',
    status: 'done',
  },
  {
    period: 'H2 2025',
    title: 'Platform build',
    body: 'Core record-consolidation engine and patient app in development. First EHR integration partnerships in progress.',
    status: 'active',
  },
  {
    period: 'H1 2026',
    title: 'Pilot launch',
    body: 'Pilot program with launch health system partners. HIPAA-aligned security review and compliance certification.',
    status: 'upcoming',
  },
  {
    period: 'H2 2026',
    title: 'Commercial rollout',
    body: 'General availability across initial regional markets. Employer benefits partnerships go live.',
    status: 'upcoming',
  },
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
          eyebrow="Roadmap"
          title="Building deliberately toward a 2026 launch."
          body="An early-stage company moving quickly from validation to pilot to commercial scale. Milestones and metrics below will be updated as we progress."
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
                <p className="mt-2 text-sm leading-relaxed text-navy-800/65">{m.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-dashed border-navy-900/15 bg-sand-50 p-6 text-sm text-navy-800/60">
          <span className="font-semibold text-navy-800/80">Note:</span> traction metrics (LOIs, pilot
          partners, waitlist size) will be added here as they become available.
        </div>
      </div>
    </section>
  );
}
