import { useI18nStore } from './index';
import { en } from './en';
import { ka } from './ka';
import { ru } from './ru';

const LOCALES = { en, ka, ru } as const;

/** Localised category name — falls back to API name for unknown slugs. */
export function categoryLabel(
  slug: string,
  fallback: string,
  locale = useI18nStore.getState().locale
): string {
  const labels = LOCALES[locale].categories as Record<string, string>;
  return labels[slug] ?? fallback;
}

export function useCategoryLabel(slug: string, fallback: string): string {
  const locale = useI18nStore((s) => s.locale);
  const labels = LOCALES[locale].categories as Record<string, string>;
  return labels[slug] ?? fallback;
}
