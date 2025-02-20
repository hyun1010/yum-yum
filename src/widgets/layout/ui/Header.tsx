'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggler from '@/src/shared/ui/ThemeToggle';
import { Logo } from '@/src/shared/ui';
import classNames from 'classnames';
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
    <>
      <header
        className={classNames(
          `header left-0 top-0 z-40 flex w-full items-center`,
          {
            'fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark':
              sticky,
          },
          {
            'absolute bg-transparent': !sticky,
          }
        )}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <Logo className={sticky ? 'py-5 lg:py-2' : 'py-8'} />
            <div className="flex w-full items-center justify-between px-4">
              <NavBar />
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <Link
                  href="/signin"
                  className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="ease-in-up hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Sign Up
                </Link>
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
