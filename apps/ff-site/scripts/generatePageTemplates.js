import process from 'process'

import { updateConfig } from './generators/configUpdater.js'
import { generateFiles } from './generators/fileGenerator.js'
import { updatePaths } from './generators/pathUpdater.js'

const pageName = process.argv[2]
if (!pageName) {
  console.error('Please provide a page name - example "employee-policy".')
  process.exit(1)
}

// Main orchestration
async function main() {
  try {
    console.log(`🚀 Generating page: ${pageName}`)

    // Generate all files
    await generateFiles(pageName)
    console.log('✅ Files generated successfully')

    // Update configuration files
    await updatePaths(pageName)
    console.log('✅ Paths updated successfully')

    await updateConfig(pageName)
    console.log('✅ CMS config updated successfully')

    console.log(`✅ Page "${pageName}" generated successfully!`)
  } catch (error) {
    console.error('❌ Error generating page:', error)
    process.exit(1)
  }
}

main()
