import './globals.css';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/language-provider';
import { CursorProvider } from '@/components/cursor-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FloatingSupport from '@/components/floating-support';
import ClientWrapper from '@/components/ClientWrapper';

const inter = Inter({ subsets: ['latin'] });

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Communi Tech - Innovative SMART Technology Solutions',
  description:
    'Communi Tech provides cutting-edge SMART technology solutions, including fraud prevention, software engineering, and website development. Transform your business with our innovative services.',
  keywords: [
    'Communi',
    'Community',
    'Technology',
    'Software Engineer',
    'Website Development',
    'SMART Solutions',
    'Fraud Prevention',
    'Innovative Technology',
  ],
  icons: {
    icon: '/favicon.ico', // Legacy favicon
    shortcut: '/favicon.ico', // Fallback for older browsers
    apple: '/apple-touch-icon.png', // Apple touch icon
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png', // 16x16 favicon
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png', // 32x32 favicon
      },
      {
        rel: 'manifest',
        url: '/manifest.json', // PWA manifest
      },
    ],
  },
  openGraph: {
    title: 'Communi Tech - Innovative SMART Technology Solutions',
    description:
      'Communi Tech provides cutting-edge SMART technology solutions, including fraud prevention, software engineering, and website development. Transform your business with our innovative services.',
    url: 'https://www.communitech.com',
    siteName: 'Communi Tech',
    images: [
      {
        url: 'https://www.communitech.com/logo.jpg', // Add your OpenGraph image
        width: 1200,
        height: 630,
        alt: 'Communi Tech - Innovative SMART Technology Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Communi Tech - Innovative SMART Technology Solutions',
    description:
      'Communi Tech provides cutting-edge SMART technology solutions, including fraud prevention, software engineering, and website development. Transform your business with our innovative services.',
    images: ['https://www.communitech.com/twitter-image.png'], // Add your Twitter image
  },
};

// Structured Data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Communi Tech',
  url: 'https://www.communitech.com',
  logo: 'https://www.communitech.com/logo.png',
  description: 'Innovative SMART technology solutions for businesses.',
  sameAs: [
    'https://www.facebook.com/communitech',
    'https://www.twitter.com/communitech',
    'https://www.linkedin.com/company/communitech',
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add meta tags for PWA support */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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