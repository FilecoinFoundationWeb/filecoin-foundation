import { DigestArticleFrontMatterSchema } from '@/schemas/digestArticleFrontMatterSchema'

export function convertMarkdownToDigestArticleData(data: Record<string, any>) {
  const result = DigestArticleFrontMatterSchema.safeParse({
    title: data.title,
    description: data.description,
    issueNumber: data['issue-number'],
    articleNumber: data['article-number'],
    content: data.content,
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
