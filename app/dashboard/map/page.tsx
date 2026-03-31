'use client';

import { motion } from 'framer-motion';

export default function MapPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="glow-card p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2 text-poison-green glitch-effect" data-text="DUNGEON MAP">
          DUNGEON MAP
        </h1>
        <p className="text-plasma-blue">Navigate through the labyrinthine corridors</p>
      </div>

      <div className="glow-card p-8 rounded-lg text-center">
        <div className="inline-block p-8 bg-dark-purple border border-poison-green rounded-lg mb-6">
          <div className="grid grid-cols-5 gap-4">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className={`w-12 h-12 border border-poison-green flex items-center justify-center ${
                  i === 12
                    ? 'bg-poison-green bg-opacity-20'
                    : Math.random() > 0.7
                    ? 'bg-dark-purple'
                    : ''
                }`}
              >
                {i === 12 && (
                  <span className="text-2xl">🧙‍♂️</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2">CURRENT LOCATION</h2>
        <p className="text-plasma-blue">Dungeon Level 1 - Central Chamber</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glow-card p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-poison-green">LOCATION INFO</h3>
          <div className="space-y-3">
            <div>
              <span className="font-bold">Area:</span>
              <span className="float-right">Central Chamber</span>
            </div>
            <div>
              <span className="font-bold">Threat Level:</span>
              <span className="float-right text-yellow-400">Medium</span>
            </div>
            <div>
              <span className="font-bold">Points of Interest:</span>
              <ul className="mt-2 text-plasma-blue text-sm">
                <li>• Ancient Altar (North)</li>
                <li>• Guarded Treasury (East)</li>
                <li>• Hidden Passage (South)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="glow-card p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-poison-green">NAVIGATION</h3>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div></div>
            <button className="pixel-button py-2">NORTH</button>
            <div></div>
            <button className="pixel-button py-2">WEST</button>
            <div className="p-2 border border-poison-green rounded flex items-center justify-center">
              CURRENT
            </div>
            <button className="pixel-button py-2">EAST</button>
            <div></div>
            <button className="pixel-button py-2">SOUTH</button>
            <div></div>
          </div>
        </div>

        <div className="glow-card p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-poison-green">MAP LEGEND</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-poison-green mr-2"></div>
              <span>Player Position</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-dark-purple border border-poison-green mr-2"></div>
              <span>Explored Area</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 border border-poison-green mr-2"></div>
              <span>Unexplored</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 mr-2"></div>
              <span>Enemy Encounter</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}