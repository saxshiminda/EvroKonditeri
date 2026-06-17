import { useFadeIn } from '@/hooks/use-fade-in';
import { Link } from 'react-router-dom';
import { SITE_IMAGES, cakeImagePath } from '@/lib/images';
import { useT } from '@/i18n';
import { BranchList } from '@/components/branch-list';

export function AboutPage() {
  const storyRef = useFadeIn<HTMLDivElement>();
  const valuesRef = useFadeIn<HTMLDivElement>();
  const imageRef = useFadeIn<HTMLDivElement>();
  const galleryRef = useFadeIn<HTMLDivElement>();
  const locationsRef = useFadeIn<HTMLDivElement>();
  const t = useT();

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div ref={storyRef}>
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">
              {t.about.tagline}
            </p>
            <h1 className="font-display text-5xl lg:text-6xl text-espresso leading-tight mb-8">
              {t.about.heading}
            </h1>
            <p className="font-sans text-base text-espresso/60 leading-relaxed mb-5">
              {t.about.body1}
            </p>
            <p className="font-sans text-base text-espresso/60 leading-relaxed mb-5">
              {t.about.body2}
            </p>
            <p className="font-sans text-base text-espresso/60 leading-relaxed">{t.about.body3}</p>
          </div>

          <div ref={imageRef} className="aspect-[3/4] overflow-hidden bg-cream">
            <img
              src={SITE_IMAGES.aboutBaker}
              alt="Evro Konditeri bakery"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-espresso">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div ref={valuesRef}>
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">
              {t.about.valuesTagline}
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-warm mb-16">
              {t.about.valuesHeading}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              {t.about.values.map(({ title, body }, i) => (
                <div
                  key={i}
                  className={`border-t-2 ${i % 2 === 0 ? 'border-gold' : 'border-sage'} pt-6`}
                >
                  <h3 className="font-display text-xl text-warm mb-3">{title}</h3>
                  <p className="font-sans text-sm text-warm/50 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <div ref={galleryRef} className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="font-sans text-xs tracking-widest uppercase text-espresso/40 mb-10 text-center">
            {t.about.galleryLabel}
          </p>
          <div className="grid grid-cols-3 gap-3 lg:gap-4">
            <div className="aspect-square overflow-hidden">
              <img
                src={cakeImagePath('imeruli-khachapuri')}
                alt="Khachapuri"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src={cakeImagePath('chebureki')}
                alt="Chebureki"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src={SITE_IMAGES.galleryPastries}
                alt="Fresh pastries"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-warm">
        <div ref={locationsRef} className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="font-sans text-xs tracking-widest uppercase text-espresso/40 mb-3">
            {t.about.locationsHeading}
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-espresso mb-4">
            {t.about.locationsHeading}
          </h2>
          <p className="font-sans text-sm text-espresso/60 mb-10 max-w-xl">{t.about.locationsSub}</p>
          <BranchList />
        </div>
      </section>

      <section className="bg-gold py-20 lg:py-28 px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl lg:text-5xl text-white mb-4">{t.about.ctaHeading}</h2>
        <p className="font-sans text-base text-white/75 max-w-sm mx-auto leading-relaxed mb-8">
          {t.about.ctaSub}
        </p>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gold text-sm font-sans font-medium tracking-wide hover:bg-cream transition-colors"
        >
          {t.about.ctaButton}
        </Link>
      </section>
    </main>
  );
}
