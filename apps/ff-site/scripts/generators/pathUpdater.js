import path from 'path'
import { fileURLToPath } from 'url'

import { readFile, writeFile } from '../generatePageTemplatesHelpers.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PATHS_FILE_PATH = path.resolve(
  __dirname,
  '../../src/app/_constants/paths.ts',
)

async function updatePaths(pageName) {
  try {
    let data = await readFile(PATHS_FILE_PATH)

    // Update PathValues type
    const typeIndex = data.indexOf('export type PathValues =')
    const typeStart = data.indexOf('=', typeIndex) + 1
    const typeEnd = data.indexOf('export const WORKSPACE_ROOT', typeStart)

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

    // Find the PATHS object and insert new entry in alphabetical order
    const pathsObjectIndex = data.indexOf('export const PATHS = {')
    const pathsObjectStart = data.indexOf('{', pathsObjectIndex) + 1
    const pathsObjectEnd = data.indexOf('} as const', pathsObjectStart)

    // Get all existing entries with their positions
    const pathsContent = data.slice(pathsObjectStart, pathsObjectEnd)
    const lines = pathsContent.split('\n')
    const entries = []

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      if (line && line.includes('createPathConfig')) {
        // Find the complete entry (might span multiple lines)
        let entry = lines[i] // Keep original indentation
        let j = i + 1
        let braceCount =
          (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length

        while (
          j < lines.length &&
          (braceCount > 0 || !lines[j].trim().endsWith('),'))
        ) {
          entry += '\n' + lines[j] // Keep original indentation
          braceCount +=
            (lines[j].match(/\{/g) || []).length -
            (lines[j].match(/\}/g) || []).length
          j++
        }
        if (j < lines.length) {
          entry += '\n' + lines[j] // Keep original indentation
        }

        const key = line.split(':')[0].trim()
        entries.push({ key, entry, originalIndex: i })
        i = j
      }
    }

    // Create new entry with proper indentation
    const newEntry = `  ${pageName.toUpperCase().replace(/-/g, '_')}: createPathConfig(
    '/${pageName}',
    '${pageName
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')}',
  ),`

    // Add new entry if it doesn't exist
    if (
      !entries.some((e) => e.key === pageName.toUpperCase().replace(/-/g, '_'))
    ) {
      entries.push({
        key: pageName.toUpperCase().replace(/-/g, '_'),
        entry: newEntry,
        originalIndex: -1,
      })
    }

    // Sort alphabetically
    entries.sort((a, b) => a.key.localeCompare(b.key))

    // Reconstruct the PATHS object with proper indentation
    const newPathsContent = '\n' + entries.map((e) => e.entry).join('\n') + '\n'
    data =
      data.slice(0, pathsObjectStart) +
      newPathsContent +
      data.slice(pathsObjectEnd)

    await writeFile(PATHS_FILE_PATH, data)
    console.log(`Configuration file updated successfully with /${pageName}.`)
  } catch (err) {
    console.error('Error updating paths file:', err)
  }
}

export { updatePaths }
