import { BookOpenIcon } from '@phosphor-icons/react/dist/ssr'

import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import { getDigestIssueDescription } from '@filecoin-foundation/utils/getDigestIssueDescription'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { digestIssueCollection } from '@/qino/collections/digestIssues'
import { digestPageItem } from '@/qino/items/digestPage'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { Card } from '@/components/Card'
import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { generateStructuredData } from './utils/generateStructuredData'
import { getDigestArticlesWithIssueContext } from './utils/getDigestArticlesWithIssueContext'

export default async function Digest() {
  const { header, seo } = await digestPageItem.getEntry()

  const [issue] = await digestIssueCollection.getEntries()
  const { issueNumber } = issue

  const articles = await getDigestArticlesWithIssueContext(issueNumber)

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={{ text: header.description }}
        image={graphicsData.digest}
      />

      <PageSection
        kicker={issue.kicker}
        title={issue.title}
        description={getDigestIssueDescription(
          issue.description,
          issue.guestEditor,
        )}
      >
        <CardGrid as="section" cols="smTwo">
          {articles.map((article) => {
            const {
              title,
              image,
              articlePath,
              issueNumber,
              articleNumber,
              description,
              authors,
            } = article

            return (
              <Card
                key={articlePath}
                as="article"
                avatars={authors}
                description={{ text: description, isClamped: true }}
                tags={[
                  { text: `Issue ${issueNumber}` },
                  { text: `Article ${articleNumber}` },
                ]}
                cta={{
                  href: `${PATHS.DIGEST.path}/${articlePath}`,
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

export async function generateMetadata() {
  const { seo } = await digestPageItem.getEntry()

  return createMetadata({
    title: seo.title,
    description: seo.description,
    image: graphicsData.digest.data.src,
    path: PATHS.DIGEST.path,
  })
}
