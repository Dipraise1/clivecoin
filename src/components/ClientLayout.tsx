"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the CustomCursor component with no SSR
const CustomCursor = dynamic(() => import('./CustomCursor'), { ssr: false });

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
};

export default ClientLayout; 