import React from 'react';
import { Sparkles } from 'lucide-react';

interface RandomButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function RandomButton({ onClick, disabled }: RandomButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative group
        px-8 py-4
        bg-gradient-to-r from-red-600 to-red-700
        hover:from-red-500 hover:to-red-600
        text-white font-bold text-lg
        rounded-lg
        transform transition-all duration-300
        hover:scale-105
        disabled:opacity-50
        disabled:cursor-not-allowed
        shadow-lg
        overflow-hidden
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="flex items-center justify-center space-x-2">
        <Sparkles className="w-6 h-6 animate-pulse" />
        <span>Random Select</span>
      </div>
    </button>
  );
}