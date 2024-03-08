import { getCollectionConfig } from '@/utils/cmsConfigUtils'
import { readAndValidateMarkdownFiles } from '@/utils/markdownUtils'

/**
 * Transforms markdown data from a collection directory into structured data for each item.
 *
 * @param directoryPath - The path to the directory containing the markdown files of the collection.
 * @param collectionName - The name of the collection to use for fetching configuration fields for validation.
 * @param mapData - A function that maps the raw markdown data to a structured data format.
 * @returns An array of structured data as defined by the mapping function for each markdown file in the collection.
 */

export function transformMarkdownToCollectionData<T>(
  directoryPath: string,
  collectionName: string,
  mapData: (args: { data: any; content?: string }) => T
): T[] {
  const { fields } = getCollectionConfig(collectionName)
  const markdownFiles = readAndValidateMarkdownFiles(directoryPath, fields)

  return markdownFiles.map(({ data, content }) => {
    return mapData({ data, content })
  })
}
