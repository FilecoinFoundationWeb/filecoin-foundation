import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'
import type { Organization, WithContext } from 'schema-dts'

import {
  BASE_URL,
  FILECOIN_FOUNDATION_URLS,
  ORGANIZATION_NAME,
} from '@/constants/siteMetadata'

import { attributes as aboutPageAttributes } from '@/content/pages/about.md'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

const { header: aboutPageHeader } =
  PageFrontmatterSchema.parse(aboutPageAttributes)

const { social, email } = FILECOIN_FOUNDATION_URLS

export const SCHEMA_EVENT_ATTENDANCE_MODE_ONLINE_URL =
  'https://schema.org/OnlineEventAttendanceMode'
export const SCHEMA_EVENT_ATTENDANCE_MODE_OFFLINE_URL =
  'https://schema.org/OfflineEventAttendanceMode'

export const ORGANIZATION_SCHEMA_BASE: WithContext<Organization> = {
  '@context': SCHEMA_CONTEXT_URL,
  '@type': 'Organization',
  name: ORGANIZATION_NAME,
  description: aboutPageHeader.description,
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
  ],
} as const
