'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="h-full w-full bg-obsidian-black relative overflow-hidden flex flex-col">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&h=900&fit=crop)',
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-black via-dark-purple to-obsidian-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-poison-green mb-6 glitch-effect" data-text="THE BLURRED LINE">
            THE BLURRED LINE
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-6 mb-12"
          >
            <p className="text-2xl md:text-3xl text-plasma-blue font-light">
              You don't watch life. You perform it.
            </p>

            <div className="text-lg md:text-xl text-poison-green space-y-4">
              <p>
                Most travelers are spectators. They photograph what's already been seen. But in Transylvania, the script is yours to perform.
              </p>

              <p className="text-plasma-blue">
                We deliver the stage. Ancient forests dissolve into fog-choked theaters. Medieval villages become your backstory. Hidden bunkers wait for your legend.
              </p>

              <p className="text-yellow-300 font-bold">
                "Life is a show you usually just watch. In Transylvania, we give you the script—but you perform the stunts."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/setup">
              <button className="pixel-button px-8 py-4 text-lg font-bold">
                BECOME THE PROTAGONIST
              </button>
            </Link>

            <Link href="/menu">
              <button className="pixel-button px-8 py-4 text-lg bg-dark-purple">
                RETURN TO MENU
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <p className="text-poison-green text-sm">↓ SCROLL TO LEARN MORE ↓</p>
        </motion.div>
      </div>

      {/* About Preview Section */}
      <div className="relative z-10 h-full bg-gradient-to-b from-transparent to-dark-purple p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-poison-green mb-4">THE PROTAGONIST PROTOCOL</h2>
            <p className="text-plasma-blue text-lg">We don't ask where you want to go. We ask who you want to be.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                archetype: 'THE HUNTER',
                description: 'Seeks adrenaline, confrontation, and the thrill of the chase.',
                script: 'Your Transylvania: Spy thriller in Carpathian bunkers, narrow escapes, high stakes.',
              },
              {
                archetype: 'THE ARCHITECT',
                description: 'Seeks to build or influence the world—strategy and management.',
                script: 'Your Transylvania: Lead a village revival, manage resources, shape outcomes.',
              },
              {
                archetype: 'THE GHOST',
                description: 'Seeks total anonymity, silence, and observational immersion.',
                script: 'Your Transylvania: Silent retreat in remote cabins, witness ancient rituals.',
              },
              {
                archetype: 'THE CATALYST',
                description: 'Seeks to change the ending through social interaction and connection.',
                script: 'Your Transylvania: Unite fractured communities, forge alliances, save the day.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border-2 border-poison-green rounded-lg bg-dark-purple bg-opacity-30"
              >
                <h3 className="text-xl font-bold text-poison-green mb-2">{item.archetype}</h3>
                <p className="text-plasma-blue text-sm mb-3">{item.description}</p>
                <p className="text-yellow-300 font-mono text-xs">{item.script}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/about">
              <button className="pixel-button px-8 py-4 text-lg">DISCOVER YOUR SCRIPT</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}