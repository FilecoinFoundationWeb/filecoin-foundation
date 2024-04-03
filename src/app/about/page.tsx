import { WebPage, WithContext } from 'schema-dts'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CardLayout } from '@/components/CardLayout'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
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

const whatWeDoData = [
  {
    title: 'Governance',
    description:
      'As an open-source project, the Foundation governs the Filecoin ecosystem in a way that’s transparent, community-driven, and in line with the community’s open-source ethos.',
  },
  {
    title: 'Research & Development',
    description:
      'The Foundation funds research and development projects for decentralized web technologies, including projects and teams building on the network and advancing our mission to preserve humanity’s most important information.',
  },
  {
    title: 'Growth',
    description:
      'The Foundation hosts, sponsors, and supports events around the world, leading conversations around decentralization web technology and bringing new builders, clients, and storage providers into the ecosystem.',
  },
]

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

        <PageSection
          kicker="About"
          title="Our Mission"
          description="The Foundation’s mission is to preserve humanity’s most important information."
        />

        <PageSection kicker="What We Do" title="Focus Areas">
          <CardLayout>
            {whatWeDoData.map(({ title, description }) => (
              <Card
                key={title}
                title={title}
                description={description}
                borderColor="brand-300"
              />
            ))}
          </CardLayout>
        </PageSection>
      </div>
    </>
  )
}
