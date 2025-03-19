// components/ClientWrapper.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Loading from './loading';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the website has been loaded before
    const hasLoadedBefore = localStorage.getItem('hasLoadedBefore');

    if (!hasLoadedBefore) {
      // Simulate a loading delay (e.g., 3 seconds)
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('hasLoadedBefore', 'true'); // Mark as loaded
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false); // Skip loading if the website has been loaded before
    }
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {children}
    </>
  );
}