/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./**/*.php"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      }
    },
    extend: {
      colors: {
        'primary': {
          DEFAULT: "#5592EB",
        },
        'danger': {
          DEFAULT: '#dc3545',
        },
        'ss-purple': {
          DEFAULT: '#592D9F',
          100: '#7F4ACF',
          200: '#4a2c8b',
        },
        'ss-orange': {
          DEFAULT: '#FCF2EA',
        },
        'ss-grey': {
          DEFAULT: '#f5f5f5',
        },
        
      },
      screens: {
        '2xl': '1312px'
      },
      fontFamily: {
        'base': ["Arial", ...defaultTheme.fontFamily.sans],
        'icomoon': ['icomoon'],
      },
    },
  },
  plugins: [],
}
