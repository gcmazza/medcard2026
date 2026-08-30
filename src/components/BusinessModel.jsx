import { SectionHeading } from './Problem';

const STREAMS = [
  {
    title: 'Health system & payer licensing',
    body: 'SaaS subscriptions for hospital networks and insurers to reduce duplicate testing and improve care coordination.',
    tag: 'B2B2C',
  },
  {
    title: 'Employer & benefits partnerships',
    body: 'Per-employee-per-month pricing bundled into employer health benefits and wellness platforms.',
    tag: 'B2B',
  },
  {
    title: 'Premium patient subscription',
    body: 'Optional consumer tier for family record management, travel-ready records, and priority data portability.',
    tag: 'B2C',
  },
  {
    title: 'Data interoperability API',
    body: 'Usage-based API access for EHR vendors, labs, and pharmacy networks integrating with the MedCard network.',
    tag: 'Platform',
  },
];

export default function BusinessModel() {
  return (
    <section id="model" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Business Model"
          title="Multiple durable revenue streams, anchored in B2B2C distribution."
          body="MedCard reaches patients through the institutions they already trust — then deepens engagement directly with consumers over time."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
