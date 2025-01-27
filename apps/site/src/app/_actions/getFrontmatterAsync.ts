'use server'

import convertObjectKeysToCamelCase from 'camelcase-keys'
import matter from 'gray-matter'
import { ZodError, ZodObject, type ZodRawShape } from 'zod'

import { MARKDOWN_EXTENSION, type PathConfig } from '@/constants/paths'

import { handleFileNotFound } from '@/utils/fileUtils'
import { logZodError } from '@/utils/zodUtils'

import { checkPathExists, readFileContents } from '@/actions/fs'

type GetFrontmatterOptions<T extends ZodRawShape> = {
  zodSchema: ZodObject<T>
  path: PathConfig
}

// Can be renamed to getFrontmatter (no async) once migration to async functions is complete
export async function getFrontmatterAsync<T extends ZodRawShape>({
  path,
  zodSchema,
}: GetFrontmatterOptions<T>) {
  const filePath = path.mainContentPath + MARKDOWN_EXTENSION
  const fileExists = await checkPathExists(filePath)

  try {
    if (!fileExists) {
      handleFileNotFound(filePath)
    }

    const fileContents = await readFileContents(filePath)
    const { data: frontmatter } = matter(fileContents)

    const validatedData = await zodSchema.parseAsync(frontmatter)
    return convertObjectKeysToCamelCase(validatedData, { deep: true })
  } catch (error) {
    if (error instanceof ZodError) {
      logZodError(error, {
        location: getFrontmatterAsync.name,
        context: { path: filePath },
      })
    }

    throw error
  }
}
