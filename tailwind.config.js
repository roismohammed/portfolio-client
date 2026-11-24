/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FAFAF7',
        sand: '#F5F5F1',
        forest: '#294D32',
        moss: '#355E3B',
        sun: '#F4B82A',
        'sun-soft': '#F8D76A',
        ink: '#20251F',
        muted: '#6F756D',
        line: '#E7E8E3',
      },
    },
  },
  plugins: [],
}
