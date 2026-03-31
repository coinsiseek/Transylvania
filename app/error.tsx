'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-obsidian-black flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <motion.h1
          className="text-9xl font-bold text-red-500 glitch-effect mb-4"
          data-text="ERROR"
        >
          ERROR
        </motion.h1>

        <h2 className="text-3xl font-bold mb-6" style={{ color: '#f5e6d3' }}>
          SOMETHING WENT WRONG
        </h2>

        <div className="bg-dark-purple border rounded p-4 mb-8 text-left" style={{ borderColor: '#d4af37' }}>
          <p className="font-mono text-sm" style={{ color: '#d4af37' }}>
            {error.message || "An unexpected error occurred"}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="pixel-button px-6 py-3 text-lg"
            onClick={() => reset()}
          >
            TRY AGAIN
          </button>

          <Link href="/dashboard">
            <button className="pixel-button px-6 py-3 text-lg bg-dark-purple">
              RETURN TO DASHBOARD
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}