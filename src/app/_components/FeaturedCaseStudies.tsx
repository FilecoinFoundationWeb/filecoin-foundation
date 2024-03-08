import { CaseStudiesList } from '@/components/CaseStudiesList'

import { getCaseStudiesData } from '@/utils/getCaseStudyData'

const caseStudies = getCaseStudiesData()

const featuredCaseStudies = caseStudies.filter(
  (caseStudy) => caseStudy.featured
)

export function FeaturedCaseStudies() {
  if (featuredCaseStudies.length === 0) {
    return <p>No featured projects available.</p>
  }

  return <CaseStudiesList caseStudies={featuredCaseStudies} />
}
