// app/page.tsx
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { VideoGrid } from './components/VideoGrid/VideoGrid';

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-zinc-900 bg-white">
      <Header />
      <div className="pt-14 flex">
        <Sidebar />
        <main className="ml-64 flex-1">
          <VideoGrid />
        </main>
      </div>
    </div>
  );
}
