"use client";
import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import StyledComponentsRegistry from './lib/registry/registry';
import { Roboto } from 'next/font/google';
import './globals.css'; // Ensure this file is present for additional styles

// Use Google Font Roboto Medium
const roboto = Roboto({
  weight: '500', // Medium
  subsets: ['latin'],
  variable: '--font-roboto' // CSS Variable
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <StyledComponentsRegistry>
          <Header toggleSidebar={toggleSidebar} />
          <Sidebar isopen={isSidebarOpen} />
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
