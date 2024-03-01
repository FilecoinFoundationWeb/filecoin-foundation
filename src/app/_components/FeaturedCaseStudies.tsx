import { CaseStudiesList } from '@/components/CaseStudiesList'

import { CaseStudyData } from '@/types/caseStudyTypes'

import { getCaseStudiesData } from '@/utils/getCaseStudiesData'

import { PATHS } from '@/constants/paths'

const caseStudies: CaseStudyData[] = getCaseStudiesData(
  PATHS.CASE_STUDIES.entriesContentPath as string
)

const featuredCaseStudies = caseStudies.filter(
  (caseStudy) => caseStudy.featured
)

export function FeaturedCaseStudies() {
  return <CaseStudiesList caseStudies={featuredCaseStudies} />
}
