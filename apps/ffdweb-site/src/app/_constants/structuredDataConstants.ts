import type { Organization, WithContext } from 'schema-dts'

import {
  BASE_URL,
  FFDW_URLS,
  ORGANIZATION_NAME,
  ORGANIZATION_NAME_SHORT,
} from '@/constants/siteMetadata'

const { social, email } = FFDW_URLS

export const SCHEMA_CONTEXT_URL = 'https://schema.org'
export const SCHEMA_EVENT_ATTENDANCE_MODE_ONLINE_URL =
  'https://schema.org/OnlineEventAttendanceMode'
export const SCHEMA_EVENT_ATTENDANCE_MODE_OFFLINE_URL =
  'https://schema.org/OfflineEventAttendanceMode'

const DESCRIPTION =
  'FFDW is a nonprofit organization committed to preserving humanity’s most important information by funding the development of open-source tools.'

export const ORGANIZATION_SCHEMA_BASE: WithContext<Organization> = {
  '@context': SCHEMA_CONTEXT_URL,
  '@type': 'Organization',
  name: ORGANIZATION_NAME,
  alternateName: ORGANIZATION_NAME_SHORT,
  description: DESCRIPTION,
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
