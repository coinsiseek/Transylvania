# Contributing to Neo-Retro Dashboard

Thank you for your interest in contributing to the Neo-Retro Dashboard project! This guide will help you get started with contributing to the project.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

- Be respectful and inclusive
- Constructive criticism is welcome
- Harassment or offensive behavior will not be tolerated

## How to Contribute

### Reporting Bugs

1. Check if the issue already exists in the GitHub issues
2. Create a new issue with:
   - A descriptive title
   - Steps to reproduce the issue
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment information (OS, browser, etc.)

### Suggesting Features

1. Check if the feature request already exists
2. Create a new issue with:
   - A clear and descriptive title
   - Detailed explanation of the feature
   - Use cases for the feature
   - Potential implementation ideas (optional)

### Code Contributions

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes
4. Write tests if applicable
5. Update documentation if needed
6. Submit a pull request

## Development Setup

1. Clone your fork:
   ```bash
   git clone https://github.com/your-username/neo-retro-dashboard.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with your Supabase credentials:
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Coding Standards

### TypeScript
- Use TypeScript for all new code
- Strict typing is enforced
- Run `npm run lint` to check for issues

### React Components
- Use functional components with hooks
- Prefer TypeScript interfaces for props
- Use Framer Motion for animations
- Follow the existing component structure

### CSS/Tailwind
- Use Tailwind classes for styling
- Custom classes should be defined in `app/globals.css`
- Maintain the neo-retro aesthetic

### Git Commits
- Use conventional commit messages
- Keep commits focused on a single change
- Reference issues in commit messages when applicable

## Pull Request Process

1. Ensure your code passes all tests
2. Update documentation if you've changed functionality
3. Write a clear, descriptive pull request title
4. Include a detailed description of the changes
5. Link to any related issues
6. Request review from maintainers

## Style Guide

### Component Structure
```tsx
'use client';

import React from 'react';

interface ComponentNameProps {
  // Define props interface
}

export default function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  // Component implementation
  return (
    // JSX
  );
}
```

### File Naming
- Use PascalCase for component files (`ComponentName.tsx`)
- Use camelCase for utility files (`utilityFunction.ts`)
- Use kebab-case for configuration files (`tailwind.config.js`)

### Imports
- Absolute imports for project files (`@/components/ComponentName`)
- Group imports logically (external, internal, styles, types)
- Alphabetize import statements

## Questions?

If you have any questions about contributing, feel free to:

1. Open a discussion in the GitHub Discussions tab
2. Contact the maintainers directly
3. Join our community chat (if available)

Thank you for contributing to Neo-Retro Dashboard!