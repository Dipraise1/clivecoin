"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import with no SSR
const BackgroundAnimation = dynamic(() => import('./BackgroundAnimation'), { ssr: false });

const ClientBackgroundAnimation = () => {
  return <BackgroundAnimation />;
};

export default ClientBackgroundAnimation; 