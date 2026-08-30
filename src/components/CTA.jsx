import { useState } from 'react';

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-900 py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ background: 'radial-gradient(60% 60% at 50% 0%, rgba(20,184,166,0.25) 0%, transparent 70%)' }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
          Interested in partnering with MedCard 2026?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
          We&rsquo;re raising our seed round to bring patient-owned medical records to market.
          Reach out for our full investor deck, financial model, and product demo.
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
          <a href="mailto:investors@medcard2026.com" className="font-medium text-teal-300 hover:text-teal-200">
            investors@medcard2026.com
          </a>
        </p>
      </div>
    </section>
  );
}
