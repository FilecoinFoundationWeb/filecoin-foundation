import { defineConfig } from 'tsdown'

const privatePackages = [
  '@filecoin-foundation/hooks',
  '@filecoin-foundation/utils',
  '@filecoin-foundation/ui',
]

export default defineConfig({
  entry: ['src/**/*.ts', 'src/**/*.tsx', '!src/**/*.test.*'],
  format: ['esm'],
  // `resolve` is passed through to rolldown-plugin-dts but not in tsdown's type defs
  dts: { resolve: privatePackages, eager: true } as object,
  fixedExtension: false,
  noExternal: privatePackages,
})
