"use client";

import React from 'react';
import Header from '../components/Header';
import MarqueeText from '../components/MarqueeText';
import Hero from '../components/Hero';
import ImageGallery from '../components/ImageGallery';
import Footer from '../components/Footer';
import ClientBackgroundAnimation from '../components/ClientBackgroundAnimation';
import DexScreenerChart from '../components/DexScreenerChart';
import CallToAction from '../components/CallToAction';
import CommunitySection from '../components/CommunitySection';
import OrganizationJsonLd from '../components/OrganizationJsonLd';

export default function Home() {
  const domain = "https://clivecoin.com"; // Update this with your actual domain
  
  return (
    <div className="min-h-screen bg-[#FFFF00]">
      {/* Add structured data for SEO */}
      <OrganizationJsonLd domain={domain} />
      
      <ClientBackgroundAnimation />
      <Header />
      <MarqueeText />
      <Hero />
      <div className="container mx-auto px-4">
        <DexScreenerChart />
        <CommunitySection />
        <CallToAction />
        <ImageGallery />
        </div>
      <Footer />
    </div>
  );
}
