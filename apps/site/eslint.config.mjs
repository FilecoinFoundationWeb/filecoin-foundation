import { config } from '@filecoin-foundation/eslint-config/next'

const eslintConfig = [
  ...config,
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
