import type { OrganizationGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'

import {
  BASE_URL,
  FILECOIN_URLS,
  ORGANIZATION_NAME,
  PARENT_ORGANIZATION_NAME,
  PARENT_ORGANIZATION_URL,
} from '@/constants/siteMetadata'

const CONTACT_POINTS = [
  {
    '@type': 'ContactPoint',
    contactType: 'Media and collaboration inquiries',
    email: FILECOIN_URLS.emails.contact,
    areaServed: 'Global',
  },
  {
    '@type': 'ContactPoint',
    contactType: 'Ecosystem grants inquiries',
    email: FILECOIN_URLS.emails.devgrants,
    areaServed: 'Global',
  },
] as const

const LOGO_SCHEMA = {
  '@type': 'ImageObject',
  url: `${BASE_URL}/assets/logos/filecoin-logo-full.svg`,
  width: '512',
  height: '512',
} as const

const PARENT_ORGANIZATION = {
  '@type': 'Organization',
  name: PARENT_ORGANIZATION_NAME,
  url: PARENT_ORGANIZATION_URL,
} as const

export const WEBSITE_SCHEMA = {
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: ORGANIZATION_NAME,
  publisher: { '@id': `${BASE_URL}/#org` },
} as const

export const FILECOIN_ORGANIZATION_SCHEMA = {
  '@type': 'Organization',
  '@id': `${BASE_URL}/#org`,
  name: ORGANIZATION_NAME,
  url: BASE_URL,
  sameAs: [
    FILECOIN_URLS.github,
    FILECOIN_URLS.social.twitter.href,
    FILECOIN_URLS.social.bluesky.href,
    FILECOIN_URLS.social.telegram.href,
    FILECOIN_URLS.social.discord.href,
  ],
  contactPoint: CONTACT_POINTS,
  logo: LOGO_SCHEMA,
  parentOrganization: PARENT_ORGANIZATION,
} as const

export const ORGANIZATION_SCHEMA_BASE: OrganizationGraph = {
  '@context': SCHEMA_CONTEXT_URL,
  '@graph': [FILECOIN_ORGANIZATION_SCHEMA, WEBSITE_SCHEMA],
} as const
