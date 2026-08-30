import { useState } from 'react';

const USE_OF_FUNDS = [
  { pct: '40%', label: 'Engineering & Compliance', body: 'FHIR platform, TEFCA/CMS integration, identity & crypto, QHIN participation.' },
  { pct: '20%', label: 'Clinical & AI', body: 'Terminology services, model development & governance, clinician validation.' },
  { pct: '15%', label: 'Regulatory & Legal', body: 'HIPAA/HITRUST/SOC 2 compliance, state privacy counsel, ONC engagement.' },
  { pct: '15%', label: 'Go-to-Market & Ops', body: 'Patient acquisition (beta & GA), employer/payer partnerships, general ops.' },
  { pct: '10%', label: 'Working Capital', body: 'Runway extension, credential service provider contracts.' },
];

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-sand-50 py-24 lg:py-28">
      <div className="bg-grid-muted pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute -top-20 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(50% 50% at 50% 50%, #99f6e4 0%, transparent 70%)' }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <div className="text-xs font-semibold uppercase tracking-widest text-teal-600">The Ask</div>
        <h2 className="mt-4 text-balance font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
          $12–15M Series A
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-navy-800/70">
          To build the patient-controlled national health record platform, live by Q4 2027.
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {USE_OF_FUNDS.map((u) => (
            <div key={u.label} className="rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm">
              <div className="font-display text-2xl font-semibold text-teal-600">{u.pct}</div>
              <div className="mt-2 text-sm font-medium text-navy-900">{u.label}</div>
              <p className="mt-2 text-xs leading-relaxed text-navy-800/55">{u.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-3xl px-6 text-center lg:px-8">
        <p className="text-base leading-relaxed text-navy-800/65">
          In 2027, when CMS-0057-F goes live and TEFCA connectivity becomes the federal standard,
          MedCard will be the first and best platform where patients own, control, and benefit
          from their complete medical records — with no health system or payer middleman.
        </p>
        <p className="mt-6 font-display text-xl font-semibold text-navy-900">
          Patients should own their data. We&rsquo;re building it.
        </p>

        {submitted ? (
          <div className="mx-auto mt-10 max-w-md rounded-full border border-teal-600/20 bg-teal-50 px-6 py-3.5 text-sm font-medium text-teal-700">
            Thanks &mdash; we&rsquo;ll be in touch shortly.
          </div>
        ) : (
          <form
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
              type="email"
              required
              placeholder="you@fund.com"
              className="w-full rounded-full border border-navy-900/15 bg-white px-5 py-3.5 text-sm text-navy-900 placeholder:text-navy-800/35 outline-none focus:border-teal-500"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-teal-500 px-6 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-teal-400"
            >
              Request Deck
            </button>
          </form>
        )}

        <p className="mt-6 text-sm text-navy-800/50">
          Or email us directly at{' '}
          <a href="mailto:info@medcard2026.com" className="font-medium text-teal-600 hover:text-teal-700">
            info@medcard2026.com
          </a>
        </p>
      </div>
    </section>
  );
}
