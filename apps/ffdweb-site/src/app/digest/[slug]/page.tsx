// import { DigestArticleHeader } from '@filecoin-foundation/ui/DigestArticleHeader'

// import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

// import { MarkdownContent } from '@/components/MarkdownContent'

export default function DigestArticle() {
  return (
    <div className="m-auto max-w-2xl space-y-16">
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
    </div>
  )
}

export const metadata = createMetadata({
  metaTitle: '', // [Headline of Article] | FFDW
  metaDescription: '', // [Article Standfirst]
  overrideTitle: true,
})
