"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ClientBackgroundAnimation from '../../../components/ClientBackgroundAnimation';
import { merchProducts, MerchProduct } from '../../../data/merchProducts';

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<MerchProduct | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the product with the matching ID
    const foundProduct = merchProducts.find(p => p.id === params.id);
    setProduct(foundProduct);
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFFF00] flex items-center justify-center">
        <div className="text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FFFF00]">
        <ClientBackgroundAnimation />
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-8">Product Not Found</h1>
            <p className="text-xl mb-8">We couldn&apos;t find the product you&apos;re looking for.</p>
            <Link href="/merch">
              <motion.button
                className="bg-black text-[#FFFF00] px-6 py-3 rounded-lg font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Merch
              </motion.button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFF00]">
      <ClientBackgroundAnimation />
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <Link href="/merch">
            <motion.button
              className="bg-black text-[#FFFF00] px-4 py-2 rounded-lg font-bold mb-8 inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back to Merch
            </motion.button>
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-96 w-full bg-[#FFFF00]/50">
                <div className="absolute inset-0 bg-black/5 backdrop-blur-sm flex items-center justify-center">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={500}
                    height={500}
                    className="object-contain"
                  />
                </div>
                
                {product.comingSoon && (
                  <div className="absolute top-0 right-0 bg-black text-[#FFFF00] px-4 py-2 font-bold text-sm uppercase">
                    Coming Soon
                  </div>
                )}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-3xl md:text-4xl font-black mb-4">{product.title}</h1>
              <p className="text-3xl font-bold mb-6">{product.price}</p>
              
              <div className="bg-black text-[#FFFF00] p-6 rounded-xl mb-6">
                <h2 className="text-xl font-bold mb-2">Product Details</h2>
                <p className="mb-4">
                  This premium quality {product.title.toLowerCase()} features the iconic CLIVECOIN branding. 
                  Made with the highest quality materials for comfort and durability.
                </p>
                <p>
                  Join the CLIVE community and show your support with our exclusive merchandise.
                </p>
              </div>
              
              {product.comingSoon ? (
                <div className="bg-gray-600 text-white px-6 py-4 rounded-lg font-bold opacity-70 text-center">
                  Coming Soon
                </div>
              ) : (
                <motion.button
                  className="w-full bg-[#FFFF00] border-2 border-black text-black px-6 py-4 rounded-lg font-bold text-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add to Cart
                </motion.button>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
} 