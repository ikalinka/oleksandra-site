import type { Metadata } from 'next';
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import "../../styles/globals.css";

// Font setup
const geistSans = Geist({ variable: '--font-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const playfair = Playfair_Display({ variable: '--font-display', subsets: ['latin'] });

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
