// src/components/Header/Header.tsx
'use client';
import { useState } from 'react';
import styled from 'styled-components';
import { Menu, Search, Bell, Video, User } from 'lucide-react';

const HeaderContainer = styled.header`
  height: var(--header-height);
  background: var(--background);
  display: flex;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-bottom: 1px solid var(--border-color);
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SearchSection = styled.div`
  flex: 0.6;
  display: flex;
  justify-content: center;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 640px;
  
  input {
    width: 100%;
    background: #f8f8f8;
    border: 1px solid var(--border-color);
    padding: 8px 16px;
    border-radius: 20px;
    color: var(--text-primary);
    outline: none;
    
    &:focus {
      border-color: #1c62b9;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => (
  <HeaderContainer>
    <LogoSection>
      <Menu size={30} onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
      <img src="/logo.png" alt="YouTube" height="30" />
    </LogoSection>
    <SearchSection>
      <SearchBar>
        <input type="text" placeholder="Telusuri" />
        <Search size={30} />
      </SearchBar>
    </SearchSection>
    <Actions>
      <Video size={30} />
      <Bell size={30} />
      <User size={30} />
    </Actions>
  </HeaderContainer>
);
