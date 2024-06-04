import type { Organization, WebPage, WithContext } from 'schema-dts'

import siteMetadata from '@/content/shared/site-metadata.yml'

import {
  BASE_URL,
  FILECOIN_FOUNDATION_URLS,
  ORGANIZATION_NAME,
} from '@/constants/siteMetadata'

export const { seo } = siteMetadata

type GenerateWebPageStructuredDataProps = {
  title: string
  description: string
  path: string
}

export const SCHEMA_CONTEXT_URL = 'https://schema.org'

export const baseOrganizationSchema: WithContext<Organization> = {
  '@context': SCHEMA_CONTEXT_URL,
  '@type': 'Organization',
  name: ORGANIZATION_NAME,
  url: BASE_URL,
  sameAs: [
    FILECOIN_FOUNDATION_URLS.social.bluesky.href,
    FILECOIN_FOUNDATION_URLS.social.github.href,
    FILECOIN_FOUNDATION_URLS.social.linkedin.href,
    FILECOIN_FOUNDATION_URLS.social.twitter.href,
    FILECOIN_FOUNDATION_URLS.social.youtube.href,
  ],
  description: seo.description,
  logo: {
    '@type': 'ImageObject',
    url: '/assets/images/logo.svg',
    width: '147',
    height: '41',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: FILECOIN_FOUNDATION_URLS.email.label,
      email: FILECOIN_FOUNDATION_URLS.email.href,
    },
    {
      '@type': 'ContactPoint',
      contactType: FILECOIN_FOUNDATION_URLS.grants.email.label,
      email: FILECOIN_FOUNDATION_URLS.grants.email.href,
    },
  ],
}

export const generateWebPageStructuredData = ({
  title,
  description,
  path,
}: GenerateWebPageStructuredDataProps): WithContext<WebPage> => ({
  '@context': SCHEMA_CONTEXT_URL,
  '@type': 'WebPage',
  name: title,
  description,
  url: `${BASE_URL}${path}`,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title,
        item: `${BASE_URL}${path}`,
      },
    ],
  },
})
