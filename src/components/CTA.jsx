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
    <section id="contact" className="relative overflow-hidden bg-navy-900 py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ background: 'radial-gradient(60% 60% at 50% 0%, rgba(20,184,166,0.25) 0%, transparent 70%)' }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">The Ask</div>
        <h2 className="mt-4 text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
          $12–15M Series A
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
          To build the patient-controlled national health record platform, live by Q4 2027.
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {USE_OF_FUNDS.map((u) => (
            <div key={u.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="font-display text-2xl font-semibold text-teal-300">{u.pct}</div>
              <div className="mt-2 text-sm font-medium text-white/85">{u.label}</div>
              <p className="mt-2 text-xs leading-relaxed text-white/50">{u.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-3xl px-6 text-center lg:px-8">
        <p className="text-base leading-relaxed text-white/60">
          In 2027, when CMS-0057-F goes live and TEFCA connectivity becomes the federal standard,
          MedCard will be the first and best platform where patients own, control, and benefit
          from their complete medical records — with no health system or payer middleman.
        </p>
        <p className="mt-6 font-display text-xl font-semibold text-white">
          Patients should own their data. We&rsquo;re building it.
        </p>

        {submitted ? (
          <div className="mx-auto mt-10 max-w-md rounded-full border border-teal-400/30 bg-teal-400/10 px-6 py-3.5 text-sm font-medium text-teal-300">
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
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-teal-400"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-teal-500 px-6 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-teal-400"
            >
              Request Deck
            </button>
          </form>
        )}

        <p className="mt-6 text-sm text-white/45">
          Or email us directly at{' '}
          <a href="mailto:info@medcard2026.com" className="font-medium text-teal-300 hover:text-teal-200">
            info@medcard2026.com
          </a>
        </p>
      </div>
    </section>
  );
}
