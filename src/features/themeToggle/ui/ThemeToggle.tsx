'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [initialTheme, setInitialTheme] = useState<'dark' | 'light'>('dark');

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const userTheme = (theme as 'dark' | 'light') || 'dark';
    setInitialTheme(userTheme);
  }, [theme]);

  return (
    <button
      aria-label="theme toggler"
      onClick={handleToggle}
      className="flex items-center justify-center text-black dark:text-white rounded-full cursor-pointer bg-gray-2"
    >
      {initialTheme === 'dark' ? <CiLight size={30} /> : <CiDark size={30} />}
    </button>
  );
}
