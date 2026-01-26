import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import { getDigestIssueDescription } from '@filecoin-foundation/utils/getDigestIssueDescription'
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
import { getDigestArticlesWithIssueContext } from '../utils/getDigestArticlesWithIssueContext'
import {
  getDigestIssueData,
  getDigestIssuesData,
} from '../utils/getDigestIssueData'
import { parseIssueSlug } from '../utils/parseDigestParams'

type DigestIssueProps = {
  params: Promise<DigestIssueParams>
}

export default async function DigestIssue(props: DigestIssueProps) {
  const { issue } = await props.params
  const issueNumber = parseIssueSlug(issue)

  const { kicker, title, description, guestEditor } =
    await getDigestIssueData(issueNumber)

  const articles = await getDigestArticlesWithIssueContext(issueNumber)

  return (
    <PageLayout gap="large">
      <StructuredDataScript
        structuredData={generateStructuredData(DIGEST_SEO)}
      />

      <PageSection
        kicker={kicker}
        title={title}
        description={getDigestIssueDescription(description, guestEditor)}
      >
        <CardGrid as="section" cols="smTwo">
          {articles.map((article, index) => {
            if (!article) return null

            const {
              title,
              image,
              articlePath,
              articleNumber,
              issueNumber,
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
                  { text: `Article ${articleNumber}` },
                  { text: `Issue ${issueNumber}` },
                ]}
                cta={{
                  href: `${PATHS.DIGEST.path}/${articlePath}`,
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
  const allIssues = await getDigestIssuesData()

  return allIssues.map(({ issuePath }) => ({
    issue: issuePath,
  }))
}

export async function generateMetadata(props: DigestIssueProps) {
  const { issue } = await props.params
  const issueNumber = parseIssueSlug(issue)

  const digestIssue = await getDigestIssueData(issueNumber)
  const { seo, image, issuePath } = digestIssue

  return createMetadata({
    path: `${PATHS.DIGEST.path}/${issuePath}` as `/${string}`,
    title: { absolute: `${seo.title} | ${ORGANIZATION_NAME_SHORT}` },
    description: seo.description,
    image: image?.src || graphicsData.digest.data.src,
    openGraph: { type: 'website' },
  })
}
