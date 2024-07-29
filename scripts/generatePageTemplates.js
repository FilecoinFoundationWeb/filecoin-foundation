const fs = require('fs').promises
const path = require('path')

const {
  constantCase,
  createDir,
  startCase,
  generateFile,
  readFile,
  snakeCase,
  writeFile,
} = require('./generatePageTemplatesHelpers')

const TEMPLATE_FILES_PATHS = {
  page: path.resolve(__dirname, '../templates/page.tsx'),
  generateStructuredData: path.resolve(
    __dirname,
    '../templates/utils/generateStructuredData.ts',
  ),
  layout: path.resolve(__dirname, '../templates/layout.tsx'),
  pageMd: path.resolve(__dirname, '../templates/page.md'),
  test: path.resolve(__dirname, '../templates/test_spec.cy.ts'),
}

const PATHS_FILE_PATH = path.resolve(
  __dirname,
  '../src/app/_constants/paths.ts',
)

const CONFIG_FILE_PATH = path.resolve(__dirname, '../public/admin/config.yml')

const pageName = process.argv[2]
if (!pageName) {
  console.error('Please provide a page name - example "employee-policy".')
  process.exit(1)
}

const OUTPUT_DIRS = {
  output: path.join(__dirname, '../src/app', pageName),
  mdOutput: path.join(__dirname, '../src/content/pages'),
  testOutput: path.join(__dirname, '../cypress/e2e/critical'),
  utilsOutput: path.join(path.join(__dirname, '../src/app', pageName), 'utils'),
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

const updatePathFile = async (pageName) => {
  try {
    let data = await readFile(PATHS_FILE_PATH)

    const newPathObject = `${constantCase(pageName)}: createPathObject(
      '/${pageName}',
      '${pageName
        .split('-')
        .map((word) => startCase(word))
        .join(' ')}',
    ),`

    // update path
    const typeIndex = data.indexOf('export type PathValues =')
    const typeStart = data.indexOf('=', typeIndex) + 1
    const typeEnd = data.indexOf('export interface PathConfig', typeStart)

    let paths = data
      .slice(typeStart, typeEnd)
      .trim()
      .split('\n')
      .map((path) => path.trim())
      .filter((path) => path !== '|')

    paths = paths.map((path) => path.replace(/^\|/, '').trim())

    if (!paths.includes(`'/${pageName}'`)) {
      paths.push(`'/${pageName}'`)
    }

    paths.sort()
    const newTypeDefinition =
      '\n  ' + paths.map((path) => `| ${path}`).join('\n  ') + '\n\n'
    data = data.slice(0, typeStart) + newTypeDefinition + data.slice(typeEnd)

    // update path object
    const pathsObjectIndex = data.indexOf('export const PATHS = {')
    const pathsObjectStart = data.indexOf('{', pathsObjectIndex) + 1
    const pathsObjectEnd = data.indexOf('} as const', pathsObjectStart)

    let pathObjects = data
      .slice(pathsObjectStart, pathsObjectEnd)
      .trim()
      .split('}),')
      .filter((item) => item.trim() !== '')
      .map((item) => item.trim() + '\n }),')

    pathObjects = pathObjects.map((path) => path.replace(/^\s+/, '').trim())

    if (!pathObjects.some((obj) => obj.startsWith(constantCase(pageName)))) {
      pathObjects.push(newPathObject)
    }

    pathObjects.sort((a, b) => {
      const nameA = a.split(':')[0].trim()
      const nameB = b.split(':')[0].trim()
      return nameA.localeCompare(nameB)
    })

    const newPathObjects = '\n  ' + pathObjects.join('\n  ') + '\n'
    data =
      data.slice(0, pathsObjectStart) +
      newPathObjects +
      data.slice(pathsObjectEnd)

    await writeFile(PATHS_FILE_PATH, data)
    console.log(`Configuration file updated successfully with /${pageName}.`)
  } catch (err) {
    console.error('Error updating paths file:', err)
  }
}

const newPageConfig = `      - name: "${pageName}"
        label: "${pageName
          .split('-')
          .map((word) => startCase(word))
          .join(' ')}"
        file: "src/content/pages/${pageName}.md"
        fields:
          - *header_config
          - *meta_config`

const updateConfigFile = async (pageName) => {
  try {
    let data = await fs.readFile(CONFIG_FILE_PATH, 'utf8')

    // find the start of the pages collection
    const pagesStartIndex = data.indexOf('collections:\n  - name: "pages"')
    if (pagesStartIndex === -1) {
      throw new Error('Could not find the pages collection in the config file.')
    }

    const filesStartIndex = data.indexOf('files:', pagesStartIndex)
    if (filesStartIndex === -1) {
      throw new Error('Could not find the files list in the pages collection.')
    }

    // extract the content before, within, and after the files list
    const beforeFiles = data.slice(0, filesStartIndex + 7)
    const filesEndIndex = data.indexOf('\n  - name: ', filesStartIndex + 1)
    const afterFiles = filesEndIndex === -1 ? '' : data.slice(filesEndIndex)

    const filesList = data
      .slice(
        filesStartIndex + 7,
        filesEndIndex === -1 ? data.length : filesEndIndex,
      )
      .trim()
      .split('\n\n')

    // add the new page config to the list
    filesList.push(newPageConfig)

    // sort the files list alphabetically by the name
    filesList.sort((a, b) => {
      const nameA = a.match(/name: "([^"]+)"/)[1]
      const nameB = b.match(/name: "([^"]+)"/)[1]
      return nameA.localeCompare(nameB)
    })

    // reconstruct the new data
    const newFilesList = filesList.map((file) => file.trim()).join('\n\n      ')
    const newData =
      beforeFiles.trim() +
      '\n      ' +
      newFilesList +
      '\n\n  ' +
      afterFiles.trim()

    // write the updated config back to the file
    await fs.writeFile(CONFIG_FILE_PATH, newData, 'utf8')
    console.log(
      `CMS configuration file updated successfully with /${pageName}.`,
    )
  } catch (err) {
    console.error('Error updating CMS config file:', err)
  }
}

updatePathFile(pageName)
updateConfigFile(pageName)
