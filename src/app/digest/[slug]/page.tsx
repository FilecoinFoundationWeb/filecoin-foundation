import { DigestArticleHeader } from '@/components/DigestArticleHeader'
import { MarkdownContent } from '@/components/MarkdownContent'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { getDigestData } from '@/utils/getDigestData'

import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { generateStructuredData } from './utils/generateStructuredData'

type DigestArticleProps = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: DigestArticleProps) {
  const { slug } = params
  const data = getDigestData(slug)

  return createMetadata({
    seo: data.seo,
    path: `${PATHS.DIGEST.path}/${data.slug}` as DynamicPathValues,
  })
}

export default function DigestArticle({ params }: DigestArticleProps) {
  const { slug } = params
  const data = getDigestData(slug)

  const { image, title, content, articleNumber, issueNumber } = data

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <div className="m-auto max-w-2xl space-y-16">
        <DigestArticleHeader
          title={title}
          image={image}
          articleNumber={articleNumber}
          issueNumber={issueNumber}
        />
        {content && <MarkdownContent>{content}</MarkdownContent>}
      </div>
    </PageLayout>
  )
}
