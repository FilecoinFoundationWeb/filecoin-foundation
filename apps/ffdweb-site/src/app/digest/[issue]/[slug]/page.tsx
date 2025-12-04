import { notFound } from 'next/navigation'

import { ArticleLayout } from '@filecoin-foundation/ui/Article/ArticleLayout'
import { DigestArticleHeader } from '@filecoin-foundation/ui/DigestArticleHeader'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { ShareArticle } from '@filecoin-foundation/ui/ShareArticle'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import type { DigestArticleParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME_SHORT } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'

import {
  getAllDigestArticlesWithIssueContext,
  getDigestArticleWithIssueContext,
} from '../../utils/getDigestArticlesWithIssueContext'

import { AuthorBio } from './components/AuthorBio'
import { generateStructuredData } from './utils/generateStructuredData'

import { getAllDigestIssuesData } from '@/digest/utils/getDigestIssueData'
import { parseDigestArticleParams } from '@/digest/utils/parseDigestParams'

type DigestArticleProps = {
  params: Promise<DigestArticleParams>
}

export default async function DigestArticle(props: DigestArticleProps) {
  const { articleIssueNumber, articleSlug } = await parseDigestArticleParams(
    props.params,
  )

  const article = await getDigestArticleWithIssueContext({
    articleSlug,
    articleIssueNumber,
  })

  if (!article) {
    notFound()
  }

  const { title, issueNumber, articleNumber, image, authors, content, slug } =
    article

  const atLeastOneAuthorHasBio = authors.some((author) => author.bio)

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(article)} />
      <ArticleLayout>
        <DigestArticleHeader
          title={title}
          issueNumber={issueNumber}
          articleNumber={articleNumber}
          authors={authors}
          image={{
            ...(image || graphicsData.imageFallback.data),
            alt: '',
          }}
        />
        {content && <MarkdownContent>{content}</MarkdownContent>}
        {atLeastOneAuthorHasBio && (
          <aside className="flex flex-col gap-5 sm:w-2/3">
            {authors.map((author) => (
              <AuthorBio key={author.firstName} author={author} />
            ))}
          </aside>
        )}{' '}
        <ShareArticle
          sectionTitle="Share Article"
          articleTitle={title}
          path={`${PATHS.DIGEST.path}/${slug}`}
          baseUrl={BASE_URL}
        />
      </ArticleLayout>
    </PageLayout>
  )
}

export async function generateStaticParams() {
  const allIssues = await getAllDigestIssuesData()

  const allArticles = await Promise.all(
    allIssues.map(async (issue) => {
      const articles = await getAllDigestArticlesWithIssueContext({
        digestIssue: issue,
      })
      return articles.map((article) => ({
        issue: `issue-${issue.issueNumber}`,
        slug: article?.slug,
      }))
    }),
  )
  return allArticles.flat()
}

export async function generateMetadata(props: DigestArticleProps) {
  const { articleSlug, articleIssueNumber } = await parseDigestArticleParams(
    props.params,
  )

  const article = await getDigestArticleWithIssueContext({
    articleSlug,
    articleIssueNumber,
  })

  if (article) {
    const { image, seo, issueNumber } = article

    return createMetadata({
      path: `${PATHS.DIGEST.articleUrl({ issueNumber, articleSlug })}` as `/${string}`,
      title: { absolute: `${seo.title} | ${ORGANIZATION_NAME_SHORT}` },
      description: seo.description,
      image: image?.src || graphicsData.digest.data.src,
      openGraph: { type: 'article' },
    })
  }
}
