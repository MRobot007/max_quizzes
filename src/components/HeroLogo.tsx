import React from 'react';
import MaxLogo from './MaxLogo';

export default function HeroLogo() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl blur-xl 
            group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-black/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500 
            animate-[float_4s_ease-in-out_infinite] flex flex-col items-center border border-gray-800">
            <MaxLogo />
          </div>
        </div>
      </div>
    </div>
  );
}