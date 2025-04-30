"use client";

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: {
    name: string;
    path: string;
  }[];
  currentPath?: string;
}

const MobileMenu = ({ isOpen, onClose, navItems, currentPath = '' }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex flex-col overflow-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center p-4 sm:p-6 border-b border-[#FFFF00]/20">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-[#FFFF00] px-2 py-1 rounded-md">
                <span className="text-2xl sm:text-3xl font-black tracking-tighter relative">
                  <span className="bg-gradient-to-r from-black to-[#333] text-transparent bg-clip-text">CLIVE</span>
                  <span className="bg-gradient-to-r from-[#FFD700] to-[#FFC107] text-transparent bg-clip-text">COIN</span>
                </span>
              </div>
            </motion.div>
            
            <motion.button
              className="text-white p-2 rounded-full hover:bg-white/10"
              onClick={onClose}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
          
          <motion.nav className="flex flex-col p-4 sm:p-6 space-y-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                <Link 
                  href={item.path}
                  className={`flex items-center text-xl sm:text-2xl font-bold py-3 border-b border-[#FFFF00]/10 hover:bg-white/5 rounded-md px-2 transition-colors ${item.path === currentPath ? 'bg-white/5' : ''}`}
                  onClick={onClose}
                  target={item.path.startsWith('http') ? '_blank' : undefined}
                  rel={item.path.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span className={`mr-2 ${item.path === currentPath ? 'text-[#FFFF00]' : 'text-[#FFFF00]/70'}`}>0{index + 1}.</span>
                  <span className={item.path === currentPath ? 'text-[#FFFF00]' : 'text-white'}>
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-6 mt-auto">
            <motion.a
              href="https://t.me/clivescoin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#111] hover:bg-[#222] text-white py-3 rounded-lg transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2a10 10 0 110 20 10 10 0 010-20zm2.93 15.46l.19-2.95c.08-1.23.1-1.23.68-1.23h1.01c-.17-.92-1.1-1.61-2.08-1.61h-5.61c.62 0 1.11.49 1.11 1.1v.2c0 .61-.5 1.1-1.11 1.1h.32c.66 0 .67 0 .76 1.22l.19 2.95c.05.86.15.97 1.1.97h2.35c.95 0 1.05-.11 1.09-.97z"/>
              </svg>
              Telegram
            </motion.a>
            
            <motion.a
              href="https://x.com/clivescoin?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#111] hover:bg-[#222] text-white py-3 rounded-lg transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              X (Twitter)
            </motion.a>
            
            <motion.a 
              href="https://jup.ag/swap/SOL-GFVmiDwaWusNRE5pv1BSPpjTpsaWaByrsSM4dDjCpump"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:col-span-2 flex items-center justify-center py-4 bg-[#FFFF00] text-black font-bold rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
            >
              BUY $CLIVE
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 