'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);

  const npcTypes = [
    {
      title: 'The Quest-Giver',
      role: 'Professional Instruction-Follower',
      description: 'They will point you toward adventure (and the bathroom, which is basically the same thing). Trained in the ancient art of "nodding and smiling."',
      icon: '📜',
      stats: { wisdom: 95, humor: 60, snackSupply: 100 },
      thoughtBubble: 'I know where the bathroom is... but do YOU know where it truly lies?',
      specialMove: 'Aggressive Nodding',
      level: 42,
      class: 'Guide',
    },
    {
      title: 'The Trouble-Maker',
      role: 'Chaos Coordinator',
      description: 'Actor trained in "dramatic tension creation." Don\'t worry, the bear chase is 95% choreographed. The other 5% is genuine screaming.',
      icon: '😈',
      stats: { mischief: 100, runningSpeed: 85, actingSkills: 90 },
      thoughtBubble: 'What if I told you... the bear is ALSO an actor?',
      specialMove: 'Dramatic Scream',
      level: 99,
      class: 'Chaotic Good',
    },
    {
      title: 'The Lore-Master',
      role: 'Keeper of Secrets',
      description: 'Local elder who knows where the bodies are buried. Literally. Will tell you about it over pálinka. Third round is when the real stories come out.',
      icon: '👴',
      stats: { stories: 1000, pálinkaTolerance: 95, historicalAccuracy: 73 },
      thoughtBubble: 'Back in my day, we didn\'t have GPS. We had BEARS. And they LIED to us.',
      specialMove: 'Third Round Truth Serum',
      level: 80,
      class: 'Bard',
    },
  ];

  const cartoonPanels = [
    {
      title: 'What Even IS This Place?',
      content: `Welcome to Szeklerland, where the ground farts mineral water and the bears have better Instagram than you.

We're not a travel agency. We're the producers of **your** reality show, except instead of cameras, we have actors, and instead of a crew, we have bears. Large bears.`,
      bgColor: '#FFD90F',
    },
    {
      title: 'Scripted Reality™ Explained (Like You\'re 5)',
      content: `Imagine if *The Truman Show* had a baby with *National Geographic*, and that baby was raised by a bunch of Hungarian grandmas who really want you to try their palacsinta.

**You\'re the main character.** The locals? They\'re your wacky guest stars. That old lady selling jam at the market? She\'s been method-acting "Grumpy Baba" for 40 years.`,
      bgColor: '#5DADE2',
    },
  ];

  const previouslyOn = [
    { icon: '🎬', text: '...a tourist walked into a bar in Sfântu Gheorghe...' },
    { icon: '🐻', text: '...a bear tried to order a pálinka...' },
    { icon: '💨', text: '...the ground farted CO2 and everyone pretended it didn\'t happen...' },
    { icon: '🥞', text: '...lángos was consumed. Regrets? None.' },
  ];

  const episodeTitle = {
    number: 'Episode 42',
    title: 'The Transylvanian Job',
    starring: ['YOU (as the Confused Tourist)', '5,000 Bears (as Themselves)', 'The Ground (as the Fart Machine)'],
  };

  // Interactive map data for Harghita and Covasna counties (coordinates are for 400x300 SVG viewBox)
  const mapMarkers = [
    { id: 'sfantu', name: 'Sfântu Gheorghe', county: 'Covasna', svgX: 208, svgY: 204, icon: '🏰', description: 'The Cozy Capital', detail: 'Population: ~50,000 humans, 3 bears (undercover)' },
    { id: 'covasna', name: 'Covasna', county: 'Covasna', svgX: 152, svgY: 156, icon: '💦', description: 'Land of Mansions', detail: 'Mofetta gas springs = natural fart therapy' },
    { id: 'harghita', name: 'Harghita-Băi', county: 'Harghita', svgX: 232, svgY: 96, icon: '🐻', description: 'Bear Central', detail: 'Home of the legendary Ursus Rex' },
    { id: 'tusnad', name: 'Băile Tușnad', county: 'Harghita', svgX: 192, svgY: 126, icon: '🛁', description: 'The Pearl', detail: 'Spa town where bears try to get massages' },
    { id: 'miercurea', name: 'Miercurea Ciuc', county: 'Harghita', svgX: 248, svgY: 84, icon: '🏰', description: 'County Seat', detail: 'Home to one of Europe\'s largest castles' },
    { id: 'ghimbav', name: 'Brașov-Ghimbav Airport', county: 'Brașov', svgX: 88, svgY: 234, icon: '✈️', description: 'The New Kid', detail: 'Opened 2023, still smells fresh' },
    { id: 'targumures', name: 'Târgu Mureș Airport', county: 'Mureș', svgX: 312, svgY: 144, icon: '✈️', description: 'The Veteran', detail: 'WiFi password: "ask_the_pilot"' },
  ];

  const countyInfo = {
    covasna: {
      name: 'Covasna',
      color: '#5DADE2',
      facts: ['Land of Mansions', 'Mofetta gas capital', 'Mineral water springs'],
      mascot: '💨 The Farting Ground',
    },
    harghita: {
      name: 'Harghita',
      color: '#FFD90F',
      facts: ['Bear capital of Romania', 'Hungarian-speaking enclave', 'Volcanic origins'],
      mascot: '🐻 Ursus the Bear King',
    },
  };

  return (
    <div className="min-h-screen bg-[#FFD90F] py-6 px-4 overflow-x-hidden" style={{ fontFamily: '"Short Stack", "Comic Neue", cursive' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700;900&family=Short+Stack&display=swap');

        .cartoon-border {
          border: 4px solid #000;
          border-radius: 24px;
          box-shadow: 8px 8px 0px 0px #000;
          transition: all 0.2s ease;
        }

        .cartoon-border:hover {
          box-shadow: 12px 12px 0px 0px #000;
          transform: translate(-2px, -2px);
        }

        .cartoon-button {
          border: 4px solid #000;
          border-radius: 16px;
          box-shadow: 6px 6px 0px 0px #000;
          transition: all 0.15s ease;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .cartoon-button:hover {
          box-shadow: 8px 8px 0px 0px #000;
          transform: translate(-2px, -2px);
        }

        .cartoon-button:active {
          box-shadow: 2px 2px 0px 0px #000;
          transform: translate(2px, 2px);
        }

        .speech-bubble {
          position: relative;
          border-radius: 24px;
        }

        .speech-bubble::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          border-width: 20px 20px 0;
          border-style: solid;
          border-color: #000 transparent transparent;
        }

        .wobble:hover {
          animation: wobble 0.5s ease-in-out;
        }

        @keyframes wobble {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }

        /* Episode title card animation */
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .episode-title {
          animation: slideIn 0.8s ease-out;
        }

        /* Previously on segment */
        @keyframes flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .previously-flash {
          animation: flash 2s ease-in-out infinite;
        }

        /* Thought bubble */
        .thought-bubble::before {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 30%;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
        }

        .thought-bubble::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 25%;
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
        }

        /* Stat bar animations */
        @keyframes statPulse {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(1.05); }
        }

        .stat-bar:hover {
          animation: statPulse 0.3s ease-in-out;
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/menu">
            <button className="cartoon-button px-6 py-3 bg-white text-black text-sm">
              ← BACK TO MENU
            </button>
          </Link>
        </motion.div>

        {/* Header Panel */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="cartoon-border mb-12 p-8 text-center bg-white"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-4" style={{ color: '#000', textShadow: '4px 4px 0px #5DADE2' }}>
            🗺️ THE WACKY WONDERLAND
          </h1>
          <h2 className="text-3xl md:text-5xl font-black" style={{ color: '#5DADE2', textShadow: '3px 3px 0px #000' }}>
            OF SZEKLERLAND
          </h2>
          <p className="mt-4 text-xl font-bold" style={{ color: '#000' }}>(A Cartoon Adventure)</p>
        </motion.div>

        {/* Episode Title Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="cartoon-border mb-8 p-6 bg-[#FFD90F] episode-title"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-2xl font-black" style={{ color: '#000' }}>
              📺 {episodeTitle.number}
            </div>
            <div className="text-3xl md:text-4xl font-black text-center" style={{ color: '#000', textShadow: '3px 3px 0px #fff' }}>
              "{episodeTitle.title}"
            </div>
            <div className="text-lg font-bold" style={{ color: '#000' }}>
              ⭐
            </div>
          </div>
          <div className="mt-4 pt-4 border-t-4 border-black">
            <p className="text-sm font-bold mb-2" style={{ color: '#000' }}>STARRING:</p>
            <div className="flex flex-wrap gap-2">
              {episodeTitle.starring.map((star, idx) => (
                <span
                  key={idx}
                  className="cartoon-border px-3 py-1 bg-white text-xs font-black"
                  style={{ color: '#000' }}
                >
                  {star}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Previously On Segment */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="cartoon-border mb-8 p-6 bg-[#0c0c14] previously-flash"
        >
          <h3 className="text-2xl font-black mb-4 text-center" style={{ color: '#FFD90F' }}>
            📼 PREVIOUSLY ON TRAVEL MISSIONS...
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {previouslyOn.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + idx * 0.1 }}
                className="cartoon-border p-4 bg-white text-center"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm font-bold" style={{ color: '#000' }}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comic Panel 1: What Even IS This Place? */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="cartoon-border mb-8 p-8 relative overflow-hidden"
          style={{ backgroundColor: cartoonPanels[0].bgColor }}
        >
          <div className="absolute -top-4 -right-4 text-9xl opacity-20 wobble">🐻</div>
          <h2 className="text-3xl font-black mb-4 flex items-center gap-3">
            <span>🤔</span>
            <span>What Even IS This Place?</span>
          </h2>
          <div className="space-y-4 text-lg font-bold" style={{ color: '#000' }}>
            {cartoonPanels[0].content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        {/* Comic Panel 2: Scripted Reality Explained */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="cartoon-border mb-8 p-8 relative overflow-hidden"
          style={{ backgroundColor: cartoonPanels[1].bgColor }}
        >
          <div className="absolute -bottom-4 -left-4 text-9xl opacity-20 wobble">📺</div>
          <h2 className="text-3xl font-black mb-4 flex items-center gap-3">
            <span>🎬</span>
            <span>Scripted Reality™ Explained</span>
          </h2>
          <div className="space-y-4 text-lg font-bold" style={{ color: '#000' }}>
            {cartoonPanels[1].content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        {/* NPC Squad Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="cartoon-border mb-8 p-8 bg-white"
        >
          <h2 className="text-3xl font-black mb-6 text-center" style={{ color: '#000', textShadow: '3px 3px 0px #5DADE2' }}>
            🎭 MEET YOUR NPC SQUAD
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {npcTypes.map((npc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="cartoon-border p-6 text-center relative group"
                style={{ backgroundColor: idx % 2 === 0 ? '#5DADE2' : '#FFD90F' }}
              >
                {/* Thought Bubble (appears on hover) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute -top-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-20"
                >
                  <div className="thought-bubble cartoon-border p-4 bg-white">
                    <p className="text-xs font-black italic" style={{ color: '#000' }}>{npc.thoughtBubble}</p>
                  </div>
                </motion.div>

                <div className="text-6xl mb-4 wobble">{npc.icon}</div>

                {/* Level & Class Badge */}
                <div className="flex justify-center gap-2 mb-2">
                  <span className="cartoon-border px-3 py-1 bg-black text-xs font-black" style={{ color: '#FFD90F' }}>
                    ⭐ LVL {npc.level}
                  </span>
                  <span className="cartoon-border px-3 py-1 bg-black text-xs font-black" style={{ color: '#5DADE2' }}>
                    📜 {npc.class}
                  </span>
                </div>

                <h3 className="text-xl font-black mb-2" style={{ color: '#000' }}>{npc.title}</h3>
                <p className="text-sm font-bold mb-3" style={{ color: '#000', opacity: 0.8 }}>{npc.role}</p>
                <p className="text-sm mb-4" style={{ color: '#000' }}>{npc.description}</p>

                {/* Special Move */}
                <div className="cartoon-border p-2 mb-4 bg-black">
                  <p className="text-xs font-black" style={{ color: '#FFD90F' }}>⚔️ SPECIAL MOVE: {npc.specialMove}</p>
                </div>

                {/* RPG Stats */}
                <div className="space-y-2 mt-4">
                  {Object.entries(npc.stats).map(([stat, value]) => (
                    <div key={stat} className="text-left">
                      <div className="flex justify-between text-xs font-bold mb-1" style={{ color: '#000' }}>
                        <span>{stat.toUpperCase()}</span>
                        <span>{value}%</span>
                      </div>
                      <div className="h-3 bg-black rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${value}%` }}
                          transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                          className="h-full bg-white stat-bar"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mystery Machine Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="cartoon-border mb-8 p-8 bg-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-black mb-4" style={{ color: '#000', textShadow: '3px 3px 0px #5DADE2' }}>
                🚐 THE MYSTERY MACHINE
              </h2>
              <p className="text-lg font-bold mb-4" style={{ color: '#000' }}>
                Our shuttle vans are like Scooby-Doo's Mystery Machine, except:
              </p>
              <ul className="space-y-3 text-lg" style={{ color: '#000' }}>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🥒</span>
                  <span><strong>The snacks are questionable</strong> (homemade pickles, anyone?)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🗺️</span>
                  <span><strong>The driver knows roads</strong> that don't appear on Google Maps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">❤️</span>
                  <span><strong>73% chance</strong> you'll bond with your driver for life</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🐻</span>
                  <span><strong>100% bear-free</strong> (we check the trunk before every ride)</span>
                </li>
              </ul>
            </div>

            {/* Van Illustration */}
            <div className="cartoon-border p-6 bg-[#5DADE2] text-center">
              <div className="text-8xl mb-4 wobble">🚐</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span>SPEED</span>
                  <span>⭐⭐⭐</span>
                </div>
                <div className="flex justify-between text-sm font-bold">
                  <span>SNACKS</span>
                  <span>⭐⭐</span>
                </div>
                <div className="flex justify-between text-sm font-bold">
                  <span>BEAR-SAFE</span>
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Map Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="cartoon-border mb-8 p-8 bg-white"
        >
          <h2 className="text-3xl font-black mb-2 text-center" style={{ color: '#000', textShadow: '3px 3px 0px #5DADE2' }}>
            🗺️ THE ADVENTURE MAP
          </h2>
          <p className="text-center text-sm font-bold mb-6" style={{ color: '#000', opacity: 0.7 }}>
            Hover over markers to discover secrets!
          </p>

          {/* Interactive SVG Map */}
          <div className="cartoon-border p-4 mb-6 relative overflow-hidden" style={{ backgroundColor: '#E8F4F8' }}>
            <svg viewBox="0 0 400 300" className="w-full h-auto">
              {/* Background image */}
              <defs>
                <pattern id="mapBg" width="400" height="300" patternUnits="userSpaceOnUse">
                  <image href="/maps/map-background.png" width="400" height="300" preserveAspectRatio="xMidYMid slice" />
                </pattern>
                <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#000" opacity="0.1" />
                </pattern>
                <linearGradient id="covasnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5DADE2" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#5DADE2" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="harghitaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFD90F" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#FFD90F" stopOpacity="0.5" />
                </linearGradient>
              </defs>

              {/* Background image */}
              <rect width="400" height="300" fill="url(#mapBg)" />

              {/* Overlay for cartoon effect */}
              <rect width="400" height="300" fill="#E8F4F8" opacity="0.3" />

              {/* Covasna County (simplified polygon shape) */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                d="M 80 180 Q 100 150 140 140 L 180 150 Q 200 160 190 200 Q 180 230 150 240 L 110 230 Q 80 220 80 180 Z"
                fill="url(#covasnaGradient)"
                stroke="#5DADE2"
                strokeWidth="3"
                className="cursor-pointer hover:opacity-80"
              />

              {/* Harghita County (simplified polygon shape) */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                d="M 200 80 Q 230 60 280 70 L 320 90 Q 340 120 330 160 Q 310 190 270 180 L 220 170 Q 190 150 200 80 Z"
                fill="url(#harghitaGradient)"
                stroke="#FFD90F"
                strokeWidth="3"
                className="cursor-pointer hover:opacity-80"
              />

              {/* County labels */}
              <text x="135" y="195" fontSize="14" fontWeight="900" fill="#000" opacity="0.6" textAnchor="middle">
                COVASNA
              </text>
              <text x="270" y="130" fontSize="14" fontWeight="900" fill="#000" opacity="0.6" textAnchor="middle">
                HARGHITA
              </text>

              {/* Decorative mountains */}
              <path d="M 50 120 L 70 90 L 90 120 Z" fill="#8B7355" opacity="0.3" />
              <path d="M 300 60 L 330 30 L 360 60 Z" fill="#8B7355" opacity="0.3" />
              <path d="M 150 100 L 175 70 L 200 100 Z" fill="#8B7355" opacity="0.2" />

              {/* Markers */}
              {mapMarkers.map((marker, idx) => {
                // Calculate tooltip position based on marker position
                const tooltipLeft = marker.svgX > 200 ? 'auto' : '50%';
                const tooltipRight = marker.svgX > 200 ? '50%' : 'auto';

                return (
                  <motion.g
                    key={marker.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + idx * 0.1, type: 'spring' }}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredPin(marker.id)}
                    onMouseLeave={() => setHoveredPin(null)}
                    onClick={() => setHoveredPin(marker.id)}
                  >
                    {/* Pin shadow */}
                    <ellipse cx={marker.svgX} cy={marker.svgY + 8} rx="10" ry="5" fill="#000" opacity="0.3" />

                    {/* Pin body */}
                    <circle cx={marker.svgX} cy={marker.svgY} r="16" fill="#FFD90F" stroke="#000" strokeWidth="3" />

                    {/* Icon */}
                    <text
                      x={marker.svgX}
                      y={marker.svgY + 5}
                      fontSize="18"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      {marker.icon}
                    </text>

                    {/* Pulse animation ring */}
                    {hoveredPin === marker.id && (
                      <motion.circle
                        cx={marker.svgX}
                        cy={marker.svgY}
                        r="28"
                        fill="none"
                        stroke="#5DADE2"
                        strokeWidth="3"
                        initial={{ opacity: 1, scale: 0.8 }}
                        animate={{ opacity: 0, scale: 1.5 }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                    )}
                  </motion.g>
                );
              })}
            </svg>

            {/* Tooltip popup - hidden on mobile, shown on desktop */}
            <div className="hidden md:block">
              {hoveredPin && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-4 left-1/2 transform -translate-x-1/2 cartoon-border p-4 bg-white z-10 min-w-[250px]"
                  style={{ maxWidth: '90%' }}
                >
                  {(() => {
                    const marker = mapMarkers.find(m => m.id === hoveredPin);
                    if (!marker) return null;
                    return (
                      <>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{marker.icon}</span>
                          <div>
                            <p className="font-black text-lg" style={{ color: '#000' }}>{marker.name}</p>
                            <p className="text-xs font-bold" style={{ color: '#5DADE2' }}>{marker.county} County</p>
                          </div>
                        </div>
                        <p className="text-sm font-bold mb-1" style={{ color: '#000' }}>{marker.description}</p>
                        <p className="text-xs italic" style={{ color: '#000', opacity: 0.7 }}>{marker.detail}</p>
                      </>
                    );
                  })()}
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile tooltip - shown only on small screens */}
          <div className="md:hidden mt-4">
            {hoveredPin && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="cartoon-border p-4 bg-white"
              >
                {(() => {
                  const marker = mapMarkers.find(m => m.id === hoveredPin);
                  if (!marker) return null;
                  return (
                    <>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl">{marker.icon}</span>
                        <div>
                          <p className="font-black text-xl" style={{ color: '#000' }}>{marker.name}</p>
                          <p className="text-sm font-bold" style={{ color: '#5DADE2' }}>{marker.county} County</p>
                        </div>
                      </div>
                      <p className="text-base font-bold mb-2" style={{ color: '#000' }}>{marker.description}</p>
                      <p className="text-sm italic" style={{ color: '#000', opacity: 0.7 }}>{marker.detail}</p>
                      <button
                        onClick={() => setHoveredPin(null)}
                        className="mt-3 cartoon-border px-4 py-2 bg-[#5DADE2] text-white font-bold text-sm"
                      >
                        ✕ CLOSE
                      </button>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </div>

          {/* County Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="cartoon-border p-6"
              style={{ backgroundColor: countyInfo.covasna.color }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">💎</span>
                <h3 className="text-xl font-black" style={{ color: '#000' }}>{countyInfo.covasna.name} County</h3>
              </div>
              <p className="text-sm font-bold mb-3" style={{ color: '#000', opacity: 0.8 }}>Mascot: {countyInfo.covasna.mascot}</p>
              <ul className="space-y-2">
                {countyInfo.covasna.facts.map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: '#000' }}>
                    <span className="text-green-500 font-black">✓</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="cartoon-border p-6"
              style={{ backgroundColor: countyInfo.harghita.color }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🐻</span>
                <h3 className="text-xl font-black" style={{ color: '#000' }}>{countyInfo.harghita.name} County</h3>
              </div>
              <p className="text-sm font-bold mb-3" style={{ color: '#000', opacity: 0.8 }}>Mascot: {countyInfo.harghita.mascot}</p>
              <ul className="space-y-2">
                {countyInfo.harghita.facts.map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: '#000' }}>
                    <span className="text-green-500 font-black">✓</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Fun Facts Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="cartoon-border mb-8 p-8 bg-[#5DADE2]"
        >
          <h2 className="text-3xl font-black mb-6 text-center" style={{ color: '#000', textShadow: '3px 3px 0px #FFD90F' }}>
            🤓 DID YOU KNOW?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '💨', fact: 'The ground in Covasna literally farts CO2. Locals call it "nature\'s spa treatment."', title: 'Farting Ground', subtext: 'Mofetta gas = natural Botox (not really, but imagine)' },
              { icon: '🐻', fact: 'Harghita has ~5,000 bears. That\'s more bears than people in some villages. Tuesday energy.', title: 'Bear Math', subtext: 'Bear-to-human ratio: 3:1. They vote, too.' },
              { icon: '🏛️', fact: 'Covasna is the "Land of Mansions" - 19th century Hungarians built villas here to flex on each other.', title: 'Rich People Problems', subtext: 'Victorian Instagram before Instagram existed' },
              { icon: '🥞', fact: 'Sfântu Gheorghe has the best lángos. Fight us. (Don\'t fight us. We\'re scared of bears.)', title: 'Local Cuisine', subtext: 'Garlic yogurt > ketchup. Change our minds.' },
              { icon: '✈️', fact: 'Brașov-Ghimbav is the new airport. Still smells like fresh paint and hope.', title: 'Airport Watch', subtext: 'Târgu Mureș: where WiFi goes to die. Otopeni: where SOULS go to die.' },
              { icon: '🗣️', fact: 'Locals speak Hungarian, Romanian, and Bear. Yes, Bear is a real language here.', title: 'Language 101', subtext: 'Phrasebook: "Szia" = Hi, "Köszönöm" = Thanks, "NEM" = NO BEARS' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
                whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? 1 : -1 }}
                className="cartoon-border p-4 bg-white cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="text-4xl wobble">{item.icon}</div>
                  <div>
                    <h3 className="font-black text-lg mb-1" style={{ color: '#000' }}>{item.title}</h3>
                    <p className="text-sm" style={{ color: '#000' }}>{item.fact}</p>
                    <p className="text-xs italic mt-2" style={{ color: '#5DADE2', fontWeight: 'bold' }}>{item.subtext}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Primary CTA Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="cartoon-border p-8 text-center bg-white"
        >
          <h2 className="text-4xl font-black mb-4" style={{ color: '#000', textShadow: '4px 4px 0px #5DADE2' }}>
            🎮 READY TO START YOUR CARTOON?
          </h2>
          <p className="text-xl font-bold mb-8" style={{ color: '#000' }}>
            Your narrative awaits. The bears are warmed up. The pickles are jarred.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/setup">
              <button className="cartoon-button px-8 py-4 text-lg w-full sm:w-auto bg-[#5DADE2] text-white">
                🚀 INITIALIZE QUEST
              </button>
            </Link>
            <Link href="/menu">
              <button className="cartoon-button px-8 py-4 text-lg w-full sm:w-auto bg-white text-black">
                📥 DOWNLOAD INTEL
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-12 text-sm font-bold"
          style={{ color: '#000', opacity: 0.6 }}
        >
          <p>🎭 NOT A REAL TV SHOW (unfortunately)</p>
          <p className="mt-2">OPERATION: SZEKLERLAND // BEAR DIVISION</p>
          <p className="mt-2 text-xs">© {new Date().getFullYear()} - No bears were harmed in the making of this website</p>
        </motion.div>
      </div>
    </div>
  );
}
