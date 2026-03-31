# Docker Setup Guide for Travel Missions

This guide will help you containerize and run your Travel Missions application with Docker.

## Prerequisites

✅ Docker is installed on your system
✅ Docker files are already configured (Dockerfile, Dockerfile.dev, docker-compose.yml)

## Quick Start - Development

The easiest way to run your app with Docker is using docker-compose:

```bash
docker-compose up
```

This will:
- Build the development image (Dockerfile.dev)
- Mount your local files as volumes (hot reload enabled)
- Expose the app on http://localhost:3000
- Load environment variables from `.env.local`

## Quick Start - Production

To build and run the production version:

```bash
docker build -t travel-missions:latest .
docker run -p 3000:3000 travel-missions:latest
```

## Step-by-Step Instructions

### 1. Set Up Environment Variables

Make sure you have `.env.local` in your project root:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Build the Docker Image

**For Development:**
```bash
docker build -f Dockerfile.dev -t travel-missions:dev .
```

**For Production:**
```bash
docker build -t travel-missions:latest .
```

### 3. Run the Container

**Development Mode (with hot reload):**
```bash
docker-compose up
```

Or manually:
```bash
docker run -p 3000:3000 \
  -v $(pwd):/app \
  -v /app/node_modules \
  --env-file .env.local \
  travel-missions:dev
```

**Production Mode:**
```bash
docker run -p 3000:3000 \
  --env-file .env.local \
  travel-missions:latest
```

### 4. Access Your Application

Open your browser and go to: **http://localhost:3000**

## Useful Docker Commands

### View Running Containers
```bash
docker ps
```

### Stop a Container
```bash
docker stop <container_id>
```

### View Container Logs
```bash
docker logs <container_id>
```

### Follow Logs in Real-time
```bash
docker logs -f <container_id>
```

### Remove Old Images
```bash
docker image prune
```

### Clean Up Everything
```bash
docker-compose down
```

## Docker File Descriptions

### Dockerfile (Production)
- Uses Node.js LTS Alpine image (lightweight)
- Installs production dependencies only
- Non-root user (node) for security
- Optimized for production deployment

### Dockerfile.dev (Development)
- Uses Node.js 18 Alpine image
- Installs all dependencies (including devDependencies)
- Hot reload enabled through volume mounting
- Runs `npm run dev` for development server

### docker-compose.yml
- Orchestrates the app container
- Mounts local files for hot reload
- Sets up environment variables
- Exposes port 3000

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, map to a different port:
```bash
docker run -p 8080:3000 travel-missions:latest
```

### Permission Denied Error
On Linux/Mac, ensure Docker daemon is running:
```bash
sudo systemctl start docker
```

### Out of Disk Space
Clean up Docker images and containers:
```bash
docker system prune -a
```

### Container Exits Immediately
Check the logs:
```bash
docker logs <container_id>
```

## VSCode Docker Integration

1. Install the Docker extension in VSCode
2. Open the Docker panel (left sidebar)
3. Right-click on `travel-missions:dev` to run, stop, or view logs
4. Easy container management without command line

## Docker Deployment

For production deployment:

1. Push image to Docker registry (Docker Hub, ECR, etc.)
2. Deploy using Docker on your hosting platform
3. Use environment variables for configuration
4. Mount volumes for persistent data if needed

## Example: Deploy to Docker Hub

```bash
# Login to Docker Hub
docker login

# Tag your image
docker tag travel-missions:latest yourusername/travel-missions:latest

# Push to Docker Hub
docker push yourusername/travel-missions:latest

# Pull and run on your server
docker pull yourusername/travel-missions:latest
docker run -p 80:3000 yourusername/travel-missions:latest
```

## Next Steps

- Customize environment variables in `.env.local`
- Monitor your application inside the container
- Set up CI/CD pipeline with Docker builds
- Deploy to cloud platforms (AWS, GCP, Azure, Vercel, etc.)