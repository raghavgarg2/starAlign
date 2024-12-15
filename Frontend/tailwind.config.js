/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' if you prefer automatic dark mode
  theme: {
    extend: {
      colors: {
        "dark-bg": "#1a202c",
        "dark-text": "#e2e8f0",
        "light-bg": "#f7fafc",
        "light-text": "#1a202c",
      },
    },
  },
  variants: {},
  plugins: [],
};
