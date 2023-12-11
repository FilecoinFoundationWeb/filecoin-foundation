import CaseStudiesList from '@/components/CaseStudiesList'

import { CaseStudyData } from '@/types/caseStudyTypes'

import { getMarkdownData } from '@/utils/getMarkdownData'

export default function CaseStudies() {
  const caseStudies: CaseStudyData[] = getMarkdownData(
    'src/content/case-studies'
  ) as CaseStudyData[]

  return <CaseStudiesList caseStudies={caseStudies} />
}
