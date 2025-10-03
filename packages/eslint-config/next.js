import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import pluginNext from '@next/eslint-plugin-next'
import pluginImport from 'eslint-plugin-import'
import { config as baseConfig } from './base.js'
import { sharedGroups } from './shared-import-rules.js'

/** @type {import("eslint").Linter.Config} */
export const config = [
  ...baseConfig,
  {
    files: ['next.config.mjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
      },
    },
    rules: {
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
    },
  },
  {
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: sharedGroups,
          pathGroups: [
            { pattern: '{fs,path}', group: 'builtin', position: 'before' },
            { pattern: 'react', group: 'external', position: 'before' },
            { pattern: 'next/**', group: 'external', position: 'before' },
            { pattern: '@/i18n/**', group: 'external', position: 'before' },
            {
              pattern: '@filecoin-foundation/**',
              group: 'external',
              position: 'after',
            },
            { pattern: '@/types/**', group: 'internal', position: 'before' },
            {
              pattern: '@/constants/**',
              group: 'internal',
              position: 'before',
            },
            { pattern: '@/content/**', group: 'internal', position: 'before' },
            { pattern: '@/data/**', group: 'internal', position: 'before' },
            { pattern: '@/assets/**', group: 'internal', position: 'before' },
            { pattern: '@/utils/**', group: 'internal', position: 'before' },
            { pattern: '@/schemas/**', group: 'internal', position: 'before' },
            { pattern: '@/actions/**', group: 'internal', position: 'before' },
            { pattern: '@/services/**', group: 'internal', position: 'before' },
            { pattern: '@/hooks/**', group: 'internal', position: 'before' },
            {
              pattern: '@/components/**',
              group: 'internal',
              position: 'before',
            },
            { pattern: '@/styles/**', group: 'internal', position: 'before' },
            {
              pattern: '*.+(css|scss|sass|less)',
              group: 'index',
              position: 'after',
            },
            { pattern: 'tailwindcss', group: 'index', position: 'after' },
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
