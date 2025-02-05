
// src/components/VideoGrid/VideoGrid.tsx
"use client";
import React from 'react';
import styled from 'styled-components';
import { VideoCard } from '../VideoCard/VideoCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem;
  margin-left: 240px;
  margin-top: 60px;
`;

export const VideoGrid = () => {
  const videos = [
    {
      id: '1',
      thumbnail: '/thumbnail1.jpg',
      title: 'Sample Video 1',
      channel: 'Channel Name',
      views: '100K',
      timestamp: '2 days ago',
    },
    // Add more video objects
  ];

  return (
    <Grid>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </Grid>
  );
};
