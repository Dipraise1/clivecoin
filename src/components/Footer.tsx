"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-black text-[#FFFF00] py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            className="text-3xl font-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            CLIVECOIN
          </motion.div>
          
          <SocialLinks 
            showLabels={true} 
            iconSize="md" 
            className="text-[#FFFF00]"
          />
        </div>
        
        <motion.div 
          className="mt-8 pt-8 border-t border-[#FFFF00]/20 text-center text-sm opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="mb-2">$CLIVE Token is not an investment. It&apos;s a political meme coin.</p>
          <p>© {new Date().getFullYear()} CLIVECOIN. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;