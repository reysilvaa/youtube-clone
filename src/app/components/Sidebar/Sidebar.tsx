
// components/Sidebar.tsx
'use client';

import { Home, Compass, Clock, ThumbsUp, PlaySquare, Film, Newspaper } from 'lucide-react';

export const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home' },
    { icon: Compass, label: 'Explore' },
    { icon: Clock, label: 'History' },
    { icon: ThumbsUp, label: 'Liked Videos' },
    { icon: PlaySquare, label: 'Your Videos' },
    { icon: Film, label: 'Movies' },
    { icon: Newspaper, label: 'News' },
  ];

  return (
    <aside className="fixed left-0 top-14 h-full w-64 dark:bg-zinc-900 bg-white overflow-y-auto">
      <div className="py-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-4 px-6 py-2 hover:bg-gray-100 dark:hover:bg-zinc-800 dark:text-white text-black"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};