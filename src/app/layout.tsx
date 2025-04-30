import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";

export const metadata: Metadata = {
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
    url: "https://clivecoin.com",
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
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
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
