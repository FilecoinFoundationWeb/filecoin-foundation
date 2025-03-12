import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { KeyMemberCard } from '@filecoin-foundation/ui/KeyMemberCard'
import { PageHeader } from '@filecoin-foundation/ui/PageHeader'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import { Files } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { attributes } from '@/content/pages/about.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { FocusAreaCard } from '@/components/FocusAreaCard'
import { PageSection } from '@/components/PageSection'

import { advisorsData } from './data/advisorsData'
import { boardMembersData } from './data/boardMembersData'
import { focusAreasData } from './data/focusAreasData'
import { reportsData } from './data/reportsData'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = PageFrontmatterSchema.parse(attributes)

export const metadata = createMetadata({
  seo: {
    ...seo,
    image: graphicsData.about.data.src,
  },
  path: PATHS.ABOUT.path,
  overrideDefaultTitle: true,
})

export default function About() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />

      <PageHeader
        title={header.title}
        description={header.description}
        image={graphicsData.about}
      >
        <Button href={FILECOIN_FOUNDATION_URLS.annualReports['2024']}>
          Learn More in Our Annual Report
        </Button>
      </PageHeader>

      <PageSection
        kicker="About"
        title="Our Mission"
        description="Filecoin Foundation’s mission is to preserve humanity’s most important information."
      />

      <PageSection kicker="What We Do" title="Focus Areas">
        <CardGrid cols="lgThree">
          {focusAreasData.map(({ title, description, image }) => (
            <FocusAreaCard
              key={title}
              title={title}
              description={description}
              image={image}
            />
          ))}
        </CardGrid>
      </PageSection>

      <PageSection kicker="Board" title="Board of Directors">
        <CardGrid cols="mdTwo">
          {boardMembersData.map(({ name, title, linkedin, image }) => (
            <KeyMemberCard
              key={name}
              name={name}
              title={title}
              linkedin={linkedin}
              image={image}
            />
          ))}
        </CardGrid>
      </PageSection>

      <PageSection
        kicker="Behind the Foundation"
        title="Advisors"
        description="Leaders from across web3 and the open-source technology communities have come together to foster the Filecoin ecosystem."
      >
        <CardGrid cols="mdTwo">
          {advisorsData.map(({ name, title, linkedin, image }) => (
            <KeyMemberCard
              key={name}
              name={name}
              title={title}
              linkedin={linkedin}
              image={image}
            />
          ))}
        </CardGrid>
      </PageSection>

      <PageSection kicker="Insights" title="Reports">
        <CardGrid cols="lgTwo" hasGridAutoRows={false}>
          {reportsData.map(({ title, description, link, image }, index) => {
            return (
              <li
                key={title}
                className={clsx({ 'lg:row-span-2': index === 0 })}
              >
                <Card
                  as="div"
                  title={title}
                  description={description}
                  image={
                    image && {
                      ...(image || graphicsData.imageFallback.data),
                      alt: '',
                      sizes: buildImageSizeProp({
                        startSize: '100vw',
                        sm: '710px',
                        md: '980px',
                        lg: '480px',
                      }),
                    }
                  }
                  cta={{
                    href: link,
                    text: 'View Report',
                    icon: {
                      component: Files,
                    },
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
