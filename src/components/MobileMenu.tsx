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
}

const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex flex-col"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          <div className="flex justify-between items-center p-6 border-b border-[#FFFF00]/20">
            <motion.div 
              className="text-3xl font-black text-[#FFFF00]"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              CLIVECOIN
            </motion.div>
            
            <motion.button
              className="text-[#FFFF00] text-2xl"
              onClick={onClose}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.1 }}
            >
              ✕
            </motion.button>
          </div>
          
          <motion.nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link 
                  href={item.path}
                  className="text-[#FFFF00] text-2xl font-bold block py-3 w-full border-b border-[#FFFF00]/20"
                  onClick={onClose}
                  target={item.path.startsWith('http') ? '_blank' : undefined}
                  rel={item.path.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
          
          <motion.div 
            className="mt-auto p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a 
              href="https://jup.ag/swap/SOL-GFVmiDwaWusNRE5pv1BSPpjTpsaWaByrsSM4dDjCpump"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
            >
              <motion.button 
                className="w-full py-4 bg-[#FFFF00] text-black font-bold rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                BUY $CLIVE
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 