import { ecosystemProjectCollection } from '@/qino/collections/ecosystemProjects'

import { assertEntryExists } from '@/utils/assertEntryExists'
import { camelcaseEntry } from '@/utils/camelcaseEntry'

import { METADATA_TITLE_SUFFIX } from '../constants/metadata'

type EcosystemProjectEntry = Awaited<
  ReturnType<typeof ecosystemProjectCollection.getEntry>
>

export async function getEcosystemProjectData(slug: string) {
  await assertEntryExists(ecosystemProjectCollection, slug)
  const project = await ecosystemProjectCollection.getEntry(slug)
  return transformEcosystemProjectData(project)
}

export async function getEcosystemProjectsData() {
  const projects = await ecosystemProjectCollection.getEntries()
  return projects.map(transformEcosystemProjectData)
}

function transformEcosystemProjectData(entry: EcosystemProjectEntry) {
  const project = camelcaseEntry(entry)

  return {
    ...project,
    seo: {
      ...project.seo,
      title: project.seo.title || project.title + METADATA_TITLE_SUFFIX,
    },
  }
}
