'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import MissionStepper from '@/components/MissionStepper';
import { useMission } from '@/contexts/MissionContext';

const steps = [
  { id: 'setup', name: 'Setup', description: 'Group & Difficulty' },
  { id: 'character', name: 'Character', description: 'Create Profile' },
  { id: 'scenario', name: 'Scenario', description: 'Choose Forest' },
  { id: 'lobby', name: 'Lobby', description: 'Recruit Party' },
  { id: 'logistics', name: 'Logistics', description: 'Cost Calculation' },
  { id: 'checkout', name: 'Checkout', description: 'Payment' },
];

const difficultyLevels = [
  { id: 'Easy', name: 'Easy', description: 'Relaxed pace, basic accommodations', multiplier: 1 },
  { id: 'Normal', name: 'Normal', description: 'Balanced experience, standard amenities', multiplier: 1.5 },
  { id: 'Hard', name: 'Hard', description: 'Challenging terrain, premium experiences', multiplier: 2 },
  { id: 'Expert', name: 'Expert', description: 'Extreme adventures, luxury throughout', multiplier: 3 },
];

export default function SetupPage() {
  const router = useRouter();
  const { state, dispatch } = useMission();
  const [groupSize, setGroupSize] = useState(state.groupSize);
  const [difficulty, setDifficulty] = useState(state.difficulty);

  const handleContinue = () => {
    dispatch({ type: 'SET_GROUP_SIZE', payload: groupSize });
    dispatch({ type: 'SET_DIFFICULTY', payload: difficulty });
    router.push('/character');
  };

  return (
    <div className="min-h-screen bg-obsidian-black py-8 px-4">
      <MissionStepper steps={steps} currentStep="setup" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="glow-card rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-2 glitch-effect" data-text="MISSION SETUP" style={{ color: '#d4af37' }}>
            MISSION SETUP
          </h1>
          <p className="mb-8" style={{ color: '#f5e6d3' }}>
            Configure your group size and difficulty level to begin planning your forest adventure
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Group Size Selector */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#d4af37' }}>GROUP SIZE</h2>
              <p className="mb-6" style={{ color: '#f5e6d3' }}>
                Select how many travelers will join this expedition
              </p>

              <div className="flex flex-col items-center">
                <div className="text-6xl font-bold mb-4" style={{ color: '#d4af37' }}>{groupSize}</div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                    className="pixel-button w-12 h-12 text-2xl"
                  >
                    -
                  </button>
                  <button
                    onClick={() => setGroupSize(groupSize + 1)}
                    className="pixel-button w-12 h-12 text-2xl"
                  >
                    +
                  </button>
                </div>
                <div className="mt-4 text-sm" style={{ color: '#f5e6d3' }}>
                  {groupSize === 1 ? 'Solo adventurer' : `${groupSize} travelers`}
                </div>
              </div>
            </div>

            {/* Difficulty Selector */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#d4af37' }}>DIFFICULTY LEVEL</h2>
              <p className="mb-6" style={{ color: '#f5e6d3' }}>
                Choose the intensity and luxury level of your journey
              </p>

              <div className="space-y-3">
                {difficultyLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setDifficulty(level.id as any)}
                    className="w-full p-4 rounded text-left transition-all"
                    style={{
                      borderWidth: '2px',
                      borderColor: difficulty === level.id ? '#d4af37' : 'rgba(212, 175, 55, 0.3)',
                      backgroundColor: difficulty === level.id ? 'rgba(26, 20, 16, 0.6)' : 'transparent',
                      color: '#f5e6d3'
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold">{level.name}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        level.id === 'Easy' ? 'bg-green-500' :
                        level.id === 'Normal' ? 'bg-yellow-500' :
                        level.id === 'Hard' ? 'bg-orange-500' :
                        'bg-red-500'
                      }`}>
                        {level.multiplier}x
                      </span>
                    </div>
                    <p className="text-sm text-plasma-blue mt-1">{level.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleContinue}
              className="pixel-button px-8 py-4 text-xl"
            >
              CONTINUE TO CHARACTER CREATION
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}