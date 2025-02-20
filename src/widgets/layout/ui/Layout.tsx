import { Providers } from '@/app/providers';
import { ScrollTopButton } from '@/src/features/scollTopButton';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Header />
      {children}
      <Footer />
      <ScrollTopButton />
    </Providers>
  );
}
