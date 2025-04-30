"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  
  // Determine if the current page has a dark theme (like the merch page)
  const isDarkTheme = pathname.includes('/merch');

  // Track scroll position to add background on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Merch', path: '/merch' },
    { name: 'Contract', path: '/contract-address' },
    { name: 'Phantom', path: 'https://phantom.com/tokens/solana/GFVmiDwaWusNRE5pv1BSPpjTpsaWaByrsSM4dDjCpump?referralId=efgft7u3se' },
    { name: 'DEXScreener', path: 'https://dexscreener.com/solana/37suwpm5fbvak5iamzb4twkvdd3z5tg3fupfv4leasnv' }
  ];

  // Determine the styling based on the theme and scroll state
  const getHeaderStyle = () => {
    if (scrolled) {
      return 'bg-black/85 backdrop-blur-md shadow-lg';
    }
    if (isDarkTheme) {
      return 'bg-transparent';
    }
    return 'bg-transparent';
  };

  // Get text color based on scroll state and theme
  const getTextColor = (isActive: boolean) => {
    if (scrolled) {
      return isActive ? 'text-[#FFFF00]' : 'text-white';
    }
    if (isDarkTheme) {
      return isActive ? 'text-[#FFFF00]' : 'text-white';
    }
    return isActive ? 'text-[#FFFF00]' : 'text-black';
  };

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 w-full py-4 z-40 transition-all duration-300 ${getHeaderStyle()}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 lg:px-8 xl:px-12 flex justify-between items-center max-w-[1600px]">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="block">
              <div className="bg-[#FFFF00] px-2 py-1 rounded-md">
                <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter relative">
                  <span className="bg-gradient-to-r from-black to-[#333] text-transparent bg-clip-text">CLIVE</span>
                  <span className="bg-gradient-to-r from-[#FFD700] to-[#FFC107] text-transparent bg-clip-text">COIN</span>
                </span>
              </div>
            </Link>
          </motion.div>
          
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link 
                  href={item.path} 
                  className={`font-medium px-3 py-2 rounded-md transition-colors hover:bg-white/10 relative group ${getTextColor(item.path === pathname)}`}
                  target={item.path.startsWith('http') ? '_blank' : undefined}
                  rel={item.path.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-[#FFFF00] transition-all duration-300 ${item.path === pathname ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              </motion.div>
            ))}

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2"
            >
              <a 
                href="https://jup.ag/swap/SOL-GFVmiDwaWusNRE5pv1BSPpjTpsaWaByrsSM4dDjCpump"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFFF00] text-black px-5 py-2 rounded-lg font-bold transition-all hover:bg-[#e6e600] hover:shadow-lg hover:shadow-[#FFFF00]/20"
              >
                BUY $CLIVE
              </a>
            </motion.div>
          </nav>
          
          <div className="lg:hidden flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="sm:block mr-4"
            >
              <a 
                href="https://jup.ag/swap/SOL-GFVmiDwaWusNRE5pv1BSPpjTpsaWaByrsSM4dDjCpump"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFFF00] text-black px-3 py-1.5 text-sm rounded-lg font-bold transition-all hover:bg-[#e6e600]"
              >
                BUY
              </a>
            </motion.div>
            
            <motion.button
              className="text-2xl p-2"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={scrolled || isDarkTheme ? "white" : "black"} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
        
        {/* Scroll progress indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-[#FFFF00]"
          style={{ width: scrolled ? "100%" : "0%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolled ? 0.5 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.header>
      
      {/* Spacer for fixed header */}
      <div className="h-16 sm:h-20"></div>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navItems={navItems}
        currentPath={pathname}
      />
    </>
  );
};

export default Header;