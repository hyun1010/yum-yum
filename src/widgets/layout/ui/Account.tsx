import { RoutingButton } from '@/src/features/routingButton';
import ThemeToggler from '@/src/shared/ui/ThemeToggle';
import React from 'react';

export default function Account() {
  return (
    <div className="flex items-center justify-end pr-16 lg:pr-0 gap-5">
      <RoutingButton
        type="onlyLabel"
        href="/signin"
        label="마이페이지"
        labelStyle={'text-gray-700 text-md dark:text-white'}
      />
      <RoutingButton
        type="onlyLabel"
        href="/signup"
        label="로그인"
        labelStyle={'text-gray-700 text-md dark:text-white'}
      />
      <ThemeToggler />
    </div>
  );
}
