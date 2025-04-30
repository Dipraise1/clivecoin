"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const distribution = [
  { label: 'Public Sale', percentage: 40, color: '#FF6B6B' },
  { label: 'Team', percentage: 20, color: '#4ECDC4' },
  { label: 'Marketing', percentage: 15, color: '#FFE66D' },
  { label: 'Development', percentage: 15, color: '#1A535C' },
  { label: 'Reserve', percentage: 10, color: '#F7B801' },
];

const TokenDistributionChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!chartRef.current) return;
    
    const segments = chartRef.current.querySelectorAll('.chart-segment');
    
    gsap.fromTo(
      segments,
      { 
        height: 0,
        opacity: 0 
      },
      { 
        height: (index) => `${distribution[index].percentage}%`,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: 'elastic.out(1, 0.7)'
      }
    );
    
  }, []);
  
  return (
    <motion.div
      className="my-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Token Distribution</h2>
      
      <div className="flex items-end justify-between h-[300px] bg-black/10 rounded-t-lg p-4" ref={chartRef}>
        {distribution.map((item) => (
          <div key={item.label} className="flex flex-col items-center w-1/6">
            <div 
              className="chart-segment w-full rounded-t-lg opacity-0"
              style={{ 
                backgroundColor: item.color,
                height: '0%',
                transition: 'height 1s ease-out'
              }}
            />
            <div className="text-center mt-2">
              <p className="font-bold text-sm">{item.percentage}%</p>
              <p className="text-xs">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {distribution.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
              <span>{item.label}: {item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TokenDistributionChart; 