const fs = require('fs')

const DASH = '-'
const UNDERSCORE = '_'
const SPACE = ' '
const EMPTY = ''

const lowercase = (s) => s.toLowerCase()
const uppercase = (s) => s.toUpperCase()
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1)
const decapitalize = (s) => s.charAt(0).toLowerCase() + s.slice(1)
const capitalizeWords = (s) => s.split(SPACE).map(capitalize).join(SPACE)

const replace = (s, targ, sub) => s.split(targ).join(sub)
const stripDashes = (s) => replace(s, DASH, SPACE)
const stripUnderscores = (s) => replace(s, UNDERSCORE, SPACE)
const stripSpaces = (s) => replace(s, SPACE, EMPTY)
const addDashes = (s) => replace(s, SPACE, DASH)
const addUnderscores = (s) => replace(s, SPACE, UNDERSCORE)
const removeBackticks = (s) => replace(s, '`', EMPTY)

const pipe = (a, b) => (arg) => b(a(arg))
const transformPipe = (...ops) => ops.reduce(pipe)

const strip = transformPipe(stripDashes, stripUnderscores)
const startCase = transformPipe(strip, capitalizeWords)
const pascalCase = transformPipe(startCase, stripSpaces)
const camelCase = transformPipe(pascalCase, decapitalize)
const kebabCase = transformPipe(strip, addDashes, lowercase)
const snakeCase = transformPipe(strip, addUnderscores, lowercase)
const constantCase = transformPipe(strip, addUnderscores, uppercase)

const readFile = (filePath, encoding = 'utf8') =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })

const writeFile = (filePath, data, encoding = 'utf8') =>
  new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, encoding, (err) => {
      if (err) reject(err)
      else resolve()
    })
  })

const generateFile = async (templatePath, outputPath, pageName) => {
  try {
    let data = await readFile(templatePath)
    data = removeBackticks(data)

    const pageContent = data
      .replace(/__PATH_NAME__/g, constantCase(pageName))
      .replace(/__PAGE_NAME__/g, kebabCase(pageName))
      .replace(/__PAGE_NAME_PASCAL_CASE__/g, pascalCase(pageName))
      .replace(/__PAGE_NAME_CAMEL_CASE__/g, camelCase(pageName))
      .replace(/__PAGE_NAME_START_CASE__/g, startCase(pageName))
      .replace(/__PAGE_NAME_LOWER_CASE__/g, strip(pageName))

    await writeFile(outputPath, pageContent)
    console.log(`File created successfully at ${outputPath}.`)
  } catch (err) {
    console.error('Error generating file:', err)
  }
}

const createDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

module.exports = {
  camelCase,
  snakeCase,
  startCase,
  constantCase,
  generateFile,
  createDir,
  readFile,
  writeFile,
}
