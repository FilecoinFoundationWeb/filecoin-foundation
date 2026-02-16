import path from 'path'

import fg from 'fast-glob'

import { MARKDOWN_EXTENSION } from '@filecoin-foundation/utils/constants/fileExtensions'

export async function getRandomSlug(contentFolder: string) {
  const files = await fg(`**/*${MARKDOWN_EXTENSION}`, {
    cwd: path.join(process.cwd(), contentFolder),
  })

  const randomIndex = Math.floor(Math.random() * files.length)
  const randomFile = files[randomIndex]
  return randomFile.replace(MARKDOWN_EXTENSION, '')
}
