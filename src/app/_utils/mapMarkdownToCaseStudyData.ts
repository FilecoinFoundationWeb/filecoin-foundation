import { CaseStudyData } from '@/types/caseStudyTypes'

export function mapMarkdownToCaseStudyData({
  data,
}: {
  data: any
  content?: string
}): CaseStudyData {
  return {
    title: data.title,
    slug: data.slug,
    createdOn: data['created-on'],
    updatedOn: data['updated-on'],
    publishedOn: data['published-on'],
    featured: data.featured,
    description: data.description,
    cta: {
      url: data.cta?.url || '',
      text: data.cta?.text || '',
    },
    image: {
      url: data.image?.url || '',
      alt: data.image?.alt || '',
    },
    metadata: data.metadata,
  }
}
