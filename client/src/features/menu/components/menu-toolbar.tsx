import { CategoryFilter } from './category-filter';
import type { Category } from '@/types';
import { useT } from '@/i18n';

export type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name';

interface Props {
  categories: Category[];
  search: string;
  onSearchChange: (value: string) => void;
  sort: SortOption;
  onSortChange: (value: SortOption) => void;
  selectedCategory: string;
  onCategoryChange: (slug: string) => void;
}

export function MenuToolbar({
  categories,
  search,
  onSearchChange,
  sort,
  onSortChange,
  selectedCategory,
  onCategoryChange,
}: Props) {
  const t = useT();

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'default', label: t.menu.sort.default },
    { value: 'name', label: t.menu.sort.nameAz },
    { value: 'price-asc', label: t.menu.sort.priceLow },
    { value: 'price-desc', label: t.menu.sort.priceHigh },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="menu-search" className="sr-only">
            {t.menu.search}
          </label>
          <input
            id="menu-search"
            type="search"
            placeholder={t.menu.search}
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-warm border border-espresso/20 px-4 py-3.5 text-sm text-espresso placeholder:text-espresso/40 focus:outline-none focus:border-gold transition-colors"
          />
        </div>
        <div className="w-full sm:w-auto sm:min-w-[15rem] md:min-w-[17rem] shrink-0">
          <label htmlFor="sort-select" className="sr-only">
            {t.menu.sortLabel}
          </label>
          <select
            id="sort-select"
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="w-full bg-warm border border-espresso/20 pl-4 pr-10 py-3.5 text-sm text-espresso focus:outline-none focus:border-gold transition-colors cursor-pointer appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%232C1810' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
            }}
          >
            {sortOptions.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onChange={onCategoryChange}
      />
    </div>
  );
}
