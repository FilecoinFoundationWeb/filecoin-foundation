import path from 'path'
import { fileURLToPath } from 'url'

import { createDir, generateFile } from '../generatePageTemplatesHelpers.js'
import { snakeCase } from '../generatePageTemplatesHelpers.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const TEMPLATE_FILES_PATHS = {
  page: path.resolve(__dirname, '../../templates/page.tsx'),
  generateStructuredData: path.resolve(
    __dirname,
    '../../templates/utils/generateStructuredData.ts',
  ),
  layout: path.resolve(__dirname, '../../templates/layout.tsx'),
  pageMd: path.resolve(__dirname, '../../templates/page.md'),
  test: path.resolve(__dirname, '../../templates/test_spec.cy.ts'),
}

async function generateFiles(pageName) {
  const OUTPUT_DIRS = {
    output: path.join(__dirname, '../../src/app', pageName),
    mdOutput: path.join(__dirname, '../../src/content/pages'),
    testOutput: path.join(__dirname, '../../cypress/e2e'),
    utilsOutput: path.join(__dirname, '../../src/app', pageName, 'utils'),
  }

  const filesToGenerate = [
    {
      templatePath: TEMPLATE_FILES_PATHS.page,
      outputPath: path.join(OUTPUT_DIRS.output, 'page.tsx'),
    },
    {
      templatePath: TEMPLATE_FILES_PATHS.generateStructuredData,
      outputPath: path.join(
        OUTPUT_DIRS.utilsOutput,
        'generateStructuredData.tsx',
      ),
    },
    {
      templatePath: TEMPLATE_FILES_PATHS.layout,
      outputPath: path.join(OUTPUT_DIRS.output, 'layout.tsx'),
    },
    {
      templatePath: TEMPLATE_FILES_PATHS.pageMd,
      outputPath: path.join(OUTPUT_DIRS.mdOutput, `${pageName}.md`),
    },
    {
      templatePath: TEMPLATE_FILES_PATHS.test,
      outputPath: path.join(
        OUTPUT_DIRS.testOutput,
        `${snakeCase(pageName)}_page_spec.cy.ts`,
      ),
    },
  ]

  Object.values(OUTPUT_DIRS).forEach(createDir)

  filesToGenerate.forEach((file) => {
    generateFile(file.templatePath, file.outputPath, pageName)
  })
}

export { generateFiles }
