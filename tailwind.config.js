/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        primary : "Valky",
        secondary: ['Montserrat', 'sans-serif']
      },
      colors:{
        'red1': '#ef4444',
        'red2': '#dc2626',
        'red3': '#b91c1c',
        'black': '#000000',
        'white':'#fafafa'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

