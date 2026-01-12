import { PATHS } from '@/constants/paths'

import type { CaseStudy } from '../../types/caseStudyType'
import { generateCaseStudyPageStructuredData } from '../../utils/generateCaseStudyPageStructuredData'

export function generateStructuredData(data: CaseStudy) {
  const { title, pageDescription, image } = data

  return generateCaseStudyPageStructuredData({
    path: `${PATHS.CASE_STUDIES.path}/${data.slug}`,
    headline: title,
    description: pageDescription,
    image: image ? image.src : undefined, // #todo: Make image required
  })
}
