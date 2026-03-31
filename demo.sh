#!/bin/bash

# Demo script for Travel Missions application

echo "🚀 Starting Travel Missions Demo..."

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js is installed"

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm is installed"

# Check if node_modules exists, if not install dependencies
if [ ! -d node_modules ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo "🎯 Travel Missions Application Demo"
echo "====================================="
echo ""
echo "This demo showcases the mission planning flow:"
echo "1. Landing Page - Welcome screen with START MISSION button"
echo "2. Setup Page - Group size and difficulty selection"
echo "3. Character Page - Traveler profile creation"
echo "4. Scenario Page - Forest destination selection"
echo "5. Lobby Page - Party recruitment"
echo "6. Logistics Page - Cost calculation"
echo "7. Checkout Page - Payment processing"
echo ""
echo "✨ Features demonstrated:"
echo "• Retro adventure game aesthetic"
echo "• Multi-step form with progress indicator"
echo "• Real-time cost calculation"
echo "• Party recruitment system"
echo "• Animated UI transitions"
echo ""
echo "Starting development server..."
echo "Open your browser to http://localhost:3000 to begin the demo"
echo ""
echo "Press Ctrl+C to stop the server"

npm run dev