import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? "Udemere - O'zbek tilida dasturlash dokumentatsiyasi.",
      description: override.description ?? "Udemere - O'zbek tilida dasturlash dokumentatsiyasi. Open Source.",
      url: 'https://udemere.uz',
      images: 'https://udemere.uz/og.png',
      siteName: 'Udemere',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@miracleprogrammer',
      title: override.title ?? "Udemere - O'zbek tilida dasturlash dokumentatsiyasi.",
      description: override.description ?? "Udemere - O'zbek tilida dasturlash dokumentatsiyasi. Open Source.",
      images: 'https://udemere.uz/og.png',
      ...override.twitter,
    },
  };
}

export const baseURL =
  process.env.NODE_ENV === 'development'
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.VERCEL_URL!}`);
