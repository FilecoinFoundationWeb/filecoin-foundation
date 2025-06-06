import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'

import { PATHS } from '@/constants/paths'

import { METADATA_TITLE_SUFFIX } from '../constants/metadata'
import { EcosystemProjectFrontmatterSchema } from '../schemas/EcosystemProjectFrontmatterSchema'

export const ECOSYSTEM_EXPLORER_DIRECTORY_PATH =
  PATHS.ECOSYSTEM_EXPLORER.entriesPath

export async function getEcosystemProjectData(slug: string) {
  const data = await getEcosystemProjectMarkdownData(slug)
  return transformEcosystemProjectData(data)
}

export async function getEcosystemProjectsData() {
  const allProjects = await getAllMarkdownData({
    directoryPath: ECOSYSTEM_EXPLORER_DIRECTORY_PATH,
    zodSchema: EcosystemProjectFrontmatterSchema,
  })

  return allProjects.map(transformEcosystemProjectData)
}

function getEcosystemProjectMarkdownData(slug: string) {
  return getMarkdownData({
    slug,
    directoryPath: ECOSYSTEM_EXPLORER_DIRECTORY_PATH,
    zodSchema: EcosystemProjectFrontmatterSchema,
  })
}

function transformEcosystemProjectData(
  project: Awaited<ReturnType<typeof getEcosystemProjectMarkdownData>>,
) {
  return {
    ...project,
    seo: {
      ...project.seo,
      title: project.seo.title || project.title + METADATA_TITLE_SUFFIX,
    },
  }
}
