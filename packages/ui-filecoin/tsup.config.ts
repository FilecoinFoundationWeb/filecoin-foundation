import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.{ts,tsx}', '!src/**/*.test.ts', '!src/**/*.test.tsx'],
  format: ['esm', 'cjs'],
  dts: false, // Disabled - types available from source files via package exports
  sourcemap: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    'next',
    'tailwindcss',
    '@tailwindcss/typography',
    '@tanstack/react-table',
    'nuqs',
  ],
  treeshake: true,
  splitting: false,
  skipNodeModulesBundle: true,
})
