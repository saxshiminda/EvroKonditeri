import type { Category } from '@/types';
import { useCategoryLabel, useT } from '@/i18n';

interface Props {
  categories: Category[];
  selected: string;
  onChange: (slug: string) => void;
}

function FilterButton({
  slug,
  name,
  selected,
  onChange,
}: {
  slug: string;
  name: string;
  selected: string;
  onChange: (slug: string) => void;
}) {
  const label = useCategoryLabel(slug, name);

  return (
    <button
      onClick={() => onChange(slug)}
      className={`px-5 py-2 text-sm font-sans font-medium tracking-wide transition-all duration-200 ${
        selected === slug
          ? 'bg-espresso text-warm'
          : 'bg-cream text-espresso/70 hover:bg-espresso/8 hover:text-espresso'
      }`}
      aria-pressed={selected === slug}
    >
      {label}
    </button>
  );
}

export function CategoryFilter({ categories, selected, onChange }: Props) {
  const t = useT();

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
      <FilterButton slug="all" name={t.menu.all} selected={selected} onChange={onChange} />
      {categories.map((category) => (
        <FilterButton
          key={category.slug}
          slug={category.slug}
          name={category.name}
          selected={selected}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
