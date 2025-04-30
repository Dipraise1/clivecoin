"use client";

import React, { useState } from 'react';
import Header from '../../components/Header';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '../../components/Footer';
import AnimatedButton from '../../components/AnimatedButton';

export default function BuyPage() {
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-center">BUY $CLIVE</h1>
          
          <motion.p 
            className="text-xl mb-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Join the revolution with Australia&apos;s first political meme coin.
            Get early access to $CLIVE before it goes mainstream!
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              className="bg-black text-[#FFFF00] p-8 rounded-xl shadow-xl h-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-[#FFFF00] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-lg font-black">1</span>
                Via Jupiter Swap
              </h2>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-[#FFFF00]/20 p-1 rounded-full mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FFFF00]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Fast and easy swap directly on Jupiter DEX</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#FFFF00]/20 p-1 rounded-full mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FFFF00]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Best price routing across multiple DEXs</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#FFFF00]/20 p-1 rounded-full mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FFFF00]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Works with most Solana wallets</span>
                </li>
              </ul>
              
              <a 
                href="https://jup.ag/swap/SOL-GFVmiDwaWusNRE5pv1BSPpjTpsaWaByrsSM4dDjCpump" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <AnimatedButton color="yellow" className="w-full justify-center">
                  Buy on Jupiter
                </AnimatedButton>
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-black text-[#FFFF00] p-8 rounded-xl shadow-xl h-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-[#FFFF00] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-lg font-black">2</span>
                Via Phantom Wallet
              </h2>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-[#FFFF00]/20 p-1 rounded-full mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FFFF00]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Directly in your Phantom Wallet app</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#FFFF00]/20 p-1 rounded-full mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FFFF00]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Simple and convenient on mobile</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#FFFF00]/20 p-1 rounded-full mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FFFF00]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Quick access to $CLIVE tokens</span>
                </li>
              </ul>
              
              <a 
                href="https://phantom.com/tokens/solana/GFVmiDwaWusNRE5pv1BSPpjTpsaWaByrsSM4dDjCpump?referralId=efgft7u3se" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <AnimatedButton color="yellow" className="w-full justify-center">
                  Buy with Phantom
                </AnimatedButton>
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="bg-black text-[#FFFF00] p-8 rounded-xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">Contract Address</h2>
            <div className="bg-[#1a1a1a] p-4 rounded-xl flex items-center justify-between mb-4 overflow-x-auto">
              <code className="text-sm font-mono mr-4 break-all">
                {contractAddress}
              </code>
              <button 
                onClick={copyToClipboard}
                className="bg-[#FFFF00] text-black px-4 py-2 rounded-lg font-bold whitespace-nowrap hover:bg-[#e6e600] transition-colors"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="text-sm opacity-80">
              Always verify the contract address when making transactions.
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-lg mb-4">Need help with your purchase?</p>
            <div className="flex justify-center">
              <a 
                href="https://t.me/clivescoin" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0088cc] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#0077b5] transition-colors"
              >
                <span className="font-bold text-xl">Tg</span>
                Join our Telegram Support
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Link href="/">
              <AnimatedButton>
                Back to Home
              </AnimatedButton>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
} 