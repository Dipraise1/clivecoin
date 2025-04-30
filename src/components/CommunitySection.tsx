"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from './SocialLinks';

const CommunitySection = () => {
  return (
    <motion.div 
      className="py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-black mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          JOIN THE $CLIVE CULT
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Join our growing community of Aussie meme enthusiasts and political rebels
        </motion.p>
        
        <motion.div 
          className="flex flex-col items-center justify-center gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {socialLinks.map((platform, index) => (
            <motion.div
              key={platform.name}
              className="w-full bg-black/10 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1) }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-[#FFFF00] rounded-full flex items-center justify-center text-black font-bold text-2xl mr-4">
                    {platform.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold">
                      {platform.name === 'Twitter' ? 'X (Twitter)' : platform.name}
                    </h3>
                    <p className="text-black/60">
                      {platform.name === 'Twitter' ? 'Latest updates and memes' : 'Join the conversation'}
                    </p>
                  </div>
                </div>
                
                <a 
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-[#FFFF00] px-6 py-3 rounded-lg font-bold hover:bg-black/90 transition-colors whitespace-nowrap"
                >
                  Follow {platform.name === 'Twitter' ? 'on X' : 'on Telegram'}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CommunitySection; 