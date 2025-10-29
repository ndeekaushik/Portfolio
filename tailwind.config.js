/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        secondary: '#0f172a',
        accent: '#38bdf8',
        text: '#f1f5f9',
      },
    },
  },
  plugins: [],
};
