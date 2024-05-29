/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/templates/**/*.{html,js}"],
 
  theme: {
    colors:{
      sky:colors.violet
    }
    extend: {},
  },
  plugins: [],
}

