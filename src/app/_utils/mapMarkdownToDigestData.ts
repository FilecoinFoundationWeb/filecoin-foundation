import { type DigestData } from '@/types/digestTypes'

export function mapMarkdownToDigestData({
  data,
  content,
}: {
  data: any
  content?: string
}): DigestData {
  return {
    slug: data.slug,
    title: data.title,
    description: data.description,
    issueNumber: data['issue-number'],
    articleNumber: data['article-number'],
    publicationDate: data['publication-date'],
    image: data.image,
    seo: data.seo,
    content,
  }
}
