/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    colors: {
      sapphire: {
        50: '#eff6ff',
        100: '#dbeafe', 
        500: '#3b82f6',
        600: '#2563eb',
        400: '#60a5fa'
      },
      slate: {
        50: '#f8fafc',
        200: '#e2e8f0',
        700: '#334155',
        900: '#0f172a'
      }
    }
  }
},
  plugins: []
}
