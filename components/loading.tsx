// components/Loading.tsx
'use client';

import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse">
          COMMUNI TECH
        </h1>
        <p className="mt-4 text-lg text-gray-300 animate-bounce">
          Innovating the Future
        </p>
        <div className="mt-8">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
        <div className="mt-8">
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto animate-slide"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;