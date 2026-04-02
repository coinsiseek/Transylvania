'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Step {
  id: string;
  name: string;
  description: string;
}

interface MissionStepperProps {
  steps: Step[];
  currentStep: string;
  onStepClick?: (stepId: string) => void;
}

export default function MissionStepper({ steps, currentStep, onStepClick }: MissionStepperProps) {
  const currentIndex = steps.findIndex(step => step.id === currentStep);

  return (
    <div className="w-full max-w-full w-full px-4 mx-auto mb-8">
      <div className="relative">
        {/* Progress line */}
        <div className="absolute top-6 left-0 right-0 h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}>
          <div
            className="h-full transition-all duration-500 ease-in-out"
            style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%`, backgroundColor: '#d4af37' }}
          ></div>
        </div>

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const isActive = step.id === currentStep;
            const isCompleted = index < currentIndex;

            return (
              <motion.div
                key={step.id}
                className="flex flex-col items-center z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => onStepClick && onStepClick(step.id)}
                  className={`w-8 h-8 step-indicator rounded-full flex items-center justify-center mb-2 transition-all duration-300`}
                  style={{
                    backgroundColor: isActive || isCompleted ? '#d4af37' : '#0c0c14',
                    color: isActive || isCompleted ? '#0c0c14' : '#d4af37',
                    border: '2px solid #d4af37',
                    transform: isActive ? 'scale(1.15)' : 'scale(1)'
                  }}
                  disabled={!onStepClick}
                >
                  {isCompleted ? (
                    <span className="text-xl">✓</span>
                  ) : (
                    <span className="font-bold">{index + 1}</span>
                  )}
                </button>

                <div className="text-center max-w-[80px] step-description">
                  <h3 className="font-bold text-sm" style={{ color: isActive ? '#d4af37' : '#f5e6d3' }}>
                    {step.name}
                  </h3>
                  {step.description && (
                    <p className="text-xs mt-1 hidden block" style={{ color: '#d4af37', opacity: 0.6 }}>
                      {step.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}