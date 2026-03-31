# 🐳 Quick Docker Commands

## Fastest Way to Get Started

```bash
# 1. Set up environment
cp .env.example .env.local

# 2. Run with docker-compose (includes hot reload)
docker-compose up

# That's it! Open http://localhost:3000
```

## Common Commands

| Task | Command |
|------|---------|
| **Start Dev** | `docker-compose up` |
| **Build Production** | `docker build -t travel-missions:latest .` |
| **Run Production** | `docker run -p 3000:3000 --env-file .env.local travel-missions:latest` |
| **View Logs** | `docker logs -f <container_id>` |
| **Stop Container** | `docker stop <container_id>` |
| **List Containers** | `docker ps` |
| **List Images** | `docker images` |
| **Clean Up** | `docker system prune -a` |

## Interactive Menu

Run the interactive menu for easy management:

```bash
./docker-run.sh
```

## Environment Setup

Before running Docker, create `.env.local`:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

## Development vs Production

### Development (Dockerfile.dev)
- Hot reload enabled ✅
- All dependencies installed ✅
- For local development ✅

### Production (Dockerfile)
- Optimized for performance
- Production dependencies only
- For deployment

## Port Mapping

If port 3000 is taken, map to another:

```bash
docker run -p 8080:3000 travel-missions:latest
# Then open http://localhost:8080
```

## Troubleshooting

**Port in use?** → Use a different port: `-p 8080:3000`

**No .env file?** → Copy example: `cp .env.example .env.local`

**Container won't start?** → Check logs: `docker logs <container_id>`

**Out of space?** → Clean up: `docker system prune -a`

## Next Steps

1. Copy `.env.example` to `.env.local`
2. Run `docker-compose up`
3. Open http://localhost:3000
4. Start developing!

For detailed guide, see: **DOCKER_SETUP.md**