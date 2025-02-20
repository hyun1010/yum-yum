import { RoutingButton } from '@/src/features/routingButton';
import { PiUserLight } from 'react-icons/pi';

export default function Account() {
  return (
    <div className="relative inline-block group">
      <PiUserLight size={25} className="cursor-pointer" />
      <ul className="invisible absolute left-1/2 -translate-x-1/2 mt-2 w-40 rounded-lg bg-white shadow-lg opacity-0 transition-all group-hover:visible group-hover:opacity-100 dark:bg-gray-800">
        <li>
          <RoutingButton
            type="onlyLabel"
            href="/signin"
            label="마이페이지"
            labelStyle="block w-full px-4 py-2 text-gray-700 text-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          />
          <RoutingButton
            type="onlyLabel"
            href="/signup"
            label="로그인"
            labelStyle="block w-full px-4 py-2 text-gray-700 text-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          />
        </li>
      </ul>
    </div>
  );
}
