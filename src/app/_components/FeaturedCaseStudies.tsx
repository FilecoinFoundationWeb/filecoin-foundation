import CaseStudiesList from '@/components/CaseStudiesList'

import { CaseStudyData } from '@/types/caseStudyTypes'

import { getMarkdownData } from '@/utils/getMarkdownData'

import { CONTENT_PATHS } from '@/constants/paths'

export default function CaseStudies() {
  const caseStudies: CaseStudyData[] = getMarkdownData(
    CONTENT_PATHS.CASE_STUDIES.POSTS as string
  )

  return <CaseStudiesList caseStudies={caseStudies} />
}
