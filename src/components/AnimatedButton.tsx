"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  color?: 'yellow' | 'black';
}

const AnimatedButton = ({ 
  children, 
  onClick, 
  className = '',
  color = 'black'
}: AnimatedButtonProps) => {
  const baseStyle = "relative overflow-hidden font-bold px-8 py-4 rounded-lg flex items-center justify-center hover-effect";
  const colorStyle = color === 'black' 
    ? "bg-black text-[#FFFF00]" 
    : "bg-[#FFFF00] text-black";
  
  return (
    <motion.button
      className={`${baseStyle} ${colorStyle} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3,
        scale: {
          type: "spring",
          stiffness: 400,
          damping: 10
        }
      }}
    >
      <motion.span
        className="relative z-10"
      >
        {children}
      </motion.span>
      
      <motion.div
        className={`absolute inset-0 ${color === 'black' ? 'bg-[#222]' : 'bg-[#ffff33]'}`}
        initial={{ scale: 0, borderRadius: '100%' }}
        whileHover={{ scale: 1.5, borderRadius: '0%' }}
        transition={{ duration: 0.4 }}
        style={{ originX: 0.5, originY: 0.5 }}
      />
    </motion.button>
  );
};

export default AnimatedButton; 