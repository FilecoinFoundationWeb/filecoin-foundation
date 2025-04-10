'use server'

import {
  getFilePath,
  handleFileNotFound,
  readFileContents,
  checkPathExists,
} from './fileUtils'
import { logZodError } from './zodUtils'
import convertObjectKeysToCamelCase from 'camelcase-keys'
import matter from 'gray-matter'
import { ZodError, ZodObject, type ZodRawShape } from 'zod'

type GetMarkdownDataArgs<T extends ZodRawShape> = {
  slug: string
  directoryPath: string
  zodSchema: ZodObject<T>
}

export async function getMarkdownData<T extends ZodRawShape>({
  slug,
  directoryPath,
  zodSchema,
}: GetMarkdownDataArgs<T>) {
  try {
    const filePath = getFilePath(directoryPath, slug)
    const fileExists = await checkPathExists(filePath)

    if (!fileExists) {
      handleFileNotFound(filePath)
    }

    const fileContents = await readFileContents(filePath)
    const { data, content } = matter(fileContents)

    const dataToValidate = content ? { ...data, content } : data

    const parsedData = await zodSchema.parseAsync(dataToValidate)
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
