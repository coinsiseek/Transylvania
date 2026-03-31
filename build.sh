#!/bin/bash

# Build script for Neo-Retro Dashboard

echo "🏗️  Building Neo-Retro Dashboard for production..."

# Check if node_modules exists, if not install dependencies
if [ ! -d node_modules ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run the build process
echo "🔨 Building production files..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Production files are located in the .next directory"
    echo "🚀 Run 'npm start' to start the production server"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi