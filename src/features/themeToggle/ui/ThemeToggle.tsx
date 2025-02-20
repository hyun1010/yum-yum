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
      className="flex items-center justify-center text-black dark:text-white rounded-full cursor-pointer bg-gray-2"
    >
      {theme === 'dark' ? <CiLight size={30} /> : <CiDark size={30} />}
    </button>
  );
}
