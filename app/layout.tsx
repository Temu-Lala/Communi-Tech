// app/layout.tsx
import './globals.css';
import type React from 'react';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/language-provider';
import { CursorProvider } from '@/components/cursor-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FloatingSupport from '@/components/floating-support';
import ClientWrapper from '@/components/ClientWrapper'; // Import the Client Wrapper

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Communi Tech - Innovative SMART Technology Solutions',
  description:
    'Transforming businesses with cutting-edge SMART technology solutions and fraud prevention expertise.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="root" enableSystem>
          <LanguageProvider>
            <CursorProvider>
              <Navbar />
              <ClientWrapper>{children}</ClientWrapper>
              <Footer />
            </CursorProvider>
            <FloatingSupport />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}