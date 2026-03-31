'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-obsidian-black flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <motion.h1
          className="text-9xl font-bold text-poison-green glitch-effect mb-4"
          data-text="404"
        >
          404
        </motion.h1>

        <h2 className="text-3xl font-bold mb-6 text-plasma-blue">
          PAGE NOT FOUND
        </h2>

        <p className="text-xl mb-8 text-poison-green">
          The dungeon corridor you're looking for doesn't exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            <button className="pixel-button px-6 py-3 text-lg">
              RETURN TO DASHBOARD
            </button>
          </Link>

          <Link href="/">
            <button className="pixel-button px-6 py-3 text-lg bg-dark-purple">
              GO HOME
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}