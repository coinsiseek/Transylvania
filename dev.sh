#!/bin/bash

# Development script for Neo-Retro Dashboard

echo "🚀 Starting Neo-Retro Dashboard development server..."

# Check if node_modules exists, if not install dependencies
if [ ! -d node_modules ]; then
    echo "📦 Installing dependencies..."
    npm install --legacy-peer-deps
fi

# Start the development server
echo "🔧 Starting development server on http://localhost:3000"
echo "🔄 Hot reload is enabled. Changes will be reflected automatically."
echo "🛑 Press Ctrl+C to stop the server"

npm run dev