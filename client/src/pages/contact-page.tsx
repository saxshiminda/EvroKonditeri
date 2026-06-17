import { ContactForm } from '@/features/contact';
import { useFadeIn } from '@/hooks/use-fade-in';
import { useT } from '@/i18n';
import { BranchList } from '@/components/branch-list';
import { BRAND } from '@/lib/brand';

export function ContactPage() {
  const ref = useFadeIn<HTMLDivElement>();
  const locationsRef = useFadeIn<HTMLDivElement>();
  const t = useT();

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-espresso/40 mb-3">
              {t.contact.tagline}
            </p>
            <h1 className="font-display text-5xl lg:text-6xl text-espresso leading-tight mb-8">
              {t.contact.heading}
            </h1>
            <p className="font-sans text-base text-espresso/60 leading-relaxed mb-5">
              {t.contact.body1}
            </p>
            <p className="font-sans text-base text-espresso/60 leading-relaxed mb-5">
              {t.contact.body2}
            </p>

            <div className="mt-10 space-y-4 border-t border-espresso/10 pt-8">
              <div>
                <p className="font-sans text-xs font-medium tracking-widest uppercase text-espresso/40 mb-1">
                  {t.contact.responseTime}
                </p>
                <a
                  href={`tel:${t.contact.responseTimeValue.replace(/\s/g, '')}`}
                  className="font-sans text-sm text-gold hover:text-gold-dark transition-colors"
                >
                  {t.contact.responseTimeValue}
                </a>
              </div>
              <div>
                <p className="font-sans text-xs font-medium tracking-widest uppercase text-espresso/40 mb-1">
                  {t.contact.leadTime}
                </p>
                <p className="font-sans text-sm text-espresso/70">{t.contact.leadTimeValue}</p>
              </div>
              <div>
                <p className="font-sans text-xs font-medium tracking-widest uppercase text-espresso/40 mb-1">
                  Facebook
                </p>
                <a
                  href={BRAND.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-gold hover:text-gold-dark transition-colors"
                >
                  facebook.com/Evro.Konditeri.Ge
                </a>
              </div>
            </div>
          </div>

          <div className="bg-cream p-8 lg:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-24">
        <div ref={locationsRef} className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="font-sans text-xs tracking-widest uppercase text-espresso/40 mb-3">
            {t.contact.locationsHeading}
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-espresso mb-4">
            {t.contact.locationsHeading}
          </h2>
          <p className="font-sans text-sm text-espresso/60 mb-10 max-w-xl">{t.contact.locationsSub}</p>
          <BranchList />
        </div>
      </section>
    </main>
  );
}
