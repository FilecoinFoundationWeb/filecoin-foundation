const path = require('path')

const {
  constantCase,
  snakeCase,
  startCase,
  generateFile,
  createDir,
  readFile,
  writeFile,
} = require('./generatePageTemplatesHelpers')

const TEMPLATE_PATHS = {
  page: path.resolve(__dirname, '../templates/generatePage/page.tsx'),
  generateStructuredData: path.resolve(
    __dirname,
    '../templates/generatePage/utils/generateStructuredData.ts',
  ),
  layout: path.resolve(__dirname, '../templates/generatePage/layout.tsx'),
  pageMd: path.resolve(__dirname, '../templates/generatePage/page.md'),
  test: path.resolve(__dirname, '../templates/generatePage/test_spec.cy.ts'),
}

const PATHS_FILE_PATH = path.resolve(
  __dirname,
  '../src/app/_constants/paths.ts',
)

const pageName = process.argv[2]
if (!pageName) {
  console.error('Please provide a page name - example "employee-policy".')
  process.exit(1)
}

const OUTPUT_DIRS = {
  output: path.join(__dirname, '../src/app', pageName),
  mdOutput: path.join(__dirname, '../src/content/pages'),
  testOutput: path.join(__dirname, '../cypress/e2e'),
  utilsOutput: path.join(path.join(__dirname, '../src/app', pageName), 'utils'),
}

Object.values(OUTPUT_DIRS).forEach(createDir)

generateFile(
  TEMPLATE_PATHS.page,
  path.join(OUTPUT_DIRS.output, 'page.tsx'),
  pageName,
)
generateFile(
  TEMPLATE_PATHS.generateStructuredData,
  path.join(OUTPUT_DIRS.utilsOutput, 'generateStructuredData.tsx'),
  pageName,
)
generateFile(
  TEMPLATE_PATHS.layout,
  path.join(OUTPUT_DIRS.output, 'layout.tsx'),
  pageName,
)
generateFile(
  TEMPLATE_PATHS.pageMd,
  path.join(OUTPUT_DIRS.mdOutput, `${pageName}.md`),
  pageName,
)
generateFile(
  TEMPLATE_PATHS.test,
  path.join(OUTPUT_DIRS.testOutput, `${snakeCase(pageName)}_page_spec.cy.ts`),
  pageName,
)

const updatePathFile = async (pageName) => {
  try {
    let data = await readFile(PATHS_FILE_PATH)

    const newPathObject = `${constantCase(pageName)}: createPathObject({
      path: '/${pageName}',
      label: '${pageName
        .split('-')
        .map((word) => startCase(word))
        .join(' ')}',
    }),`

    // UPDATE PATH
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
      '\n  ' + paths.map((path) => `| ${path}`).join('\n  ') + ';\n'
    data = data.slice(0, typeStart) + newTypeDefinition + data.slice(typeEnd)

    // UPDATE PATH OBJECT
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

updatePathFile(pageName)
