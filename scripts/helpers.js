const fs = require('fs')
const path = require('path')

const removeBackticks = (str) => {
  return str.replace(/`/g, '')
}

const toPascalCase = (str) => {
  return str.replace(/(^\w|-\w)/g, clearAndUpper)

  function clearAndUpper(text) {
    return text.replace(/-/, '').toUpperCase()
  }
}

const toCamelCase = (str) => {
  return str
    .replace(/-./g, (match) => match.charAt(1).toUpperCase())
    .replace(/^\w/, (match) => match.toLowerCase())
}

const toPathName = (str) => {
  return str.replace(/-/g, '_').toUpperCase()
}

const generateFile = (templatePath, outputPath, pageName) => {
  fs.readFile(templatePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading template file:', err)
      return
    }

    data = removeBackticks(data)

    const pageContent = data
      .replace(/__PATH_NAME__/g, toPathName(pageName))
      .replace(/__PAGE_NAME__/g, pageName)
      .replace(/__PAGE_NAME_PASCALCASE__/g, toPascalCase(pageName))
      .replace(/__PAGE_NAME_CAMELCASE__/g, toCamelCase(pageName))

    fs.writeFile(outputPath, pageContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err)
        return
      }

      console.log(`File created successfully at ${outputPath}.`)
    })
  })
}

const createDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

module.exports = {
  removeBackticks,
  toPascalCase,
  toCamelCase,
  toPathName,
  generateFile,
  createDir,
}
