import { extractSlugFromFilename } from '@filecoin-foundation/utils/fileUtils'
import { findOrThrow } from '@filecoin-foundation/utils/findOrThrow'

type EntryWithMeta = {
  _meta: { slug: string }
}

type GetFeaturedEntryArgs<Entry extends EntryWithMeta> = {
  entries: Array<Entry>
  featuredEntryPath: string
}

export function getFeaturedEntry<Entry extends EntryWithMeta>({
  entries,
  featuredEntryPath,
}: GetFeaturedEntryArgs<Entry>) {
  const featuredEntrySlug = extractSlugFromFilename(featuredEntryPath)
  return findOrThrow(entries, (entry) => entry._meta.slug === featuredEntrySlug)
}
