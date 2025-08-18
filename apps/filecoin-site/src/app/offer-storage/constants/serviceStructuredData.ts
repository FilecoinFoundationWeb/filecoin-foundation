import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'
import { STRUCTURED_DATA_IDS } from '@/constants/structuredDataConstants'

import type { ServiceDetails } from '@/utils/generateServiceStructuredData'

export const SERVICE_STRUCTURED_DATA: ServiceDetails = {
  serviceType: 'Storage provider onboarding',
  provider: { '@id': STRUCTURED_DATA_IDS.ORGANIZATION },
  areaServed: 'Global',
  audience: {
    '@type': 'Audience',
    audienceType: 'Data centers, infrastructure operators',
  },
  termsOfService: `${BASE_URL}/${PATHS.TERMS_OF_USE.path}`,
  offers: {
    '@type': 'Offer',
    url: `${BASE_URL}${PATHS.OFFER_STORAGE.path}`,
  },
}
