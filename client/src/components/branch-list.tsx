import { useState } from 'react';
import { BRANCHES, BRAND } from '@/lib/brand';
import { useI18nStore } from '@/i18n';
import { LocationMap } from './location-map';

export function BranchList() {
  const { locale } = useI18nStore();
  const [activeId, setActiveId] = useState(BRANCHES[0]?.id ?? '');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <div className="space-y-3">
        {BRANCHES.map((branch) => {
          const isActive = branch.id === activeId;
          const label = locale === 'ka' ? branch.nameKa : branch.name;
          const address = locale === 'ka' ? branch.addressKa : branch.address;

          return (
            <button
              key={branch.id}
              type="button"
              onClick={() => setActiveId(branch.id)}
              className={`w-full text-left p-5 border transition-colors ${
                isActive
                  ? 'border-gold bg-gold/5'
                  : 'border-espresso/10 bg-warm hover:border-gold/40'
              }`}
            >
              <p className="font-display text-lg text-espresso mb-1">{label}</p>
              <p className="font-sans text-sm text-espresso/60 leading-relaxed">{address}</p>
              <a
                href={`tel:${branch.phone.replace(/\s/g, '')}`}
                onClick={(e) => e.stopPropagation()}
                className="inline-block mt-2 font-sans text-sm text-gold hover:text-gold-dark transition-colors"
              >
                {branch.phone}
              </a>
            </button>
          );
        })}

        <a
          href={BRAND.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 font-sans text-sm text-espresso/50 hover:text-gold transition-colors"
        >
          Facebook →
        </a>
      </div>

      <LocationMap activeBranchId={activeId} className="min-h-[360px] lg:min-h-full" />
    </div>
  );
}
