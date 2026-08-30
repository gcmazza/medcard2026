import { SectionHeading } from './Problem';

const FEATURES = [
  {
    title: 'One patient-owned record',
    body: 'Every visit, lab, prescription, and imaging result consolidated into a single longitudinal record the patient controls.',
    icon: 'card',
  },
  {
    title: 'Instant, verified access',
    body: 'A secure digital card and QR credential gives providers real-time access at check-in — no faxes, no phone trees.',
    icon: 'bolt',
  },
  {
    title: 'Interoperable by design',
    body: 'Built on FHIR and HL7 standards with direct integrations into major EHRs, labs, and pharmacy networks.',
    icon: 'link',
  },
  {
    title: 'Privacy & consent first',
    body: 'Patients grant and revoke access per provider, per visit, with a full audit trail. HIPAA-aligned architecture from day one.',
    icon: 'shield',
  },
];

const ICONS = {
  card: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z M3 10h18 M7 15h4" />
  ),
  bolt: <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  link: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17H7a5 5 0 010-10h2m6 10h2a5 5 0 000-10h-2M8 12h8" />
  ),
  shield: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z" />
  ),
};

export default function Product() {
  return (
    <section id="product" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Product"
          title="A single card. A complete medical history."
          body="MedCard unifies clinical, pharmacy, and diagnostic data into one patient-owned profile — accessible in seconds by the people you choose to share it with."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
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
    </section>
  );
}
