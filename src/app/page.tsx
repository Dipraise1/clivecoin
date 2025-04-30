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

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFF00]">
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
