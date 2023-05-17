/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{png,svg,ico,otf}",


],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons"
      },
    },
  },
  plugins: [],
}

