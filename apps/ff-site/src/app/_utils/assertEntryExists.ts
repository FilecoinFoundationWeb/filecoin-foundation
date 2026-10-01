import { notFound } from 'next/navigation'

type CollectionWithSlugs = {
  getAllSlugs: () => Promise<Array<string>>
}

export async function assertEntryExists(
  collection: CollectionWithSlugs,
  slug: string,
) {
  const slugs = await collection.getAllSlugs()

  if (!slugs.includes(slug)) {
    console.error(`Entry not found: ${slug}`)
    notFound()
  }
}
