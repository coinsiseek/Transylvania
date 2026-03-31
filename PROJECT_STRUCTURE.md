# Project Structure Documentation

This document explains the file structure of the Neo-Retro Dashboard project.

## Root Directory

```
.
├── app/                    # Next.js App Router directory
├── components/             # Reusable React components
├── lib/                    # Utility functions and libraries
├── public/                 # Static assets (automatically created by Next.js)
├── .gitignore             # Git ignore file
├── .env.example           # Example environment variables
├── DEPLOYMENT.md          # Deployment guide
├── Dockerfile             # Production Docker configuration
├── Dockerfile.dev         # Development Docker configuration
├── docker-compose.yml     # Docker Compose configuration
├── health-check.sh        # Health check script
├── dev.sh                 # Development startup script
├── build.sh               # Production build script
├── docker-run.sh          # Docker run script
├── test.sh                # Test script
├── next.config.js         # Next.js configuration
├── middleware.ts          # Next.js middleware
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Node.js dependencies and scripts
```

## App Directory Structure

The `app` directory follows Next.js App Router conventions:

```
app/
├── layout.tsx              # Root layout component
├── page.tsx                # Home page
├── loading.tsx             # Loading state component
├── not-found.tsx           # 404 page
├── error.tsx               # Error boundary component
├── globals.css             # Global CSS styles
├── api/                    # API routes
│   ├── health/route.ts     # Health check endpoint
│   └── quests/route.ts     # Quests API endpoint
└── dashboard/              # Dashboard section
    ├── layout.tsx          # Dashboard layout with sidebar
    ├── page.tsx            # Dashboard home page
    ├── quests/
    │   └── page.tsx        # Quests management page
    ├── inventory/
    │   └── page.tsx        # Inventory management page
    ├── map/
    │   └── page.tsx        # Interactive map page
    └── settings/
        └── page.tsx        # Settings configuration page
```

## Components Directory

Reusable UI components:

```
components/
├── GlitchText.tsx          # Glitch text effect component
├── PixelButton.tsx         # Pixel-style button component
└── GlowCard.tsx            # Glowing card component
```

## Lib Directory

Utility functions and libraries:

```
lib/
├── supabase.ts             # Supabase client and data utilities
└── animations.ts           # Framer Motion animation utilities
```

## Key Files Explained

### app/layout.tsx
The root layout that wraps all pages. Includes the Geist Mono font and sets up the basic HTML structure.

### app/page.tsx
The main landing page with animated entrance and navigation to the dashboard.

### app/dashboard/layout.tsx
The dashboard layout with the command menu sidebar and status bar.

### app/dashboard/page.tsx
The main dashboard page with player stats, active quests, and inventory overview.

### app/globals.css
Global CSS styles including the CRT scanline effect, glitch animations, and pixel button styles.

### tailwind.config.js
Tailwind CSS configuration with custom colors for the neo-retro theme.

### next.config.js
Next.js configuration with experimental features and security headers.

### middleware.ts
Next.js middleware for handling redirects and security headers.

### lib/supabase.ts
Supabase client initialization and data fetching utilities.

### lib/animations.ts
Framer Motion animation utilities for consistent page transitions and interactions.