import path from 'path'

import { getCollectionConfig } from '@/utils/cmsConfigUtils'
import { readAndValidateMarkdownFile } from '@/utils/markdownUtils'

/**
 * Transforms markdown data for a single item in a collection into structured data.
 *
 * @param directoryPath - The path to the directory containing the markdown file.
 * @param directoryPath - The path to the directory containing the markdown file.
 * @param slug - The slug of the item to transform, used to generate the file name.
 * @param mapData - A function that maps the raw markdown data (and optional content) to a structured data format.
 * @returns The structured data as defined by the mapping function.
 */

export function transformMarkdownToItemData<T>(
  directoryPath: string,
  collectionName: string,
  slug: string,
  mapData: (data: any) => T
): T {
  const filePath = path.join(directoryPath, `${slug}.md`)
  const { fields } = getCollectionConfig(collectionName)
  const { data, content } = readAndValidateMarkdownFile(filePath, fields)

  return mapData({ data, content })
}
