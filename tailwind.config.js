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
    typography: (theme) => ({
      DEFAULT: {
        css: {
          '--tw-prose-body': theme('colors.brand.100'),
          '--tw-prose-headings': theme('colors.brand.100'),
          '--tw-prose-links': theme('colors.brand.300'),

          color: 'var(--tw-prose-body)',

          h1: {
            fontSize: theme('fontSize.2xl'),
            fontWeight: theme('fontWeight.bold'),
            marginBottom: theme('spacing.8'),
          },
          h2: {
            fontSize: theme('fontSize.xl'),
            fontWeight: theme('fontWeight.bold'),
            marginBottom: theme('spacing.6'),
          },
          h3: {
            fontSize: theme('fontSize.lg'),
            fontWeight: theme('fontWeight.bold'),
            marginBottom: theme('spacing.5'),
          },
          h4: {
            fontSize: theme('fontSize.md'),
            fontWeight: theme('fontWeight.bold'),
            marginBottom: theme('spacing.4'),
          },

          'p, ul, ol': {
            lineHeight: theme('lineHeight.6'),
            marginBottom: theme('spacing.6'),
          },
          ul: {
            listStyleType: 'disc',
          },
          ol: {
            listStyleType: 'decimal',
          },
          'ul, ol': {
            paddingLeft: theme('spacing.6'),
          },
          li: {
            paddingLeft: theme('spacing.3'),
            marginBottom: theme('spacing.1'),
          },
          'li > p': {
            marginBottom: theme('spacing.1'),
          },

          a: {
            color: 'var(--tw-prose-links)',
            '&:hover': {
              color: theme('colors.brand.400'),
              textDecoration: 'underline',
            },
            '&:focus': {
              outlineWidth: '2px',
              outlineStyle: 'solid',
              outlineColor: 'var(--tw-prose-links)',
            },
          },

          'iframe, video, img': {
            height: 'auto',
            width: '100%',
            maxWidth: theme('screens.md'),
            marginTop: theme('spacing.8'),
            marginBottom: theme('spacing.8'),
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: theme('borderRadius.md'),
            outlineWidth: '1px',
            outlineColor: theme('colors.brand.500'),
            outlineStyle: 'solid',
          },

          'iframe[src*="youtube.com"]': {
            aspectRatio: '16/9',
            '&:focus': {
              outline: 'none',
            },
          },
        },
      },
    }),
  },
  plugins: [require('@tailwindcss/typography')],
}
