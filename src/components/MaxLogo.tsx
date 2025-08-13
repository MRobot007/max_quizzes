import React from 'react';

export default function MaxLogo() {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-[#007BFF]/10 rounded-xl blur-xl 
        group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative bg-white/95 backdrop-blur-sm p-3 sm:p-8 rounded-xl border border-[#007BFF]/20
        transform hover:scale-105 transition-all duration-500 flex flex-col items-center gap-2 sm:gap-6">
        <svg viewBox="0 0 400 300" className="w-16 sm:w-44 h-16 sm:h-44 text-[#007BFF]">
          <path
            fill="currentColor"
            d="M100 80 L180 80 L180 100 L220 100 L220 80 L300 80 L300 220 L220 220 L220 200 L180 200 L180 220 L100 220 L100 80 Z M140 120 L140 180 L180 180 L180 120 L140 120 Z M220 120 L220 180 L260 180 L260 120 L220 120 Z"
          />
        </svg>
        <div className="text-center">
          <h3 className="text-lg sm:text-3xl font-bold mb-0.5 sm:mb-2 text-[#007BFF]">
            MAX QUIZZES
          </h3>
          <p className="text-xs sm:text-lg font-medium text-[#212121]/70 tracking-wider transform group-hover:scale-105 transition-all duration-300">
            LEARN & GROW
          </p>
        </div>
      </div>
    </div>
  );
}