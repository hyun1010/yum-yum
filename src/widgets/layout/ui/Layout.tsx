import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainWrap from './MainWrap';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-noto-sans">
      <Header />
      <MainWrap>{children}</MainWrap>
      <Footer />
    </div>
  );
}
