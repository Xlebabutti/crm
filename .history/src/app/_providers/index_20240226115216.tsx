'use client';

import { ComposeChildren } from '@/shared/lib/react';
import { queryClient } from "@/shared/api/query-client";
import { ThemeProvider } from './theme-provider';
import { QueryClientProvider } from '@tanstack/react-query';
import { AppSessionProvider } from '@/entities/user/session';
import React from 'react';

export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <ComposeChildren>
            <AppSessionProvider />
            <QueryClientProvider client={queryClient} />
            <ThemeProvider/>
            {children}
        </ComposeChildren>
    );
}
