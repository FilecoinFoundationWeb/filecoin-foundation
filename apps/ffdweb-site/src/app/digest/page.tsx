import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { Social } from '@filecoin-foundation/ui/Social'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'

import { CARET_RIGHT } from '@/constants/cardCTAIcons'
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

const DIGEST_SEO = {
  title: 'FFDW DWeb Digest | In-Depth Exploration of the Decentralized Web',
  description:
    'Explore FFDW DWeb Digest for expert insights on cognitive liberty, privacy, and crypto policy. Discover the evolving landscape of digital autonomy and blockchain.',
} as const

export default async function Digest() {
  const articles = await getDigestArticlesData()

  return (
    <PageLayout gap="large">
      <StructuredDataScript
        structuredData={generateStructuredData(DIGEST_SEO)}
      />
      <PageHeader
        kicker="DWeb Digest"
        title="A Publication Exploring DWeb Ideas and Principles"
        image={graphicsData.digest}
      />

      <PageSection
        kicker="Issue 1 | May 2024"
        title="DWeb Digest: Inaugural Edition"
      >
        <CardGrid cols="smTwo" as="section">
          {articles.map((article) => {
            const { title, image, slug, articleNumber, description, authors } =
              article

            return (
              <Card
                key={slug}
                as="article"
                title={title}
                avatars={authors}
                description={{ text: description, isClamped: true }}
                tags={[{ text: `Article ${articleNumber}` }]}
                cta={{
                  href: `${PATHS.DIGEST.path}/${slug}`,
                  text: 'Read Article',
                  icon: CARET_RIGHT,
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
        <div className="text-brand-primary-300">
          <Social linksWithIcons={socialLinksWithIcons} size={40} />
        </div>
      </CTASection>
    </PageLayout>
  )
}

export const metadata = createMetadata({
  title: { absolute: DIGEST_SEO.title },
  description: DIGEST_SEO.description,
  path: PATHS.DIGEST.path,
  image: graphicsData.digest.data.src,
})
