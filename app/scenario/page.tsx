'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import MissionStepper from '@/components/MissionStepper';
import ScenarioSelector from '@/components/ScenarioSelector';
import { useMission } from '@/contexts/MissionContext';
import images from '@/assets/images.json';

const steps = [
  { id: 'setup', name: 'Setup', description: 'Group & Difficulty' },
  { id: 'character', name: 'Character', description: 'Create Profile' },
  { id: 'scenario', name: 'Scenario', description: 'Choose Forest' },
  { id: 'lobby', name: 'Lobby', description: 'Recruit Party' },
  { id: 'logistics', name: 'Logistics', description: 'Cost Calculation' },
  { id: 'checkout', name: 'Checkout', description: 'Payment' },
];

const scenarios = [
  {
    id: 'emerald-canopy',
    name: 'The Emerald Canopy',
    description: 'A verdant paradise with towering trees and diverse wildlife. Perfect for nature lovers seeking a balanced adventure.',
    difficulty: 'Normal',
    features: ['Tree-top walkways', 'River crossings', 'Wildlife spotting', 'Camping under stars'],
    baseCost: 1200,
  },
  {
    id: 'whispering-pines',
    name: 'The Whispering Pines',
    description: 'Majestic coniferous forests with serene lakes and challenging trails. Ideal for experienced adventurers seeking solitude.',
    difficulty: 'Hard',
    features: ['Mountain vistas', 'Private cabins', 'Expert trails', 'Hot springs'],
    baseCost: 2500,
  },
];

export default function ScenarioPage() {
  const router = useRouter();
  const { state, dispatch } = useMission();
  const [selectedScenario, setSelectedScenario] = useState(state.scenario);

  useEffect(() => {
    if (state.characters.length === 0) {
      router.push('/character');
    }
  }, [state.characters, router]);

  const handleSelectScenario = (scenarioId: string) => {
    setSelectedScenario(scenarioId);
  };

  const handleContinue = () => {
    if (selectedScenario) {
      dispatch({ type: 'SET_SCENARIO', payload: selectedScenario });
      router.push('/lobby');
    }
  };

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
        <MissionStepper steps={steps} currentStep="scenario" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2 glitch-effect animate-glow-pulse" data-text="FOREST SELECTION" style={{ color: '#d4af37' }}>
              FOREST SELECTION
            </h1>
            <p style={{ color: '#f5e6d3' }}>
              Choose your destination from our curated forest experiences
            </p>
          </div>

          <ScenarioSelector
            scenarios={scenarios}
            selectedScenario={selectedScenario}
            onSelect={handleSelectScenario}
          />

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleContinue}
              disabled={!selectedScenario}
              className="pixel-button px-8 py-4 text-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              CONTINUE TO PARTY RECRUITMENT
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}