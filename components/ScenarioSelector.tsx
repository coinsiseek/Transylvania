'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Scenario {
  id: string;
  name: string;
  description: string;
  difficulty: 'Easy' | 'Normal' | 'Hard' | 'Expert';
  imageUrl?: string;
  features: string[];
  baseCost: number;
}

interface ScenarioSelectorProps {
  scenarios: Scenario[];
  selectedScenario: string;
  onSelect: (scenarioId: string) => void;
}

export default function ScenarioSelector({ scenarios, selectedScenario, onSelect }: ScenarioSelectorProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold glitch-effect" data-text="FOREST SCENARIOS" style={{ color: '#d4af37' }}>
        FOREST SCENARIOS
      </h2>

      <p className="mb-6" style={{ color: '#f5e6d3' }}>
        Choose your adventure destination. Each forest offers unique experiences and challenges.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scenarios.map((scenario) => {
          const isSelected = scenario.id === selectedScenario;

          return (
            <motion.div
              key={scenario.id}
              className={`glow-card rounded-lg cursor-pointer transition-all ${
                isSelected ? 'border-2 scale-[1.02]' : 'border'
              }`}
              style={{
                borderColor: isSelected ? '#d4af37' : '#d4af37',
                boxShadow: isSelected ? '0 0 20px rgba(212, 175, 55, 0.4)' : 'none'
              }}
              whileHover={{ scale: 1.02 }}
              onClick={() => onSelect(scenario.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold" style={{ color: '#d4af37' }}>{scenario.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    scenario.difficulty === 'Easy' ? 'bg-green-500' :
                    scenario.difficulty === 'Normal' ? 'bg-yellow-500' :
                    scenario.difficulty === 'Hard' ? 'bg-orange-500' :
                    'bg-red-500'
                  }`}>
                    {scenario.difficulty}
                  </span>
                </div>

                <p className="mb-4" style={{ color: '#f5e6d3' }}>{scenario.description}</p>

                <div className="mb-4">
                  <h4 className="font-bold mb-2" style={{ color: '#d4af37' }}>FEATURES</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm" style={{ color: '#f5e6d3' }}>
                    {scenario.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2" style={{ color: '#d4af37' }}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-3" style={{ borderTopColor: '#d4af37', borderTopWidth: '1px' }}>
                  <span style={{ color: '#f5e6d3' }}>Base Cost:</span>
                  <span className="font-bold" style={{ color: '#d4af37' }}>{scenario.baseCost} Gold</span>
                </div>

                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 text-center py-2 rounded"
                    style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
                  >
                    <span style={{ color: '#d4af37' }} className="font-bold">SELECTED</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}