import { SectionHeading } from './Problem';

const ROLES = [
  'Platform & Substrate Architecture',
  'Identity & Cryptography',
  'Interoperability & QHIN Relations',
  'Clinical Informatics (MD/PharmD-led)',
  'AI Governance & Model Risk',
  'Regulatory & Privacy Counsel',
  'Security Engineering',
  'Mobile Experience',
  'Commercial & Data Licensing',
];

export default function Team() {
  return (
    <section id="team" className="bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Team"
          title="Named accountability, from day one."
          body="Each role carries explicit authority, measurable goals, and quarterly conformance gates."
        />

        <div className="mt-16 max-w-sm">
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-navy-900/8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 font-display text-lg font-semibold text-teal-300">
              GM
            </div>
            <h3 className="mt-4 font-display text-base font-semibold text-navy-900">Greg Mazza</h3>
            <p className="mt-1 text-sm text-navy-800/55">Chief Executive Officer</p>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-navy-800/50">
            Accountability structure being built out
          </h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {ROLES.map((role) => (
              <span
                key={role}
                className="rounded-full bg-white px-4 py-2 text-sm text-navy-800/75 ring-1 ring-navy-900/8"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-navy-900/15 bg-white p-6 text-sm leading-relaxed text-navy-800/60">
          <span className="font-semibold text-navy-800/80">Required external partners:</span> QHIN
          agreements (≥3), IAL2 credential provider, HIPAA-eligible BAA-covered cloud, terminology
          licenses (SNOMED CT, CPT, RxNorm via UMLS), HITRUST assessor, IRB partner.
        </div>
      </div>
    </section>
  );
}
