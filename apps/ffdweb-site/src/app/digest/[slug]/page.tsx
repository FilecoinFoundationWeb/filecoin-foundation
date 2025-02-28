import { DigestArticleLayout } from '@filecoin-foundation/ui/DigestArticle'

// import {
//   DigestArticleHeader,
//   DigestArticleLayout,
// } from '@filecoin-foundation/ui/DigestArticle'

// import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

// import { MarkdownContent } from '@/components/MarkdownContent'

export default function DigestArticle() {
  return (
    <DigestArticleLayout>
      {/* <DigestArticleHeader
        title={title}
        issueNumber={issueNumber}
        articleNumber={articleNumber}
        authors={authors}
        image={{
          ...(image || graphicsData.imageFallback.data),
          alt: '',
        }}
      /> */}
      {/* {content && <MarkdownContent>{content}</MarkdownContent>} */}
    </DigestArticleLayout>
  )
}

export const metadata = createMetadata({
  metaTitle: '', // [Headline of Article] | FFDW
  metaDescription: '', // [Article Standfirst]
  overrideTitle: true,
})
