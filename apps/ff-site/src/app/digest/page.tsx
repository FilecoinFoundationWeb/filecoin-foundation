import { BookOpenIcon } from '@phosphor-icons/react/dist/ssr'

import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { attributes } from '@/content/pages/digest.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { Card } from '@/components/Card'
import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { generateStructuredData } from './utils/generateStructuredData'
import { getDigestArticlesData } from './utils/getDigestArticleData'

const { header, seo } = PageFrontmatterSchema.parse(attributes)

export default async function Digest() {
  const articles = await getDigestArticlesData()

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={{ text: header.description }}
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
        <CardGrid as="section" cols="smTwo">
          {articles.map((article) => {
            const {
              title,
              image,
              slug,
              issueNumber,
              articleNumber,
              description,
              authors,
            } = article

            return (
              <Card
                key={slug}
                as="article"
                avatars={authors}
                description={{ text: description, isClamped: true }}
                tags={[
                  { text: `Issue ${issueNumber}` },
                  { text: `Article ${articleNumber}` },
                ]}
                cta={{
                  href: `${PATHS.DIGEST.path}/${slug}`,
                  text: 'Read Article',
                  icon: {
                    component: BookOpenIcon,
                  },
                }}
                image={{
                  ...(image || graphicsData.imageFallback.data),
                  alt: image?.alt || '',
                  sizes: buildImageSizeProp({
                    startSize: '100vw',
                    sm: '350px',
                    md: '470px',
                    lg: '360px',
                  }),
                }}
                title={{
                  text: title,
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

export const metadata = createMetadata({
  title: seo.title,
  description: seo.description,
  image: graphicsData.digest.data.src,
  path: PATHS.DIGEST.path,
})
