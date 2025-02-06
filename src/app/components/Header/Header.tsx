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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set to a breakpoint of your choice
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Check initial window size
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // If on mobile, automatically close the sidebar when opened
    if (isMobile) {
      toggleSidebar();
    }
  }, [isMobile]);

  if (!mounted) return null;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-zinc-900 ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      <div className="flex items-center justify-between h-20 px-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => {
              toggleSidebar();
              if (isMobile) {
                // Automatically close sidebar when on mobile
                setTimeout(() => toggleSidebar(), 300);
              }
            }}
            className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full"
          >
            <Menu className="w-6 h-6 dark:text-white text-black" />
          </button>
          <Link href="/" className="flex items-center gap-1">
            <img src="/logo.png" alt="YouTube" className="h-9" />
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
