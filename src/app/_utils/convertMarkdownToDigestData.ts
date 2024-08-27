import { DigestArticleFrontMatterSchema } from '@/schemas/digestArticleFrontMatterSchema'

export function convertMarkdownToDigestData(data: Record<string, any>) {
  const result = DigestArticleFrontMatterSchema.safeParse({
    title: data.title,
    createdOn: data['created-on'],
    updatedOn: data['updated-on'],
    publishedOn: data['published-on'],
    description: data.description,
    issueNumber: data['issue-number'],
    articleNumber: data['article-number'],
    publicationDate: data['publication-date'],
    authors: data.authors,
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

    throw new Error('Invalid digest data')
  }
}
