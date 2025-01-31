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
      },
      fontFamily: {
        'poiret': ['Poiret'],
      }
    },
  },
  plugins: [],
}