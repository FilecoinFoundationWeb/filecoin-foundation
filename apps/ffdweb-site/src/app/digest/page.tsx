import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { Social } from '@filecoin-foundation/ui/Social'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { socialLinksWithIcons } from '@/utils/socialConfig'

import { Card } from '@/components/Card'
import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { generateStructuredData } from './utils/generateStructuredData'
import { getDigestArticlesData } from './utils/getDigestArticleData'

const SEO = {
  metaTitle: 'FFDW DWeb Digest | In-Depth Exploration of the Decentralized Web',
  metaDescription:
    'Explore FFDW DWeb Digest for expert insights on cognitive liberty, privacy, and crypto policy. Discover the evolving landscape of digital autonomy and blockchain.',
} as const

export default async function Digest() {
  const articles = await getDigestArticlesData()

  return (
    <PageLayout gap="large">
      <StructuredDataScript structuredData={generateStructuredData(SEO)} />
      <PageHeader
        kicker="Digest"
        title="The Go-to Publication for Exploring DWeb Ideas and Principles"
        image={graphicsData.digest}
      />

      <PageSection
        kicker="Issue 1 | May 2024"
        title="Cognitive liberty in digital spaces and code as free speech"
      >
        <CardGrid cols="smTwo">
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
                title={title}
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
                    component: CaretRight,
                    size: 16,
                    position: 'trailing',
                    weight: 'bold',
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
              />
            )
          })}
        </CardGrid>
      </PageSection>

      <CTASection
        kicker="Social Media"
        title="Follow us and join the conversation."
      >
        <Social
          hasCustomColor
          linksWithIcons={socialLinksWithIcons}
          size={40}
        />
      </CTASection>
    </PageLayout>
  )
}

export const metadata = createMetadata({
  ...SEO,
  overrideTitle: true,
})
