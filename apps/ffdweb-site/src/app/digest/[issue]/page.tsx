import { notFound } from 'next/navigation'

import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { CARET_RIGHT } from '@/constants/cardCTAIcons'
import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { Card } from '@/components/Card'
import { PageSection } from '@/components/PageSection'

import { DIGEST_SEO } from '../constants/seo'
import { generateStructuredData } from '../utils/generateStructuredData'
import { getAllDigestArticlesWithIssueContext } from '../utils/getDigestArticlesWithIssueContext'
import { getDigestIssueData } from '../utils/getDigestIssueData'

type DigestIssueParams = SlugParams & {
  issue: string
}

type DigestIssueProps = {
  params: Promise<DigestIssueParams>
}

export default async function DigestIssue(props: DigestIssueProps) {
  const { issue: issueSlug } = await props.params
  const issueNumber = parseInt(issueSlug.replace('issue-', ''))

  const digestIssue = await getDigestIssueData(issueNumber)

  if (!digestIssue) {
    notFound()
  }

  const articles = await getAllDigestArticlesWithIssueContext({ issueNumber })

  const { kicker, title } = digestIssue

  return (
    <PageLayout gap="large">
      <StructuredDataScript
        structuredData={generateStructuredData(DIGEST_SEO)}
      />

      <PageSection kicker={kicker} title={title}>
        <CardGrid as="section" cols="smTwo">
          {articles.map((article) => {
            if (!article) return null

            const {
              title,
              image,
              slug,
              articleNumber,
              issueNumber,
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
                  { text: `Article ${articleNumber}` },
                  { text: `Issue ${issueNumber}` },
                ]}
                cta={{
                  href: PATHS.DIGEST.articleUrl({
                    issueNumber: issueNumber.toString(),
                    articleSlug: slug,
                  }),
                  text: 'Read Article',
                  icon: CARET_RIGHT,
                }}
                image={{
                  ...(image || graphicsData.imageFallback.data),
                  alt: image?.alt || '',
                  sizes: buildImageSizeProp({
                    startSize: '100vw',
                    sm: '340px',
                    md: '470px',
                    lg: '480px',
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
    </PageLayout>
  )
}
