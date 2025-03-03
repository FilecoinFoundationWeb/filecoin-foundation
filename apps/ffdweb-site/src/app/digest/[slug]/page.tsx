// import { ArticleLayout } from '@filecoin-foundation/ui/Article/ArticleLayout'
// import { DigestArticleHeader } from '@filecoin-foundation/ui/DigestArticleHeader'

// import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

// import { MarkdownContent } from '@/components/MarkdownContent'

export default function DigestArticle() {
  return <div>Digest Article</div>
  // return (
  //   <ArticleLayout>
  //     <DigestArticleHeader
  //       title={title}
  //       issueNumber={issueNumber}
  //       articleNumber={articleNumber}
  //       authors={authors}
  //       image={{
  //         ...(image || graphicsData.imageFallback.data),
  //         alt: '',
  //       }}
  //     />
  //     {content && <MarkdownContent>{content}</MarkdownContent>}
  //   </ArticleLayout>
  // )
}

export const metadata = createMetadata({
  metaTitle: '', // [Headline of Article] | FFDW
  metaDescription: '', // [Article Standfirst]
  overrideTitle: true,
})
