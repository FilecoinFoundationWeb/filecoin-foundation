import { ECOSYSTEM_PROJECTS_DIRECTORY_PATH } from '@/constants/paths'

import { convertMarkdownToEcosystemProjectData } from '@/utils/convertMarkdownToEcosystemProjectData'
import { getData, getAllData } from '@/utils/getData'

export function getEcosystemProjectData(slug: string) {
  return getData(
    ECOSYSTEM_PROJECTS_DIRECTORY_PATH,
    convertMarkdownToEcosystemProjectData,
    slug,
  )
}

export function getEcosystemProjectsData() {
  return getAllData(
    ECOSYSTEM_PROJECTS_DIRECTORY_PATH,
    convertMarkdownToEcosystemProjectData,
  )
}
