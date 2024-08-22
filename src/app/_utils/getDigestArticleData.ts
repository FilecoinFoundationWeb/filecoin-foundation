import fs from 'fs'
import path from 'path'

import { convertMarkdownToDigestData } from '@/utils/convertMarkdownToDigestData'
import {
  extractSlugFromFilename,
  getFilenamesFromDirectory,
  getFilePath,
  handleFileNotFound,
  parseMarkdown,
  readFileContents,
} from '@/utils/fileUtils'

import { PATHS } from '@/constants/paths'

const DIGEST_DIRECTORY_PATH = PATHS.DIGEST.entriesContentPath as string

export function getDigestArticleData(slug: string) {
  try {
    const filePath = getFilePath(DIGEST_DIRECTORY_PATH, slug)

    if (!fs.existsSync(filePath)) {
      handleFileNotFound(filePath)
    }

    const fileContents = readFileContents(filePath)
    const { data, content } = parseMarkdown(fileContents)
    const digestData = convertMarkdownToDigestData({ ...data, content })
    return { ...digestData, slug }
  } catch (error) {
    console.error('Error retrieving event data:', error)
    throw error
  }
}

export function getDigestArticlesData() {
  try {
    const directory = path.join(process.cwd(), DIGEST_DIRECTORY_PATH)
    const filenames = getFilenamesFromDirectory(directory)

    return filenames.map((filename) => {
      const slug = extractSlugFromFilename(filename)
      return getDigestArticleData(slug)
    })
  } catch (error) {
    console.error('Error retrieving events data:', error)
    throw error
  }
}
