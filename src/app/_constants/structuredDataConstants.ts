import type { Organization, WithContext } from 'schema-dts'

import {
  BASE_URL,
  FILECOIN_FOUNDATION_URLS,
  ORGANIZATION_NAME,
} from '@/constants/siteMetadata'

const { social, email, grants } = FILECOIN_FOUNDATION_URLS

export const SCHEMA_CONTEXT_URL = 'https://schema.org'

export const BASE_ORGANIZATION_SCHEMA: WithContext<Organization> = {
  '@context': SCHEMA_CONTEXT_URL,
  '@type': 'Organization',
  name: ORGANIZATION_NAME,
  url: BASE_URL,
  sameAs: [
    social.bluesky.href,
    social.github.href,
    social.linkedin.href,
    social.twitter.href,
    social.youtube.href,
  ],
  logo: {
    '@type': 'ImageObject',
    url: '/assets/images/logo.svg',
    width: '147',
    height: '41',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: email.label,
      email: email.href,
    },
    {
      '@type': 'ContactPoint',
      contactType: grants.email.label,
      email: grants.email.href,
    },
  ],
} as const
