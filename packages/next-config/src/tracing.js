// @ts-check

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

// This represents the root of the monorepo relative to each apps/**/next.config.ts
/** @type {NextConfig['outputFileTracingRoot']} */
export const outputFileTracingRoot = '../../'
