import fs from 'fs'

import convertObjectKeysToCamelCase from 'camelcase-keys'
import { ZodError, type ZodType } from 'zod'

import { MARKDOWN_EXTENSION, type PathConfig } from '@/constants/paths'

import type { Object } from '@/_types/utils'

import {
  handleFileNotFound,
  parseMarkdown,
  readFileContents,
} from './fileUtils'
import { logZodError } from './zodUtils'

type GetPageData<T> = {
  zodParser: ZodType<T>['parse']
  path: PathConfig
}

export function getPageMarkdownData<T extends Object>({
  path,
  zodParser,
}: GetPageData<T>) {
  const filePath = path.mainContentPath + MARKDOWN_EXTENSION

  try {
    if (!fs.existsSync(filePath)) {
      handleFileNotFound(filePath)
    }

    const fileContents = readFileContents(filePath)
    const { data, content } = parseMarkdown(fileContents)

    const dataToValidate = content ? { ...data, content } : data

    const parsedData = zodParser(dataToValidate)

    return convertObjectKeysToCamelCase(parsedData, { deep: true })
  } catch (error) {
    if (error instanceof ZodError) {
      logZodError(error, {
        location: 'getPageMarkdownData',
        context: { path: filePath },
      })
    }

    throw error
  }
}
