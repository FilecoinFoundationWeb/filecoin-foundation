/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#eff6fc',
          200: '#d8ebfb',
          300: '#73b4ed',
          400: '#0090ff',
          500: '#154ed9',
          600: '#0621a4',
          700: '#06094e',
          800: '#08072e',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
