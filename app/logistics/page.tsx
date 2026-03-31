'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import MissionStepper from '@/components/MissionStepper';
import CostSummary from '@/components/CostSummary';
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

// Mock cost calculation based on difficulty and group size
const calculateCosts = (groupSize: number, difficulty: string, scenarioBaseCost: number) => {
  const difficultyMultiplier =
    difficulty === 'Easy' ? 1 :
    difficulty === 'Normal' ? 1.5 :
    difficulty === 'Hard' ? 2 :
    3; // Expert

  const totalBaseCost = scenarioBaseCost * difficultyMultiplier;

  return {
    flight: totalBaseCost * 0.3,
    accommodation: totalBaseCost * 0.4,
    activities: totalBaseCost * 0.15,
    meals: totalBaseCost * 0.1,
    miscellaneous: totalBaseCost * 0.05,
    total: totalBaseCost * groupSize,
  };
};

export default function LogisticsPage() {
  const router = useRouter();
  const { state, dispatch } = useMission();
  const [costBreakdown, setCostBreakdown] = useState({
    flight: 0,
    accommodation: 0,
    activities: 0,
    meals: 0,
    miscellaneous: 0,
    total: 0,
  });

  useEffect(() => {
    if (!state.scenario) {
      router.push('/scenario');
      return;
    }

    // Calculate costs based on current state
    const scenarioBaseCost = state.scenario === 'emerald-canopy' ? 1200 : 2500;
    const costs = calculateCosts(state.groupSize, state.difficulty, scenarioBaseCost);

    setCostBreakdown(costs);
    dispatch({ type: 'SET_TOTAL_COST', payload: costs.total });
  }, [state.groupSize, state.difficulty, state.scenario, dispatch, router]);

  const handleUpdateGroupSize = (size: number) => {
    dispatch({ type: 'SET_GROUP_SIZE', payload: size });
  };

  const handleContinue = () => {
    router.push('/checkout');
  };

  return (
    <div className="min-h-screen relative py-8 px-4" style={{
      backgroundImage: `url(${images.cardAdventure1.url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian-black/60 to-obsidian-black"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <MissionStepper steps={steps} currentStep="logistics" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2 glitch-effect animate-glow-pulse" data-text="THE TREASURY" style={{ color: '#d4af37' }}>
              THE TREASURY
            </h1>
            <p style={{ color: '#f5e6d3' }}>
            Calculate and review the costs for your expedition
          </p>
        </div>

        <CostSummary
          groupSize={state.groupSize}
          difficulty={state.difficulty}
          scenario={state.scenario === 'emerald-canopy' ? 'The Emerald Canopy' : 'The Whispering Pines'}
          costBreakdown={costBreakdown}
          totalCost={costBreakdown.total}
          onUpdateGroupSize={handleUpdateGroupSize}
        />

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleContinue}
            className="pixel-button px-8 py-4 text-xl"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </motion.div>
    </div>
    </div>
  );
}