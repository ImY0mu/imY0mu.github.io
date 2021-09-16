const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.emerald
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

//npx tailwindcss -o tailwind.css