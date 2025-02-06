// components/VideoGrid.tsx
'use client';

import { VideoCard } from "../VideoCard/VideoCard";

export const VideoGrid = () => {
  const videos = [
    {
      thumbnail: '/rey.jpg',
      // thumbnail: 'https://c4.ttcache.com/thumbnail/hcMKnU0Eoz3/288x162/513c217f544fd9715d5e915944c50fb6.28.jpg',
      title: 'VIRAL!!!! PRIA INI CABULI JANDA USIA 50 TAHUN DI KAMAR MANDI',
      channel: 'Code Tutorial',
      views: '100K views',
      timestamp: '2 days ago',
      profile_image: '/profile.png', // Profile image for the video
    },
    {
      thumbnail: '/thumb2.jpg',
      title: 'BOKEP GAY GAYA DOGGY STYLE',
      channel: 'Dev Academy',
      views: '50K views',
      timestamp: '1 week ago',
      profile_image: '/profile.png', // Profile image for the video
    },
    {
      thumbnail: '/thumb1.jpg',
      title: 'BOKEP GAY KELUAR 33 KALI ADUHH DEKK',
      channel: 'JavaScript Daily',
      views: '200K views',
      timestamp: '5 days ago',
      profile_image: '/profile.png', // Profile image for the video
    },
    {
      thumbnail: '/thumb3.png',
      title: 'BOKEP PRIA MBEROT PAKISAJI',
      channel: 'React Tutorials',
      views: '300K views',
      timestamp: '3 days ago',
      profile_image: '/profile.png', // Profile image for the video
    },
    {
      thumbnail: '/thumb4.png',
      title: 'Pria Merokok Squirt  Keenakan sampai Kelojotan',
      channel: 'React Tutorials',
      views: '300K views',
      timestamp: '3 days ago',
      profile_image: '/profile.png', // Profile image for the video
    },
    // Add more video objects with profile image...
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-10">
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
};
