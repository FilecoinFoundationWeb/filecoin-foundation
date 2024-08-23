import { BlogPostFrontMatterSchema } from '@/schemas/blogPostFrontMatterSchema'

export function convertMarkdownToBlogPostData(
  data: Record<string, any>,
  slug: string,
) {
  const result = BlogPostFrontMatterSchema.safeParse({
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

  if (result.success) {
    return result.data
  } else {
    console.error('🔥 Validation errors:')
    console.error(`Title: ${data.title}`)
    console.error(`Slug: ${slug}`)

    result.error.errors.forEach((error) => {
      console.error(`Path: ${error.path.join(' > ')}`)
      console.error(`Issue: ${error.message}`)
    })

    throw new Error('Invalid blog post data')
  }
}
