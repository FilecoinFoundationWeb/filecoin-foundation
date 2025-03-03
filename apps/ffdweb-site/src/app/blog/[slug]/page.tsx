import { PageLayout } from '@filecoin-foundation/ui/PageLayout'

// import { ArticleLayout } from '@filecoin-foundation/ui/Article/ArticleLayout'
// import { BlogPostHeader } from '@filecoin-foundation/ui/BlogPostHeader'
// import { MarkdownContent } from '@filecoin-foundation/ui/MarkdownContent'

// import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

// type BlogPostProps = {
//   params: Promise<SlugParams>
// }

export default async function BlogPost() {
  // const { slug } = await props.params
  // const data = await getBlogPostData(slug)

  // const { title, image, content, publishedOn, category } = data

  return <PageLayout gap={32}>Blog Post</PageLayout>
  // return (
  // <ArticleLayout>
  //   <BlogPostHeader
  //     title={title}
  //     image={{
  //       ...(image || graphicsData.imageFallback.data),
  //       alt: '',
  //     }}
  //     publishedOn={publishedOn}
  //     category={category}
  //     configData={configData}
  //   />

  //    <MarkdownContent>{content}</MarkdownContent>
  // </ArticleLayout>
  // )
}

export const metadata = createMetadata({
  metaTitle: '', // [Headline of Blog] | FFDW
  metaDescription: '', // [Blog Standfirst]
  overrideTitle: true,
})
