
// components/Sidebar.tsx
'use client';

import { Home, Compass, Clock, ThumbsUp, PlaySquare, Film, Newspaper } from 'lucide-react';
import { useSidebar } from '../providers/sidebar-provider';
import { cn } from '../../lib/utils';

export const Sidebar = () => {
  const { isCollapsed } = useSidebar();

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
    <aside className={cn(
      "fixed left-0 top-14 h-full bg-white dark:bg-zinc-900 overflow-y-auto transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="py-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={cn(
              "w-full flex items-center gap-4 px-3 py-2 hover:bg-gray-100 dark:hover:bg-zinc-800 dark:text-white text-black",
              isCollapsed && "justify-center"
            )}
          >
            <item.icon className="w-5 h-5" />
            {!isCollapsed && <span>{item.label}</span>}
          </button>
        ))}
      </div>
    </aside>
  );
};
