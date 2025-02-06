
// components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import { Menu, Search, Bell, User, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useSidebar } from '../providers/sidebar-provider';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { toggleSidebar } = useSidebar();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-zinc-900 ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full"
          >
            <Menu className="w-6 h-6 dark:text-white text-black" />
          </button>
          <Link href="/" className="flex items-center gap-1">
            <img src="/logo.png" alt="YouTube" className="h-9" />
            {/* <span className="font-semibold dark:text-white text-black">YouTube</span> */}
          </Link>
        </div>
        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex items-center">
            <div className="flex-1 flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 rounded-l-full border dark:bg-zinc-900 dark:border-zinc-700 dark:text-white bg-gray-50 border-gray-300 text-black"
              />
              <button className="px-6 py-2 rounded-r-full border border-l-0 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700 bg-gray-100 border-gray-300 hover:bg-gray-200">
                <Search className="w-5 h-5 dark:text-white text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full"
          >
            {theme === 'dark' ? (
              <Sun className="w-6 h-6 text-white" />
            ) : (
              <Moon className="w-6 h-6 text-black" />
            )}
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full">
            <Bell className="w-6 h-6 dark:text-white text-black" />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full">
            <User className="w-6 h-6 dark:text-white text-black" />
          </button>
        </div>
      </div>
    </header>
  );
};
