import { extractSlugFromFilename } from './fileUtils'
import { findOrThrow } from './findOrThrow'

type WithSlug = {
  slug: string
}

type GetFeaturedEntryArgs<Entry extends WithSlug> = {
  entries: Array<Entry>
  featuredEntryPath: string
}

export function getFeaturedEntry<Entry extends WithSlug>({
  entries,
  featuredEntryPath,
}: GetFeaturedEntryArgs<Entry>) {
  const featuredEntrySlug = extractSlugFromFilename(featuredEntryPath)

  return findOrThrow(entries, (entry) => entry.slug === featuredEntrySlug)
}
