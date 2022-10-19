/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inspiration: ["DM Sans", "sans-serif"],
        Hepta: ["Hepta Slab", "serif"],
      },
    },
  },
  plugins: [],
};
