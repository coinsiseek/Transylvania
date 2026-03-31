#!/bin/bash

# Health check script for Neo-Retro Dashboard

echo "Checking Neo-Retro Dashboard setup..."

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

# Check if package.json exists
if [ ! -f package.json ]; then
    echo "❌ package.json not found"
    exit 1
fi

echo "✅ package.json found"

# Check if node_modules exists
if [ ! -d node_modules ]; then
    echo "⚠️  node_modules not found. Run 'npm install'"
else
    echo "✅ node_modules found"
fi

# Check if required files exist
required_files=(
    "app/page.tsx"
    "app/layout.tsx"
    "app/globals.css"
    "app/dashboard/layout.tsx"
    "app/dashboard/page.tsx"
    "tailwind.config.js"
    "tsconfig.json"
)

for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ Required file $file not found"
        exit 1
    fi
    echo "✅ $file found"
done

echo ""
echo "🎉 All checks passed! Your Neo-Retro Dashboard is ready."
echo "Run 'npm run dev' to start the development server."