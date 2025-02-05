'use client';
import styled from 'styled-components';
import { Home, Clock, ThumbsUp, Play, ListVideo } from 'lucide-react';

// SidebarContainer styled component receives isopen prop, but it's not passed to a DOM element
const SidebarContainer = styled.div<{ isopen: boolean }>`
  position: fixed;
  left: 0;
  top: var(--header-height);
  bottom: 0;
  width: ${({ isopen }) => (isopen ? 'var(--sidebar-width)' : '60px')};
  background: var(--background);
  padding: 12px 0;
  overflow-y: auto;
  overflow-x: hidden;
  transition: width 0.3s ease;
  z-index: 100;
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const MenuItem = styled.div<{ isopen: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px 24px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background: var(--hover-background);
  }

  span {
    margin-left: 24px;
    font-size: 14px;
    color: var(--text-primary);
    display: ${({ isopen }) => (isopen ? 'inline' : 'none')}; /* Hide text when sidebar is closed */
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;

const SectionTitle = styled.div`
  padding: 8px 24px;
  font-size: 16px;
  color: var(--text-secondary);
  margin-top: 12px;
`;

export const Sidebar = ({ isopen }: { isopen: boolean }) => (
  <SidebarContainer isopen={isopen}>
    <MenuItem isopen={isopen}>
      <IconWrapper>
        <Home />
      </IconWrapper>
      <span>Beranda</span>
    </MenuItem>
    <MenuItem isopen={isopen}>
      <IconWrapper>
        <Play />
      </IconWrapper>
      <span>Shorts</span>
    </MenuItem>
    <MenuItem isopen={isopen}>
      <IconWrapper>
        <ListVideo />
      </IconWrapper>
      <span>Subscription</span>
    </MenuItem>

    <SectionTitle>Anda</SectionTitle>
    <MenuItem isopen={isopen}>
      <IconWrapper>
        <Clock />
      </IconWrapper>
      <span>Histori</span>
    </MenuItem>
    <MenuItem isopen={isopen}>
      <IconWrapper>
        <Play />
      </IconWrapper>
      <span>Video Anda</span>
    </MenuItem>
    <MenuItem isopen={isopen}>
      <IconWrapper>
        <Clock />
      </IconWrapper>
      <span>Tonton nanti</span>
    </MenuItem>
    <MenuItem isopen={isopen}>
      <IconWrapper>
        <ThumbsUp />
      </IconWrapper>
      <span>Video yang disukai</span>
    </MenuItem>

    <SectionTitle>Subscription</SectionTitle>
    <MenuItem isopen={isopen}>
      <img src="/avatar1.jpg" alt="Channel" />
      <span>Lah Kok Iso</span>
    </MenuItem>
    <MenuItem isopen={isopen}>
      <img src="/avatar2.jpg" alt="Channel" />
      <span>Bryan Furran</span>
    </MenuItem>
    <MenuItem isopen={isopen}>
      <IconWrapper>
        <ListVideo />
      </IconWrapper>
      <span>Semua subscription</span>
    </MenuItem>
  </SidebarContainer>
);
