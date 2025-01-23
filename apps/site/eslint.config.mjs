import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const eslintConfig = [
  ...fixupConfigRules(
    compat.extends(
      'next/core-web-vitals',
      'plugin:import/errors',
      'plugin:import/warnings',
    ),
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },

    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: ['./apps/site/tsconfig.json', './cypress/tsconfig.json'],
        },
      },
    },

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

      'no-unused-vars': 'warn',
      'import/no-unused-modules': 'warn',

      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],

          pathGroups: [
            {
              pattern: 'fs|path',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/types/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/constants/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/content/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/data/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/utils/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/schemas/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/actions/**',
              group: 'index',
              position: 'before',
            },
            {
              pattern: '@/services/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/hooks/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/components/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/styles/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '*.+(css|scss|sass|less)',
              group: 'index',
              position: 'after',
            },
            {
              pattern: 'tailwindcss',
              group: 'index',
              position: 'after',
            },
          ],

          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',

          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      eqeqeq: 'warn',
    },
  },
]

export default eslintConfig
