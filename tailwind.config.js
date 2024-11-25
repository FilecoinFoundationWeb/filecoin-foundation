const plugin = require('tailwindcss/plugin')

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
            '--tw-prose-pre-code': theme('colors.brand.100'),
            '--tw-prose-captions': theme('colors.neutral.400'),

            a: {
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
              '&:focus, &:focus-visible': {
                outlineWidth: 2,
                outlineStyle: 'solid',
                outlineColor: theme('colors.brand.100'),
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
            },

            'iframe[src*="youtube.com"]': {
              width: '100%',
              height: 'auto',
              aspectRatio: '16/9',
            },

            figure: {
              textAlign: 'center',
            },

            figcaption: {
              textAlign: 'left',
              fontSize: '10px',
            },
          },
        },
      }),
      maxWidth: {
        readable: '60ch',
      },
      animation: {
        'slide-in-from-top':
          'slide-in-from-top 300ms cubic-bezier(.41,.73,.51,1.02)',
        'shrink-and-fade-out': 'shrink-and-fade-out 150ms ease-in forwards',
      },
      keyframes: {
        'shrink-and-fade-out': {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0.9)', opacity: 0 },
        },
        'slide-in-from-top': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/forms'),
    plugin(function addBrandOutline({ addComponents, theme }) {
      addComponents({
        '.brand-outline': {
          outlineStyle: 'solid',
          outlineColor: theme('colors.brand.100'),
          outlineWidth: 2,
          outlineOffset: 0,
          borderColor: 'transparent',
        },
        '.brand-dark-outline': {
          outlineStyle: 'solid',
          outlineColor: theme('colors.brand.400'),
          outlineWidth: 2,
          outlineOffset: 0,
          borderColor: 'transparent',
        },
        '.row': {
          height: 52,
        },
        '.cell': {
          paddingLeft: theme('padding.5'),
          paddingRight: theme('padding.5'),
          textAlign: 'left',
          textWrap: 'nowrap',
          fontWeight: '400',
          '&:first-child': {
            paddingLeft: theme('padding.10'),
          },
          '&:last-child': {
            paddingRight: theme('padding.10'),
          },
        },
      })
    }),
  ],
}
