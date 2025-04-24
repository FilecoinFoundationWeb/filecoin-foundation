import fs from 'fs/promises'

import matter from 'gray-matter'

import { MARKDOWN_EXTENSION } from '../../src/app/_constants/paths'

export type GenericEntryFrontmatter = {
  title: string
  seo: {
    title?: string
    description: string
  }
}

export async function getEntryFrontmatter(path: string) {
  const file = await fs.readFile(path + MARKDOWN_EXTENSION, 'utf8')
  const { data } = matter(file)

  return data as GenericEntryFrontmatter
}
