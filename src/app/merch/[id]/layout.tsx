import React from 'react';
import { merchProducts } from "../../../data/merchProducts";
import { Metadata, Viewport } from "next";

// Base URL for the site
const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

type Props = {
  params: Promise<{ id: string }>
}

// Shared viewport config for all product pages
export const viewport: Viewport = {
  themeColor: "#000000",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Find the product
  const { id } = await params;
  const product = merchProducts.find(p => p.id === id);
  
  // Default metadata if product not found
  if (!product) {
    return {
      title: "Product Not Found | CLIVE Merchandise",
      description: "The product you're looking for doesn't exist."
    };
  }
  
  // Return product-specific metadata
  return {
    title: `${product.title} | CLIVE Merchandise`,
    description: `Get your hands on the exclusive ${product.title}. Official CLIVE merchandise.`,
    openGraph: {
      title: `${product.title} | CLIVE Merchandise`,
      description: `Get your hands on the exclusive ${product.title}. Official CLIVE merchandise.`,
      images: [
        {
          url: `${baseUrl}${product.imageUrl}`,
          width: 1200,
          height: 630,
          alt: product.title
        }
      ]
    }
  };
}

export default function ProductDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
} 