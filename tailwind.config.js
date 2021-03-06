const colors =require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    colors: colors
  },
  plugins: [],
  colors: {
    // Build your palette here
    transparent: 'transparent',
    current: 'currentColor',
    gray: colors.trueGray,
    red: colors.red,
    blue: colors.sky,
    yellow: colors.amber,
    orange: colors.orange
  }
}

