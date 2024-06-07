import { EcosystemProjectData } from '@/types/ecosystemProjectTypes'

import { mapMarkdownToEcosystemProjectData } from '@/utils/mapMarkdownToEcosystemProjectData'
import { transformMarkdownToCollectionData } from '@/utils/transformMarkdownToCollectionData'
import { transformMarkdownToItemData } from '@/utils/transformMarkdownToItemData'

import { PATHS } from '@/constants/paths'

const ECOSYSTEM_PROJECTS_COLLECTION_NAME = 'ecosystem_projects'
const ECOSYSTEM_PROJECTS_DIRECTORY_PATH = PATHS.ECOSYSTEM_EXPLORER
  .entriesContentPath as string

export function getEcosystemProjectData(slug: string): EcosystemProjectData {
  return transformMarkdownToItemData<EcosystemProjectData>(
    ECOSYSTEM_PROJECTS_DIRECTORY_PATH,
    ECOSYSTEM_PROJECTS_COLLECTION_NAME,
    slug,
    mapMarkdownToEcosystemProjectData,
  )
}

export function getEcosystemProjectsData(): EcosystemProjectData[] {
  return transformMarkdownToCollectionData<EcosystemProjectData>(
    ECOSYSTEM_PROJECTS_DIRECTORY_PATH,
    ECOSYSTEM_PROJECTS_COLLECTION_NAME,
    mapMarkdownToEcosystemProjectData,
  )
}
