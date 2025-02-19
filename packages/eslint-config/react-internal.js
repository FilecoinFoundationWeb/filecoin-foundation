import { baseConfig, compat } from './base.js'

const reactInternalConfig = [
  ...baseConfig,
  ...compat.config({
    extends: [
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
    ],
  }),
  {
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
      react: { version: 'detect' },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
]

export default reactInternalConfig
