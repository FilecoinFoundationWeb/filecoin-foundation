#!/usr/bin/env node

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import process from 'process'
import { fileURLToPath } from 'url'

import { globSync } from 'glob'

import { PATHS } from '../src/app/_constants/paths'
import { siteMetadataList } from '../src/app/site-audit-reports/data/siteMetadataList'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')

// Abort if no sites defined
if (!siteMetadataList || siteMetadataList.length === 0) {
  console.error('No sites found in siteMetadataList. Aborting.')
  process.exit(1)
}

// Inject <base> tag into generated reports
function injectBaseHref(siteId: string) {
  const reportDir = path.join(
    projectRoot,
    'public',
    PATHS.SITE_AUDIT_REPORTS.path,
    siteId,
  )

  const htmlFiles = globSync(`${reportDir}/**/*.html`)
  const baseHrefTag = `<base href="${PATHS.SITE_AUDIT_REPORTS.path}/${siteId}/">`

  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, 'utf8')

    if (html.includes('<base ')) {
      console.warn(`⚠️  Skipping ${file} — <base> tag already present`)
      continue
    }

    // Insert base tag just after <head> tag
    const updatedHtml = html.replace(
      /<head[^>]*>/i,
      (match) => `${match}\n  ${baseHrefTag}`,
    )

    fs.writeFileSync(file, updatedHtml, 'utf8')
  }

  console.log(
    `🔧 Injected <base> tag into ${htmlFiles.length} file(s) for "${siteId}"`,
  )
}

// Main runner
function generateReport(site: { id: string; name: string }) {
  const { id } = site
  const configFileParam = `--config-file unlighthouse-configs/${id}-unlighthouse.config.ts`

  process.chdir(projectRoot)
  console.log(`📄 Running audit for "${id}" using config: ${configFileParam}`)

  try {
    execSync(`npx unlighthouse-ci ${configFileParam}`, { stdio: 'inherit' })
    console.log(`✅ Report completed for "${id}"`)
    injectBaseHref(id)
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`❌ Error running audit for "${id}":`, error.message)
    } else {
      console.error(`❌ Error running audit for "${id}":`, String(error))
    }
  }
}

// Measure runtime
const startTime = Date.now()

for (const site of siteMetadataList) {
  generateReport(site)
}

const endTime = Date.now()
console.log(`✨ All audits finished in ${(endTime - startTime) / 1000}s.`)
