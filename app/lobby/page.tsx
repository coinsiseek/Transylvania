'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import MissionStepper from '@/components/MissionStepper';
import { useMission } from '@/contexts/MissionContext';
import { Character } from '@/contexts/MissionContext';
import images from '@/assets/images.json';

const steps = [
  { id: 'setup', name: 'Setup', description: 'Group & Difficulty' },
  { id: 'character', name: 'Character', description: 'Create Profile' },
  { id: 'scenario', name: 'Scenario', description: 'Choose Forest' },
  { id: 'lobby', name: 'Lobby', description: 'Recruit Party' },
  { id: 'logistics', name: 'Logistics', description: 'Cost Calculation' },
  { id: 'checkout', name: 'Checkout', description: 'Payment' },
];

// Mock party members data
const mockPartyMembers: Character[] = [
  {
    id: 'host',
    name: 'Alex',
    class: 'explorer',
    preferences: {
      accommodation: 'Luxury Resort',
      activities: ['Hiking', 'Photography'],
      dietary: 'Vegetarian',
    },
  },
  {
    id: 'member-1',
    name: 'Taylor',
    class: 'navigator',
    preferences: {
      accommodation: 'Standard',
      activities: ['Bird Watching', 'Journaling'],
      dietary: 'None',
    },
  },
];

export default function LobbyPage() {
  const router = useRouter();
  const { state, dispatch } = useMission();
  const [partyMembers, setPartyMembers] = useState<Character[]>(mockPartyMembers);
  const [inviteLink, setInviteLink] = useState('');

  useEffect(() => {
    if (!state.scenario) {
      router.push('/scenario');
    }

    // Generate a mock invite link
    setInviteLink(`https://travel-missions.com/join/${state.groupId}`);
  }, [state.scenario, state.groupId, router]);

  const handleContinue = () => {
    router.push('/logistics');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink);
    // In a real app, you might show a toast notification here
  };

  return (
    <div className="min-h-screen relative py-8 px-4" style={{
      backgroundImage: `url(${images.cardAdventure3.url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian-black/60 to-obsidian-black"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <MissionStepper steps={steps} currentStep="lobby" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2 glitch-effect animate-glow-pulse" data-text="THE TAVERN" style={{ color: '#d4af37' }}>
              THE TAVERN
            </h1>
            <p style={{ color: '#f5e6d3' }}>
              Recruit your party members for this epic adventure
            </p>
          </div>

          <div className="glow-card rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#d4af37' }}>INVITE FRIENDS</h2>
          <p style={{ color: '#f5e6d3' }} className="mb-4">
            Share this link with friends to join your expedition
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={inviteLink}
              readOnly
              className="flex-1 pixel-button bg-dark-purple p-3 rounded"
            />
            <button
              onClick={handleCopyLink}
              className="pixel-button px-6 py-3 whitespace-nowrap"
            >
              COPY LINK
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button className="pixel-button px-4 py-2 text-sm">
              SHARE ON TWITTER
            </button>
            <button className="pixel-button px-4 py-2 text-sm">
              SHARE ON FACEBOOK
            </button>
            <button className="pixel-button px-4 py-2 text-sm">
              SHARE VIA EMAIL
            </button>
          </div>
          </div>

          <div className="glow-card rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#d4af37' }}>PARTY MEMBERS</h2>
            <p style={{ color: '#f5e6d3' }} className="mb-4">
              Currently traveling with:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {partyMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="p-4 bg-dark-purple rounded border" style={{ borderColor: '#d4af37' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}>
                    <span className="text-2xl">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-poison-green">{member.name}</div>
                    <div className="text-sm text-plasma-blue capitalize">{member.class}</div>
                  </div>
                  {index === 0 && (
                    <div className="ml-auto text-xs bg-poison-green text-obsidian-black px-2 py-1 rounded">
                      HOST
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Empty slots for invited friends */}
            {Array.from({ length: Math.max(0, state.groupSize - partyMembers.length) }).map((_, index) => (
              <div
                key={`empty-${index}`}
                className="p-4 bg-dark-purple bg-opacity-50 rounded border border-poison-green border-dashed flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">👤</div>
                  <div className="text-plasma-blue">AWAITING MEMBER</div>
                </div>
              </div>
            ))}
          </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleContinue}
              className="pixel-button px-8 py-4 text-xl"
            >
              CONTINUE TO LOGISTICS
            </button>
          </div>
      </motion.div>
    </div>
    </div>

  );
}