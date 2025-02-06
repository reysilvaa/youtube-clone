// components/VideoCard.tsx
'use client';

interface VideoCardProps {
  video: {
    thumbnail: string;
    title: string;
    channel: string;
    views: string;
    timestamp: string;
    profile_image: string; // Add profile image to the video props
  };
}

export const VideoCard = ({ video }: VideoCardProps) => {
  const truncatedTitle = video.title.length > 100 ? `${video.title.substring(0, 100)}...` : video.title;

  return (
    <div className="relative flex flex-col gap-2 h-full">
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow p-3">
        <h3 className="font-medium dark:text-white text-black line-clamp-2">
          {truncatedTitle}
        </h3>
        {/* Channel and Views Section at the Bottom */}
        <div className="mt-auto">
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
