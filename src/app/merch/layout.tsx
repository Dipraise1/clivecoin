import type { Metadata } from "next";

// Base URL for the site
const baseUrl = "https://clivecoin.com";

export const metadata: Metadata = {
  title: "CLIVECOIN Merchandise Store - Official $CLIVE Merch",
  description: "Shop official CLIVECOIN merchandise. Show your support with exclusive $CLIVE t-shirts, hoodies, caps, and more.",
  keywords: ["CLIVECOIN", "CLIVE", "crypto merchandise", "meme coin merch", "crypto clothing", "merchandise"],
  themeColor: "#000000",
  openGraph: {
    title: "CLIVECOIN Merchandise Store - Official $CLIVE Merch",
    description: "Shop official CLIVECOIN merchandise. Show your support with exclusive $CLIVE t-shirts, hoodies, caps, and more.",
    url: `${baseUrl}/merch`,
    siteName: "CLIVECOIN",
    images: [
      {
        url: "/images/merch/tshirt-placeholder.svg",
        width: 500,
        height: 500,
        alt: "CLIVECOIN Merchandise",
      }
    ],
    locale: "en_AU",
    type: "website",
  },
  alternates: {
    canonical: '/merch',
  }
};

export default function MerchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
} 