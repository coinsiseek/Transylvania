'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Character } from '@/contexts/MissionContext';

interface CharacterCreatorProps {
  character: Character;
  onSave: (character: Character) => void;
  onCancel: () => void;
}

const characterClasses = [
  { id: 'explorer', name: 'Explorer', description: 'Master of navigation and discovery' },
  { id: 'navigator', name: 'Navigator', description: 'Pathfinder and route specialist' },
  { id: 'survivalist', name: 'Survivalist', description: 'Wilderness expert and forager' },
  { id: 'scholar', name: 'Scholar', description: 'Historian and cultural interpreter' },
  { id: 'photographer', name: 'Photographer', description: 'Captures moments and landscapes' },
  { id: 'chef', name: 'Chef', description: 'Culinary expert for outdoor dining' },
];

const accommodationPreferences = [
  'Luxury Resort',
  'Boutique Hotel',
  'Eco-Lodge',
  'Campsite',
  'Backcountry Shelter',
  'Local Homestay',
];

const activities = [
  'Hiking',
  'Bird Watching',
  'Photography',
  'Fishing',
  'Kayaking',
  'Rock Climbing',
  'Wildlife Spotting',
  'Cultural Tours',
  'Journaling',
  'Meditation',
  'Stargazing',
  'Foraging',
];

const dietaryPreferences = [
  'None',
  'Vegetarian',
  'Vegan',
  'Gluten-Free',
  'Kosher',
  'Halal',
  'Nut Allergies',
  'Shellfish Allergies',
];

export default function CharacterCreator({ character, onSave, onCancel }: CharacterCreatorProps) {
  const [formData, setFormData] = useState({
    name: character.name || '',
    class: character.class || '',
    accommodation: character.preferences.accommodation || '',
    activities: character.preferences.activities || [],
    dietary: character.preferences.dietary || '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleActivityToggle = (activity: string) => {
    setFormData(prev => {
      const newActivities = prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity];

      return { ...prev, activities: newActivities };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...character,
      name: formData.name,
      class: formData.class,
      preferences: {
        accommodation: formData.accommodation,
        activities: formData.activities,
        dietary: formData.dietary,
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glow-card rounded-lg w-full max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-6 glitch-effect" data-text="CHARACTER CREATION" style={{ color: '#d4af37' }}>
        CHARACTER CREATION
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Character Name */}
        <div>
          <label className="block mb-2" style={{ color: '#f5e6d3' }}>Traveler Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full pixel-button bg-dark-purple p-3 rounded"
            placeholder="Enter your adventurer's name"
            required
          />
        </div>

        {/* Character Class */}
        <div>
          <label className="block mb-2" style={{ color: '#f5e6d3' }}>Traveler Class</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {characterClasses.map(cls => (
              <button
                key={cls.id}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, class: cls.id }))}
                className="p-3 rounded border text-left transition-all"
                style={{
                  borderWidth: '2px',
                  borderColor: formData.class === cls.id ? '#d4af37' : 'rgba(212, 175, 55, 0.3)',
                  backgroundColor: formData.class === cls.id ? 'rgba(26, 20, 16, 0.6)' : 'transparent',
                  color: '#f5e6d3'
                }}
              >
                <div className="font-bold">{cls.name}</div>
                <div className="text-xs mt-1" style={{ color: '#d4af37', opacity: 0.7 }}>{cls.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Accommodation Preference */}
        <div>
          <label className="block mb-2" style={{ color: '#f5e6d3' }}>Accommodation Preference</label>
          <select
            name="accommodation"
            value={formData.accommodation}
            onChange={handleInputChange}
            className="w-full pixel-button bg-dark-purple p-3 rounded"
            style={{ color: '#d4af37' }}
          >
            <option value="" style={{ color: '#0c0c14', backgroundColor: '#1a1410' }}>Select preference</option>
            {accommodationPreferences.map(pref => (
              <option key={pref} value={pref}>{pref}</option>
            ))}
          </select>
        </div>

        {/* Activities Interest */}
        <div>
          <label className="block mb-2" style={{ color: '#f5e6d3' }}>Activities of Interest</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {activities.map(activity => (
              <button
                key={activity}
                type="button"
                onClick={() => handleActivityToggle(activity)}
                className="p-2 rounded text-sm transition-all border" 
                style={{
                  borderColor: formData.activities.includes(activity) ? '#d4af37' : 'rgba(212, 175, 55, 0.3)',
                  backgroundColor: formData.activities.includes(activity) ? 'rgba(26, 20, 16, 0.6)' : 'transparent',
                  color: '#f5e6d3'
                }}
              >
                {activity}
              </button>
            ))}
          </div>
        </div>

        {/* Dietary Preferences */}
        <div>
          <label className="block mb-2" style={{ color: '#f5e6d3' }}>Dietary Preferences</label>
          <select
            name="dietary"
            value={formData.dietary}
            onChange={handleInputChange}
            className="w-full pixel-button bg-dark-purple p-3 rounded"
            style={{ color: '#d4af37' }}
          >
            <option value="" style={{ color: '#0c0c14', backgroundColor: '#1a1410' }}>No special requirements</option>
            {dietaryPreferences.map(pref => (
              <option key={pref} value={pref}>{pref}</option>
            ))}
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="pixel-button px-6 py-3 bg-dark-purple"
          >
            CANCEL
          </button>
          <button
            type="submit"
            className="pixel-button px-6 py-3"
            disabled={!formData.name || !formData.class}
          >
            SAVE CHARACTER
          </button>
        </div>
      </form>
    </motion.div>
  );
}