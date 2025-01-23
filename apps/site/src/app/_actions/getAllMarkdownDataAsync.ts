'use server'

import path from 'path'

import { ZodObject, type ZodRawShape } from 'zod'

import { extractSlugFromFilename } from '@/utils/fileUtils'

import { getFilenamesFromDirectory } from '@/actions/fs'
import { getMarkdownDataAsync } from '@/actions/getMarkdownDataAsync'

export type GetAllMarkdownDataArgs<T extends ZodRawShape> = {
  directoryPath: string
  zodSchema: ZodObject<T>
}

// Can be renamed to getAllMarkdownData (no async) once migration to async functions is complete
export async function getAllMarkdownDataAsync<T extends ZodRawShape>({
  directoryPath,
  zodSchema,
}: GetAllMarkdownDataArgs<T>) {
  try {
    const directory = path.join(process.cwd(), directoryPath)
    const filenames = await getFilenamesFromDirectory(directory)

    return Promise.all(
      filenames.map((filename) => {
        const slug = extractSlugFromFilename(filename)
        return getMarkdownDataAsync({ slug, directoryPath, zodSchema })
      }),
    )
  } catch (error) {
    console.error('Error retrieving all data:', error)
    throw error
  }
}
