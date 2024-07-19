import { BookOpen } from '@phosphor-icons/react/dist/ssr'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { createMetadata } from '@/utils/createMetadata'
import { getDigestsData } from '@/utils/getDigestData'

import { attributes } from '@/content/pages/digest.md'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'
import { graphicsData } from '@/data/graphicsData'

import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = attributes
const digests = getDigestsData()

export const metadata = createMetadata({
  seo,
  path: PATHS.DIGEST.path,
})

export default function Digest() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={header.description}
        image={graphicsData.imageFallback}
        cta={{
          href: FILECOIN_FOUNDATION_URLS.digest.buyPrintEdition.href,
          text: FILECOIN_FOUNDATION_URLS.digest.buyPrintEdition.label,
        }}
      />

      <PageSection
        kicker="Issue 1"
        title="Unveiling the Decentralized Era: Insights into Filecoin"
        description="Published in October 2024, this first issue explores the foundational elements and pioneering strides of the Filecoin ecosystem as we embark on a journey towards a decentralized storage future."
      >
        <CardGrid cols="smTwo">
          {digests.map((digest, index) => {
            const { title, description, image, slug } = digest

            return (
              <Card
                key={index}
                title={title}
                description={description}
                textIsClamped={true}
                cta={{
                  href: `${PATHS.DIGEST.path}/${slug}`,
                  text: 'Read Article',
                  icon: BookOpen,
                }}
                image={{
                  ...image,
                  fallback: graphicsData.imageFallback,
                  sizes: buildImageSizeProp({
                    startSize: '100vw',
                    sm: '350px',
                    md: '480px',
                  }),
                }}
              />
            )
          })}
        </CardGrid>
      </PageSection>

      <CTASection
        title="Share Your Expertise with the Filecoin Community"
        description="Become a part of the conversation! Submit your articles on Filecoin's current stage, challenges, and future evolution for consideration in our upcoming issues."
        cta={{
          href: FILECOIN_FOUNDATION_URLS.digest.submitArticle.href,
          text: FILECOIN_FOUNDATION_URLS.digest.submitArticle.label,
        }}
      />
    </PageLayout>
  )
}
