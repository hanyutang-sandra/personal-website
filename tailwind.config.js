//** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'yelp-red': '#e00707',
        'otter-blue': '#65cfff',
        'ddg-orange': '#f05F2b',
        'ddg-orange-light': '#ff8d5c'
      },
      fontFamily: {
        'poiret': ['Poiret'],
      }
    },
  },
  plugins: [],
}