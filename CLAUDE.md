# Travel Missions - CLAUDE.md

## Project Overview

**Travel Missions** is a Next.js 15 web application for a travel agency that organizes **scripted adventures with actors as NPCs** for tourists. The website is designed to look like an **old PC game main menu** with a gothic-noir aesthetic.

### Core Concept
- **Immersive Theater Tourism**: Custom-tailored narrative experiences in Transylvania
- **Psychological Profiling**: Users are matched to archetypes (Hunter, Architect, Ghost, Catalyst)
- **Retro Game UI**: CRT monitor effects, scanlines, glitch text, pixel buttons
- **Color Scheme**: Gothic Gold (#d4af37), Gothic Cream (#f5e6d3), Obsidian Black (#0c0c14)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4, custom CSS with CRT effects
- **Animations**: Framer Motion
- **State**: React Context (MissionContext)
- **Backend**: Supabase (configured in `lib/supabase.ts`)
- **Language**: TypeScript
- **Deployment**: Docker (Dockerfile, docker-compose.yml)

## Project Structure

```
app/
├── page.tsx              # Root → redirects to /menu
├── menu/page.tsx         # Main game menu (entry point)
├── about/page.tsx        # "Our Covenant" - business philosophy & locations
├── settings/page.tsx     # "Profile Configurator" - psychological sliders
├── load-adventure/page.tsx  # Save slots UI
├── setup/page.tsx        # Booking flow entry
├── character/page.tsx    # Character creation
├── scenario/page.tsx     # Scenario selection
├── logistics/page.tsx    # Cost calculation
├── checkout/page.tsx     # Payment
├── dashboard/            # Quest dashboard (war room)
│   ├── layout.tsx        # Dashboard layout with sidebar
│   ├── quests/page.tsx
│   ├── inventory/page.tsx
│   ├── map/page.tsx
│   └── settings/page.tsx
├── globals.css           # CRT effects, scanlines, glow styles
└── layout.tsx            # Root layout

components/
├── PixelButton.tsx       # Reusable button with hover effects
├── GlitchText.tsx        # Glitch text effect component
└── GlowCard.tsx          # Card with glow border on hover

lib/
├── images.ts             # Curated Unsplash image URLs (7 images)
└── in-universe-text.json # UI translation mapping (game → narrative)

contexts/
└── MissionContext.tsx    # State management for booking flow
```

## Key Design Patterns

### CSS Classes (globals.css)
- `.glow-card` - Glassmorphism card with gold border
- `.pixel-button` - Retro button with hover scale + glow
- `.glitch-effect` - Text distortion animation
- `.shimmer-text` - Pulsing gold text shadow
- `.glass-card` - Backdrop blur card
- `.command-menu` - Sidebar with blur + gold border

### Color Variables
```css
--gothic-gold: #d4af37      /* Primary accent */
--gothic-cream: #f5e6d3     /* Secondary accent */
--obsidian-black: #0c0c14   /* Background */
--gothic-dark: #1a1410      /* Card background */
--gold-glow: 0 0 8px #d4af37, 0 0 16px #d4af37
```

### Effects Architecture
1. **Scanline Overlay**: Body `::before` with animated horizontal lines (5% opacity)
2. **Vignette**: Radial gradient overlay on pages
3. **Film Grain**: Multi-layer pseudo-element effect
4. **Fixed Backgrounds**: `background-attachment: fixed` for parallax

## Navigation Flow

```
/ → /menu (Main Menu)
        ├→ /setup → /character → /scenario → /lobby → /logistics → /checkout
        ├→ /load-adventure (Save slots)
        ├→ /settings (Profile configurator)
        └→ /about (Business info)
        
/dashboard → Quest dashboard with sidebar nav
```

## In-Universe Text Mapping

The app uses narrative language instead of standard UI terms:
- Home → "The Gateway"
- Start New Adventure → "Begin Your Initiation"
- Settings → "Personal Cipher"
- About → "Our Covenant"
- Dashboard → "The War Room"
- Quests → "Bound Destinies"

See `lib/in-universe-text.json` for full mapping.

## Components Reference

### PixelButton
```tsx
<PixelButton variant="primary|secondary" onClick={() => {}}>
  Label
</PixelButton>
```

### GlitchText
```tsx
<GlitchText text="TRANSYLVANIA" className="text-4xl" />
```

### GlowCard
```tsx
<GlowCard glowColor="green|blue">
  Content
</GlowCard>
```

## Images (lib/images.ts)

7 curated CC0 images from Unsplash:
- `heroBackground` - Foggy mystical forest (main menu bg)
- `cardAdventure1-4` - Location cards
- `profileHeader` - Gothic archway
- `atmosphericOverlay` - Grey forest fog (settings bg)

## Docker Commands

```bash
# Development
docker-compose up

# Production build
docker build -t travel-missions:latest .

# Interactive menu
./docker-run.sh
```

## Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Key Files to Know

| File | Purpose |
|------|---------|
| `app/menu/page.tsx` | Main menu with 4 navigation cards |
| `app/globals.css` | All CRT effects, animations, color vars |
| `lib/images.ts` | Image URL constants |
| `components/PixelButton.tsx` | Primary button component |
| `app/about/page.tsx` | 4 locations, 4 archetypes, philosophy |
| `app/settings/page.tsx` | 4 psychological sliders + archetype select |

## Development Notes

- **Mobile-first**: Responsive breakpoints at sm, md, lg
- **Fixed backgrounds**: Use `background-attachment: fixed` for parallax
- **Z-index layers**: Content must be `z-index: 2+` to appear above scanlines
- **Glassmorphism**: Use `backdrop-filter: blur(10px)` for cards
- **Animations**: Framer Motion for all page/component transitions
