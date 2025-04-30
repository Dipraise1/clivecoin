"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const socialLinks = [
  { name: 'Twitter', url: 'https://x.com/clivescoin?s=21', icon: 'X' },
  { name: 'Telegram', url: 'https://t.me/clivescoin', icon: 'Tg' },
];

interface SocialLinksProps {
  className?: string;
  iconSize?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

const SocialLinks = ({ 
  className = '', 
  iconSize = 'md',
  showLabels = false
}: SocialLinksProps) => {
  
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg'
  };
  
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className={`${sizeClasses[iconSize]} rounded-full bg-[#FFFF00] text-black flex items-center justify-center font-bold`}
          >
            {link.icon}
          </motion.div>
          {showLabels && (
            <span className="ml-2 font-medium">
              {link.name === 'Twitter' ? 'X (Twitter)' : link.name}
            </span>
          )}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks; 