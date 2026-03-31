'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getQuests } from '@/lib/supabase';

export default function QuestsPage() {
  const [quests, setQuests] = useState<any[]>([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchQuests = async () => {
      try {
        const data = await getQuests();
        setQuests(data);
      } catch (error) {
        console.error('Error fetching quests:', error);
      }
    };

    fetchQuests();
  }, []);

  const filteredQuests = filter === 'All'
    ? quests
    : quests.filter(quest => quest.status === filter);

  const statusOptions = ['All', 'Available', 'In Progress', 'Completed'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="glow-card p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2 text-poison-green glitch-effect" data-text="QUEST MASTER">
          QUEST MASTER
        </h1>
        <p className="text-plasma-blue">Manage your adventures and track progress</p>
      </div>

      {/* Filter Controls */}
      <div className="glow-card p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-poison-green">FILTER QUESTS</h2>
        <div className="flex flex-wrap gap-2">
          {statusOptions.map((option) => (
            <button
              key={option}
              className={`pixel-button px-4 py-2 text-sm ${
                filter === option
                  ? 'bg-poison-green text-dark-purple'
                  : 'bg-transparent'
              }`}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Quests List */}
      <div className="space-y-4">
        {filteredQuests.length > 0 ? (
          filteredQuests.map((quest: any, index: number) => (
            <motion.div
              key={quest.id}
              className={`glow-card p-6 rounded-lg border ${
                quest.status === "Completed"
                  ? "border-green-500 bg-green-900 bg-opacity-20"
                  : "border-poison-green"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold">{quest.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      quest.status === "Completed"
                        ? "bg-green-500"
                        : quest.status === "In Progress"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                    }`}>
                      {quest.status}
                    </span>
                  </div>
                  <p className="text-plasma-blue mb-4">{quest.description}</p>
                  <div className="text-sm">
                    <span className="font-bold">Reward:</span> {quest.reward}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="pixel-button text-sm">
                    {quest.status === "Completed" ? "CLAIM REWARD" : "ACCEPT QUEST"}
                  </button>
                  <button className="pixel-button text-sm bg-dark-purple">
                    VIEW DETAILS
                  </button>
                </div>
              </div>

              {quest.status === "In Progress" && (
                <div className="mt-4 pt-4 border-t border-poison-green border-opacity-30">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>65%</span>
                  </div>
                  <div className="w-full bg-dark-purple h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-poison-green h-full rounded-full"
                      style={{ width: '65%' }}
                    ></div>
                  </div>
                </div>
              )}
            </motion.div>
          ))
        ) : (
          <div className="glow-card p-12 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">NO QUESTS FOUND</h3>
            <p className="text-plasma-blue">Try changing your filter settings</p>
          </div>
        )}
      </div>

      {/* Add Quest Button */}
      <div className="flex justify-center mt-8">
        <motion.button
          className="pixel-button px-8 py-4 text-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          + CREATE NEW QUEST
        </motion.button>
      </div>
    </motion.div>
  );
}