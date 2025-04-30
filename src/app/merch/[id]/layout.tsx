import type { Metadata } from "next";
import { merchProducts } from "../../../data/merchProducts";

// Base URL for the site
const baseUrl = "https://clivecoin.com";

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Find the product
  const product = merchProducts.find(p => p.id === params.id);
  
  // Default metadata if product not found
  if (!product) {
    return {
      title: "Product Not Found - CLIVECOIN Merchandise",
      description: "The requested product could not be found in our CLIVECOIN merchandise store.",
      themeColor: "#000000",
      alternates: {
        canonical: '/merch',
      }
    };
  }
  
  // Return product-specific metadata
  return {
    title: `${product.title} - CLIVECOIN Merchandise`,
    description: `${product.title} - Official CLIVECOIN merchandise. ${product.comingSoon ? 'Coming soon!' : 'Available now!'} Price: ${product.price}`,
    themeColor: "#000000",
    openGraph: {
      title: `${product.title} - CLIVECOIN Merchandise`,
      description: `${product.title} - Official CLIVECOIN merchandise. ${product.comingSoon ? 'Coming soon!' : 'Available now!'} Price: ${product.price}`,
      url: `${baseUrl}/merch/${params.id}`,
      images: [
        {
          url: product.imageUrl,
          width: 500,
          height: 500,
          alt: product.title,
        }
      ],
    },
    alternates: {
      canonical: `/merch/${params.id}`,
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