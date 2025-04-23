#!/usr/bin/env node

import { execSync } from 'child_process'
import path from 'path'
import process from 'process'
import { fileURLToPath } from 'url'

import { siteMetadataList } from '../src/app/site-audit-reports/data/siteMetadataList.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')

// Abort if no sites defined
if (!siteMetadataList || siteMetadataList.length === 0) {
  console.error('No sites found in siteMetadataList. Aborting.')
  process.exit(1)
}

// Main runner
function generateReport(site) {
  const { id } = site
  const configFileParam = `--config-file unlighthouse-configs/${id}-unlighthouse.config.ts`

  process.chdir(projectRoot)
  console.log(`📄 Running audit for "${id}" using config: ${configFileParam}`)

  try {
    execSync(`npx unlighthouse-ci ${configFileParam}`, { stdio: 'inherit' })
    console.log(`✅ Report completed for "${id}"`)
  } catch (error) {
    console.error(`❌ Error running audit for "${id}":`, error.message)
  }
}

// Measure runtime
const startTime = Date.now()

for (const site of siteMetadataList) {
  generateReport(site)
}

const endTime = Date.now()
console.log(`✨ All audits finished in ${(endTime - startTime) / 1000}s.`)
