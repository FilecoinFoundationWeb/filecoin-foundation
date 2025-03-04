import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'
import type { Organization, WithContext } from 'schema-dts'

import {
  BASE_URL,
  FFDW_URLS,
  ORGANIZATION_DESCRIPTION,
  ORGANIZATION_NAME,
  ORGANIZATION_NAME_SHORT,
} from '@/constants/siteMetadata'

const { social, email } = FFDW_URLS

export const ORGANIZATION_SCHEMA_BASE: WithContext<Organization> = {
  '@context': SCHEMA_CONTEXT_URL,
  '@type': 'Organization',
  name: ORGANIZATION_NAME,
  alternateName: ORGANIZATION_NAME_SHORT,
  description: ORGANIZATION_DESCRIPTION,
  url: BASE_URL,
  sameAs: [social.linkedin.href, social.twitter.href, social.youtube.href],
  logo: {
    '@type': 'ImageObject',
    url: '/assets/branding/logo.svg',
    width: '140',
    height: '50',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'en',
      email: email,
    },
  ],
} as const
