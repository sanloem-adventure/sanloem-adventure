/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': { 'max': '414px' },
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'primary': '#379482',
        'secondary': '#D8BC86',
        'white': '#FFFFFF',
        'black': '#000000',
        'dark-blue': "#1C4D7F",
        'red': "#b91c1c"
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
      backgroundImage: {
        'footer-image': "url('/images/footer-image.jpg')",
        'header-image': "url('/images/header-image.jpg')",
        'busket-image': "url('/images/busket.jpg')",
        'logo-en': "url('/images/logo-en.png')",
        'logo-fr': "url('/images/logo-fr.png')",
      },
      variants: {
        fill: ['hover', 'focus']
      }
    },
    letterSpacing: {
      large: '.50em'
    }
}
