import React from 'react';
import { Providers } from '@/app/providers';
import { ScrollToTop } from '@/src/shared/ui';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </Providers>
  );
}
