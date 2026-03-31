// Mock API route for quests data
import { NextResponse } from 'next/server';

export async function GET() {
  const quests = [
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
  ];

  return NextResponse.json(quests);
}