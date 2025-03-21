import path from 'path'

import fg from 'fast-glob'

import {
  CONTENT_ROOT,
  MARKDOWN_EXTENSION,
  type ContentCollectionName,
} from '../../src/app/_constants/paths'

export async function getRandomSlug(collection: ContentCollectionName) {
  const files = await fg(`**/*${MARKDOWN_EXTENSION}`, {
    cwd: path.join(process.cwd(), CONTENT_ROOT, collection),
  })

  const randomIndex = Math.floor(Math.random() * files.length)
  const randomFile = files[randomIndex]
  return randomFile.replace(MARKDOWN_EXTENSION, '')
}
