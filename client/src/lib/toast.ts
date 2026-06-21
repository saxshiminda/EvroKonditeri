import { useToastStore, type ToastVariant } from '@/store/toast';

function show(message: string, variant: ToastVariant): void {
  useToastStore.getState().add(message, variant);
}

export const toast = {
  error: (message: string) => show(message, 'error'),
  success: (message: string) => show(message, 'success'),
  info: (message: string) => show(message, 'info'),
};
