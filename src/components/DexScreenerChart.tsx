"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DexScreenerChart = () => {
  const [loading, setLoading] = useState(true);
  
  return (
    <motion.div
      className="my-16 rounded-xl overflow-hidden shadow-2xl border-2 border-black"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-black text-[#FFFF00] py-4 px-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Live Price Chart</h2>
        <div className="flex items-center gap-2">
          <motion.div 
            className="h-3 w-3 rounded-full bg-red-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          <span className="text-sm">LIVE</span>
        </div>
      </div>
      
      <div className="bg-black px-4 py-2 text-[#FFFF00] text-sm border-t border-[#FFFF00]/20">
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <div className="flex items-center gap-2">
            <span className="opacity-70">Pooled CLIVE:</span>
            <span className="font-bold">113,568,157</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-70">Pooled SOL:</span>
            <span className="font-bold">158.32</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-70">Liquidity:</span>
            <span className="font-bold">$44K</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-70">Pair Created:</span>
            <span className="font-bold">4d 19h ago</span>
          </div>
        </div>
      </div>
      
      <div className="w-full h-[400px] md:h-[600px] bg-black relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
            <motion.div 
              className="w-16 h-16 border-4 border-t-[#FFFF00] border-r-transparent border-b-transparent border-l-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        )}
        <iframe
          src="https://dexscreener.com/solana/37suwpm5fbvak5iamzb4twkvdd3z5tg3fupfv4leasnv?embed=1&theme=dark"
          style={{ 
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none"
          }}
          title="DEXScreener Chart"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setLoading(false)}
        />
      </div>
      
      <div className="bg-black py-3 px-6 flex justify-center border-t border-[#FFFF00]/20">
        <a 
          href="https://phantom.com/tokens/solana/GFVmiDwaWusNRE5pv1BSPpjTpsaWaByrsSM4dDjCpump?referralId=efgft7u3se" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#FFFF00] text-black px-6 py-2 rounded-lg font-bold hover:bg-opacity-90 transition-all text-center inline-block"
        >
          Buy $CLIVE Now
        </a>
      </div>
    </motion.div>
  );
};

export default DexScreenerChart; 