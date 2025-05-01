"use client";

import React, { useState } from 'react';
import Header from '../../components/Header';
import { motion } from 'framer-motion';
import TokenDistributionChart from '../../components/TokenDistributionChart';
import AnimatedButton from '../../components/AnimatedButton';
import Footer from '../../components/Footer';

export default function ContractAddressPage() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "GFVmiDwaWusNRE5pv1BSPpjTpsaWaByrsSM4dDjCpump";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="min-h-screen bg-[#FFFF00]">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-black mb-8 text-center">CONTRACT ADDRESS</h1>
          
          <div className="bg-black text-[#FFFF00] p-8 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">$CLIVE Token Contract</h2>
            
            <div className="bg-[#1a1a1a] p-4 rounded flex items-center justify-between mb-4 overflow-x-auto">
              <code className="text-sm md:text-base font-mono">
                {contractAddress}
              </code>
              <AnimatedButton 
                color="yellow" 
                onClick={copyToClipboard}
                className="ml-4 whitespace-nowrap"
              >
                {copied ? "Copied!" : "Copy"}
              </AnimatedButton>
            </div>
            
            <p className="text-sm opacity-80">
              Always verify the contract address before making any transactions.
              The official $CLIVE token contract is deployed on the Solana blockchain.
            </p>
          </div>
          
          <motion.div
            className="bg-[#1a1a1a] text-[#FFFF00] p-6 rounded-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Liquidity Pair Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="text-sm text-[#FFFF00]/60 mb-1">Pair Created:</p>
                <p className="font-bold">4 days, 19 hours ago</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="text-sm text-[#FFFF00]/60 mb-1">Pooled CLIVE:</p>
                <p className="font-bold">113,568,157 ($22K)</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="text-sm text-[#FFFF00]/60 mb-1">Pooled SOL:</p>
                <p className="font-bold">158.32 ($22K)</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="text-sm text-[#FFFF00]/60 mb-1">Pair Type:</p>
                <p className="font-bold">CLIVE/SOL</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://dexscreener.com/solana/37suwpm5fbvak5iamzb4twkvdd3z5tg3fupfv4leasnv" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFFF00] underline hover:text-white transition-colors"
              >
                View on DEXScreener
              </a>
            </div>
          </motion.div>
          
          <TokenDistributionChart />
          
          <motion.div
            className="bg-[#1a1a1a] text-[#FFFF00] p-6 rounded-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-2">Token Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-[#FFFF00]/60">Name:</p>
                <p className="font-bold">CLIVECOIN</p>
              </div>
              <div>
                <p className="text-sm text-[#FFFF00]/60">Symbol:</p>
                <p className="font-bold">$CLIVE</p>
              </div>
              <div>
                <p className="text-sm text-[#FFFF00]/60">Blockchain:</p>
                <p className="font-bold">Solana</p>
              </div>
              <div>
                <p className="text-sm text-[#FFFF00]/60">Total Supply:</p>
                <p className="font-bold">1,000,000,000 $CLIVE</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="text-center flex flex-col gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a 
              href="https://solscan.io/token/GFVmiDwaWusNRE5pv1BSPpjTpsaWaByrsSM4dDjCpump" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-black text-[#FFFF00] px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all"
            >
              View on Solscan
            </a>
            <a 
              href="https://phantom.com/tokens/solana/GFVmiDwaWusNRE5pv1BSPpjTpsaWaByrsSM4dDjCpump?referralId=efgft7u3se" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-black text-[#FFFF00] px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all"
            >
              Buy with Phantom
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
} 