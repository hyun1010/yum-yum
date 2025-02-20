import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Logo({ className }: { className?: string }) {
  return (
    <div className="w-60 max-w-full px-4 xl:mr-12">
      <Link
        href="/"
        className={twMerge(`header-logo block w-full py-8`, className)}
      >
        <Image
          src="/images/logo/logo-2.svg"
          alt="logo"
          width={140}
          height={30}
          className="w-full dark:hidden"
        />
        <Image
          src="/images/logo/logo.svg"
          alt="logo"
          width={140}
          height={30}
          className="hidden w-full dark:block"
        />
      </Link>
    </div>
  );
}
