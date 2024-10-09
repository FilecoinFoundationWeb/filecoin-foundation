import { BlogPostFrontMatterSchema } from '@/_schemas/BlogPostFrontMatterSchema'

export function convertMarkdownToBlogPostData(data: Record<string, any>) {
  return BlogPostFrontMatterSchema.parse({
    title: data.title,
    createdOn: data['created-on'],
    updatedOn: data['updated-on'],
    publishedOn: data['published-on'],
    category: data.category,
    description: data.description,
    content: data.content,
    image: data.image,
    seo: data.seo,
  })
}
