import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainWrap from './MainWrap';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col min-h-screen bg-gray-100">
      <Header />
      <MainWrap>{children}</MainWrap>
      <Footer />
    </div>
  );
}
