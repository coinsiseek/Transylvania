'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import MissionStepper from '@/components/MissionStepper';
import CharacterCreator from '@/components/CharacterCreator';
import { useMission } from '@/contexts/MissionContext';
import { Character } from '@/contexts/MissionContext';
import { imageUrls as images } from '@/lib/images';

const steps = [
  { id: 'setup', name: 'Setup', description: 'Group & Difficulty' },
  { id: 'character', name: 'Character', description: 'Create Profile' },
  { id: 'scenario', name: 'Scenario', description: 'Choose Forest' },
  { id: 'lobby', name: 'Lobby', description: 'Recruit Party' },
  { id: 'logistics', name: 'Logistics', description: 'Cost Calculation' },
  { id: 'checkout', name: 'Checkout', description: 'Payment' },
];

export default function CharacterPage() {
  const router = useRouter();
  const { state, dispatch } = useMission();
  const [currentCharacter, setCurrentCharacter] = useState<Character>({
    id: 'host',
    name: '',
    class: '',
    preferences: {
      accommodation: '',
      activities: [],
      dietary: '',
    },
  });

  const handleSaveCharacter = (character: Character) => {
    dispatch({ type: 'ADD_CHARACTER', payload: character });
    router.push('/scenario');
  };

  const handleCancel = () => {
    router.push('/setup');
  };

  return (
    <div className="min-h-screen relative py-8 px-4" style={{
      backgroundImage: `url(${images.cardAdventure2.url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian-black/50 to-obsidian-black"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <MissionStepper steps={steps} currentStep="character" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2 glitch-effect animate-glow-pulse" data-text="THE FORGE" style={{ color: '#d4af37' }}>
              THE FORGE
            </h1>
            <p style={{ color: '#f5e6d3' }}>
              Craft your traveler profile for this expedition
            </p>
          </div>

          <div className="glow-card rounded-lg p-8">
            <CharacterCreator
              character={currentCharacter}
              onSave={handleSaveCharacter}
              onCancel={handleCancel}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}