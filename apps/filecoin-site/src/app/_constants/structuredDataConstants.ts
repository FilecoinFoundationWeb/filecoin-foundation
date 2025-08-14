import type {
  ContactPoint,
  ImageObject,
  Organization,
  WebSite,
} from 'schema-dts'

import type { OrganizationGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'

import {
  BASE_URL,
  FILECOIN_URLS,
  ORGANIZATION_NAME,
} from '@/constants/siteMetadata'

import { PATHS, type PathValues } from './paths'

export const STRUCTURED_DATA_IDS = {
  ORGANIZATION: `${BASE_URL}/#org`,
  WEBSITE: `${BASE_URL}/#website`,
  BLOG: `${BASE_URL}/${PATHS.BLOG.path}#blog`,
  getServiceId: (path: PathValues) => `${BASE_URL}${path}#service`,
  getBlogPostId: (path: string) => `${BASE_URL}${path}#post`,
  getPageId: (path: PathValues, type: 'WebPage' | 'CollectionPage') =>
    `${BASE_URL}${path}#${type === 'CollectionPage' ? 'page' : 'webpage'}`,
} as const

const CONTACT_POINTS: Array<ContactPoint> = [
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

const LOGO_SCHEMA: ImageObject = {
  '@type': 'ImageObject',
  url: `${BASE_URL}/assets/logos/filecoin-logo-full.svg`,
  width: '512',
  height: '512',
} as const

export const WEBSITE_SCHEMA: WebSite = {
  '@type': 'WebSite',
  '@id': STRUCTURED_DATA_IDS.WEBSITE,
  url: BASE_URL,
  name: ORGANIZATION_NAME,
  publisher: { '@id': STRUCTURED_DATA_IDS.ORGANIZATION },
} as const

export const FILECOIN_ORGANIZATION_SCHEMA: Organization = {
  '@type': 'Organization',
  '@id': STRUCTURED_DATA_IDS.ORGANIZATION,
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
} as const

export const ORGANIZATION_SCHEMA_BASE: OrganizationGraph = {
  '@context': SCHEMA_CONTEXT_URL,
  '@graph': [FILECOIN_ORGANIZATION_SCHEMA, WEBSITE_SCHEMA],
}
