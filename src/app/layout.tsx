import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";

// Base URL for the site
const baseUrl = "https://clivecoin.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "CLIVECOIN - Australia's First Political Meme Coin",
  description: "Australia's First Political Meme Coin. Buy the dip, ride the hype, meme the future.",
  keywords: ["CLIVECOIN", "Clive Palmer", "Australia", "cryptocurrency", "meme coin", "political", "token"],
  themeColor: "#FFFF00",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    apple: {
      url: '/apple-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
  },
  openGraph: {
    title: "CLIVECOIN - Australia's First Political Meme Coin",
    description: "Australia's First Political Meme Coin. Buy the dip, ride the hype, meme the future.",
    url: baseUrl,
    siteName: "CLIVECOIN",
    images: [
      {
        url: "/icon.png",
        width: 192,
        height: 192,
        alt: "CLIVECOIN Logo",
      }
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CLIVECOIN - Australia's First Political Meme Coin",
    description: "Australia's First Political Meme Coin. Buy the dip, ride the hype, meme the future.",
    site: "@clivescoin",
    creator: "@clivescoin",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  other: {
    "og:image:width": "192",
    "og:image:height": "192",
    "og:type": "website",
    "og:site_name": "CLIVECOIN",
    "og:locale": "en_AU",
    "twitter:dnt": "on",
    "fb:app_id": "", // Add your Facebook App ID if you have one
    "article:publisher": "https://x.com/clivescoin?s=21",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          <main className="min-h-screen bg-[#FFFF00] text-black">
            {children}
          </main>
        </ClientLayout>
      </body>
    </html>
  );
}
