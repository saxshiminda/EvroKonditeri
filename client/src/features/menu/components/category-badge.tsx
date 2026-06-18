import { Badge } from '@/components/ui';
import { useCategoryLabel } from '@/i18n';
import type { Category } from '@/types';

interface Props {
  category: Category;
}

const slugStyles: Record<string, string> = {
  'kids-birthday': 'bg-sage/15 text-sage',
  'baby-cakes': 'bg-rose/10 text-rose-dark',
  'wedding-elegant': 'bg-cream text-espresso/70 border border-espresso/15',
  'themed-celebration': 'bg-espresso/8 text-espresso/70',
};

export function CategoryBadge({ category }: Props) {
  const label = useCategoryLabel(category.slug, category.name);
  const style = slugStyles[category.slug] ?? 'bg-cream text-espresso/60 border border-espresso/15';

  return <Badge label={label} className={style} />;
}
