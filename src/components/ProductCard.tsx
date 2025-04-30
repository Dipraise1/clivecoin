"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  comingSoon?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  title, 
  price, 
  imageUrl,
  comingSoon = false
}) => {
  return (
    <motion.div
      className="bg-[#111] rounded-xl overflow-hidden shadow-lg"
      whileHover={{ y: -10, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64 w-full overflow-hidden bg-[#FFFF00]/10">
        <div className="absolute inset-0 bg-black/5 backdrop-blur-sm flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={title}
            width={350}
            height={350}
            className="object-contain"
          />
        </div>
        
        {comingSoon && (
          <div className="absolute top-0 right-0 bg-[#FFFF00] text-black px-4 py-2 font-bold text-sm uppercase">
            Coming Soon
          </div>
        )}
      </div>
      
      <div className="p-6 bg-[#111] text-[#FFFF00]">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">{price}</p>
          
          {comingSoon ? (
            <motion.button
              className="bg-[#333] text-[#FFFF00]/70 px-4 py-2 rounded-lg font-bold cursor-not-allowed"
              whileHover={{ scale: 1 }}
            >
              Coming Soon
            </motion.button>
          ) : (
            <Link href={`/merch/${id}`}>
              <motion.button
                className="bg-[#FFFF00] text-black px-4 py-2 rounded-lg font-bold hover:bg-[#e6e600] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard; 