
// src/app/watch/[id]/page.tsx
'use client';
import styled from 'styled-components';

const VideoContainer = styled.div`
  margin-left: 240px;
  margin-top: 60px;
  padding: 2rem;
`;

const VideoPlayer = styled.div`
  width: 100%;
  max-width: 1280px;
  aspect-ratio: 16/9;
  background: #000;
`;

export function WatchPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <VideoContainer>
      <VideoPlayer />
    </VideoContainer>
  );
}
