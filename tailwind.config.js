/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          // 'sans' will be the default body font
          sans: ['Asap', ...defaultTheme.fontFamily.sans],
          // 'display' will be the heading font
          display: ['Manrope', 'sans-serif'],
        },
        colors: {
            amber: require('tailwindcss/colors').amber,
            rose: require('tailwindcss/colors').rose,
            orange:require('tailwindcss/colors').orange,
            'brand-blue': '#1DA1F2',
            'brand-green': '#17BF63',
          },
      },
    },
    plugins: [],
  };
  