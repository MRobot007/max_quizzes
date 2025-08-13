import React from 'react';

export default function Logo() {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center border-2 border-gray-700 transform transition duration-500 hover:scale-105">
        <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">M</span>
      </div>
    </div>
  );
}