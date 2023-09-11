// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme')

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'primary-1': '#002DE3',
        'primary-2': '#F5F5F5',
        'dark-1': '#18181B',
        'base-inp-ph': 'rgba(247, 247, 252, 1)'
      },
    },
  },
  plugins: [],
}

