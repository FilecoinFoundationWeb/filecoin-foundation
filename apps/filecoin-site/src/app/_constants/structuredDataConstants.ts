import type { Organization, WithContext } from 'schema-dts'

import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'

import {
  BASE_URL,
  FILECOIN_URLS,
  ORGANIZATION_NAME,
  SEO,
} from '@/constants/siteMetadata'

const { social } = FILECOIN_URLS

export const ORGANIZATION_SCHEMA_BASE: WithContext<Organization> = {
  '@context': SCHEMA_CONTEXT_URL,
  '@type': 'Organization',
  name: ORGANIZATION_NAME,
  description: SEO.description,
  url: BASE_URL,
  sameAs: [
    social.bluesky.href,
    social.twitter.href,
    social.discord.href,
    social.slack.href,
    social.telegram.href,
  ],
  logo: {
    '@type': 'ImageObject',
    url: '/assets/logos/filecoin-logo-full.svg',
    width: '112',
    height: '32',
  },
} as const
