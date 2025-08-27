import fs from 'fs/promises'

import matter from 'gray-matter'

import type { GenericEntryFrontmatter } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'

import { MARKDOWN_EXTENSION } from '../constants/markdownExtension'

export async function getEntryFrontmatter(path: string) {
  const file = await fs.readFile(path + MARKDOWN_EXTENSION, 'utf8')
  const { data } = matter(file)

  return data as GenericEntryFrontmatter
}
