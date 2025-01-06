import fs from 'fs'

import convertObjectKeysToCamelCase from 'camelcase-keys'
import { ZodError, type ZodType } from 'zod'

import type { Object } from '@/types/utils'

import { MARKDOWN_EXTENSION, type PathConfig } from '@/constants/paths'

import {
  handleFileNotFound,
  parseMarkdown,
  readFileContents,
} from './fileUtils'
import { logZodError } from './zodUtils'

type GetFrontmatterOptions<T> = {
  path: PathConfig,
  zodParser: ZodType<T>['parse']
}

export function getFrontmatter<T extends Object>({
  path,
  zodParser,
}: GetFrontmatterOptions<T>) {
  const filePath = path.mainContentPath + MARKDOWN_EXTENSION

  try {
    if (!fs.existsSync(filePath)) {
      handleFileNotFound(filePath)
    }

    const fileContents = readFileContents(filePath)
    const { data: frontmatter } = parseMarkdown(fileContents)

    const validatedData = zodParser(frontmatter)
    return convertObjectKeysToCamelCase(validatedData, { deep: true })
  } catch (error) {
    if (error instanceof ZodError) {
      logZodError(error, {
        location: getFrontmatter.name,
        context: { path: filePath },
      })
    }

    throw error
  }
}
