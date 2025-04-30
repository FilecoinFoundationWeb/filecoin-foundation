import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReact from 'eslint-plugin-react'
import pluginImport from 'eslint-plugin-import'
import globals from 'globals'
import { config as baseConfig } from './base.js'
import { sharedGroups, sharedPathGroups } from './shared-import-rules.js'

/** @type {import("eslint").Linter.Config} */
export const config = [
  ...baseConfig,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    plugins: {
      'react-hooks': pluginReactHooks,
      import: pluginImport,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'import/order': [
        'error',
        {
          groups: sharedGroups,
          pathGroups: sharedPathGroups,
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
