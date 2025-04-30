"use client";

import React from 'react';
import { MerchProduct } from '../data/merchProducts';

interface ProductJsonLdProps {
  product: MerchProduct;
  domain: string;
}

export default function ProductJsonLd({ product, domain }: ProductJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": [
      `${domain}${product.imageUrl}`
    ],
    "description": `Official CLIVECOIN merchandise. ${product.title}. ${product.comingSoon ? 'Coming Soon!' : 'Available now!'}`,
    "brand": {
      "@type": "Brand",
      "name": "CLIVECOIN"
    },
    "offers": {
      "@type": "Offer",
      "url": `${domain}/merch/${product.id}`,
      "priceCurrency": "USD",
      "price": product.price.replace('$', ''),
      "availability": product.comingSoon ? 
        "https://schema.org/PreOrder" : 
        "https://schema.org/InStock"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 