/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#222831",
        "dark-bg-light": "#393E46",
        "light-bg": "#EEEEEE",
        "light-bg-dark": "#FFD369",
      },
    },
  },
  plugins: [],
}
