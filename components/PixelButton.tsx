'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PixelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export default function PixelButton({
  children,
  onClick,
  className = '',
  disabled = false,
  variant = 'primary',
}: PixelButtonProps) {
  const baseClasses = 'pixel-button px-4 py-2 font-mono uppercase text-sm tracking-wider';
  const variantClasses =
    variant === 'primary'
      ? 'bg-dark-purple'
      : 'bg-obsidian-black';
  const styleProps = variant === 'primary'
    ? { borderColor: '#d4af37', color: '#d4af37' }
    : { borderColor: '#f5e6d3', color: '#f5e6d3' };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses}`}
      style={{ ...styleProps, border: '2px solid', borderRadius: '4px' }}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {children}
    </motion.button>
  );
}