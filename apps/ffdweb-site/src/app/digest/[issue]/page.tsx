import { notFound } from 'next/navigation'

import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import type { DigestIssueParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { CARET_RIGHT } from '@/constants/cardCTAIcons'
import { PATHS } from '@/constants/paths'
import { ORGANIZATION_NAME_SHORT } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { Card } from '@/components/Card'
import { PageSection } from '@/components/PageSection'

import { DIGEST_SEO } from '../constants/seo'
import { generateStructuredData } from '../utils/generateStructuredData'
import { getAllDigestArticlesWithIssueContext } from '../utils/getDigestArticlesWithIssueContext'
import {
  getAllDigestIssuesData,
  getDigestIssueData,
} from '../utils/getDigestIssueData'
import { parseDigestIssueParams } from '../utils/parseDigestParams'

type DigestIssueProps = {
  params: Promise<DigestIssueParams>
}

export default async function DigestIssue(props: DigestIssueProps) {
  const { issueNumber } = await parseDigestIssueParams(props.params)

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
          {articles.map((article, index) => {
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
                  priority: index < 4,
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

export async function generateStaticParams() {
  const allIssues = await getAllDigestIssuesData()
  return allIssues.map(({ issueNumber }) => ({
    issue: `issue-${issueNumber}`,
  }))
}

export async function generateMetadata(props: DigestIssueProps) {
  const { issueNumber } = await parseDigestIssueParams(props.params)

  const digestIssue = await getDigestIssueData(issueNumber)

  const { seo, image } = digestIssue

  return createMetadata({
    path: `${PATHS.DIGEST.issueUrl({ issueNumber: issueNumber.toString() })}`,
    title: { absolute: `${seo.title} | ${ORGANIZATION_NAME_SHORT}` },
    description: seo.description,
    image: image?.src || graphicsData.digest.data.src,
    openGraph: { type: 'website' },
  })
}
