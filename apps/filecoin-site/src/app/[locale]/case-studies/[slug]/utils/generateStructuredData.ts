import { PATHS } from '@/constants/paths'

import type { CaseStudy } from '../../types/caseStudyType'

import { generateCaseStudyArticleStructuredData } from '../../utils/generateCaseStudyArticleStructuredData'

export function generateStructuredData(data: CaseStudy) {
  const { title, pageDescription, image } = data
  return generateCaseStudyArticleStructuredData({
    path: `${PATHS.CASE_STUDIES.path}/${data.slug}`,
    headline: title,
    description: pageDescription,
    image: image ? image.src : undefined,
  })
}
