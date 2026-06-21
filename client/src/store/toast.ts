import { create } from 'zustand';

export type ToastVariant = 'error' | 'success' | 'info';

export interface Toast {
  id: string;
  message: string;
  variant: ToastVariant;
}

interface ToastState {
  toasts: Toast[];
  add: (message: string, variant?: ToastVariant) => void;
  remove: (id: string) => void;
}

let nextId = 0;
const TOAST_DURATION_MS = 5000;

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  add: (message, variant = 'info') => {
    const id = String(++nextId);
    set((state) => ({ toasts: [...state.toasts, { id, message, variant }] }));
    setTimeout(() => {
      useToastStore.getState().remove(id);
    }, TOAST_DURATION_MS);
  },
  remove: (id) => set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
}));
