import path from 'path'

import fg from 'fast-glob'

import {
  CONTENT_ROOT,
  MARKDOWN_EXTENSION,
  type DynamicEntryNamespace,
} from '../../src/app/_constants/paths'

export async function getRandomSlug(folder: DynamicEntryNamespace) {
  const files = await fg(`**/*${MARKDOWN_EXTENSION}`, {
    cwd: path.join(process.cwd(), CONTENT_ROOT, folder),
  })

  const randomIndex = Math.floor(Math.random() * files.length)
  const randomFile = files[randomIndex]
  return randomFile.replace(MARKDOWN_EXTENSION, '')
}
