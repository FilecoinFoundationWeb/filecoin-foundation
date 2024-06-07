import type { Organization, WebPage, WithContext } from 'schema-dts'

import { attributes } from '@/content/pages/home.md'

import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'

const { seo } = attributes

interface GenerateWebPageStructuredDataProps {
  title: string
  description: string
  path: string
}

export const baseOrganizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: ORGANIZATION_NAME,
  url: BASE_URL,
  description: seo.description,
  logo: {
    '@type': 'ImageObject',
    url: '', // Replace with actual logo URL
    width: '600', // Replace with actual width
    height: '60', // Replace with actual height
  },
}

export const generateWebPageStructuredData = ({
  title,
  description,
  path,
}: GenerateWebPageStructuredDataProps): WithContext<WebPage> => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url: `${BASE_URL}${path}`,
})
