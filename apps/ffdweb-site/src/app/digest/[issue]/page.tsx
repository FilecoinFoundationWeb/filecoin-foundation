import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { CARET_RIGHT } from '@/constants/cardCTAIcons'
import { DIGEST_PATHS, PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { Card } from '@/components/Card'
import { PageSection } from '@/components/PageSection'

import { DIGEST_SEO } from '../constants/seo'
import { generateStructuredData } from '../utils/generateStructuredData'
import { getDigestArticlesData } from '../utils/getDigestArticleData'
import { getIssueData } from '../utils/getIssueData'

type DigestIssueProps = {
  params: Promise<SlugParams>
}

export default async function DigestIssue(props: DigestIssueProps) {
  const { issue: issueSlug } = await props.params

  const issueNumber = issueSlug?.replace('issue-', '') || '1'

  const issueData = getIssueData(issueNumber)

  const allArticles = await getDigestArticlesData()
  const articles = allArticles.filter(
    (article) => article.issueNumber === issueNumber,
  )

  if ('error' in issueData) {
    return (
      <PageLayout gap="large">
        <div>{issueData.error}</div>
      </PageLayout>
    )
  }

  return (
    <PageLayout gap="large">
      <StructuredDataScript
        structuredData={generateStructuredData(DIGEST_SEO)}
      />

      <PageSection kicker={issueData.kicker} title={issueData.title}>
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
                tags={[{ text: `Article ${articleNumber}` }]}
                cta={{
                  href: `${PATHS.DIGEST.path}/${DIGEST_PATHS.article(issueNumber, slug)}`,
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
