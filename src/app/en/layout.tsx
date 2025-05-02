// Example: src/app/en/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oleksandra Kalinka – Life Coach & Karmic Guide',
  description: 'Book a 1:1 session with Oleksandra to awaken your power and release energetic blocks.',
  openGraph: {
    title: 'Oleksandra Kalinka – Life Coach & Karmic Guide',
    description: 'Book a 1:1 session with Oleksandra to awaken your power and release energetic blocks.',
    url: 'https://oleksandra-site.vercel.app/en',
    siteName: 'Oleksandra Kalinka',
    images: [
      {
        url: 'https://oleksandra-site.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Oleksandra Kalinka',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oleksandra Kalinka – Life Coach & Karmic Guide',
    description: 'Book a 1:1 session with Oleksandra to awaken your power and release energetic blocks.',
    images: ['https://oleksandra-site.vercel.app/og-image.jpg'],
  },
};
