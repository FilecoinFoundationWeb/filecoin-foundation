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
            '--tw-prose-quote-borders': theme('colors.brand.300'),
            '--tw-prose-counters': theme('colors.brand.100'),
            '--tw-prose-bullets': theme('colors.brand.100'),
            '--tw-prose-code': theme('colors.brand.100'),
            '--tw-prose-pre-bg': theme('colors.brand.700'),
            '--tw-prose-pre-code': theme('colors.brand.300'),

            a: {
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },

            code: {
              '&::before, &::after': {
                content: 'none !important',
              },
            },

            pre: {
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: theme('colors.brand.600'),
            },

            iframe: {
              width: '100%',

              '&::focus-visible': {
                outline: 'none',
              },
            },

            'iframe[src*="youtube.com"]': {
              width: '100%',
              height: 'auto',
              aspectRatio: '16/9',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
