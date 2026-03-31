#!/bin/bash

# Travel Missions Docker Runner Script

echo "🐳 Travel Missions - Docker Runner"
echo "===================================="
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null
then
    echo "❌ Docker is not installed. Please install Docker first."
    echo "Visit: https://www.docker.com/products/docker-desktop"
    exit 1
fi

echo "✅ Docker is installed"
echo ""

# Check if docker-compose is available
if command -v docker-compose &> /dev/null; then
    COMPOSE_CMD="docker-compose"
elif docker compose version &> /dev/null 2>&1; then
    COMPOSE_CMD="docker compose"
else
    COMPOSE_CMD=""
fi

# Function to show menu
show_menu() {
    echo "What would you like to do?"
    echo "1. Run Development (with hot reload)"
    echo "2. Build Production Image"
    echo "3. Run Production"
    echo "4. View Container Logs"
    echo "5. Stop All Containers"
    echo "6. Clean Up"
    echo "7. Exit"
    echo ""
}

# Main loop
while true; do
    show_menu
    read -p "Enter your choice (1-7): " choice

    case $choice in
        1)
            echo ""
            echo "🚀 Starting development container..."

            if [ -z "$COMPOSE_CMD" ]; then
                echo "❌ Docker Compose not found. Installing dependencies..."
                docker build -f Dockerfile.dev -t travel-missions:dev . && \
                docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules --env-file .env.local travel-missions:dev
            else
                $COMPOSE_CMD up
            fi
            ;;
        2)
            echo ""
            echo "🏗️  Building production image..."
            docker build -t travel-missions:latest . && echo "✅ Build successful!"
            ;;
        3)
            echo ""
            if [ ! -f .env.local ]; then
                echo "❌ .env.local not found!"
                continue
            fi
            echo "🚀 Running production container..."
            docker run -p 3000:3000 --env-file .env.local travel-missions:latest
            ;;
        4)
            echo ""
            CONTAINER_ID=$(docker ps -q -f "ancestor=travel-missions:dev" | head -n1)
            if [ -z "$CONTAINER_ID" ]; then
                echo "❌ No running container found"
            else
                docker logs -f $CONTAINER_ID
            fi
            ;;
        5)
            echo ""
            if [ -z "$COMPOSE_CMD" ]; then
                docker stop $(docker ps -q) 2>/dev/null
            else
                $COMPOSE_CMD down
            fi
            echo "✅ Containers stopped"
            ;;
        6)
            echo ""
            docker system prune -a && echo "✅ Cleanup complete"
            ;;
        7)
            echo "👋 Goodbye!"
            exit 0
            ;;
        *)
            echo "❌ Invalid choice"
            ;;
    esac

    echo ""
    read -p "Press Enter to continue..."
    clear
done