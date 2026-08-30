import { SectionHeading } from './Problem';

const STEPS = [
  {
    n: '01',
    title: 'Connect',
    body: 'Patients link existing providers, pharmacies, and payers in minutes through secure, consented data pulls.',
  },
  {
    n: '02',
    title: 'Consolidate',
    body: 'MedCard normalizes and reconciles records into one clean, chronological medical history — no duplicate or conflicting entries.',
  },
  {
    n: '03',
    title: 'Carry',
    body: 'A digital MedCard, wallet pass, and QR credential travel with the patient — ready for any provider, anywhere.',
  },
  {
    n: '04',
    title: 'Control',
    body: 'Patients decide exactly what is shared, with whom, and for how long — and can revoke access instantly.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="From scattered records to one trusted card."
          body="A simple, consent-driven flow that takes patients from fragmented history to a single verified credential."
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
