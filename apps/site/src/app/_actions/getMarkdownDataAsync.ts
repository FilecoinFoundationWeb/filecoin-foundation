'use server'

import convertObjectKeysToCamelCase from 'camelcase-keys'
import { ZodError, ZodObject, type ZodRawShape } from 'zod'

import {
  getFilePath,
  handleFileNotFound,
  parseMarkdown,
} from '@/utils/fileUtils'
import { logZodError } from '@/utils/zodUtils'

import { readFileContents, checkPathExists } from '@/actions/fs'

type GetMarkdownDataArgs<T extends ZodRawShape> = {
  slug: string
  directoryPath: string
  zodSchema: ZodObject<T>
}

// Can be renamed to getMarkdownData (no async) once migration to async functions is complete
export async function getMarkdownDataAsync<T extends ZodRawShape>({
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
    const { data, content } = parseMarkdown(fileContents)

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
