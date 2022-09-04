const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      ...colors,
      bee: '#FFD939',
    }
  },
  plugins: []
};