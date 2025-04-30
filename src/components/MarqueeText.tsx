"use client";

import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const MarqueeText = () => {
  return (
    <motion.div
      className="py-6" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Marquee 
        speed={100} 
        gradient={false}
        className="text-4xl md:text-6xl font-black"
      >
        <span className="px-2">$CLIVE * $CLIVE * $CLIVE * $CLIVE * $CLIVE * $CLIVE * $CLIVE * $CLIVE * </span>
      </Marquee>
    </motion.div>
  );
};

export default MarqueeText; 