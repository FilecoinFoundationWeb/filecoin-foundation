import fs from 'fs/promises'

import matter from 'gray-matter'

import type { GenericEntryFrontmatter } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'

import { MARKDOWN_EXTENSION } from '@filecoin-foundation/utils/constants/fileExtensions'

export async function getEntryFrontmatter<T = GenericEntryFrontmatter>(
  path: string,
): Promise<T> {
  const file = await fs.readFile(path + MARKDOWN_EXTENSION, 'utf8')
  const { data } = matter(file)

  return data as T
}
