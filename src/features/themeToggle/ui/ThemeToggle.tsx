'use client';
import { useTheme } from 'next-themes';
import { CiDark, CiLight } from 'react-icons/ci';

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      aria-label="theme toggler"
      onClick={handleToggle}
      className="flex items-center justify-center text-black rounded-full cursor-pointer bg-gray-2 dark:bg-dark-bg h-9 w-9 dark:text-white md:h-14 md:w-14"
    >
      {theme === 'dark' ? <CiLight /> : <CiDark />}
    </button>
  );
}
