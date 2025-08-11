import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'
import { WEBSITE_SCHEMA } from '@/constants/structuredDataConstants'

export const SERVICE_STRUCTURED_DATA = {
  serviceType: 'Storage provider onboarding',
  providerId: WEBSITE_SCHEMA.publisher['@id'],
  areaServed: 'Global',
  audience: {
    '@type': 'Audience',
    audienceType: 'Data centers, infrastructure operators',
  },
  termsOfService: `${BASE_URL}/terms`,
  offers: {
    '@type': 'Offer',
    url: `${BASE_URL}${PATHS.OFFER_STORAGE.path}`,
  },
} as const
