import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "../../styles/globals.css";

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Александра Калинка – Кармический гид и лайф-коуч",
  description: "Запишитесь на индивидуальную сессию и раскройте свой потенциал.",
  metadataBase: new URL("https://kalinkacoach.com"),
  alternates: {
    canonical: "/ru",
    languages: {
      "en": "/en",
      "uk": "/uk",
      "ru": "/ru",
      "x-default": "/en",
    },
  },
  openGraph: {
    title: "Александра Калинка – Кармический гид и лайф-коуч",
    description: "Верните связь с душой через кармическое коучинг-наставничество.",
    url: "https://kalinkacoach.com/ru",
    siteName: "Oleksandra Kalinka",
    images: [
      {
        url: "https://kalinkacoach.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oleksandra Kalinka",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Александра Калинка – Кармический гид и лайф-коуч",
    description: "Верните связь с душой через кармическое коучинг-наставничество.",
    images: ["https://kalinkacoach.com/og-image.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3B1B6F" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DLNX6MEHG2"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DLNX6MEHG2');
            `,
          }}
        />
        {/* Calendly Widget */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
