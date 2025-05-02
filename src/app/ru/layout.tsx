import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "../../styles/globals.css";

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Александра Калинка – Кармический гид и лайф-коуч",
  description: "Запишитесь на индивидуальную сессию и раскройте свой потенциал.",
  metadataBase: new URL("https://oleksandra-site.vercel.app"),
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
    url: "https://oleksandra-site.vercel.app/ru",
    siteName: "Oleksandra Kalinka",
    images: [
      {
        url: "https://oleksandra-site.vercel.app/og-image.jpg",
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
    images: ["https://oleksandra-site.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
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
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
