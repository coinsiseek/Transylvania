'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CostBreakdown {
  flight: number;
  accommodation: number;
  activities: number;
  meals: number;
  miscellaneous: number;
}

interface CostSummaryProps {
  groupSize: number;
  difficulty: string;
  scenario: string;
  costBreakdown: CostBreakdown;
  totalCost: number;
  onUpdateGroupSize?: (size: number) => void;
}

export default function CostSummary({
  groupSize,
  difficulty,
  scenario,
  costBreakdown,
  totalCost,
  onUpdateGroupSize
}: CostSummaryProps) {
  const costItems = [
    { name: 'Flight Tickets', cost: costBreakdown.flight },
    { name: 'Accommodation', cost: costBreakdown.accommodation },
    { name: 'Activities', cost: costBreakdown.activities },
    { name: 'Meals', cost: costBreakdown.meals },
    { name: 'Miscellaneous', cost: costBreakdown.miscellaneous },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glow-card rounded-lg w-full max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-6 glitch-effect" data-text="MISSION COST" style={{ color: '#d4af37' }}>
        MISSION COST BREAKDOWN
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Mission Details */}
        <div>
          <h3 className="text-xl font-bold mb-4" style={{ color: '#f5e6d3' }}>MISSION DETAILS</h3>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-dark-purple rounded">
              <span style={{ color: '#d4af37' }}>Group Size</span>
              <div className="flex items-center">
                {onUpdateGroupSize && (
                  <>
                    <button
                      onClick={() => onUpdateGroupSize(Math.max(1, groupSize - 1))}
                      className="pixel-button w-8 h-8 p-0 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="mx-3">{groupSize}</span>
                    <button
                      onClick={() => onUpdateGroupSize(groupSize + 1)}
                      className="pixel-button w-8 h-8 p-0 flex items-center justify-center"
                    >
                      +
                    </button>
                  </>
                )}
                {!onUpdateGroupSize && (
                  <span>{groupSize}</span>
                )}
              </div>
            </div>

            <div className="p-3 bg-dark-purple rounded">
              <div className="flex justify-between">
                <span style={{ color: '#d4af37' }}>Difficulty</span>
                <span>{difficulty}</span>
              </div>
            </div>

            <div className="p-3 bg-dark-purple rounded">
              <div className="flex justify-between">
                <span style={{ color: '#d4af37' }}>Scenario</span>
                <span>{scenario}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div>
          <h3 className="text-xl font-bold mb-4" style={{ color: '#f5e6d3' }}>COST BREAKDOWN</h3>

          <div className="space-y-3">
            {costItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="flex justify-between items-center p-3 bg-dark-purple rounded"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span style={{ color: '#d4af37' }}>{item.name}</span>
                <span>{item.cost.toFixed(2)} Gold</span>
              </motion.div>
            ))}

            <div className="flex justify-between items-center p-3 rounded mt-4" style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}>
              <span className="font-bold text-lg" style={{ color: '#d4af37' }}>TOTAL COST</span>
              <span className="font-bold text-lg" style={{ color: '#d4af37' }}>{totalCost.toFixed(2)} Gold</span>
            </div>
          </div>
        </div>
      </div>

      {groupSize > 1 && (
        <div className="mt-6 p-4 bg-dark-purple rounded" style={{ borderColor: '#d4af37', borderWidth: '2px' }}>
          <h3 className="text-lg font-bold mb-2" style={{ color: '#d4af37' }}>PER PERSON COST</h3>
          <div className="text-center text-2xl font-bold" style={{ color: '#f5e6d3' }}>
            {(totalCost / groupSize).toFixed(2)} Gold per traveler
          </div>
        </div>
      )}
    </motion.div>
  );
}