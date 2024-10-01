import { BookOpen } from '@phosphor-icons/react/dist/ssr'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { attributes } from '@/content/pages/digest.md'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { createMetadata } from '@/utils/createMetadata'
import { getDigestArticlesDataSortedByNumber } from '@/utils/getDigestArticleData'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = attributes
const articles = getDigestArticlesDataSortedByNumber()

export const metadata = createMetadata({
  seo: {
    ...seo,
    image: graphicsData.digest.data.src,
  },
  path: PATHS.DIGEST.path,
})

export default function Digest() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={header.description}
        image={graphicsData.digest}
      />

      <PageSection
        kicker="Issue 1 - Sep 2024"
        title="The Inaugural Edition: All Systems Go"
        description={[
          'Featuring Guest Editor Jonathan Victor, Co-Founder, Ansa Research',
          'Published in September 2024, the inaugural issue explores topics that impact the ecosystem –– from interplanetary resilience to AI-generated media and sustainable data centers. The Digest highlights the voices behind the technology being developed in the Filecoin network –– as we embark on a collective journey towards a decentralized future.',
        ]}
      >
        <CardGrid cols="smTwo">
          {articles.map((digest) => {
            const {
              title,
              image,
              slug,
              issueNumber,
              articleNumber,
              description,
              authors,
            } = digest

            return (
              <Card
                key={slug}
                title={title}
                tagLabel={[`Issue ${issueNumber}`, `Article ${articleNumber}`]}
                avatar={authors}
                description={description}
                textIsClamped={true}
                cta={{
                  href: `${PATHS.DIGEST.path}/${slug}`,
                  text: 'Read Article',
                  icon: BookOpen,
                }}
                image={{
                  alt: '',
                  ...(image || {
                    ...graphicsData.imageFallback,
                  }),
                  fallback: graphicsData.imageFallback,
                  sizes: buildImageSizeProp({
                    startSize: '100vw',
                    sm: '350px',
                    md: '470px',
                    lg: '360px',
                  }),
                }}
              />
            )
          })}
        </CardGrid>
      </PageSection>

      <CTASection
        title="Share Your Expertise with the Filecoin Community"
        description="Become a part of the conversation! Submit an idea for upcoming issues."
        cta={{
          href: FILECOIN_FOUNDATION_URLS.digest.submitIdea.href,
          text: FILECOIN_FOUNDATION_URLS.digest.submitIdea.label,
        }}
      />
    </PageLayout>
  )
}
