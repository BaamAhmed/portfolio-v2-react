const {fontFamily} = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    // Or if using `src` directory:
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/pages/projects/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/components/partials/*.{js,ts,jsx,tsx}",
    "./src/pages/projectPages/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    
    extend: {
      colors: {
        'perfectdark': {
          light: '#FFFFFF',
          default: '#121212',
          dark: '#121212'
        }
      },
      dropShadow: {
        '3xl': '0.75rem 0.5rem 0.5rem black'
      }
      
    }
  },
  plugins: [],
}