import { Files } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { FocusAreaCard } from '@/components/FocusAreaCard'
import { KeyMemberCard } from '@/components/KeyMemberCard'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { createMetadata } from '@/utils/createMetadata'

import { attributes } from '@/content/pages/about.md'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'
import { graphicsData } from '@/data/graphicsData'

import { advisorsData } from './data/advisorsData'
import { boardMembersData } from './data/boardMembersData'
import { focusAreasData } from './data/focusAreasData'
import { reportsData } from './data/reportsData'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = attributes

export const metadata = createMetadata({
  seo,
  path: PATHS.ABOUT.path,
  useAbsoluteTitle: true,
})

export default function About() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={header.description}
        image={{ type: 'static', ...graphicsData.about }}
        cta={{
          href: FILECOIN_FOUNDATION_URLS.annualReports['2023'],
          text: 'Learn More in Our Annual Report',
        }}
      />

      <PageSection
        kicker="About"
        title="Our Mission"
        description="Filecoin Foundation’s mission is to accelerate the growth of the Filecoin ecosystem."
      />

      <PageSection kicker="What We Do" title="Focus Areas">
        <CardGrid cols="lgThree">
          {focusAreasData.map((area, i) => (
            <FocusAreaCard key={i} {...area} />
          ))}
        </CardGrid>
      </PageSection>

      <PageSection kicker="Board" title="Board of Directors">
        <CardGrid cols="mdTwo">
          {boardMembersData.map((boardMember, i) => (
            <KeyMemberCard key={i} {...boardMember} />
          ))}
        </CardGrid>
      </PageSection>

      <PageSection
        kicker="Behind the Foundation"
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
        <CardGrid cols="lgTwo">
          {reportsData.map(({ title, description, link, image }, index) => {
            const imageProp = image && {
              ...image,
              sizes: buildImageSizeProp({
                startSize: '100vw',
                sm: '710px',
                md: '980px',
                lg: '480px',
              }),
            }

            return (
              <li
                key={title}
                className={clsx({ 'lg:row-span-2': index === 0 })}
              >
                <Card
                  as="div"
                  title={title}
                  description={description}
                  image={imageProp}
                  cta={{
                    href: link,
                    text: 'View Report',
                    icon: Files,
                  }}
                />
              </li>
            )
          })}
        </CardGrid>
      </PageSection>
    </PageLayout>
  )
}
