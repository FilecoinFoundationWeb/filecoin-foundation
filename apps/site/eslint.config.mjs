import nextConfig from '@filecoin-foundation/eslint-config/next'

const eslintConfig = [
  ...nextConfig,
  {
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: ['./apps/site/tsconfig.json', './cypress/tsconfig.json'],
        },
      },
    },
  },
]

export default eslintConfig
