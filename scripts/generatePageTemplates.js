const fs = require('fs')
const path = require('path')

const { toCamelCase, generateFile, createDir } = require('./helpers')

const pagePath = path.resolve(__dirname, '../templates/page.tsx')
const generateStructuredDataPath = path.resolve(
  __dirname,
  '../templates/utils/generateStructuredData.ts',
)
const layoutPath = path.resolve(__dirname, '../templates/layout.tsx')
const dataPath = path.resolve(__dirname, '../templates/data/data.tsx')
const pageMdPath = path.resolve(__dirname, '../templates/page.md')

const pathsFilePath = path.resolve(__dirname, '../src/app/_constants/paths.ts')
const siteMetadataFilePath = path.resolve(
  __dirname,
  '../src/app/_constants/siteMetadata.ts',
)

const pageName = process.argv[2]
if (!pageName) {
  console.error('Please provide a page name.')
  process.exit(1)
}

const outputDir = path.join(__dirname, '../src/app', pageName)
const mdOutputDir = path.join(__dirname, '../src/content/pages')
const dataOutputDir = path.join(outputDir, 'data')
const utilsOutputDir = path.join(outputDir, 'utils')

createDir(outputDir)
createDir(mdOutputDir)
createDir(dataOutputDir)
createDir(utilsOutputDir)

generateFile(pagePath, path.join(outputDir, 'page.tsx'), pageName)
generateFile(
  generateStructuredDataPath,
  path.join(utilsOutputDir, 'generateStructuredData.tsx'),
  pageName,
)
generateFile(layoutPath, path.join(outputDir, 'layout.tsx'), pageName)
generateFile(dataPath, path.join(dataOutputDir, 'data.tsx'), pageName)
generateFile(pageMdPath, path.join(mdOutputDir, `${pageName}.md`), pageName)

const updatePathFile = (pageName) => {
  fs.readFile(pathsFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading configuration file:', err)
      return
    }

    const newPath = `  | '/${pageName}'\n`
    const newPathObject = `  ${pageName.toUpperCase().replace(/-/g, '_')}: createPathObject({
    path: '/${pageName}',
    label: '${pageName
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
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

const updateUrlsFile = (pageName) => {
  fs.readFile(siteMetadataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading URLs configuration file:', err)
      return
    }

    const pageNameCamelCase = toCamelCase(pageName)
    const newObject = `  ${pageNameCamelCase}: {
      email: {
        href: '#',
      },
    },`

    let updatedData = data

    if (!updatedData.includes(newObject)) {
      const exportIndex = updatedData.indexOf(
        'export const FILECOIN_FOUNDATION_URLS = {',
      )
      const endIndex = updatedData.indexOf('} as const', exportIndex)
      updatedData =
        updatedData.slice(0, endIndex) +
        `\n${newObject}` +
        updatedData.slice(endIndex)
    }

    fs.writeFile(siteMetadataFilePath, updatedData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to URLs configuration file:', err)
        return
      }

      console.log(
        `URLs configuration file updated successfully with ${pageNameCamelCase}.`,
      )
    })
  })
}

updatePathFile(pageName)
updateUrlsFile(pageName)
