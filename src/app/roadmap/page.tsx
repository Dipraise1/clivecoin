"use client";

import React from 'react';
import Header from '../../components/Header';
import { motion } from 'framer-motion';
import ImageSlideshow from '../../components/ImageSlideshow';
import Footer from '../../components/Footer';

const roadmapItems = [
  {
    phase: 'PHASE 1: LAUNCH & FOUNDATION',
    title: 'Getting Started',
    time: 'COMPLETED',
    status: 'completed',
    emoji: '✅',
    items: [
      '$CLIVE coin launch on Pump.fun',
      'Website live (CliveCoin.net)',
      'Telegram and X (Twitter) community opened',
      'Clive AI Bot development starts'
    ]
  },
  {
    phase: 'PHASE 2: GROWTH & HYPE',
    title: 'Building the Community',
    time: 'IN PROGRESS',
    status: 'in-progress',
    emoji: '🔥',
    items: [
      'Meme campaigns across X and Telegram',
      'Influencer and community marketing push',
      'Bonding complete + DEX listing prep',
      'Merch store planning'
    ]
  },
  {
    phase: 'PHASE 3: EXPANSION',
    title: 'Increasing Reach & Utility',
    time: 'UPCOMING',
    status: 'upcoming',
    emoji: '🚀',
    items: [
      'DEX Listings (first exchanges)',
      'Full launch of Clive AI Bot for holders',
      'Limited edition CliveCoin merch drop',
      'Trending campaigns across crypto platforms'
    ]
  },
  {
    phase: 'PHASE 4: DOMINATION',
    title: 'Going Mainstream',
    time: 'FUTURE',
    status: 'upcoming',
    emoji: '🌏',
    items: [
      'Major CEX applications',
      'Real-world events and partnerships',
      'Expansion into global meme coin markets',
      '$CLIVE — the official Aussie meme coin 🇦🇺'
    ]
  }
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-[#FFFF00]">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-6xl font-black mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          STRATEGIC ROADMAP
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our comprehensive plan to revolutionize the Australian political meme coin landscape and create the ultimate community-driven token.
        </motion.p>
        
        <ImageSlideshow />
        
        <div className="relative mt-24">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-black md:transform md:-translate-x-1/2 hidden md:block" />
          
          {roadmapItems.map((item, index) => (
            <motion.div 
              key={item.phase}
              className={`flex flex-col md:flex-row mb-24 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:w-1/2 p-6 flex flex-col items-center md:items-start">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-black text-[#FFFF00] px-6 py-3 rounded-full font-bold">
                    <span className="text-xl mr-1">{item.emoji}</span>
                    {item.phase}
                  </div>
                  <div className={`px-4 py-2 rounded-full font-bold text-sm
                    ${item.status === 'completed' ? 'bg-green-500 text-white' : 
                      item.status === 'in-progress' ? 'bg-blue-500 text-white' : 
                      'bg-gray-700 text-white'}`}>
                    {item.time}
                  </div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-black/10 w-full">
                  <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                  
                  <ul className="list-none space-y-4">
                    {item.items.map((listItem, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                      >
                        <div className="mt-1 min-w-5 h-5 rounded-full bg-black flex items-center justify-center text-[#FFFF00] text-xs">
                          {i + 1}
                        </div>
                        <span className="font-medium">{listItem}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="hidden md:flex md:w-1/2 items-center justify-center relative">
                <motion.div
                  className={`w-12 h-12 bg-black rounded-full border-4 border-[#FFFF00] flex items-center justify-center text-[#FFFF00] font-bold text-xl`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                >
                  {item.emoji}
                </motion.div>
                <div className="absolute top-1/2 transform -translate-y-1/2">
                  <motion.div
                    className="text-4xl font-black opacity-5"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.05, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  >
                    {item.time}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="my-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="https://jup.ag/swap/SOL-GFVmiDwaWusNRE5pv1BSPpjTpsaWaByrsSM4dDjCpump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-black text-[#FFFF00] px-8 py-4 rounded-lg font-bold hover:bg-black/90 transition-all"
          >
            Join the Revolution - Buy $CLIVE
          </a>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
} 