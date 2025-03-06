import { ArticleLayout } from '@filecoin-foundation/ui/Article/ArticleLayout'
import { DigestArticleHeader } from '@filecoin-foundation/ui/DigestArticleHeader'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'

import {
  getDigestArticleData,
  getDigestArticlesData,
} from '../utils/getDigestArticleData'

type DigestArticleProps = {
  params: Promise<SlugParams>
}

export default async function DigestArticle(props: DigestArticleProps) {
  const { slug } = await props.params
  const data = await getDigestArticleData(slug)

  const { title, issueNumber, articleNumber, image, authors, content } = data

  return (
    <PageLayout>
      {/* <StructuredDataScript structuredData={generateStructuredData(data)} /> */}
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
  const data = await getDigestArticleData(slug)

  return createMetadata({
    metaTitle: `${data.title} | FFDW`,
    metaDescription: data.seo.description,
    overrideTitle: true,
  })
}
