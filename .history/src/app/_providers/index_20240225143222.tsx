'use client';

import { ComposeChildren } from '@/shared/lib/react';
import React from 'react';
import { ThemeProvider } from './theme-provider';
// import { ApolloProvider } from './apollo-provider';

export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <ComposeChildren>
             <AppSessionProvider />
      <QueryClientProvider client={queryClient} />
            <ThemeProvider>
            {children}
                </ThemeProvider> 
            {/* <ApolloProvider> {children} </ApolloProvider> */}
        </ComposeChildren>
    );
}