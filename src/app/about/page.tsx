import { Files, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import { WebPage, WithContext } from 'schema-dts'

import { Card } from '@/components/Card'
import { CardLayout } from '@/components/CardLayout'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
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

import { advisorsData } from './data/advisorsData'
import { boardMembersData } from './data/boardMembersData'
import { focusAreasData } from './data/focusAreasData'
import { reportsData } from './data/reportsData'

const { header, seo } = attributes

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

type TitleWithLinkedinProps = {
  title: string
  name: string
  linkedin: string
}

function TitleWithLinkedin({ title, name, linkedin }: TitleWithLinkedinProps) {
  return (
    <>
      <p className="mb-6 text-brand-300">{title}</p>
      <a
        href={linkedin}
        className="inline-flex items-center gap-2 text-brand-300 outline-white hover:text-brand-100 focus:text-brand-100 focus:outline-2"
        aria-label={`Find ${name} on LinkedIn (opens in new window)`}
      >
        <LinkedinLogo size={24} aria-hidden={true} />
        LinkedIn
      </a>
    </>
  )
}

export default function About() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={aboutPageStructuredData} />
      <PageHeader
        title={header.title}
        description={header.description}
        cta={{
          href: FILECOIN_FOUNDATION_URLS.annualReports.latest,
          text: 'Learn More in Our Annual Report',
        }}
      />

      <PageSection
        kicker="About"
        title="Our Mission"
        description="The Foundation’s mission is to preserve humanity’s most important information."
      />

      <PageSection kicker="What We Do" title="Focus Areas">
        <CardLayout>
          {focusAreasData.map(({ title, description }) => (
            <Card
              key={title}
              title={title}
              description={description}
              borderColor="brand-300"
            />
          ))}
        </CardLayout>
      </PageSection>

      <PageSection kicker="Who We Are" title="Board Members">
        <CardLayout type="blogPost">
          {boardMembersData.map(({ name, title, linkedin }) => (
            <Card key={name} title={name}>
              <TitleWithLinkedin
                title={title}
                name={name}
                linkedin={linkedin}
              />
            </Card>
          ))}
        </CardLayout>
      </PageSection>

      <PageSection
        kicker="Advisors"
        title="Advisors"
        description="Leaders from across web3 and the open-source technology communities have come together to foster the Filecoin ecosystem."
      >
        <CardLayout type="blogPost">
          {advisorsData.map(({ name, title, linkedin }) => (
            <Card key={name} title={name}>
              <TitleWithLinkedin
                title={title}
                name={name}
                linkedin={linkedin}
              />
            </Card>
          ))}
        </CardLayout>
      </PageSection>

      <PageSection kicker="Insights" title="Reports">
        <CardLayout type="reports">
          {reportsData.map(({ title, description, link }, index) => (
            <div
              key={title}
              className={clsx({
                'lg:row-span-2': index === 0,
              })}
            >
              <Card
                title={title}
                description={description}
                cta={{
                  href: link,
                  text: 'View Report',
                  icon: <Files />,
                }}
              />
            </div>
          ))}
        </CardLayout>
      </PageSection>
    </PageLayout>
  )
}
