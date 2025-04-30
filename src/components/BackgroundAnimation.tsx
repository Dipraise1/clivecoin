"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BackgroundAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create background animation elements
    const containerElement = containerRef.current;
    const numElements = 10;
    
    // Remove any existing animation elements first
    while (containerElement.firstChild) {
      containerElement.removeChild(containerElement.firstChild);
    }
    
    // Create floating dollar signs
    for (let i = 0; i < numElements; i++) {
      const element = document.createElement('div');
      element.textContent = '$';
      element.className = 'absolute text-black opacity-10 font-bold';
      element.style.fontSize = `${Math.random() * 40 + 20}px`;
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
      element.style.zIndex = '-1';
      
      containerElement.appendChild(element);
      
      // Animate each element
      gsap.to(element, {
        x: `${Math.random() * 200 - 100}`,
        y: `${Math.random() * 200 - 100}`,
        rotation: Math.random() * 360,
        opacity: Math.random() * 0.1,
        duration: Math.random() * 10 + 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
    
    return () => {
      // Clean up animations on unmount
      gsap.killTweensOf(containerElement.children);
    };
  }, []);
  
  return <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none" />;
};

export default BackgroundAnimation; 