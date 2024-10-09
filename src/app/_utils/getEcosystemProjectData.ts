import { ECOSYSTEM_PROJECTS_DIRECTORY_PATH } from '@/constants/paths'

import { getMarkdownData, getAllMarkdownData } from '@/utils/getMarkdownData'

import { EcosystemProjectFrontMatter } from '@/schemas/ecosystemProject/FrontMatterSchema'

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
