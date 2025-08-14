import type { ServicePageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import type { StructuredDataParams } from '@filecoin-foundation/utils/types/structuredDataParams'

import { PATHS } from '@/constants/paths'

import { generateServiceStructuredData } from '@/utils/generateServiceStructuredData'

import { SERVICE_STRUCTURED_DATA } from '../constants/serviceStructuredData'

export function generateStructuredData(
  seo: StructuredDataParams,
): ServicePageGraph {
  return generateServiceStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.OFFER_STORAGE.path,
    service: SERVICE_STRUCTURED_DATA,
  })
}
