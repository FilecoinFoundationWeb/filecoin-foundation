import { CaseStudyData } from '@/types/caseStudyTypes'

import { mapMarkdownToCaseStudyData } from '@/utils/mapMarkdownToCaseStudyData'
import { transformMarkdownToCollectionData } from '@/utils/transformMarkdownToCollectionData'
import { transformMarkdownToItemData } from '@/utils/transformMarkdownToItemData'

import { PATHS } from '@/constants/paths'

const CASE_STUDIES_COLLECTION_NAME = 'case_studies'
const CASE_STUDIES_DIRECTORY_PATH = PATHS.CASE_STUDIES
  .entriesContentPath as string

export function getCaseStudyData(slug: string): CaseStudyData {
  return transformMarkdownToItemData<CaseStudyData>(
    CASE_STUDIES_DIRECTORY_PATH,
    CASE_STUDIES_COLLECTION_NAME,
    slug,
    mapMarkdownToCaseStudyData
  )
}

export function getCaseStudiesData(): CaseStudyData[] {
  return transformMarkdownToCollectionData<CaseStudyData>(
    CASE_STUDIES_DIRECTORY_PATH,
    CASE_STUDIES_COLLECTION_NAME,
    mapMarkdownToCaseStudyData
  )
}
