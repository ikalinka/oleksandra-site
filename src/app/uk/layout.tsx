import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "../../styles/globals.css";

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Олександра Калинка – Кармічний гід та лайф-коуч",
  description: "Запишіться на сесію, щоб розкрити свій потенціал та очистити енергетичні блоки.",
  metadataBase: new URL("https://oleksandra-site.vercel.app"),
  alternates: {
    canonical: "/uk",
    languages: {
      "en": "/en",
      "uk": "/uk",
      "ru": "/ru",
      "x-default": "/en",
    },
  },
  openGraph: {
    title: "Олександра Калінка – Кармічний гід та лайф-коуч",
    description: "Зєднайтеся зі своїм справжнім призначенням через персональний коучинг.",
    url: "https://oleksandra-site.vercel.app/uk",
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
    title: "Олександра Калинка – Кармічний гід та лайф-коуч",
    description: "З&apos;єднайтеся зі своїм справжнім призначенням через персональний коучинг.",
    images: ["https://oleksandra-site.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
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
