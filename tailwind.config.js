module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'obsidian-black': '#0c0c14',
        'dark-purple': '#1a0b2e',
        'gothic-gold': '#d4af37',
        'gothic-cream': '#f5e6d3',
        'gothic-dark': '#1a1410',
        // Legacy aliases for backward compatibility
        'poison-green': '#d4af37',
        'plasma-blue': '#f5e6d3',
      },
      boxShadow: {
        'neon-glow': '0 0 8px #d4af37, 0 0 16px #d4af37, 0 0 24px rgba(212, 175, 55, 0.4)',
        'gold-glow': '0 0 8px #d4af37, 0 0 16px #d4af37, 0 0 24px rgba(212, 175, 55, 0.4)',
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'typing': 'typing 3s steps(40, end)',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}