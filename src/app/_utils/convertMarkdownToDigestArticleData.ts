import { DigestArticleFrontMatterSchema } from '@/schemas/digestArticleFrontMatterSchema'

export function convertMarkdownToDigestArticleData(data: Record<string, any>) {
  return DigestArticleFrontMatterSchema.parse({
    title: data.title,
    createdOn: data['created-on'],
    updatedOn: data['updated-on'],
    publishedOn: data['published-on'],
    issueNumber: data['issue-number'],
    articleNumber: data['article-number'],
    authors: data.authors?.map(mapAuthor),

    content: data.content,
    image: data.image,
    seo: data.seo,
  })
}

function mapAuthor(author: Record<string, any>) {
  return {
    firstName: author['first-name'],
    lastName: author['last-name'],
    image: author.image
      ? { src: author.image.src, alt: author.image.alt }
      : undefined,
    company: author['company'],
  }
}
