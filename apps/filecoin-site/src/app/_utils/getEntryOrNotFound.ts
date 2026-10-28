import { notFound } from 'next/navigation'

type CollectionWithSlugs<Entry> = {
  getAllSlugs: () => Promise<Array<string>>
  getEntry: (slug: string) => Promise<Entry>
}

export async function getEntryOrNotFound<Entry>(
  collection: CollectionWithSlugs<Entry>,
  slug: string,
) {
  const slugs = await collection.getAllSlugs()

  if (!slugs.includes(slug)) {
    console.error(`Entry not found: ${slug}`)
    notFound()
  }

  return collection.getEntry(slug)
}
