import { ECOSYSTEM_PROJECTS_DIRECTORY_PATH } from '@/constants/paths'

import { getAllMarkdownData, getMarkdownData } from '@/utils/getMarkdownData'

import { EcosystemProjectFrontMatter } from '@/ecosystem-explorer/schemas/FrontMatterSchema'

export function getEcosystemProjectData(slug: string) {
  return getMarkdownData({
    slug,
    directoryPath: ECOSYSTEM_PROJECTS_DIRECTORY_PATH,
    zodParser: EcosystemProjectFrontMatter.parse,
  })
}

export function getEcosystemProjectsData() {
  return getAllMarkdownData({
    directoryPath: ECOSYSTEM_PROJECTS_DIRECTORY_PATH,
    zodParser: EcosystemProjectFrontMatter.parse,
  })
}
