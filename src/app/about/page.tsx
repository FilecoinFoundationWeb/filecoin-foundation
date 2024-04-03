import { WebPage, WithContext } from 'schema-dts'

import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/about.md'

import { PATHS } from '@/constants/paths'
import {
  FILECOIN_URLS,
  ORGANIZATION_NAME,
  FILECOIN_FOUNDATION_URLS,
} from '@/constants/siteMetadata'

const { title, description, seo } = attributes

export const metadata = createMetadata(seo, PATHS.ABOUT.path)

const aboutPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.ABOUT.path,
})

const aboutPageStructuredData: WithContext<WebPage> = {
  ...aboutPageBaseData,
  about: {
    '@type': 'Organization',
    name: ORGANIZATION_NAME,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Media and collaboration inquiries',
        email: FILECOIN_FOUNDATION_URLS.email,
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Ecosystem grants inquiries',
        email: FILECOIN_URLS.grants.email,
      },
    ],
  },
  sameAs: Object.values(FILECOIN_FOUNDATION_URLS.social).map(
    (link) => link.href,
  ),
}

export default function About() {
  return (
    <>
      <StructuredDataScript structuredData={aboutPageStructuredData} />

      <div className="flex flex-col gap-24 sm:gap-16">
        <div className="flex flex-col gap-6 md:w-1/2">
          <PageHeader title={title} description={description} />
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 md:flex-col md:gap-4">
            <Button
              variant="primary"
              href={FILECOIN_FOUNDATION_URLS.latestAnnualReport}
            >
              Learn More in Our Annual Report
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
