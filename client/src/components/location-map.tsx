import { BRANCHES, MAP_CENTER } from '@/lib/brand';
import { useI18nStore } from '@/i18n';

type LocationMapProps = {
  className?: string;
  /** Highlight a single branch on the map */
  activeBranchId?: string;
};

export function LocationMap({ className = '', activeBranchId }: LocationMapProps) {
  const { locale } = useI18nStore();
  const active = activeBranchId
    ? BRANCHES.find((b) => b.id === activeBranchId)
    : BRANCHES[0];

  const lat = active?.lat ?? MAP_CENTER.lat;
  const lng = active?.lng ?? MAP_CENTER.lng;
  const delta = 0.012;
  const bbox = `${lng - delta},${lat - delta},${lng + delta},${lat + delta}`;

  const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <div className={`overflow-hidden border border-espresso/10 bg-cream ${className}`}>
      <iframe
        title={
          locale === 'ka'
            ? 'ევრო კონდიტერის ფილიალის რუკა'
            : locale === 'ru'
              ? 'Карта филиала Evro Konditeri'
              : 'Evro Konditeri branch map'
        }
        src={embedUrl}
        className="w-full h-full min-h-[320px] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
