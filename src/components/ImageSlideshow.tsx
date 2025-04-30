"use client";

import React, { useState, useEffect } from 'react';
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

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ImageSlideshow = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  
  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPage(([prevPage]) => {
        return [(prevPage + 1) % images.length, 1];
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const imageIndex = ((page % images.length) + images.length) % images.length;
  
  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => {
      return [prevPage + newDirection, newDirection];
    });
  };

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl my-12">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute w-full h-full"
        >
          <Image
            src={images[imageIndex]}
            alt={`Slide ${imageIndex}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
            priority
          />
          
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-3 bg-black/60 text-[#FFFF00] text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            MAKE AUSTRALIA GREAT AGAIN
          </motion.div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
        <motion.button
          className="bg-[#FFFF00] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold"
          onClick={() => paginate(-1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ←
        </motion.button>
      </div>
      
      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
        <motion.button
          className="bg-[#FFFF00] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold"
          onClick={() => paginate(1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          →
        </motion.button>
      </div>
      
      <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <motion.button
            key={i}
            className={`w-3 h-3 rounded-full ${i === imageIndex ? 'bg-[#FFFF00]' : 'bg-[#FFFF00]/50'}`}
            onClick={() => setPage([i, i > imageIndex ? 1 : -1])}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow; 