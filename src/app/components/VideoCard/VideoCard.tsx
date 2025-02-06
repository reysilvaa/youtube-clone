
// components/VideoCard.tsx
'use client';

interface VideoCardProps {
  video: {
    thumbnail: string;
    title: string;
    channel: string;
    views: string;
    timestamp: string;
  };
}

export const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <div className="w-9 h-9 rounded-full bg-gray-200"></div>
        </div>
        <div>
          <h3 className="font-medium line-clamp-2 dark:text-white text-black">
            {video.title}
          </h3>
          <p className="text-sm dark:text-gray-400 text-gray-600">
            {video.channel}
          </p>
          <p className="text-sm dark:text-gray-400 text-gray-600">
            {video.views} • {video.timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};
