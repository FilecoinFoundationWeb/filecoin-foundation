import type { CollectionPageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import type { StructuredDataParams } from '@filecoin-foundation/utils/types/structuredDataParams'

import { PATHS } from '@/constants/paths'

import type { CaseStudy } from '../types/caseStudyType'

import { generateCaseStudiesListStructuredData } from './generateCaseStudiesListStructuredData'

export function generateStructuredData(
  seo: StructuredDataParams,
  sortedCaseStudies: Array<CaseStudy>,
): CollectionPageGraph {
  return generateCaseStudiesListStructuredData({
    name: seo.title,
    description: seo.description,
    items: sortedCaseStudies.map(({ slug, title, pageDescription, image }) => ({
      path: `${PATHS.CASE_STUDIES.path}/${slug}`,
      headline: title,
      description: pageDescription,
      image: image?.src, // #todo: Make image required
    })),
  })
}
