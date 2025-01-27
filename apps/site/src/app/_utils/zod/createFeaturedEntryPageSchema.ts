import { z } from 'zod'

import { extractSlugFromFilename } from '@/utils/fileUtils'

import { BaseFrontmatterSchema } from '@/schemas/FrontmatterSchema'

type DataGetter<T> = (slug: string) => T

export function createFeaturedEntryPageSchema<T>(getData: DataGetter<T>) {
  return BaseFrontmatterSchema.extend({
    featured_entry: z.string().transform((path) => {
      const slug = extractSlugFromFilename(path)
      return getData(slug)
    }),
  })
}

type DataGetterAsync<T> = (slug: string) => Promise<T>

// Temporary duplicate of createFeaturedEntryPageSchema until migration to async functions is complete
export function createFeaturedEntryPageSchemaAsync<T>(
  getData: DataGetterAsync<T>,
) {
  return BaseFrontmatterSchema.extend({
    featured_entry: z.string().transform(async (path) => {
      const slug = extractSlugFromFilename(path)
      return await getData(slug)
    }),
  })
}
