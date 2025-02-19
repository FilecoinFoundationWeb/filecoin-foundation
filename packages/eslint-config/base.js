import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const baseConfig = [
  {
    rules: {
      'react/no-unescaped-entities': 'warn',
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          multiline: 'last',
          noSortAlphabetically: true,
          reservedFirst: true,
          shorthandFirst: true,
        },
      ],

      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'generic',
        },
      ],

      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
      'import/no-unused-modules': 'warn',

      eqeqeq: 'warn',
    },
  },
]

export { baseConfig, compat }
export default baseConfig
