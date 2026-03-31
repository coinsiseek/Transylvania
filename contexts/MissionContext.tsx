'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Define types for our mission state
export interface Character {
  id: string;
  name: string;
  class: string;
  preferences: {
    accommodation: string;
    activities: string[];
    dietary: string;
  };
}

export interface MissionState {
  groupId: string;
  groupSize: number;
  difficulty: 'Easy' | 'Normal' | 'Hard' | 'Expert';
  scenario: string;
  characters: Character[];
  startDate: string;
  endDate: string;
  totalCost: number;
  payments: {
    method: 'Sovereign Pay' | 'Split Loot';
    splitDetails?: {
      memberId: string;
      amount: number;
    }[];
  };
}

// Define action types
export type MissionAction =
  | { type: 'SET_GROUP_SIZE'; payload: number }
  | { type: 'SET_DIFFICULTY'; payload: 'Easy' | 'Normal' | 'Hard' | 'Expert' }
  | { type: 'SET_SCENARIO'; payload: string }
  | { type: 'ADD_CHARACTER'; payload: Character }
  | { type: 'UPDATE_CHARACTER'; payload: Character }
  | { type: 'REMOVE_CHARACTER'; payload: string }
  | { type: 'SET_DATES'; payload: { startDate: string; endDate: string } }
  | { type: 'SET_TOTAL_COST'; payload: number }
  | { type: 'SET_PAYMENT_METHOD'; payload: 'Sovereign Pay' | 'Split Loot' }
  | { type: 'SET_SPLIT_DETAILS'; payload: { memberId: string; amount: number }[] };

// Initial state
const initialState: MissionState = {
  groupId: Math.random().toString(36).substring(7),
  groupSize: 1,
  difficulty: 'Normal',
  scenario: '',
  characters: [],
  startDate: '',
  endDate: '',
  totalCost: 0,
  payments: {
    method: 'Sovereign Pay',
    splitDetails: [],
  },
};

// Reducer function
function missionReducer(state: MissionState, action: MissionAction): MissionState {
  switch (action.type) {
    case 'SET_GROUP_SIZE':
      return { ...state, groupSize: action.payload };
    case 'SET_DIFFICULTY':
      return { ...state, difficulty: action.payload };
    case 'SET_SCENARIO':
      return { ...state, scenario: action.payload };
    case 'ADD_CHARACTER':
      return { ...state, characters: [...state.characters, action.payload] };
    case 'UPDATE_CHARACTER':
      return {
        ...state,
        characters: state.characters.map(char =>
          char.id === action.payload.id ? action.payload : char
        ),
      };
    case 'REMOVE_CHARACTER':
      return {
        ...state,
        characters: state.characters.filter(char => char.id !== action.payload),
      };
    case 'SET_DATES':
      return {
        ...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      };
    case 'SET_TOTAL_COST':
      return { ...state, totalCost: action.payload };
    case 'SET_PAYMENT_METHOD':
      return {
        ...state,
        payments: { ...state.payments, method: action.payload },
      };
    case 'SET_SPLIT_DETAILS':
      return {
        ...state,
        payments: { ...state.payments, splitDetails: action.payload },
      };
    default:
      return state;
  }
}

// Create context
interface MissionContextType {
  state: MissionState;
  dispatch: React.Dispatch<MissionAction>;
}

const MissionContext = createContext<MissionContextType | undefined>(undefined);

// Provider component
export function MissionProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(missionReducer, initialState);

  return (
    <MissionContext.Provider value={{ state, dispatch }}>
      {children}
    </MissionContext.Provider>
  );
}

// Hook to use the context
export function useMission() {
  const context = useContext(MissionContext);
  if (context === undefined) {
    throw new Error('useMission must be used within a MissionProvider');
  }
  return context;
}