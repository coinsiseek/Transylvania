# 🐳 Docker Setup for Windows (VS Code/Visual Studio)

## Prerequisites for Windows

1. **Docker Desktop for Windows**
   - Download: https://www.docker.com/products/docker-desktop
   - Requires: Windows 10+ or Windows 11
   - Status: ✅ Already Installed (v29.2.1)

2. **WSL 2 (Windows Subsystem for Linux 2)**
   - Docker Desktop automatically uses WSL 2
   - No additional setup needed

## Quick Start on Windows

### Using PowerShell/Command Prompt

**Step 1: Setup Environment**
```powershell
# Copy the environment template
copy .env.example .env.local

# Edit .env.local with your Supabase credentials
# (Right-click → Open With → Notepad/VS Code)
```

**Step 2: Run Docker Compose**
```powershell
# In your project directory
docker-compose up
```

**Step 3: Open Browser**
- Navigate to: **http://localhost:3000**

## VS Code Integration

### 1. Install Docker Extension
- Open VS Code
- Go to Extensions (Ctrl+Shift+X)
- Search for "Docker" by Microsoft
- Click Install

### 2. Use Docker Extension
- Open Docker panel (left sidebar)
- You'll see "travel-missions:dev" under Images
- Right-click to:
  - **Run** - Start the container
  - **Build** - Rebuild the image
  - **Remove** - Delete the image

### 3. Manage Containers
- In Docker panel, go to Containers
- Right-click running container to:
  - **Stop** - Pause the container
  - **View Logs** - See output
  - **Terminal** - Execute commands inside

## Terminal/Command Line Options

### Option 1: PowerShell
```powershell
# Navigate to project
cd C:\Users\HP\Documents\Travel

# Run
docker-compose up
```

### Option 2: Git Bash (if installed)
```bash
cd C:\Users\HP\Documents\Travel
docker-compose up
```

### Option 3: Windows CMD
```cmd
cd C:\Users\HP\Documents\Travel
docker-compose up
```

## Troubleshooting on Windows

### Issue: "Docker daemon is not running"
**Solution:**
- Open Docker Desktop application
- Wait for it to fully start
- Try again in terminal

### Issue: Port 3000 Already in Use
**Solution:**
```powershell
# Use a different port
docker run -p 8080:3000 `
  -v ${PWD}:/app `
  --env-file .env.local `
  travel-missions:dev

# Then open: http://localhost:8080
```

### Issue: "Cannot create container" or Permission Denied
**Solution:**
- Run PowerShell/CMD as Administrator
- Or restart Docker Desktop

### Issue: Volume Mounting Not Working
**Solution:**
- Check Docker Desktop settings:
  - Right-click Docker icon → Settings
  - Go to Resources → File Sharing
  - Ensure your C: drive is shared
  - Click Apply

### Issue: Out of Disk Space
**Solution:**
```powershell
# Clean up Docker
docker system prune -a

# Or through Docker Desktop:
# Settings → Troubleshoot → Clean Up
```

## Windows Paths in Commands

### PowerShell Format
```powershell
# Use backticks for line continuation
docker run -p 3000:3000 `
  -v ${PWD}:/app `
  -v /app/node_modules `
  travel-missions:dev
```

### CMD Format
```cmd
# Use caret (^) for line continuation
docker run -p 3000:3000 ^
  -v %cd%:/app ^
  -v /app/node_modules ^
  travel-missions:dev
```

## File Paths Reference

Your project location:
- Full Path: `C:\Users\HP\Documents\Travel`
- Docker Desktop sees: `/c/Users/HP/Documents/Travel`
- In containers: `/app` (mapped via volumes)

## Viewing Logs in Windows

### Option 1: Docker Desktop UI
1. Open Docker Desktop
2. Go to Containers tab
3. Click on running "travel-missions:dev"
4. See logs on the right panel

### Option 2: Command Line
```powershell
# See last 100 lines
docker logs <container_id>

# Follow logs in real-time
docker logs -f <container_id>

# Get container ID
docker ps
```

## Docker Compose on Windows

Your `docker-compose.yml` already configured:
```yaml
services:
  app:
    build:
      context: .           # Current directory
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"       # Port mapping
    volumes:
      - .:/app            # Mount current folder
      - /app/node_modules # Exclude node_modules
    environment:
      - NODE_ENV=development
    env_file:
      - .env.local        # Load environment vars
```

## Visual Studio Code Workflow

1. **Open VS Code** in project folder
2. **Install Docker extension**
3. **Create .env.local** with credentials
4. **Click Docker icon** in left sidebar
5. **Find travel-missions:dev** under Images
6. **Right-click → Run**
7. **Open http://localhost:3000**
8. **Edit files** → Changes appear live!

## Performance Tips

### Disable Desktop Features You Don't Need
```powershell
# This can speed up Docker on Windows
# Docker Desktop → Settings → General → Disable certain features
```

### Use .wslconfig for Resource Management
Create or edit: `C:\Users\HP\.wslconfig`
```ini
[wsl2]
memory=4GB
processors=4
swap=2GB
```

## Advanced: WSL 2 Integration

Check WSL status:
```powershell
wsl -l -v
```

Docker should be running in WSL 2 distribution (usually "docker-desktop-data")

## Useful Windows Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+C` | Stop running Docker container |
| `Win+R` | Open Run dialog |
| `Win+E` | Open File Explorer |
| `Alt+Tab` | Switch between applications |

## Next Steps for Windows Users

1. Ensure Docker Desktop is running
2. Open PowerShell in project folder
3. Run: `cp .env.example .env.local`
4. Run: `docker-compose up`
5. Open: http://localhost:3000
6. Enjoy! 🎉

## Need More Help?

- Docker Desktop Troubleshooting: https://docs.docker.com/desktop/windows/troubleshoot/
- WSL 2 Setup: https://docs.microsoft.com/en-us/windows/wsl/install
- Docker Compose: https://docs.docker.com/compose/

Still having issues? Check the other documentation files:
- `DOCKER_QUICK_START.md` - Common commands
- `DOCKER_SETUP.md` - Full guide
- `DOCKER_STATUS.md` - Setup verification