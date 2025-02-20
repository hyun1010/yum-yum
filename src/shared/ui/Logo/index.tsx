import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export default function Logo({
  size = 160,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div className="max-w-full px-4 xl:mr-12" style={{ width: size }}>
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
