import { CaseStudiesList } from '@/components/CaseStudiesList'

import { CaseStudyData } from '@/types/caseStudyTypes'

import { legacyGetMarkdownData } from '@/utils/getMarkdownData'

import { PATHS } from '@/constants/paths'

const caseStudies: CaseStudyData[] = legacyGetMarkdownData(
  PATHS.CASE_STUDIES.entriesContentPath as string
)

export function FeaturedCaseStudies() {
  return <CaseStudiesList caseStudies={caseStudies} />
}
