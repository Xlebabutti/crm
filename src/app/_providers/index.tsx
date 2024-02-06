'use client';

import { ComposeChildren } from '@/shared/lib/react';
import React from 'react';
import { ThemeProvider } from './theme-provider';

export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <ComposeChildren>
            <ThemeProvider />
            {children}
        </ComposeChildren>
    );
}
