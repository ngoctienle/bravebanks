/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'animation-1': "url('/src/assets/images/animation-1.png')",
        'animation-2': "url('/src/assets/images/animation-2.png')"
      },
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
        dark: '#a9a9a9',
        light: '#5e5e5e',
        primary: '#31CB9E'
      },
      borderRadius: {
        DEFAULT: '4px',
        8: '8px',
        10: '10px'
      },
      spacing: {
        10: '10px'
      },
      fontSize: {
        14: '14px',
        16: '16px',
        18: '18px'
      },
      keyframes: {
        'animation-1': {
          '0%': { transform: 'scaleY(1.3)' },
          '50%': { transform: 'scaleX(1)' },
          '100%': { transform: 'scaleY(1.3)' }
        },
        'animation-2': {
          '0%': { transform: 'scale3d(1.5, 0.3, 2)' },
          '50%': { transform: 'scaleY(1.5)' },
          '100%': { transform: 'scale3d(1.5, 0.3, 2)' }
        }
      },
      animation: {
        'bg-1': 'animation-1 60s ease infinite',
        'bg-2': 'animation-2 60s ease infinite'
      }
    },
    screens: {
      'mobile-xs': '576px',
      mobile: '768px',
      tablet: '992px',
      laptop: '1200px',
      desktop: '1440px'
    },
    fontFamily: {
      main: ['M PLUS 1 Code', ' sans-serif']
    }
  },

  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addVariant }) {
      addVariant('not-first', '&:not(:first-child)')
    })
  ]
}
