'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getQuests, getPlayerStats, getInventory } from '@/lib/supabase';
import { pageTransition, itemVariants, cardHover, buttonPress, staggerContainer, fadeIn } from '@/lib/animations';
import { imageUrls as images } from '@/lib/images';

export default function DashboardPage() {
  const [activeQuest, setActiveQuest] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [quests, setQuests] = useState<any[]>([]);
  const [playerStats, setPlayerStats] = useState<any>(null);
  const [inventoryItems, setInventoryItems] = useState<any[]>([]);

  const fullText = "SYSTEM READY. WELCOME BACK, COMMANDER.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Fetch data from Supabase
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [questsData, statsData, inventoryData] = await Promise.all([
          getQuests(),
          getPlayerStats(),
          getInventory()
        ]);

        setQuests(questsData);
        setPlayerStats(statsData);
        setInventoryItems(inventoryData);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Use mock data as fallback
        setQuests([
          {
            id: 1,
            title: "Retrieve the Crystal Shard",
            description: "Find the ancient crystal in the depths of the dungeon",
            reward: "500 Gold + Magic Sword",
            status: "In Progress"
          },
          {
            id: 2,
            title: "Defeat the Shadow Beast",
            description: "Eliminate the creature terrorizing the village outskirts",
            reward: "1000 Gold + Shield of Light",
            status: "Available"
          },
          {
            id: 3,
            title: "Deliver Medicine to Elder",
            description: "Bring healing herbs to the village elder",
            reward: "200 Gold + Health Potion x3",
            status: "Completed"
          }
        ]);

        setPlayerStats({
          level: 12,
          strength: 85,
          agility: 72,
          intelligence: 90,
          health: 100,
          mana: 50,
          gold: 250
        });

        setInventoryItems([
          { name: "Health Potion", quantity: 5, type: "consumable" },
          { name: "Magic Scroll", quantity: 2, type: "tool" },
          { name: "Iron Sword", quantity: 1, type: "weapon" },
          { name: "Leather Armor", quantity: 1, type: "armor" },
        ]);
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div
      {...pageTransition}
      className="space-y-6"
    >
      {/* Header with Typewriter Effect */}
      <div className="glow-card p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">
          <span className="typewriter-text">{typingText}</span>
        </h1>
        <p style={{ color: '#f5e6d3' }}>Current Mission Status: ACTIVE</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="glow-card p-4 rounded-lg"
          variants={cardHover}
          initial="rest"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <h3 className="text-xl font-bold mb-2" style={{ color: '#d4af37' }}>PLAYER STATS</h3>
          <div className="space-y-2">
            {playerStats && (
              <>
                <div className="flex justify-between">
                  <span>Level:</span>
                  <span className="font-mono">{playerStats.level}</span>
                </div>
                <div className="flex justify-between">
                  <span>Strength:</span>
                  <span className="font-mono">{playerStats.strength}</span>
                </div>
                <div className="flex justify-between">
                  <span>Agility:</span>
                  <span className="font-mono">{playerStats.agility}</span>
                </div>
                <div className="flex justify-between">
                  <span>Intelligence:</span>
                  <span className="font-mono">{playerStats.intelligence}</span>
                </div>
              </>
            )}
          </div>
        </motion.div>

        <motion.div
          className="glow-card p-4 rounded-lg"
          variants={cardHover}
          initial="rest"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <h3 className="text-xl font-bold mb-2" style={{ color: '#d4af37' }}>ACTIVE QUEST</h3>
          <div className="h-24 flex items-center justify-center">
            {quests[activeQuest] && (
              <div className="text-center">
                <p className="font-bold">{quests[activeQuest].title}</p>
                <p className="text-sm mt-1 text-plasma-blue">{quests[activeQuest].status}</p>
              </div>
            )}
          </div>
          <div className="flex justify-center mt-2">
            <button
              className="pixel-button text-xs mr-2"
              onClick={() => setActiveQuest((activeQuest - 1 + quests.length) % quests.length)}
            >
              PREV
            </button>
            <button
              className="pixel-button text-xs"
              onClick={() => setActiveQuest((activeQuest + 1) % quests.length)}
            >
              NEXT
            </button>
          </div>
        </motion.div>

        <motion.div
          className="glow-card p-4 rounded-lg"
          variants={cardHover}
          initial="rest"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <h3 className="text-xl font-bold mb-2" style={{ color: '#d4af37' }}>INVENTORY</h3>
          <div className="grid grid-cols-2 gap-2">
            {inventoryItems.map((item: any, index: number) => (
              <motion.div
                key={index}
                className="bg-dark-purple p-2 rounded text-center transition-all"
                whileHover={{ scale: 1.05 }}
                style={{
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  color: '#f5e6d3'
                }}
              >
                <div className="font-bold text-sm">{item.name}</div>
                <div className="text-xs">x{item.quantity}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quest Log */}
      <motion.div
        className="glow-card p-6 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4 glitch-effect" data-text="QUEST LOG" style={{ color: '#d4af37' }}>
          QUEST LOG
        </h2>

        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {quests.map((quest: any, index: number) => (
            <motion.div
              key={quest.id}
              className="p-4 rounded-lg border transition-all"
              style={{
                borderColor: quest.status === "Completed" ? '#22c55e' : '#d4af37',
                backgroundColor: quest.status === "Completed" ? 'rgba(34, 197, 94, 0.1)' : 'transparent',
                color: '#f5e6d3'
              }}
              variants={itemVariants}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{quest.title}</h3>
                  <p className="text-sm mt-1">{quest.description}</p>
                </div>
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
              <div className="text-sm mt-2" style={{ color: '#f5e6d3' }}>
                Reward: {quest.reward}
              </div>
              <div className="mt-3">
                <button className="pixel-button text-xs">
                  {quest.status === "Completed" ? "CLAIM REWARD" : "VIEW DETAILS"}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Adventure Gallery - Featured Locations */}
      <motion.div
        className="glow-card p-6 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-6 glitch-effect" data-text="EXPEDITION LOCATIONS" style={{ color: '#d4af37' }}>
          EXPEDITION LOCATIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[images.heroBackground, images.cardAdventure1, images.cardAdventure3, images.cardAdventure4, images.profileHeader].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative rounded-lg overflow-hidden image-frame h-48 cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.description}
                className="gothic-image w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-sm font-bold" style={{ color: '#d4af37' }}>{img.description}</p>
                  <p className="text-xs opacity-75" style={{ color: '#f5e6d3' }}>📍 {img.credit}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <motion.button
          className="pixel-button px-6 py-3 text-lg"
          variants={buttonPress}
          whileHover={{ scale: 1.05 }}
          whileTap="tap"
        >
          EXPLORE DUNGEON
        </motion.button>
        <motion.button
          className="pixel-button px-6 py-3 text-lg"
          variants={buttonPress}
          whileHover={{ scale: 1.05 }}
          whileTap="tap"
        >
          VISIT SHOP
        </motion.button>
        <motion.button
          className="pixel-button px-6 py-3 text-lg"
          variants={buttonPress}
          whileHover={{ scale: 1.05 }}
          whileTap="tap"
        >
          SAVE GAME
        </motion.button>
      </div>
    </motion.div>
  );
}