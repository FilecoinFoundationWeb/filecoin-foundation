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
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.brand.100'),
            '--tw-prose-headings': theme('colors.brand.100'),
            '--tw-prose-bold': theme('colors.brand.100'),
            '--tw-prose-links': theme('colors.brand.300'),
            '--tw-prose-quotes': theme('colors.brand.100'),
            '--tw-prose-counters': theme('colors.brand.100'),
            '--tw-prose-bullets': theme('colors.brand.100'),

            a: {
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
