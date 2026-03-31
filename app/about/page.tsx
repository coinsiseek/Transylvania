'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import images from '@/assets/images.json';

export default function AboutPage() {
  const locations = [
    {
      name: 'Château de Bran',
      region: 'Brașov County',
      description: 'Gothic castle overlooking the Carpathian Pass. Perfect for medieval intrigue and historical immersion.',
      image: images.cardAdventure4.url,
    },
    {
      name: 'Piatra Craiului Cabins',
      region: 'Harghita County',
      description: 'Hidden luxury cabins deep in primeval forests. The ghost location for those seeking solitude.',
      image: images.cardAdventure1.url,
    },
    {
      name: 'Carpathian Bunker',
      region: 'Covasna County',
      description: 'Cold War-era military installation. The hunter\'s domain. Strategic planning meets espionage.',
      image: images.cardAdventure3.url,
    },
    {
      name: 'Viscri Medieval Village',
      region: 'Sibiu County',
      description: 'Authentically preserved 14th-century settlement. Where community narratives unfold.',
      image: images.cardAdventure2.url,
    },
  ];

  return (
    <div className="min-h-screen bg-obsidian-black py-8 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <Link href="/menu" className="pixel-button px-4 py-2 mb-8 inline-block">
          ← Return to the Gates
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4 glitch-effect shimmer-text" data-text="OUR COVENANT"
            style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.5)' }}>
            OUR COVENANT
          </h1>
          <p className="text-2xl" style={{ color: '#f5e6d3' }}>Immersive Theater. Reality-Agnostic Tourism. Transylvania Awaits.</p>
        </motion.div>

        {/* Core Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 p-8 border-2 border-gothic-gold rounded-lg bg-dark-purple bg-opacity-20"
          style={{ borderColor: '#d4af37' }}
        >
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#d4af37' }}>The Sacred Doctrine</h2>
          <div className="space-y-4 text-lg">
            <p style={{ color: '#f5e6d3' }}>
              We are not a traditional travel agency. We are <span className="font-bold" style={{ color: '#d4af37' }}>production designers of lived experience</span>.
            </p>

            <p style={{ color: '#d4af37' }}>
              Transylvania is not a destination—it's a modular stage. Every journey is a high-production, psychologically-calibrated narrative where you are the protagonist.
            </p>

            <p className="font-bold italic" style={{ color: '#d4af37' }}>
              "We blend hyper-realistic set design, live actors, practical effects, and psychological pacing into experiences you didn't know you needed."
            </p>

            <p style={{ color: '#f5e6d3' }}>
              Your adventure is not pre-recorded. It's born from your deepest desires, your psychological profile, your unspoken dreams.
            </p>
          </div>
        </motion.div>

        {/* Psychological Profiling */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#d4af37' }}>The Archetype Ritual: Who You Become</h2>

          <p className="mb-8 text-lg" style={{ color: '#f5e6d3' }}>
            When you create your profile, you're not answering questions. You're revealing your true nature—the archetype you've always been meant to embody.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: 'HIGH EMPATHY',
                story: 'Your Transylvania: A village is failing. Traditions are dying. You arrive as the outsider—the only one who can help them save their way of life. Your decisions ripple through generations.',
              },
              {
                title: 'HIGH LOGIC',
                story: 'Your Transylvania: A Cold War bunker holds encrypted secrets. You must decode the narrative, solve riddles left by history, navigate political intrigue in a place where logic is both shield and weapon.',
              },
              {
                title: 'HIGH THRILL-SEEKING',
                story: 'Your Transylvania: Hunted. Chased through fog-covered forests. High-stakes negotiation with actors trained in method performance. Your heart races because the stakes feel real.',
              },
              {
                title: 'HIGH INTROSPECTION',
                story: 'Your Transylvania: Silence. Meditation. Observation. You become invisible—a ghost witnessing rituals, traditions, and human stories unfold. Pure immersion without forced interaction.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border-2 rounded-lg bg-dark-purple bg-opacity-30"
                style={{ borderColor: '#d4af37' }}
              >
                <h3 className="font-bold mb-3 text-lg" style={{ color: '#d4af37' }}>{item.title}</h3>
                <p style={{ color: '#f5e6d3' }}>{item.story}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Locations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#d4af37' }}>The Hallowed Territories</h2>

          <div className="space-y-8">
            {locations.map((location, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="border-2 rounded-lg overflow-hidden bg-dark-purple bg-opacity-20"
                style={{ borderColor: '#d4af37' }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#d4af37' }}>{location.name}</h3>
                    <p className="mb-4 text-sm" style={{ color: '#d4af37', opacity: 0.7 }}>{location.region}</p>
                    <p className="text-lg" style={{ color: '#f5e6d3' }}>{location.description}</p>
                  </div>
                  <div className="rounded-lg overflow-hidden image-frame">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="gothic-image w-full h-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Experience */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 p-8 border-2 rounded-lg bg-dark-purple bg-opacity-30"
          style={{ borderColor: '#d4af37' }}
        >
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#d4af37' }}>What You Get</h2>

          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span style={{ color: '#d4af37' }} className="mr-4">✦</span>
              <span><span className="font-bold" style={{ color: '#d4af37' }}>Custom Narrative</span> - <span style={{ color: '#f5e6d3' }}>Tailored to your psychological profile</span></span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#d4af37' }} className="mr-4">✦</span>
              <span><span className="font-bold" style={{ color: '#d4af37' }}>Live Performance</span> - <span style={{ color: '#f5e6d3' }}>Professional actors trained in immersive theater</span></span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#d4af37' }} className="mr-4">✦</span>
              <span><span className="font-bold" style={{ color: '#d4af37' }}>Practical Effects</span> - <span style={{ color: '#f5e6d3' }}>Real fog, real locations, real stakes</span></span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#d4af37' }} className="mr-4">✦</span>
              <span><span className="font-bold" style={{ color: '#d4af37' }}>Luxury or Grit</span> - <span style={{ color: '#f5e6d3' }}>Choose your comfort level</span></span>
            </li>
            <li className="flex items-start">
              <span style={{ color: '#d4af37' }} className="mr-4">✦</span>
              <span><span className="font-bold" style={{ color: '#d4af37' }}>Agency</span> - <span style={{ color: '#f5e6d3' }}>Your choices genuinely shape outcomes</span></span>
            </li>
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-12"
        >
          <h3 className="text-3xl font-bold mb-6" style={{ color: '#d4af37' }}>Ready for Your Initiation?</h3>
          <Link href="/setup">
            <button className="pixel-button px-8 py-4 text-lg">
              BEGIN YOUR INITIATION
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}