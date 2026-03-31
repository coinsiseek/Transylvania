'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { imageUrls as images } from '@/lib/images';

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    empathy: 50,
    logic: 50,
    thrill: 50,
    introspection: 50,
    archetype: '',
    interests: [] as string[],
  });

  const interests = [
    'History & Culture',
    'Espionage & Mystery',
    'Nature & Wilderness',
    'Survival Challenges',
    'Social Impact',
    'Strategic Puzzles',
    'Spiritual Experiences',
    'Physical Adventure',
  ];

  const handleSliderChange = (key: string, value: number) => {
    setProfile(prev => ({ ...prev, [key]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setProfile(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const archetypes = [
    { id: 'hunter', label: 'THE HUNTER', description: 'Thrill-seeking adventurer' },
    { id: 'architect', label: 'THE ARCHITECT', description: 'Strategic builder' },
    { id: 'ghost', label: 'THE GHOST', description: 'Silent observer' },
    { id: 'catalyst', label: 'THE CATALYST', description: 'Social changemaker' },
  ];


  return (
    <div className="min-h-screen relative py-8 px-4" style={{
      backgroundImage: `url(${images.atmosphericOverlay.url})`,
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

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-poison-green mb-2 glitch-effect" data-text="PROFILE CONFIGURATOR">
            PROFILE CONFIGURATOR
          </h1>
          <p className="text-plasma-blue">Define your psychological profile. We'll tailor your Transylvania.</p>
        </motion.div>

        <div className="space-y-8">
          {/* Psychological Sliders */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 border-2 border-poison-green rounded-lg bg-dark-purple bg-opacity-30"
          >
            <h2 className="text-2xl font-bold text-poison-green mb-6">Psychological Attributes</h2>

            <div className="space-y-6">
              {[
                { key: 'empathy', label: 'Empathy', description: 'Connection to others' },
                { key: 'logic', label: 'Logic', description: 'Analytical thinking' },
                { key: 'thrill', label: 'Thrill-Seeking', description: 'Adrenaline appetite' },
                { key: 'introspection', label: 'Introspection', description: 'Self-reflection' },
              ].map(attr => (
                <div key={attr.key}>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-poison-green">{attr.label}</span>
                    <span className="text-plasma-blue">{profile[attr.key as keyof typeof profile]}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={profile[attr.key as keyof typeof profile]}
                      onChange={(e) => handleSliderChange(attr.key, parseInt(e.target.value))}
                      className="flex-1 h-2 bg-dark-purple rounded appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #1a0b2e 0%, #00ff41 ${profile[attr.key as keyof typeof profile]}%, #1a0b2e ${profile[attr.key as keyof typeof profile]}%, #1a0b2e 100%)`,
                      }}
                    />
                  </div>
                  <p className="text-sm text-plasma-blue mt-1">{attr.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Archetype Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 border-2 border-poison-green rounded-lg bg-dark-purple bg-opacity-30"
          >
            <h2 className="text-2xl font-bold text-poison-green mb-6">Your Archetype</h2>
            <div className="grid grid-cols-2 gap-4">
              {archetypes.map(arch => (
                <button
                  key={arch.id}
                  onClick={() => setProfile(prev => ({ ...prev, archetype: arch.id }))}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    profile.archetype === arch.id
                      ? 'border-poison-green bg-dark-purple'
                      : 'border-poison-green border-opacity-30 hover:bg-dark-purple hover:bg-opacity-30'
                  }`}
                >
                  <div className="font-bold text-poison-green">{arch.label}</div>
                  <div className="text-sm text-plasma-blue">{arch.description}</div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 border-2 border-poison-green rounded-lg bg-dark-purple bg-opacity-30"
          >
            <h2 className="text-2xl font-bold text-poison-green mb-6">Interests & Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {interests.map(interest => (
                <button
                  key={interest}
                  onClick={() => handleInterestToggle(interest)}
                  className={`p-3 rounded-lg border-2 transition-all text-sm text-center ${
                    profile.interests.includes(interest)
                      ? 'border-poison-green bg-dark-purple'
                      : 'border-poison-green border-opacity-30 hover:bg-dark-purple hover:bg-opacity-30'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Profile Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 border-2 border-plasma-blue rounded-lg bg-dark-purple bg-opacity-30"
          >
            <h2 className="text-2xl font-bold text-plasma-blue mb-4">Your Profile Summary</h2>
            <div className="space-y-3 text-plasma-blue">
              <p>
                <span className="text-poison-green font-bold">Archetype:</span> {profile.archetype ? profile.archetype.toUpperCase() : 'Not Selected'}
              </p>
              <p>
                <span className="text-poison-green font-bold">Interests:</span>{' '}
                {profile.interests.length > 0 ? profile.interests.join(', ') : 'None selected'}
              </p>
              <p className="text-sm mt-4">
                Your unique combination will shape a custom narrative experience tailored specifically to your desires and personality.
              </p>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <Link href="/menu">
              <button className="pixel-button px-8 py-3 bg-dark-purple">CANCEL</button>
            </Link>
            <Link href="/setup">
              <button className="pixel-button px-8 py-3">SAVE & CONTINUE</button>
            </Link>
          </motion.div>
        </div>
          </motion.div>
       
      </div>
    </div>
  );
}