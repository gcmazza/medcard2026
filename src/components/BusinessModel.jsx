import { SectionHeading } from './Problem';

const STREAMS = [
  {
    title: 'Employer & Payer Analytics',
    body: 'De-identified population insights for benefits design and care optimization.',
    tag: 'B2B',
  },
  {
    title: 'Research Data Licensing',
    body: 'Opt-in patient data licensed for pharmaceutical and medical device research.',
    tag: 'B2B',
  },
  {
    title: 'Premium Consumer Features',
    body: 'Advanced AI insights, plus integration with wearables and preventive-health tools.',
    tag: 'B2C',
  },
];

export default function BusinessModel() {
  return (
    <section id="model" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Business Model"
          title="Revenue streams built on trust, not data sale."
          body="MedCard monetizes de-identified insights and opt-in research access — never a patient’s raw record without their consent."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STREAMS.map((s) => (
            <div key={s.title} className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-900/8">
              <span className="inline-flex w-fit items-center rounded-full bg-teal-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-teal-700">
                {s.tag}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/65">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
