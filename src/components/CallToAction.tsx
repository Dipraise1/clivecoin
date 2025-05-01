"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedButton from './AnimatedButton';

const CallToAction = () => {
  return (
    <motion.div 
      className="my-16 py-16 px-8 bg-black text-[#FFFF00] rounded-2xl text-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div 
          key={i}
          className="absolute w-8 h-8 opacity-10 z-0 text-2xl font-bold"
          initial={{ 
            x: Math.random() * 100 - 50 + '%',
            y: Math.random() * 100 - 50 + '%',
            rotate: Math.random() * 360
          }}
          animate={{ 
            x: [
              Math.random() * 100 - 50 + '%',
              Math.random() * 100 - 50 + '%',
              Math.random() * 100 - 50 + '%'
            ],
            y: [
              Math.random() * 100 - 50 + '%',
              Math.random() * 100 - 50 + '%',
              Math.random() * 100 - 50 + '%'
            ],
            rotate: Math.random() * 720 - 360
          }}
          transition={{ 
            duration: Math.random() * 20 + 10, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          $
        </motion.div>
      ))}
      
      <div className="relative z-10">
        <motion.h2 
          className="text-3xl md:text-5xl font-black mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          JOIN THE POLITICAL MEME REVOLUTION
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 opacity-80"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Be part of Australia&apos;s fastest growing crypto community and help make Australia great again!
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a href="https://phantom.com/tokens/solana/GFVmiDwaWusNRE5pv1BSPpjTpsaWaByrsSM4dDjCpump?referralId=efgft7u3se" target="_blank" rel="noopener noreferrer">
            <AnimatedButton color="yellow">
              BUY $CLIVE NOW
            </AnimatedButton>
          </a>
          
          <Link href="/roadmap">
            <AnimatedButton>
              VIEW ROADMAP
            </AnimatedButton>
          </Link>
        </motion.div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-[#FFFF00]/20 max-w-md mx-auto text-sm opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.5 }}
        >
          <p>Already over 10,000+ holders and growing! Join our community today.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CallToAction; 