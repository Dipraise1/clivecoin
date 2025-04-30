"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/photo_2025-04-30_16-17-32.jpg',
  '/photo_2025-04-30_16-17-31.jpg',
  '/photo_2025-04-29_14-25-15.jpg',
  '/photo_2025-04-30_08-20-04.jpg',
  '/photo_2025-04-30_08-19-56.jpg',
  '/photo_2025-04-30_08-19-48.jpg',
  '/photo_2025-04-30_16-19-33.jpg',
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="my-16">
      <motion.h2
        className="text-3xl md:text-5xl font-black mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        CLIVE GALLERY
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image}
            className="aspect-square relative overflow-hidden bg-black/10 cursor-pointer"
            whileHover={{ scale: 1.05, zIndex: 10 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={`Clive image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-auto max-h-[90vh]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <Image
                src={selectedImage}
                alt="Selected image"
                fill
                className="object-contain"
                sizes="90vw"
              />

              <motion.button
                className="absolute top-4 right-4 bg-[#FFFF00] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                X
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery; 