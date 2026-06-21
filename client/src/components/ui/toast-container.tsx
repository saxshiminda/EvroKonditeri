import { useToastStore } from '@/store/toast';

const variantStyles = {
  error: 'border-red-200 bg-red-50 text-red-800',
  success: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  info: 'border-espresso/15 bg-cream text-espresso',
} as const;

export function ToastContainer() {
  const toasts = useToastStore((s) => s.toasts);
  const remove = useToastStore((s) => s.remove);

  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 max-w-sm w-full pointer-events-none"
      aria-live="polite"
      aria-relevant="additions"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          role="alert"
          className={`pointer-events-auto flex items-start gap-3 border px-4 py-3 shadow-lg font-sans text-sm animate-[slideIn_0.25s_ease-out] ${variantStyles[toast.variant]}`}
        >
          <p className="flex-1 leading-snug">{toast.message}</p>
          <button
            type="button"
            onClick={() => remove(toast.id)}
            className="shrink-0 text-current opacity-50 hover:opacity-100 transition-opacity"
            aria-label="Dismiss"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
