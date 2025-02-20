'use client';
import { ThemeToggle } from '@/src/features/themeToggle';
import { Logo } from '@/src/shared/ui';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import Account from './Account';
import NavBar from './NavBar';

export default function Header() {
  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
  });

  return (
    <header
      className={classNames(
        `header left-0 top-0 z-40 flex w-full items-center`,
        {
          'fixed z-[9999] bg-white shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark':
            sticky,
        },
        {
          'absolute bg-transparent': !sticky,
        }
      )}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <Logo />
          <NavBar />
          <Account />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
