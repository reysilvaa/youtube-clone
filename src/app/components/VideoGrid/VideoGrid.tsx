
// components/VideoGrid.tsx
'use client';

import { VideoCard } from "../VideoCard/VideoCard";

export const VideoGrid = () => {
  const videos = [
    {
      thumbnail: '/api/placeholder/1280/720',
      title: 'Building a YouTube Clone with Next.js and Tailwind CSS',
      channel: 'Code Tutorial',
      views: '100K views',
      timestamp: '2 days ago'
    },
    // Add more video objects here...
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
};