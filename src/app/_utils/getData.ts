import fs from 'fs'
import path from 'path'

import {
  extractSlugFromFilename,
  getFilenamesFromDirectory,
  getFilePath,
  handleFileNotFound,
  parseMarkdown,
  readFileContents,
} from '@/utils/fileUtils'

export function getData<T>(
  directoryPath: string,
  convertMarkdownToData: (data: Record<string, any>, slug: string) => T,
  slug: string,
) {
  try {
    const filePath = getFilePath(directoryPath, slug)

    if (!fs.existsSync(filePath)) {
      handleFileNotFound(filePath)
    }

    const fileContents = readFileContents(filePath)
    const { data, content } = parseMarkdown(fileContents)
    const resultData = convertMarkdownToData({ ...data, content }, slug)

    return { ...resultData, slug }
  } catch (error) {
    console.error(`Error retrieving data for slug: ${slug}`, error)
    throw error
  }
}

export function getAllData<T>(
  directoryPath: string,
  convertMarkdownToData: (data: Record<string, any>, slug: string) => T,
) {
  try {
    const directory = path.join(process.cwd(), directoryPath)
    const filenames = getFilenamesFromDirectory(directory)

    return filenames.map((filename) => {
      const slug = extractSlugFromFilename(filename)
      return getData(directoryPath, convertMarkdownToData, slug)
    })
  } catch (error) {
    console.error('Error retrieving all data:', error)
    throw error
  }
}
