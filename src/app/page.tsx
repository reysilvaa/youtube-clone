
// app/page.tsx
'use client';
import clsx from 'clsx';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { VideoGrid } from './components/VideoGrid/VideoGrid';
import { SidebarProvider } from './components/providers/sidebar-provider';
import { useSidebar } from './components/providers/sidebar-provider';

function MainContent() {
  const { isCollapsed } = useSidebar();
  
  return (
    <main className={clsx(
      "pt-14 transition-all duration-300",
      isCollapsed ? "ml-16" : "ml-64"
    )}>
      <VideoGrid />
    </main>
  );
}

export default function Home() {
  return (
    <SidebarProvider>
      <div className="min-h-screen dark:bg-zinc-900 bg-white">
        <Header />
        <div className="flex">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </SidebarProvider>
  );
}
