import eslintJs from '@eslint/js'
import eslintTs from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginTurbo from 'eslint-plugin-turbo'
import 'eslint-plugin-only-warn'

/** @type {import("eslint").Linter.Config} */
export const config = [
  eslintJs.configs.recommended,
  eslintConfigPrettier,
  ...eslintTs.configs.recommended,
  {
    plugins: {
      turbo: eslintPluginTurbo,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
      eqeqeq: 'warn',
    },
  },
  {
    ignores: ['dist/**'],
  },
]
