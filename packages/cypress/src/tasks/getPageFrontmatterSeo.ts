import fs from 'fs/promises'

import matter from 'gray-matter'

import type { PageFrontmatterSeo } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'

import { MARKDOWN_EXTENSION } from '../constants/markdownExtension'

export async function getPageFrontmatterSeo(contentPath: string) {
  const file = await fs.readFile(contentPath + MARKDOWN_EXTENSION, 'utf8')
  const { data } = matter(file)

  return data.seo as PageFrontmatterSeo
}
