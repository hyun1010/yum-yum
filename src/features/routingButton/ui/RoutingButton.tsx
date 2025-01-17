'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface RoutingButtogPropsBase {
  href: string; // 항상 필수
}

interface RoutingButtogPropsLabel extends RoutingButtogPropsBase {
  type: 'onlyLabel'; // 'onlyLabel'일 때는 label만 필수
  label: string;
  src?: never; // 'onlyLabel'일 땐 src는 절대 들어오지 않음
}

interface RoutingButtogPropsIcon extends RoutingButtogPropsBase {
  type: 'onlyIcon'; // 'onlyIcon'일 때는 src만 필수
  label?: never; // 'onlyIcon'일 땐 label은 절대 들어오지 않음
  src: string;
}

interface RoutingButtogPropsBoth extends RoutingButtogPropsBase {
  type: 'both'; // 'both'일 때는 label과 src 모두 필수
  label: string;
  src: string;
}

// 타입이 'onlyLabel', 'onlyIcon', 'both'에 따라 props 타입을 다르게 설정
type RoutingButtogProps =
  | RoutingButtogPropsLabel
  | RoutingButtogPropsIcon
  | RoutingButtogPropsBoth;

export default function RoutingButton({
  type,
  href,
  label,
  src,
}: RoutingButtogProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <div
      className="flex flex-col items-center gap-1 cursor-pointer"
      onClick={handleClick}
    >
      {type !== 'onlyLabel' && (
        <div className="relative h-16 w-16 rounded-lg bg-gray-100 border border-gray-50">
          <Image
            fill
            src={src}
            alt="아이콘"
            className="object-contain w-full h-full p-3"
          />
        </div>
      )}
      {type !== 'onlyIcon' && (
        <div className="text-sm text-gray-900 text-center">{label}</div>
      )}
    </div>
  );
}
