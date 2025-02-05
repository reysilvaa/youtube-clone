
// src/components/VideoCard/VideoCard.tsx
"use client";
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 12px;
`;

const Details = styled.div`
  padding: 0.75rem 0;
`;

const Title = styled.h3`
  font-size: 1rem;
  margin: 0;
`;

const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  color: #606060;
  font-size: 0.9rem;
`;

interface VideoCardProps {
  video: {
    id: string;
    thumbnail: string;
    title: string;
    channel: string;
    views: string;
    timestamp: string;
  };
}

export const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <Card>
      <Thumbnail src={video.thumbnail} alt={video.title} />
      <Details>
        <Title>{video.title}</Title>
        <ChannelInfo>
          <span>{video.channel}</span>
          <span>•</span>
          <span>{video.views} views</span>
          <span>•</span>
          <span>{video.timestamp}</span>
        </ChannelInfo>
      </Details>
    </Card>
  );
};
