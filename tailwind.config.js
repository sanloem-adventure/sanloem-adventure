/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#379482',
        'secondary':'#1C4D7F',
        'tertiary':'#D8BC86',
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
}
