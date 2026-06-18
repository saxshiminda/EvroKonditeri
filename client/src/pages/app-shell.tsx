import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer, ScrollToTop } from '@/components/layout';
import { CartDrawer } from '@/features/cart';
import { useI18nStore } from '@/i18n';

export function AppShell() {
  const locale = useI18nStore((s) => s.locale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div className="min-h-screen bg-warm flex flex-col">
      <ScrollToTop />
      <Header />
      <CartDrawer />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
