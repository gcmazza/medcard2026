import { SectionHeading } from './Problem';

const TEAM = [
  { name: 'Founder & CEO', role: 'Product & strategy', initials: 'FC' },
  { name: 'Co-Founder & CTO', role: 'Engineering & security', initials: 'CT' },
  { name: 'Clinical Advisor', role: 'Medical & regulatory', initials: 'CA' },
];

export default function Team() {
  return (
    <section id="team" className="bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Team"
          title="Built by operators in health tech and clinical care."
          body="Bios and photos to be added — placeholder profiles shown below."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <div key={m.name} className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-navy-900/8">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 font-display text-lg font-semibold text-teal-300">
                {m.initials}
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-navy-900">{m.name}</h3>
              <p className="mt-1 text-sm text-navy-800/55">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
