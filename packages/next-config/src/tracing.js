// @ts-check

import path from 'path'
import { fileURLToPath } from 'url'

/**
 * @typedef {import('next').NextConfig} NextConfig
 */

/** @type {NextConfig['outputFileTracingIncludes']} */
export const outputFileTracingIncludes = {
  '/': ['src/app/**', 'src/content/**'],
}

/** @type {NextConfig['outputFileTracingExcludes']} */
export const outputFileTracingExcludes = {
  '/': [
    '.git/**',
    '.github/**',
    '.next/cache/**',
    '.vscode/**',
    'cypress/**',
    'public/**',
    'scripts/**',
  ],
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const monorepoRoot = path.resolve(__dirname, '../../../')

// This represents the root of the monorepo relative to each apps/**/next.config.ts
/** @type {NextConfig['outputFileTracingRoot']} */
export const outputFileTracingRoot = monorepoRoot
