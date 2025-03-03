import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { type SlugParams } from '@/types/paramsTypes'

import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'
import { ShareArticle } from '@/components/ShareArticle'

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
  const data = await getDigestArticleData(slug)

  return createMetadata({
    seo: {
      ...data.seo,
      image: data.image?.src || graphicsData.digest.data.src,
    },
    path: `${PATHS.DIGEST.path}/${data.slug}` as DynamicPathValues,
  })
}
