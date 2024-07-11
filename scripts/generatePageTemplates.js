const fs = require('fs')
const path = require('path')

const {
  constantCase,
  snakeCase,
  startCase,
  generateFile,
  createDir,
} = require('./helpers')

const pagePath = path.resolve(__dirname, '../templates/page.tsx')
const generateStructuredDataPath = path.resolve(
  __dirname,
  '../templates/utils/generateStructuredData.ts',
)
const layoutPath = path.resolve(__dirname, '../templates/layout.tsx')
const pageMdPath = path.resolve(__dirname, '../templates/page.md')
const testPath = path.resolve(__dirname, '../templates/test_spec.cy.ts')

const pathsFilePath = path.resolve(__dirname, '../src/app/_constants/paths.ts')

const pageName = process.argv[2]
if (!pageName) {
  console.error('Please provide a page name - example "employee-policy".')
  process.exit(1)
}

const outputDir = path.join(__dirname, '../src/app', pageName)
const mdOutputDir = path.join(__dirname, '../src/content/pages')
const testOutputDir = path.join(__dirname, '../cypress/e2e')
const utilsOutputDir = path.join(outputDir, 'utils')

createDir(outputDir)
createDir(mdOutputDir)
createDir(testOutputDir)
createDir(utilsOutputDir)

generateFile(pagePath, path.join(outputDir, 'page.tsx'), pageName)
generateFile(
  generateStructuredDataPath,
  path.join(utilsOutputDir, 'generateStructuredData.tsx'),
  pageName,
)
generateFile(layoutPath, path.join(outputDir, 'layout.tsx'), pageName)
generateFile(pageMdPath, path.join(mdOutputDir, `${pageName}.md`), pageName)
generateFile(
  testPath,
  path.join(testOutputDir, `${snakeCase(pageName)}_page_spec.cy.ts`),
  pageName,
)

const updatePathFile = (pageName) => {
  fs.readFile(pathsFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading configuration file:', err)
      return
    }

    const newPath = `  | '/${pageName}'\n`
    const newPathObject = `  ${constantCase(pageName)}: createPathObject({
    path: '/${pageName}',
    label: '${pageName
      .split('-')
      .map((word) => startCase(word))
      .join(' ')}',
  }),`

    let updatedData = data

    if (!updatedData.includes(newPath.trim())) {
      const pathValuesIndex = updatedData.indexOf('export type PathValues =')
      const pathValuesInsertIndex = updatedData.indexOf(
        "| '/about'",
        pathValuesIndex,
      )
      updatedData =
        updatedData.slice(0, pathValuesInsertIndex) +
        `${newPath}` +
        updatedData.slice(pathValuesInsertIndex)
    }

    if (!updatedData.includes(newPathObject)) {
      const pathsIndex = updatedData.indexOf('export const PATHS = {')
      const pathsEndIndex = updatedData.indexOf('} as const', pathsIndex)
      updatedData =
        updatedData.slice(0, pathsEndIndex) +
        `\n${newPathObject}` +
        updatedData.slice(pathsEndIndex)
    }

    fs.writeFile(pathsFilePath, updatedData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to configuration file:', err)
        return
      }

      console.log(`Configuration file updated successfully with /${pageName}.`)
    })
  })
}

updatePathFile(pageName)
