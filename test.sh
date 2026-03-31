#!/bin/bash

# Test script for Neo-Retro Dashboard

echo "🧪 Running tests for Neo-Retro Dashboard..."

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed"
    exit 1
fi

echo "✅ Node.js is installed"

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ npm is not installed"
    exit 1
fi

echo "✅ npm is installed"

# Run linting
echo "🔍 Running linter..."
npm run lint

if [ $? -eq 0 ]; then
    echo "✅ Linting passed"
else
    echo "❌ Linting failed"
fi

# Run TypeScript compilation check
echo "📝 Checking TypeScript compilation..."
npx tsc --noEmit

if [ $? -eq 0 ]; then
    echo "✅ TypeScript compilation passed"
else
    echo "❌ TypeScript compilation failed"
fi

# Run health check API
echo "🌐 Checking health endpoint..."
curl -f http://localhost:3000/api/health > /dev/null 2>&1

if [ $? -eq 0 ]; then
    echo "✅ Health check API is responding"
else
    echo "⚠️  Health check API is not responding. Make sure the development server is running."
fi

echo ""
echo "🏁 Test suite completed!"