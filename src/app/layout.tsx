import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from './_providers';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/shared/ui/utils';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable,
                )}
            >
                <AppProvider>{children}</AppProvider>
            </body>
        </html>
    );
}
