import { createClient } from '@supabase/supabase-js';

// 1. Types stay the same to ensure the UI doesn't break
export interface Quest {
  id: number;
  title: string;
  description: string;
  reward: string;
  status: 'Available' | 'In Progress' | 'Completed';
}

export interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  type: string;
}

export interface PlayerStats {
  id?: number;
  level: number;
  strength: number;
  agility: number;
  intelligence: number;
  health: number;
  mana: number;
  gold: number;
}

// New types for mission planning
export interface Mission {
  id: string;
  groupId: string;
  groupSize: number;
  difficulty: 'Easy' | 'Normal' | 'Hard' | 'Expert';
  scenario: string;
  startDate: string;
  endDate: string;
  totalCost: number;
  status: 'Planning' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
}

export interface PartyMember {
  id: string;
  missionId: string;
  name: string;
  class: string;
  preferences: {
    accommodation: string;
    activities: string[];
    dietary: string;
  };
  isHost: boolean;
  joinedAt: string;
}

// 2. Client Initialization using Environment Variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 3. Real Utility functions fetching from your SQL tables
export async function getQuests(): Promise<Quest[]> {
  const { data, error } = await supabase
    .from('quests')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    console.error("Error fetching quests:", error);
    return [];
  }
  return data as Quest[];
}

export async function getPlayerStats(): Promise<PlayerStats> {
  const { data, error } = await supabase
    .from('player_stats')
    .select('*')
    .single(); // Assumes one main player row for the MVP

  if (error) {
    console.error("Error fetching stats:", error);
    return { level: 1, strength: 10, agility: 10, intelligence: 10, health: 100, mana: 50, gold: 0 };
  }
  return data as PlayerStats;
}

export async function getInventory(): Promise<InventoryItem[]> {
  const { data, error } = await supabase
    .from('inventory')
    .select('*');

  if (error) {
    console.error("Error fetching inventory:", error);
    return [];
  }
  return data as InventoryItem[];
}

// Mission and Party Management Functions
export async function createMission(mission: Omit<Mission, 'id' | 'createdAt' | 'status'>): Promise<Mission> {
  const newMission = {
    ...mission,
    id: Math.random().toString(36).substring(7),
    status: 'Planning' as const,
    createdAt: new Date().toISOString(),
  };

  // In a real implementation, this would save to Supabase
  // const { data, error } = await supabase
  //   .from('missions')
  //   .insert(newMission)
  //   .select()
  //   .single();

  // if (error) throw error;
  // return data as Mission;

  // For now, return mock data
  return newMission as Mission;
}

export async function updateMission(missionId: string, updates: Partial<Mission>): Promise<Mission> {
  // In a real implementation, this would update in Supabase
  // const { data, error } = await supabase
  //   .from('missions')
  //   .update(updates)
  //   .eq('id', missionId)
  //   .select()
  //   .single();

  // if (error) throw error;
  // return data as Mission;

  // For now, return mock data
  return {
    id: missionId,
    groupId: updates.groupId || '',
    groupSize: updates.groupSize || 1,
    difficulty: updates.difficulty || 'Normal',
    scenario: updates.scenario || '',
    startDate: updates.startDate || '',
    endDate: updates.endDate || '',
    totalCost: updates.totalCost || 0,
    status: updates.status || 'Planning',
    createdAt: new Date().toISOString(),
  } as Mission;
}

export async function addPartyMember(member: Omit<PartyMember, 'id' | 'joinedAt'>): Promise<PartyMember> {
  const newMember = {
    ...member,
    id: Math.random().toString(36).substring(7),
    joinedAt: new Date().toISOString(),
  };

  // In a real implementation, this would save to Supabase
  // const { data, error } = await supabase
  //   .from('party_members')
  //   .insert(newMember)
  //   .select()
  //   .single();

  // if (error) throw error;
  // return data as PartyMember;

  // For now, return mock data
  return newMember as PartyMember;
}

export async function getMissionById(id: string): Promise<Mission | null> {
  // In a real implementation, this would fetch from Supabase
  // const { data, error } = await supabase
  //   .from('missions')
  //   .select('*')
  //   .eq('id', id)
  //   .single();

  // if (error) return null;
  // return data as Mission;

  // For now, return mock data
  return {
    id,
    groupId: 'group-' + id,
    groupSize: 2,
    difficulty: 'Normal',
    scenario: 'The Emerald Canopy',
    startDate: '2026-05-01',
    endDate: '2026-05-07',
    totalCost: 2450,
    status: 'Planning',
    createdAt: new Date().toISOString(),
  } as Mission;
}

export async function getPartyMembers(missionId: string): Promise<PartyMember[]> {
  // In a real implementation, this would fetch from Supabase
  // const { data, error } = await supabase
  //   .from('party_members')
  //   .select('*')
  //   .eq('missionId', missionId);

  // if (error) return [];
  // return data as PartyMember[];

  // For now, return mock data
  return [
    {
      id: 'member-1',
      missionId,
      name: 'Alex',
      class: 'Explorer',
      preferences: {
        accommodation: 'Luxury',
        activities: ['Hiking', 'Photography'],
        dietary: 'Vegetarian',
      },
      isHost: true,
      joinedAt: new Date().toISOString(),
    },
    {
      id: 'member-2',
      missionId,
      name: 'Taylor',
      class: 'Navigator',
      preferences: {
        accommodation: 'Standard',
        activities: ['Bird Watching', 'Journaling'],
        dietary: 'None',
      },
      isHost: false,
      joinedAt: new Date().toISOString(),
    },
  ];
}