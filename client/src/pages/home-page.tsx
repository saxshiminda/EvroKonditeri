import { Link } from 'react-router-dom';
import { useCakes, CakeCard } from '@/features/menu';
import { Spinner } from '@/components/ui';
import { useFadeIn } from '@/hooks/use-fade-in';
import { SITE_IMAGES } from '@/lib/images';
import { useT } from '@/i18n';

function HeroSection() {
  const t = useT();

  return (
    <section className="min-h-[calc(100vh-4rem)] lg:min-h-[640px] grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center bg-espresso px-8 sm:px-12 lg:px-16 py-16 lg:py-20 order-2 lg:order-1">
        <p className="font-sans text-xs tracking-widest uppercase text-rose mb-4">
          {t.home.hero.tagline}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-warm leading-tight mb-10">
          {t.home.hero.heading}
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-7 py-4 bg-rose text-white text-sm font-sans font-medium tracking-wide hover:bg-rose-dark transition-all duration-300"
          >
            {t.home.hero.cta}
          </Link>
          <Link
            to="/contact"
            className="text-sm font-sans font-medium text-warm/70 hover:text-warm underline underline-offset-4 transition-colors"
          >
            {t.home.hero.ctaCustom}
          </Link>
        </div>
      </div>

      <div className="relative h-72 sm:h-96 lg:h-auto order-1 lg:order-2 bg-cream">
        <img
          src={SITE_IMAGES.hero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-rose lg:hidden" />
      </div>
    </section>
  );
}

function BrandStatement() {
  const ref = useFadeIn<HTMLDivElement>();
  const t = useT();

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-warm to-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          <span className="inline-block w-10 h-0.5 bg-rose mb-6" />
          <p className="font-display text-3xl lg:text-4xl text-espresso leading-snug">
            {t.home.brand.heading}
          </p>
        </div>
      </div>
    </section>
  );
}

function FeaturedCakes() {
  const { data, isLoading, isError } = useCakes({ featured: true });
  const headerRef = useFadeIn<HTMLDivElement>();
  const t = useT();

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="flex items-end justify-between mb-12 lg:mb-16">
          <h2 className="font-display text-4xl lg:text-5xl text-espresso">{t.home.featured.heading}</h2>
          <Link
            to="/menu"
            className="hidden sm:inline-block text-sm font-sans font-medium text-espresso/50 hover:text-espresso transition-colors"
          >
            {t.home.featured.viewAll}
          </Link>
        </div>

        {isLoading && (
          <div className="flex justify-center py-16">
            <Spinner size="lg" />
          </div>
        )}

        {isError && (
          <p className="text-center text-espresso/50 py-16 font-sans text-sm">
            {t.home.featured.loadError}
          </p>
        )}

        {data && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {data.cakes.slice(0, 3).map((cake) => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center sm:hidden">
          <Link
            to="/menu"
            className="text-sm font-sans font-medium text-espresso/60 hover:text-espresso"
          >
            {t.home.featured.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandStatement />
      <FeaturedCakes />
    </>
  );
}
