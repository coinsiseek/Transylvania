'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { imageUrls as images } from '@/lib/images';
import type { Route } from 'next';

export default function MainMenuPage() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { id: 'start', label: 'Begin Your Initiation', href: '/setup', icon: '⚔️' },
    { id: 'continue', label: 'Resume the Chronicle', href: '/load-adventure', icon: '📜' },
    { id: 'settings', label: 'Personal Cipher', href: '/settings', icon: '🗝️' },
    { id: 'about', label: 'The Gateway', href: '/about', icon: '🏰' },
  ];

  return (
    <div className="h-screen w-screen overflow-hidden relative flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: `url(${images.heroBackground.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
      
      {/* Vignette & Film Grain Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-obsidian-black opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-40"></div>
      
      {/* Animated Mist/Pulse Effect */}
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 bg-black opacity-40"
      />

      {/* Header Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-20 text-center mb-20 mt-12"
      >
        <h1 className="text-5xl md:text-8xl font-bold mb-4 glitch-effect shimmer-text" 
          data-text="TRANSYLVANIA"
          style={{
            color: '#d4af37',
            textShadow: '0 0 20px rgba(212, 175, 55, 0.5), 0 0 40px rgba(212, 175, 55, 0.2)',
            letterSpacing: '4px'
          }}>
          TRANSYLVANIA
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-xl md:text-2xl mb-2 font-light" style={{ color: '#f5e6d3' }}>
            Reality-Agnostic Tourism
          </p>
          <p className="text-sm md:text-base opacity-70" style={{ color: '#d4af37' }}>
            The Protagonist Protocol Awaits
          </p>
        </motion.div>
      </motion.div>

      {/* Main Menu - Vertical Left-Aligned with Backdrop Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-20 space-y-6 max-w-md w-full"
      >
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.15, ease: 'easeOut' }}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link href={item.href as Route}>
              <div className={`
                p-6 rounded-lg cursor-pointer transition-all duration-300
                border-2 glass-card
                ${hoveredItem === item.id
                  ? 'border-gothic-cream bg-opacity-60 scale-105'
                  : 'border-gothic-gold border-opacity-50 bg-opacity-30'
                }
              `}
              style={{
                backgroundColor: hoveredItem === item.id 
                  ? 'rgba(26, 20, 16, 0.8)' 
                  : 'rgba(26, 20, 16, 0.4)',
                boxShadow: hoveredItem === item.id
                  ? '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.1), inset 0 0 20px rgba(212, 175, 55, 0.1)'
                  : '0 0 10px rgba(212, 175, 55, 0.1)'
              }}>
                <div className="flex items-center justify-between gap-4">
                  <motion.span 
                    className="text-3xl"
                    animate={hoveredItem === item.id ? { scale: 1.2 } : { scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {item.icon}
                  </motion.span>
                  <span className="font-mono text-sm md:text-base font-bold flex-grow"
                    style={{ color: hoveredItem === item.id ? '#f5e6d3' : '#d4af37' }}>
                    {item.label}
                  </span>
                  {hoveredItem === item.id && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="animate-pulse"
                      style={{ color: '#d4af37' }}
                    >
                      ✦
                    </motion.div>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Narrative */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="relative z-20 mt-20 text-center text-xs md:text-sm opacity-70"
        style={{ color: '#d4af37' }}
      >
        <p className="italic">Your choices echo through the ages...</p>
      </motion.div>
    </div>
  );
}