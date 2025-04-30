"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedButton from './AnimatedButton';
import SocialLinks from './SocialLinks';

const Hero = () => {
  return (
    <div className="px-4 md:px-16 py-8 md:py-16">
      <motion.div 
        className="text-4xl md:text-6xl font-black mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        CLIVECOIN
      </motion.div>
      
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <div className="w-full md:w-3/5">
          <motion.h1 
            className="text-3xl md:text-5xl font-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            AUSTRALIA&apos;S FIRST POLITICAL MEME COIN
          </motion.h1>
          
          <motion.div 
            className="text-lg md:text-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="mb-4">The future isn&apos;t just decentralized — it&apos;s <span className="font-bold italic">Palmerized</span>.</p>
            <p className="mb-4">CliveCoin is here to shake up the system and put Aussie power back in the hands of the people. Inspired by the legend himself, this isn&apos;t just a token — it&apos;s a movement. Early? You&apos;re damn right.</p>
            <p className="font-bold">Buy the dip, ride the hype, meme the future.</p>
            <p className="font-bold">🇦🇺 Aussie-made. Blockchain-backed.</p>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a href="https://jup.ag/swap/SOL-GFVmiDwaWusNRE5pv1BSPpjTpsaWaByrsSM4dDjCpump" target="_blank" rel="noopener noreferrer">
              <AnimatedButton>BUY CLIVE</AnimatedButton>
            </a>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center"
            >
              <SocialLinks iconSize="sm" />
              <span className="ml-3 text-sm font-medium">Join the community</span>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="w-full md:w-2/5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <div className="relative w-full aspect-square rounded-full overflow-hidden bg-black/10 shadow-xl border-4 border-black">
            <Image 
              src="/photo_2025-04-30_16-17-32.jpg"
              alt="Clive Palmer cartoon" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 