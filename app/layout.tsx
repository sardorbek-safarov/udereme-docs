import '@/app/global.css';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Viewport } from 'next';

import { Analytics } from '@vercel/analytics/react';

import { Body } from '@/app/layout.client';
import { baseURL, createMetadata } from '@/utils/metadata';

import { Provider } from './provider';

export const metadata = createMetadata({
  title: {
    template: '%s | Udemere',
    default: 'Udemere',
  },
  description: "Udemere - O'zbek tilida dasturlash dokumentatsiyasi.",
  metadataBase: baseURL,
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <html lang="uz" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <Body>
        <Provider>{children}</Provider>
        <Analytics />
      </Body>
    </html>
  );
}
