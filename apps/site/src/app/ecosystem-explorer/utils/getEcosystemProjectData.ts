import { PATHS } from '@/constants/paths'

import { getAllMarkdownData, getMarkdownData } from '@/utils/getMarkdownData'

import { METADATA_TITLE_SUFFIX } from '../constants/metadata'
import { EcosystemProjectFrontmatterSchema } from '../schemas/EcosystemProjectFrontmatterSchema'

export const ECOSYSTEM_EXPLORER_DIRECTORY_PATH = PATHS.ECOSYSTEM_EXPLORER
  .entriesContentPath as string

export function getEcosystemProjectData(slug: string) {
  const data = getEcosystemProjectMarkdownData(slug)
  return transformEcosystemProjectData(data)
}

export function getEcosystemProjectsData() {
  const allProjects = getAllMarkdownData({
    directoryPath: ECOSYSTEM_EXPLORER_DIRECTORY_PATH,
    zodParser: EcosystemProjectFrontmatterSchema.parse,
  })

  return allProjects.map(transformEcosystemProjectData)
}

function getEcosystemProjectMarkdownData(slug: string) {
  return getMarkdownData({
    slug,
    directoryPath: ECOSYSTEM_EXPLORER_DIRECTORY_PATH,
    zodParser: EcosystemProjectFrontmatterSchema.parse,
  })
}

function transformEcosystemProjectData(
  project: ReturnType<typeof getEcosystemProjectMarkdownData>,
) {
  return {
    ...project,
    seo: {
      ...project.seo,
      title: project.seo.title || `${project.title} ${METADATA_TITLE_SUFFIX}`,
    },
  }
}
