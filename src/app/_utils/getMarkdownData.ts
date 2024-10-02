import fs from 'fs'
import path from 'path'

import camelCaseKeys from 'camelcase-keys'
import { ZodError } from 'zod'

import {
  extractSlugFromFilename,
  getFilenamesFromDirectory,
  getFilePath,
  handleFileNotFound,
  parseMarkdown,
  readFileContents,
} from '@/utils/fileUtils'
import { logZodError } from '@/utils/zodUtils'

type GetEntryParams<T> = {
  slug: string
  directoryPath: string
  zodParser: (data: object) => T
}

export function getMarkdownData<T>({
  slug,
  directoryPath,
  zodParser,
}: GetEntryParams<T>) {
  try {
    const filePath = getFilePath(directoryPath, slug)

    if (!fs.existsSync(filePath)) {
      handleFileNotFound(filePath)
    }

    const fileContents = readFileContents(filePath)
    const { data, content } = parseMarkdown(fileContents)
    const parsedData = zodParser({ ...data, content })

    return camelCaseKeys({ ...parsedData, slug })
  } catch (error) {
    if (error instanceof ZodError) {
      logZodError(error, {
        location: 'getData',
        context: { path: directoryPath, slug },
      })
    }

    throw error
  }
}

type GetAllEntriesArgs<T> = Omit<GetEntryParams<T>, 'slug'>

export function getAllMarkdownData<T>({
  directoryPath,
  zodParser,
}: GetAllEntriesArgs<T>) {
  try {
    const directory = path.join(process.cwd(), directoryPath)
    const filenames = getFilenamesFromDirectory(directory)

    return filenames.map((filename) => {
      const slug = extractSlugFromFilename(filename)
      return getMarkdownData({ slug, directoryPath, zodParser })
    })
  } catch (error) {
    console.error('Error retrieving all data:', error)
    throw error
  }
}
