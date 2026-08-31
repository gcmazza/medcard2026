import { useEffect } from 'react';

export default function DemoModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const demoUrl = `${import.meta.env.BASE_URL}demo.html`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/60 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="flex shrink-0 items-center justify-between border-b border-navy-900/8 px-5 py-3.5">
          <div className="text-sm font-semibold text-navy-900">MedCard Product Demo</div>
          <div className="flex items-center gap-2">
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-3 py-1.5 text-xs font-medium text-navy-800/60 transition-colors hover:bg-navy-900/5 hover:text-navy-900"
            >
              Open in new tab ↗
            </a>
            <button
              onClick={onClose}
              aria-label="Close demo"
              className="flex h-8 w-8 items-center justify-center rounded-full text-navy-800/60 transition-colors hover:bg-navy-900/5 hover:text-navy-900"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>
        <iframe src={demoUrl} title="MedCard product demo" className="min-h-0 flex-1 border-0" />
      </div>
    </div>
  );
}
