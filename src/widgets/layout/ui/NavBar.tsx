import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import menuData from '../consts/menu';

export default function NavBar() {
  const usePathName = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="basis-1/3">
      <button
        onClick={navbarToggleHandler}
        id="navbarToggler"
        aria-label="Mobile Menu"
        className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
      >
        <HiBars3 size={35} />
      </button>
      <nav
        id="navbarCollapse"
        className={classNames(
          `navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100`,
          { 'visibility top-full opacity-100': navbarOpen },
          { 'invisible top-[120%] opacity-0': !navbarOpen }
        )}
      >
        <ul className="block lg:flex lg:space-x-12">
          {menuData.map((menuItem, index) => (
            <li key={index} className="group relative">
              {menuItem.path ? (
                <Link
                  href={menuItem.path}
                  className={classNames(
                    `flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`,
                    {
                      'text-primary dark:text-white':
                        usePathName === menuItem.path,
                    },
                    {
                      'text-dark hover:text-primary dark:text-white/70 dark:hover:text-white':
                        usePathName !== menuItem.path,
                    }
                  )}
                >
                  {menuItem.title}
                </Link>
              ) : (
                <>
                  <p
                    onClick={() => handleSubmenu(index)}
                    className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                  >
                    {menuItem.title}
                    <span className="pl-3">
                      <svg width="25" height="24" viewBox="0 0 25 24">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </p>
                  <div
                    className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                      openIndex === index ? 'block' : 'hidden'
                    }`}
                  >
                    {menuItem.submenu?.map((submenuItem, index) => (
                      <Link
                        href={submenuItem.path || ''}
                        key={index}
                        className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                      >
                        {submenuItem.title}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
