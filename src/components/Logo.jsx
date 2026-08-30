export default function Logo({ variant = 'dark', className = '' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy-900';
  const subColor = variant === 'light' ? 'text-teal-300' : 'text-teal-600';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#0D9488" />
        <path
          d="M9 17.5H12.2L14 13L18 22L19.8 17.5H23"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={`font-display text-lg font-semibold tracking-tight ${textColor}`}>
        MedCard <span className={subColor}>2026</span>
      </span>
    </div>
  );
}
