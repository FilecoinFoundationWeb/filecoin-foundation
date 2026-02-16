import fs from 'fs/promises'
import path from 'path'

import fg from 'fast-glob'
import matter from 'gray-matter'

import { MARKDOWN_EXTENSION } from '@filecoin-foundation/utils/constants/fileExtensions'

type GetRandomSlugFromFolderParams = {
  contentFolder: string
  onlyPublished: boolean
}

export async function getRandomSlug(contentFolder: string) {
  return getRandomSlugFromFolder({ contentFolder, onlyPublished: false })
}

export async function getRandomPublishedSlug(contentFolder: string) {
  return getRandomSlugFromFolder({ contentFolder, onlyPublished: true })
}

async function getRandomSlugFromFolder({
  contentFolder,
  onlyPublished,
}: GetRandomSlugFromFolderParams) {
  const files = await fg(`**/*${MARKDOWN_EXTENSION}`, {
    cwd: path.join(process.cwd(), contentFolder),
  })

  let eligibleFiles = files

  if (onlyPublished) {
    const publishedFiles = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(process.cwd(), contentFolder, file)
        const content = await fs.readFile(filePath, 'utf8')
        const { data } = matter(content)

        return data.draft !== true ? file : null
      }),
    )

    eligibleFiles = publishedFiles.filter(
      (file): file is string => file !== null,
    )
  }

  if (eligibleFiles.length === 0) {
    throw new Error(`No ${onlyPublished ? 'published ' : ''}files found`)
  }

  const randomIndex = Math.floor(Math.random() * eligibleFiles.length)
  const randomFile = eligibleFiles[randomIndex]
  return randomFile.replace(MARKDOWN_EXTENSION, '')
}
