import { SectionHeading } from './Problem';

const PILLARS = [
  {
    title: 'FHIR-Native Architecture',
    body: 'Not retrofitted. Built from day one on FHIR R4/US Core — impossible for incumbents to replicate without rebuilding legacy systems.',
  },
  {
    title: 'TEFCA Connectivity',
    body: '≥3 independent QHIN routes with automated failover. Direct access to the national exchange fabric.',
  },
  {
    title: 'SSRAA Identity',
    body: 'Biometric-secured, NIST IAL2 identity proofing. The patient never shares credentials with sources.',
  },
  {
    title: 'Consent Ledger',
    body: 'Blockchain-anchored, tamper-proof audit trail. Every access event is cryptographically recorded.',
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Defensible Architecture"
          title="Built on federal compliance — that’s the moat."
          body="Every layer of MedCard is built for the regulated future state, not retrofitted for it — making the architecture difficult for incumbents to replicate."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-900/8">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-base font-semibold text-navy-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/65">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
