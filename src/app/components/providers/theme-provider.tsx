// components/providers/theme-provider.tsx
'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider, ThemeProviderProps as NextThemeProviderProps } from 'next-themes';

interface ThemeProviderProps extends Omit<NextThemeProviderProps, 'attribute'> {
  children: React.ReactNode;
  attribute?: string | undefined; // Adjust this to match the type expected by next-themes
}

export function ThemeProvider({ 
  children,
  attribute, 
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      {...props} 
      attribute={attribute as any} // Cast the type to satisfy TypeScript
    >
      {children}
    </NextThemesProvider>
  );
}
