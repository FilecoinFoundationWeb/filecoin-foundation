import { PATHS } from '@/constants/paths'

import type { CaseStudy } from '../../types/caseStudyType'
import { generateCaseStudyPageStructuredData } from '../../utils/generateCaseStudyPageStructuredData'

export function generateStructuredData(data: CaseStudy) {
  const { seo, image, publishedOn, updatedOn } = data

  return generateCaseStudyPageStructuredData({
    path: `${PATHS.CASE_STUDIES.path}/${data.slug}`,
    headline: seo.title,
    description: seo.description,
    image: image?.src || '',
    datePublished: publishedOn,
    dateModified: updatedOn,
  })
}
