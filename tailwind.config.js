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
        'poison-green': '#00ff41',
        'plasma-blue': '#00ffff',
      },
      boxShadow: {
        'neon-glow': '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41',
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'typing': 'typing 3s steps(40, end)',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
      },
    },
  },
  plugins: [],
}