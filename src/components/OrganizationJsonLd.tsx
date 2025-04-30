"use client";

import React from 'react';

interface OrganizationJsonLdProps {
  domain: string;
}

export default function OrganizationJsonLd({ domain }: OrganizationJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CLIVECOIN",
    "url": domain,
    "logo": `${domain}/icon.png`,
    "description": "Australia's First Political Meme Coin. CLIVECOIN ($CLIVE) is a community-driven token on the Solana blockchain.",
    "sameAs": [
      "https://t.me/clivescoin",
      "https://x.com/clivescoin?s=21"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${domain}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 