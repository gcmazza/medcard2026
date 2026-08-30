export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-sand-50 pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="bg-grid-muted pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, #5eead4 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, #99f6e4 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-teal-600/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-700 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            Series A &middot; Digital Health
          </div>

          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.1] text-navy-900 sm:text-5xl lg:text-[3.4rem]">
            Patient-controlled,
            <span className="text-teal-600"> national health records.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-800/70">
            MedCard aggregates 100% of a patient&rsquo;s medical records — regardless
            of source — into a single, biometric-secured app. The patient sits at
            the center of their own medical information universe, not the health
            system.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-teal-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-teal-500/20 transition-all hover:bg-teal-400 hover:shadow-teal-400/30"
            >
              Request Investor Deck
            </a>
            <a
              href="#product"
              className="rounded-full border border-navy-900/15 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-all hover:border-navy-900/30 hover:bg-navy-900/5"
            >
              See the Product &darr;
            </a>
          </div>

          <div className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-navy-900/10 pt-8">
            <Stat value="330M" label="US population addressable" />
            <Stat value="$12–15M" label="Series A raise" />
            <Stat value="Q4 2027" label="Target GA launch" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <MedCardVisual />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="font-display text-2xl font-semibold text-navy-900">{value}</div>
      <div className="mt-1 text-xs leading-snug text-navy-800/55">{label}</div>
    </div>
  );
}

function MedCardVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-teal-400/20 to-transparent blur-2xl" />

      <div className="relative rounded-3xl border border-navy-900/8 bg-white p-6 shadow-2xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 via-navy-700 to-teal-700 p-6 shadow-xl">
          <div className="bg-grid absolute inset-0 opacity-20" />
          <div className="relative flex items-start justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60">
                MedCard
              </div>
              <div className="mt-0.5 font-display text-lg font-semibold text-white">Patient Health ID</div>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z" />
              </svg>
            </div>
          </div>

          <div className="relative mt-8 flex items-end justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/50">Member</div>
              <div className="font-mono text-sm tracking-wide text-white">J. RIVERA &middot; A1 POS</div>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-teal-200">Verified ✓</div>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <RecordRow label="Allergies" value="Penicillin" tone="warn" />
          <RecordRow label="Last visit" value="Cardiology &middot; 2 weeks ago" />
          <RecordRow label="Medications" value="3 active, synced" />
        </div>
      </div>
    </div>
  );
}

function RecordRow({ label, value, tone }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-navy-900/8 bg-sand-50 px-4 py-3">
      <span className="text-xs text-navy-800/55">{label}</span>
      <span
        className={`text-xs font-medium ${tone === 'warn' ? 'text-amber-600' : 'text-navy-900/85'}`}
      >
        {value}
      </span>
    </div>
  );
}
