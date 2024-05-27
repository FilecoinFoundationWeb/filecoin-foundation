import { Files } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import { WebPage, WithContext } from 'schema-dts'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { FocusAreaCard } from '@/components/FocusAreaCard'
import { KeyMemberCard } from '@/components/KeyMemberCard'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/about.md'

import { PATHS } from '@/constants/paths'
import {
  ORGANIZATION_NAME,
  FILECOIN_FOUNDATION_URLS,
} from '@/constants/siteMetadata'
import { graphicsData } from '@/data/graphicsData'

import { advisorsData } from './data/advisors'
import { boardMembersData } from './data/boardMembers'
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
        email: FILECOIN_FOUNDATION_URLS.grants.email,
      },
    ],
  },
  sameAs: Object.values(FILECOIN_FOUNDATION_URLS.social).map(
    (link) => link.href,
  ),
}

export default function About() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={aboutPageStructuredData} />
      <PageHeader
        title={header.title}
        description={header.description}
        image={{ type: 'local', ...graphicsData.about }}
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
        <CardGrid cols="lgThree">
          {focusAreasData.map((area, i) => (
            <FocusAreaCard key={i} {...area} />
          ))}
        </CardGrid>
      </PageSection>

      <PageSection kicker="Who We Are" title="Board Members">
        <CardGrid cols="mdTwo">
          {boardMembersData.map((boardMember, i) => (
            <KeyMemberCard key={i} {...boardMember} />
          ))}
        </CardGrid>
      </PageSection>

      <PageSection
        kicker="Advisors"
        title="Advisors"
        description="Leaders from across web3 and the open-source technology communities have come together to foster the Filecoin ecosystem."
      >
        <CardGrid cols="mdTwo">
          {advisorsData.map((advisor, i) => (
            <KeyMemberCard key={i} {...advisor} />
          ))}
        </CardGrid>
      </PageSection>

      <PageSection kicker="Insights" title="Reports">
        <CardGrid cols="mdTwo">
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
                  icon: Files,
                }}
              />
            </div>
          ))}
        </CardGrid>
      </PageSection>
    </PageLayout>
  )
}
