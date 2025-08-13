import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export default function Button({ children, href, className = '' }: ButtonProps) {
  return (
    <a
      href={href}
      className={`
        relative overflow-hidden group
        px-8 py-3
        bg-gradient-to-r from-purple-600/20 to-blue-600/20
        hover:from-purple-600/30 hover:to-blue-600/30
        border border-white/10
        rounded-xl
        transform hover:scale-105 hover:-translate-y-1
        transition-all duration-300
        shadow-[0_0_20px_rgba(139,92,246,0.1)]
        hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]
        ${className}
      `}
    >
      <span className="relative z-10 text-white font-medium tracking-wide text-shadow-glow">
        {children}
      </span>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
    </a>
  );
}