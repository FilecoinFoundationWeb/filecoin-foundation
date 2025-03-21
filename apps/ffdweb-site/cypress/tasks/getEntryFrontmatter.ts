import fs from 'fs/promises'
import path from 'path'

import matter from 'gray-matter'

import {
  CONTENT_ROOT,
  MARKDOWN_EXTENSION,
  type ContentCollectionName,
} from '../../src/app/_constants/paths'

type GetEntryOptions = {
  collection: ContentCollectionName
  slug: string
}

export type GenericEntryFrontmatter = {
  title: string
  seo: {
    title?: string
    description: string
  }
}

export async function getEntryFrontmatter(options: GetEntryOptions) {
  const { collection, slug } = options
  const fileName = `${slug}${MARKDOWN_EXTENSION}`

  const filePath = path.join(process.cwd(), CONTENT_ROOT, collection, fileName)

  const file = await fs.readFile(filePath, 'utf8')
  const { data } = matter(file)

  return data as GenericEntryFrontmatter
}
