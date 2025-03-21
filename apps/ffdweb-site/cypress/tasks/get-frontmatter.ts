import fs from 'fs/promises'
import path from 'path'

import matter from 'gray-matter'

import {
  CONTENT_ROOT,
  MARKDOWN_EXTENSION,
  type DynamicEntryNamespace,
} from '../../src/app/_constants/paths'

type GetEntryOptions = {
  folder: DynamicEntryNamespace
  slug: string
}

export async function getEntryFrontmatter(options: GetEntryOptions) {
  const { folder, slug } = options
  const fileName = `${slug}${MARKDOWN_EXTENSION}`

  const filePath = path.join(process.cwd(), CONTENT_ROOT, folder, fileName)

  const file = await fs.readFile(filePath, 'utf8')
  return matter(file).data
}
