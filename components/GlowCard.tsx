'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'green' | 'blue';
}

export default function GlowCard({
  children,
  className = '',
  glowColor = 'green',
}: GlowCardProps) {
  const glowStyle = glowColor === 'green'
    ? { borderColor: '#d4af37' }
    : { borderColor: '#f5e6d3' };

  return (
    <motion.div
      className={`glow-card p-6 rounded-lg ${className}`}
      style={glowStyle}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.div>
  );
}