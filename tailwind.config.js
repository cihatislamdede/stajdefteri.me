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
        "dark-bg": "#1B262C",
        "dark-bg-light": "#0F4C75",
        "light-bg": "#3282B8",
        "light-bg-dark": "#BBE1FA",
      },
    },
  },
  plugins: [],
}
