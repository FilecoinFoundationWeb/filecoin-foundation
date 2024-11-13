import fs from 'fs'
import path from 'path'

import convertObjectKeysToCamelCase from 'camelcase-keys'
import { ZodError, type ZodType } from 'zod'

import {
  extractSlugFromFilename,
  getFilenamesFromDirectory,
  getFilePath,
  handleFileNotFound,
  parseMarkdown,
  readFileContents,
} from '@/utils/fileUtils'
import { logZodError } from '@/utils/zodUtils'

type GetData<T> = {
  slug: string
  directoryPath: string
  zodParser: ZodType<T>['parse']
}

type GetAllData<T> = {
  directoryPath: string
  zodParser: ZodType<T>['parse']
}

export function getMarkdownData<T>({
  slug,
  directoryPath,
  zodParser,
}: GetData<T>) {
  try {
    const filePath = getFilePath(directoryPath, slug)

    if (!fs.existsSync(filePath)) {
      handleFileNotFound(filePath)
    }

    const fileContents = readFileContents(filePath)
    const { data, content } = parseMarkdown(fileContents)

    const dataToValidate = content ? { ...data, content } : data

    const parsedData = zodParser(dataToValidate)
    const parsedDataWithSlug = { ...parsedData, slug }

    return convertObjectKeysToCamelCase(parsedDataWithSlug, { deep: true })
  } catch (error) {
    if (error instanceof ZodError) {
      logZodError(error, {
        location: 'getMarkdownData',
        context: { path: directoryPath, slug },
      })
    }

    throw error
  }
}

export function getAllMarkdownData<T>({
  directoryPath,
  zodParser,
}: GetAllData<T>) {
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
