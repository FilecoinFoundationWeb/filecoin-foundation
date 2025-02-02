import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'
import { PageLayout } from '@/components/PageLayout'
import { ShareArticle } from '@/components/ShareArticle'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { getDigestArticleData } from '../utils/getDigestArticleData'

import { DigestArticleHeader } from './components/DigestArticleHeader'
import { generateStructuredData } from './utils/generateStructuredData'

type DigestArticleProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: DigestArticleProps) {
  const { slug } = await props.params
  const data = getDigestArticleData(slug)

  return createMetadata({
    seo: {
      ...data.seo,
      image: data.image?.src || graphicsData.digest.data.src,
    },
    path: `${PATHS.DIGEST.path}/${data.slug}` as DynamicPathValues,
  })
}

export default async function DigestArticle(props: DigestArticleProps) {
  const { slug } = await props.params
  const data = getDigestArticleData(slug)

  const { title, issueNumber, articleNumber, image, authors, content } = data

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <div className="m-auto max-w-2xl space-y-16">
        <DigestArticleHeader
          title={title}
          issueNumber={issueNumber}
          articleNumber={articleNumber}
          image={image}
          authors={authors}
        />
        {content && <MarkdownContent>{content}</MarkdownContent>}
        <ShareArticle
          articleTitle={title}
          path={`${PATHS.DIGEST.path}/${slug}`}
        />
      </div>
    </PageLayout>
  )
}
