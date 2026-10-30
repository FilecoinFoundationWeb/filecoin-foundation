import { getEntryOrNotFound } from '@filecoin-foundation/utils/getEntryOrNotFound'

import { projectCollection } from '@/qino/collections/projects'

type Slugs = Array<string> | ReadonlyArray<string>

export async function getFeaturedProjects(slugs: Slugs) {
  const projectPromises = slugs.map((slug) =>
    getEntryOrNotFound(projectCollection, slug),
  )
  return Promise.all(projectPromises)
}
