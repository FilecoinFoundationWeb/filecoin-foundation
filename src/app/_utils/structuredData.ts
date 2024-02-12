import type { Organization, WebPage, WithContext } from 'schema-dts'

import siteMedataData from '@/content/shared/site-metadata.yml'

import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'

const { seo } = siteMedataData

export const baseOrganizationSchema: WithContext<Organization> =
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORGANIZATION_NAME,
    url: BASE_URL,
    description: seo.description,
    logo: {
      '@type': 'ImageObject',
      url: '', // Replace
      width: '600', // Replace
      height: '60', // Replace
    },
  } || {}

export const generateWebPageStructuredData = ({
  title,
  path,
  description,
}: {
  title: string
  path: string
  description: string
}): WithContext<WebPage> => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description: description,
  url: `${BASE_URL}${path}`,
})
