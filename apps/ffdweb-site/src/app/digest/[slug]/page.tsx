import { ArticleLayout } from '@filecoin-foundation/ui/Article/ArticleLayout'
import { DigestArticleHeader } from '@filecoin-foundation/ui/DigestArticleHeader'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { ShareArticle } from '@filecoin-foundation/ui/ShareArticle'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME_SHORT } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'

import {
  getDigestArticleData,
  getDigestArticlesData,
} from '../utils/getDigestArticleData'

import { AuthorBio } from './components/AuthorBio'
import { generateStructuredData } from './utils/generateStructuredData'

type DigestArticleProps = {
  params: Promise<SlugParams>
}

export default async function DigestArticle(props: DigestArticleProps) {
  const { slug } = await props.params
  const data = await getDigestArticleData(slug)

  const { title, issueNumber, articleNumber, image, authors, content } = data

  const atLeastOneAuthorHasBio = authors.some((author) => author.bio)

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(data)} />
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
        )}

        <ShareArticle
          articleTitle={title}
          path={`${PATHS.DIGEST.path}/${slug}`}
          baseUrl={BASE_URL}
        />
      </ArticleLayout>
    </PageLayout>
  )
}

export async function generateStaticParams() {
  const entries = await getDigestArticlesData()
  return entries.map(({ slug }) => ({ slug }))
}

export async function generateMetadata(props: DigestArticleProps) {
  const { slug } = await props.params
  const { image, seo } = await getDigestArticleData(slug)

  return createMetadata({
    path: `${PATHS.DIGEST.path}/${slug}`,
    title: { absolute: `${seo.title} | ${ORGANIZATION_NAME_SHORT}` },
    description: seo.description,
    image: image?.src || graphicsData.digest.data.src,
    openGraph: { type: 'article' },
    twitter: seo.twitter,
  })
}
