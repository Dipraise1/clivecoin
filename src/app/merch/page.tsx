"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import ClientBackgroundAnimation from '../../components/ClientBackgroundAnimation';
import { merchProducts } from '../../data/merchProducts';

export default function MerchPage() {
  return (
    <div className="min-h-screen bg-[#FFFF00]">
      <ClientBackgroundAnimation />
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-3 text-center">CLIVE MERCH</h1>
          
          <motion.p 
            className="text-xl mb-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Show your support with official CLIVECOIN merchandise.
            All products coming soon!
          </motion.p>
          
          <div className="mb-12">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {merchProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  comingSoon={product.comingSoon}
                />
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="bg-black text-[#FFFF00] p-8 rounded-xl my-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-center">COMING SOON</h2>
            <p className="text-center">
              Our exclusive CLIVE merchandise is currently in production.
              Follow our social channels for updates on when merch will be available for purchase.
            </p>
            
            <div className="flex justify-center mt-6">
              <a 
                href="https://t.me/clivescoin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#FFFF00] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#e6e600] transition-colors mx-2"
              >
                Join Telegram
              </a>
              <a 
                href="https://x.com/clivescoin?s=21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#FFFF00] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#e6e600] transition-colors mx-2"
              >
                Follow on X
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
} 