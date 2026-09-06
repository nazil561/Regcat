/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#0F2A43',
        secondary: '#5B85AA',
        accent: '#C98A2C',
        success: '#1F7A5C',
        error: '#B5442E',
        paper: '#EEF2F6',
      },
    },
  },
  plugins: [],
}

