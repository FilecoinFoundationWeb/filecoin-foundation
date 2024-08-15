import { BlogPostDataSchema } from '@/schemas/blogPostDataSchema'

export function convertMarkdownToBlogPostData(data: Record<string, any>) {
  const result = BlogPostDataSchema.safeParse({
    title: data.title,
    slug: data.slug,
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
    console.error(`Slug: ${data.slug}`)

    result.error.errors.forEach((error) => {
      console.error(`Path: ${error.path.join(' > ')}`)
      console.error(`Issue: ${error.message}`)
    })

    throw new Error('Invalid blog post data')
  }
}
