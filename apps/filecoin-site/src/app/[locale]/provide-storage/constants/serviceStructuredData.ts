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
  termsOfService: `${BASE_URL}/terms-of-use`,
  offers: {
    '@type': 'Offer',
    url: `${BASE_URL}/provide-storage`,
  },
}
