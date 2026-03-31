'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    sound: true,
    music: true,
    notifications: true,
    crtEffect: true,
    difficulty: 'normal',
    colorTheme: 'poison-green',
  });

  const toggleSetting = (setting: string) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting as keyof typeof settings]
    }));
  };

  const handleSelectChange = (setting: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="glow-card p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2 text-poison-green glitch-effect" data-text="SETTINGS">
          SYSTEM CONFIGURATION
        </h1>
        <p className="text-plasma-blue">Customize your gaming experience</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Audio Settings */}
        <div className="glow-card p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-poison-green">AUDIO</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Sound Effects</span>
              <button
                className={`pixel-button w-12 h-6 p-0 flex items-center ${
                  settings.sound ? 'bg-poison-green' : 'bg-dark-purple'
                }`}
                onClick={() => toggleSetting('sound')}
              >
                <div
                  className={`w-4 h-4 bg-obsidian-black rounded-full transition-transform ${
                    settings.sound ? 'translate-x-6' : 'translate-x-1'
                  }`}
                ></div>
              </button>
            </div>

            <div className="flex justify-between items-center">
              <span>Background Music</span>
              <button
                className={`pixel-button w-12 h-6 p-0 flex items-center ${
                  settings.music ? 'bg-poison-green' : 'bg-dark-purple'
                }`}
                onClick={() => toggleSetting('music')}
              >
                <div
                  className={`w-4 h-4 bg-obsidian-black rounded-full transition-transform ${
                    settings.music ? 'translate-x-6' : 'translate-x-1'
                  }`}
                ></div>
              </button>
            </div>

            <div className="flex justify-between items-center">
              <span>Notifications</span>
              <button
                className={`pixel-button w-12 h-6 p-0 flex items-center ${
                  settings.notifications ? 'bg-poison-green' : 'bg-dark-purple'
                }`}
                onClick={() => toggleSetting('notifications')}
              >
                <div
                  className={`w-4 h-4 bg-obsidian-black rounded-full transition-transform ${
                    settings.notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>

        {/* Visual Settings */}
        <div className="glow-card p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-poison-green">VISUAL</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>CRT Scanline Effect</span>
              <button
                className={`pixel-button w-12 h-6 p-0 flex items-center ${
                  settings.crtEffect ? 'bg-poison-green' : 'bg-dark-purple'
                }`}
                onClick={() => toggleSetting('crtEffect')}
              >
                <div
                  className={`w-4 h-4 bg-obsidian-black rounded-full transition-transform ${
                    settings.crtEffect ? 'translate-x-6' : 'translate-x-1'
                  }`}
                ></div>
              </button>
            </div>

            <div>
              <span className="block mb-2">Color Theme</span>
              <select
                className="w-full pixel-button bg-dark-purple"
                value={settings.colorTheme}
                onChange={(e) => handleSelectChange('colorTheme', e.target.value)}
              >
                <option value="poison-green">Poison Green</option>
                <option value="plasma-blue">Plasma Blue</option>
                <option value="purple">Neon Purple</option>
              </select>
            </div>

            <div>
              <span className="block mb-2">Difficulty</span>
              <select
                className="w-full pixel-button bg-dark-purple"
                value={settings.difficulty}
                onChange={(e) => handleSelectChange('difficulty', e.target.value)}
              >
                <option value="easy">Easy</option>
                <option value="normal">Normal</option>
                <option value="hard">Hard</option>
                <option value="nightmare">Nightmare</option>
              </select>
            </div>
          </div>
        </div>

        {/* Game Data */}
        <div className="glow-card p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-poison-green">GAME DATA</h2>
          <div className="space-y-4">
            <button className="pixel-button w-full py-3">
              SAVE GAME MANUALLY
            </button>
            <button className="pixel-button w-full py-3 bg-dark-purple">
              LOAD GAME
            </button>
            <button className="pixel-button w-full py-3 bg-red-900">
              RESET PROGRESS
            </button>
          </div>
        </div>

        {/* Account */}
        <div className="glow-card p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-poison-green">ACCOUNT</h2>
          <div className="space-y-4">
            <div>
              <span className="block mb-2">Player Name</span>
              <input
                type="text"
                defaultValue="CMDR"
                className="w-full pixel-button bg-dark-purple p-2"
              />
            </div>
            <button className="pixel-button w-full py-3">
              CHANGE PASSWORD
            </button>
            <button className="pixel-button w-full py-3 bg-red-900">
              LOG OUT
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center">
        <motion.button
          className="pixel-button px-8 py-4 text-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          APPLY SETTINGS
        </motion.button>
      </div>
    </motion.div>
  );
}