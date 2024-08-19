import fs from 'fs'
import path from 'path'

import { convertMarkdownToBlogPostData } from '@/utils/covertMarkdowntoBlogPostData'
import {
  extractSlugFromFilename,
  getFilenamesFromDirectory,
  getFilePath,
  handleFileNotFound,
  parseMarkdown,
  readFileContents,
} from '@/utils/fileUtils'

import { PATHS } from '@/constants/paths'

const BLOG_DIRECTORY_PATH = PATHS.BLOG.entriesContentPath as string

export function getBlogPostData(slug: string) {
  try {
    const filePath = getFilePath(BLOG_DIRECTORY_PATH, slug)

    if (!fs.existsSync(filePath)) {
      handleFileNotFound(filePath)
    }

    const fileContents = readFileContents(filePath)
    const { data, content } = parseMarkdown(fileContents)
    const blogPostData = convertMarkdownToBlogPostData({ ...data, content })
    return { ...blogPostData, slug }
  } catch (error) {
    console.error('Error retrieving event data:', error)
    throw error
  }
}

export function getBlogPostsData() {
  try {
    const directory = path.join(process.cwd(), BLOG_DIRECTORY_PATH)
    const filenames = getFilenamesFromDirectory(directory)

    return filenames.map((filename) => {
      const slug = extractSlugFromFilename(filename)
      return getBlogPostData(slug)
    })
  } catch (error) {
    console.error('Error retrieving events data:', error)
    throw error
  }
}
