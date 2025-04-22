import fs from 'fs/promises'

import matter from 'gray-matter'

import { MARKDOWN_EXTENSION } from '../../src/app/_constants/paths'

export type PageFrontmatterSeo = {
  title: string
  description: string
}

export async function getPageFrontmatterSeo(contentPath: string) {
  const file = await fs.readFile(contentPath + MARKDOWN_EXTENSION, 'utf8')
  const { data } = matter(file)

  return data.seo as PageFrontmatterSeo
}
