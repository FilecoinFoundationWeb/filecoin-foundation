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

import { generateStructuredData } from './utils/generateStructuredData'

type DigestArticleProps = {
  params: Promise<SlugParams>
}

export default async function DigestArticle(props: DigestArticleProps) {
  const { slug } = await props.params
  const data = await getDigestArticleData(slug)

  const { title, issueNumber, articleNumber, image, authors, content } = data

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
    image: seo.image || image?.src,
    openGraph: {
      type: 'article',
      ...seo.openGraph,
    },
    twitter: seo.twitter,
  })
}
