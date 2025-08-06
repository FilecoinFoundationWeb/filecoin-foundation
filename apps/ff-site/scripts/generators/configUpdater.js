import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

import { startCase } from '../generatePageTemplatesHelpers.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const CONFIG_FILE_PATH = path.resolve(
  __dirname,
  '../../public/admin/config.yml',
)

const newPageConfig = (pageName) => `      - name: "${pageName}"
        label: "${pageName
          .split('-')
          .map((word) => startCase(word))
          .join(' ')}"
        file: "src/content/pages/${pageName}.md"
        preview_path: "${pageName}"
        fields:
          - *header_config
          - *meta_config`

async function updateConfig(pageName) {
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
    filesList.push(newPageConfig(pageName))

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

export { updateConfig }
