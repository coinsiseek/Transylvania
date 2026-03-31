# Travel Missions - Adventure Planning Platform

Plan epic forest adventures with friends using our retro-inspired travel booking application. Built with Next.js 15, Tailwind CSS, Framer Motion, and Supabase.

## Features

- **Authentic Retro Theme**: Deep obsidian blacks, dark purples, and glowing "poison green" or "plasma blue" accents
- **CRT Monitor Effects**: Scanline overlay and pixelated UI elements
- **Mission Planning Flow**: Multi-step wizard for organizing forest adventures
- **Group Coordination**: Party recruitment and character creation
- **Dynamic Cost Calculation**: Real-time expense tracking based on group size and preferences
- **Animated UI**: Glitch effects, typewriter text, and smooth transitions with Framer Motion

## Tech Stack

- Next.js 15 (App Router)
- Tailwind CSS
- Framer Motion
- Supabase
- TypeScript
- Zustand (for state management)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env.local` and fill in your Supabase credentials:
   ```bash
   cp .env.example .env.local
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Mission Planning Flow

Our application guides users through a multi-step process to plan their forest adventure:

1. **Setup**: Configure group size and difficulty level
2. **Character Creation**: Build traveler profiles with classes and preferences
3. **Scenario Selection**: Choose from forest destinations
4. **Party Recruitment**: Invite friends to join the expedition
5. **Logistics**: Calculate and review mission costs
6. **Checkout**: Secure payment and mission confirmation

## Project Structure

```
app/
  ├── layout.tsx              # Root layout with MissionProvider
  ├── page.tsx                # Landing page
  ├── setup/page.tsx          # Group size and difficulty selection
  ├── character/page.tsx      # Character creation
  ├── scenario/page.tsx       # Forest scenario selection
  ├── lobby/page.tsx          # Party recruitment
  ├── logistics/page.tsx      # Cost calculation
  ├── checkout/page.tsx       # Payment processing
  ├── globals.css             # Global styles and CRT effects
  └── dashboard/              # Existing dashboard pages

components/
  ├── MissionStepper.tsx      # Progress indicator
  ├── CharacterCreator.tsx    # Character profile builder
  ├── ScenarioSelector.tsx    # Forest destination picker
  ├── CostSummary.tsx         # Expense breakdown
  ├── GlitchText.tsx          # Reusable glitch text component
  ├── PixelButton.tsx         # Reusable pixel button component
  └── GlowCard.tsx            # Reusable glow card component

contexts/
  └── MissionContext.tsx      # State management for mission planning

lib/
  └── supabase.ts             # Supabase client and utilities
```

## Key Components

1. **Mission Stepper**: Progress indicator showing current step in planning process
2. **Character Creator**: Multi-step form for building traveler profiles
3. **Scenario Selector**: Card-based interface for choosing forest destinations
4. **Cost Summary**: Dynamic expense calculation and breakdown
5. **Glowing Cards**: UI elements with neon borders and shadows
6. **Pixel Buttons**: Interactive elements with hover effects
7. **Scanline Overlay**: Animated CRT monitor effect
8. **Glitch Text**: Animated distorted text effects
9. **Typewriter Text**: Animated text reveal

## Customization

- Adjust colors in `tailwind.config.js` and `app/globals.css`
- Modify animations in `app/globals.css`
- Extend the mission planning flow with new steps in `app/[step]/page.tsx`

## Supabase Integration

This project is designed to work with Supabase for backend services:

1. Create a Supabase project at https://supabase.io
2. Get your project URL and anon key from Settings > API
3. Add them to your `.env.local` file
4. The lib/supabase.ts file contains utility functions for data fetching

## Deployment

Deploy seamlessly with Vercel, Netlify, or any Next.js compatible hosting platform.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Supabase Documentation](https://supabase.io/docs)