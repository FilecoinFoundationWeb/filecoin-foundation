import pluginImport from 'eslint-plugin-import'

import { config as baseConfig } from '@filecoin-foundation/eslint-config/base'

/** @type {import("eslint").Linter.Config} */
export default [
  ...baseConfig,
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
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
            { pattern: '{fs,path}', group: 'builtin', position: 'before' },
            { pattern: 'react', group: 'external', position: 'before' },
            { pattern: 'next', group: 'external', position: 'before' },
            {
              pattern: '@filecoin-foundation/**',
              group: 'external',
              position: 'after',
            },
            { pattern: '#**', group: 'internal', position: 'before' },
            {
              pattern: '*.+(css|scss|sass|less)',
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
    },
  },
]
