'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import images from '@/assets/images.json';

interface SaveSlot {
  id: number;
  name: string;
  character: string;
  progress: number;
  lastPlayed: string;
  location: string;
}

export default function LoadAdventurePage() {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  // Mock save data
  const saveSlots: SaveSlot[] = [
    {
      id: 1,
      name: 'The Hunter\'s Path',
      character: 'Viktor Drăculești',
      progress: 75,
      lastPlayed: '2 days ago',
      location: 'Carpathian Bunker',
    },
    {
      id: 2,
      name: 'The Ghost Protocol',
      character: 'Ana Șepeș',
      progress: 45,
      lastPlayed: '1 week ago',
      location: 'Misty Pines',
    },
    {
      id: 3,
      name: 'The Catalyst Effect',
      character: 'Mihai Marinescu',
      progress: 90,
      lastPlayed: '5 hours ago',
      location: 'Château de Bran',
    },
    {
      id: 4,
      name: '',
      character: '',
      progress: 0,
      lastPlayed: '',
      location: '',
    },
  ];

  return (
    <div className="min-h-screen relative py-8 px-4" style={{
      backgroundImage: `url(${images.heroBackground.url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian-black/60 to-obsidian-black"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          <Link href="/menu" className="pixel-button px-4 py-2 mb-8 inline-block">
            ← BACK TO MENU
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 glitch-effect animate-glow-pulse" data-text="CONTINUE YOUR STORY" style={{ color: '#d4af37' }}>
              CONTINUE YOUR STORY
            </h1>
          <p className="text-plasma-blue">Your saved adventures await</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {saveSlots.map((slot, index) => (
            <motion.div
              key={slot.id}
              className={`p-6 rounded-lg cursor-pointer transition-all border-2 ${
                selectedSlot === slot.id
                  ? 'border-poison-green bg-dark-purple bg-opacity-50'
                  : slot.progress === 0
                    ? 'border-poison-green border-opacity-20 bg-dark-purple bg-opacity-10 hover:bg-opacity-20'
                    : 'border-poison-green border-opacity-40 bg-dark-purple bg-opacity-20 hover:bg-opacity-30'
              }`}
              onClick={() => setSelectedSlot(slot.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {slot.progress === 0 ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-2 opacity-50">+</div>
                  <p className="text-poison-green font-bold">NEW ADVENTURE</p>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-poison-green">{slot.name}</h3>
                      <p className="text-plasma-blue text-sm">{slot.character}</p>
                    </div>
                    <span className="text-right text-xs text-poison-green opacity-60">{slot.lastPlayed}</span>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{slot.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-dark-purple rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-poison-green"
                        initial={{ width: 0 }}
                        animate={{ width: `${slot.progress}%` }}
                        transition={{ delay: 0.3, duration: 1 }}
                      />
                    </div>
                  </div>

                  <p className="text-sm text-plasma-blue">📍 {slot.location}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {selectedSlot && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex justify-center gap-4"
          >
            <button className="pixel-button px-8 py-4">LOAD</button>
            <button className="pixel-button px-8 py-4 bg-dark-purple" onClick={() => setSelectedSlot(null)}>
              CANCEL
            </button>
          </motion.div>
        )}
      </motion.div>
      </div>
    </div>
  );
}