import { useState } from 'react';
import { SectionHeading } from './Problem';
import DemoModal from './DemoModal';

const FEATURES = [
  {
    title: 'Full-source aggregation',
    body: 'A single mobile app aggregating 100% of a patient’s medical records — regardless of source.',
    icon: 'layers',
  },
  {
    title: 'Patient-centered',
    body: 'The patient sits at the center of their own medical information universe — not the health system.',
    icon: 'target',
  },
  {
    title: 'FHIR-native interoperability',
    body: 'Built on a FHIR-native architecture connecting directly to hospitals, labs, pharmacies, and payers.',
    icon: 'link',
  },
  {
    title: 'Biometric security & consent',
    body: 'Biometric-secured access with granular, per-organization consent controls the patient fully owns.',
    icon: 'shield',
  },
  {
    title: 'AI clinical insights',
    body: 'AI-powered clinical insights with source attribution on every assertion — nothing is a black box.',
    icon: 'spark',
  },
  {
    title: 'Emergency access',
    body: 'Break-glass emergency access to critical data, with offline capability when it matters most.',
    icon: 'bolt',
  },
];

const ICONS = {
  layers: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 5-9 5-9-5 9-5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l9 5 9-5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.5" fill="currentColor" />
    </>
  ),
  bolt: <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  link: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17H7a5 5 0 010-10h2m6 10h2a5 5 0 000-10h-2M8 12h8" />
  ),
  shield: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z" />
  ),
  spark: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />
    </>
  ),
};

export default function Product() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section id="product" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The Solution"
            title="MedCard: the patient-controlled health record platform."
            body="A single mobile app that aggregates every medical record — regardless of source — with the patient at the center of their own medical information universe."
          />
          <button
            onClick={() => setDemoOpen(true)}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-navy-800 hover:shadow-md"
          >
            See the Demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
            </svg>
          </button>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group flex gap-5 rounded-2xl border border-navy-900/8 p-6 transition-colors hover:border-teal-500/30 hover:bg-teal-50/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-teal-300 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {ICONS[f.icon]}
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/65">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
