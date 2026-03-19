import pluginImport from 'eslint-plugin-import-x'

import { config as baseConfig } from '@filecoin-foundation/eslint-config/base'
import {
  sharedGroups,
  sharedPathGroups,
} from '@filecoin-foundation/eslint-config/shared-import-rules'

/** @type {import("eslint").Linter.Config} */
export default [
  ...baseConfig,
  {
    plugins: {
      'import-x': pluginImport,
    },
    rules: {
      'import-x/order': [
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
