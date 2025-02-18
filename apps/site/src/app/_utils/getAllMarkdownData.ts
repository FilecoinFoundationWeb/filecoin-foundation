'use server'

import path from 'path'

import glob from 'fast-glob'
import { ZodObject, type ZodRawShape } from 'zod'

import { extractSlugFromFilename } from '@/utils/fileUtils'
import { getMarkdownData } from '@/utils/getMarkdownData'

export type GetAllMarkdownDataArgs<T extends ZodRawShape> = {
  directoryPath: string
  zodSchema: ZodObject<T>
}

export async function getAllMarkdownData<T extends ZodRawShape>({
  directoryPath,
  zodSchema,
}: GetAllMarkdownDataArgs<T>) {
  try {
    const directory = path.join(process.cwd(), directoryPath)

    const filenames = await glob('**/*.md', {
      cwd: directory,
    })

    return Promise.all(
      filenames.map((filename) => {
        const slug = extractSlugFromFilename(filename)
        return getMarkdownData({ slug, directoryPath, zodSchema })
      }),
    )
  } catch (error) {
    console.error('Error retrieving all data:', error)
    throw error
  }
}
