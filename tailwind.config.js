/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
        width: 'width',
        spacing: 'margin, padding'
      },
      blur: {
        header: '20px'
      },
      container: {
        padding: {
          DEFAULT: '15px'
        }
      },
      colors: {
        main: '#1c1c1c',
        primary: '#31CB9E'
      },
      spacing: {
        10: '10px'
      },
      fontSize: {
        14: '14px',
        16: '16px',
        18: '18px'
      },
      fontFamily: {
        main: [
          '"M PLUS Rounded 1c"',
          'sans-serif',
          ...defaultTheme.fontFamily.sans
        ]
      }
    },
    screens: {
      'mobile-xs': '576px',
      mobile: '768px',
      tablet: '992px',
      laptop: '1200px',
      desktop: '1440px'
    }
  },

  plugins: []
}
