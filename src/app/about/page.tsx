import { Files } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { createMetadata } from '@/utils/createMetadata'
import { getPageMarkdownData } from '@/utils/getPageMarkdownData'

import { GenericPageDataSchema } from '@/schemas/PageDataSchema'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { FocusAreaCard } from '@/components/FocusAreaCard'
import { KeyMemberCard } from '@/components/KeyMemberCard'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { advisorsData } from './data/advisorsData'
import { boardMembersData } from './data/boardMembersData'
import { focusAreasData } from './data/focusAreasData'
import { reportsData } from './data/reportsData'
import { generateStructuredData } from './utils/generateStructuredData'

const aboutPageData = getPageMarkdownData({
  slug: 'about',
  zodParser: GenericPageDataSchema.parse,
})

export const metadata = createMetadata({
  seo: {
    ...aboutPageData.seo,
    image: graphicsData.about.data.src,
  },
  path: PATHS.ABOUT.path,
  overrideDefaultTitle: true,
})

export default function About() {
  return (
    <PageLayout>
      <StructuredDataScript
        structuredData={generateStructuredData(aboutPageData.seo)}
      />
      <PageHeader
        title={aboutPageData.header.title}
        description={aboutPageData.header.description}
        image={graphicsData.about}
        cta={{
          href: FILECOIN_FOUNDATION_URLS.annualReports['2023'],
          text: 'Learn More in Our Annual Report',
        }}
      />

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
