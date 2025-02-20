import eslintJs from '@eslint/js'
import eslintTs from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginTurbo from 'eslint-plugin-turbo'
import eslintPluginOnlyWarn from 'eslint-plugin-only-warn'

export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
      eqeqeq: 'warn',
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ['dist/**'],
  },
]
