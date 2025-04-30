"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Merch', path: '/merch' },
    { name: 'Contract', path: '/contract-address' },
    { name: 'Phantom', path: 'https://phantom.com/tokens/solana/GFVmiDwaWusNRE5pv1BSPpjTpsaWaByrsSM4dDjCpump?referralId=efgft7u3se' },
    { name: 'DEXScreener', path: 'https://dexscreener.com/solana/37suwpm5fbvak5iamzb4twkvdd3z5tg3fupfv4leasnv' }
  ];

  return (
    <>
      <motion.header 
        className="w-full py-4 px-4 md:px-16 flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-3xl font-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/">CLIVECOIN</Link>
        </motion.div>
        
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={item.path} 
                className="font-semibold hover:underline"
                target={item.path.startsWith('http') ? '_blank' : undefined}
                rel={item.path.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>
        
        <motion.button
          className="md:hidden text-2xl"
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          ☰
        </motion.button>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <a 
            href="https://jup.ag/swap/SOL-GFVmiDwaWusNRE5pv1BSPpjTpsaWaByrsSM4dDjCpump"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-[#FFFF00] px-4 py-2 rounded-lg font-bold hover:bg-black/90 transition-colors"
          >
            BUY $CLIVE
          </a>
        </motion.div>
      </motion.header>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navItems={navItems}
      />
    </>
  );
};

export default Header;