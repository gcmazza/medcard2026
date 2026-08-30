import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-navy-900/8 bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between lg:px-8">
        <Logo />
        <p className="text-center text-xs leading-relaxed text-navy-800/45 sm:text-right">
          &copy; {new Date().getFullYear()} MedCard 2026, Inc. All rights reserved.
          <br className="sm:hidden" /> Confidential &mdash; for investor and partner review only.
        </p>
      </div>
    </footer>
  );
}
