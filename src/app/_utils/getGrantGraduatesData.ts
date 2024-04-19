import { GrantGraduatesData } from '@/types/grantGraduatesTypes'

import { transformMarkdownToItemData } from '@/utils/transformMarkdownToItemData'

import { PATHS } from '@/constants/paths'

import { mapMarkdownToGrantGraduatesData } from './mapMarkdownToGrantGraduates'
import { transformMarkdownToCollectionData } from './transformMarkdownToCollectionData'

const GRANT_GRADUATES_COLLECTION_NAME = 'grants'
const GRANT_GRADUATES_DIRECTORY_PATH = PATHS.GRANTS.entriesContentPath as string

export function getGrantGraduateData(slug: string): GrantGraduatesData {
  return transformMarkdownToItemData<GrantGraduatesData>(
    GRANT_GRADUATES_DIRECTORY_PATH,
    GRANT_GRADUATES_COLLECTION_NAME,
    slug,
    mapMarkdownToGrantGraduatesData,
  )
}

export function getAllGrantGraduateData(): GrantGraduatesData[] {
  return transformMarkdownToCollectionData<GrantGraduatesData>(
    GRANT_GRADUATES_DIRECTORY_PATH,
    GRANT_GRADUATES_COLLECTION_NAME,
    mapMarkdownToGrantGraduatesData,
  )
}
