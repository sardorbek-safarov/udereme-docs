import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? 'Udemere',
      description: override.description ?? 'Udemere - Uzbek tilida dasturlash dokumentatsiyasi',
      url: 'https://udemere.uz',
      images: '/banner.png',
      siteName: 'Udemere',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@miracleprogrammer',
      title: override.title ?? 'Udemere',
      description: override.description ?? 'Udemere - Uzbek tilida dasturlash dokumentatsiyasi',
      images: '/banner.png',
      ...override.twitter,
    },
  };
}

export const baseURL =
  process.env.NODE_ENV === 'development'
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.VERCEL_URL!}`);
