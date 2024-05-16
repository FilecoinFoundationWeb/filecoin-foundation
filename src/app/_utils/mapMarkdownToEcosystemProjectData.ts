import { EcosystemProjectData } from '@/types/ecosystemProjectTypes'

export function mapMarkdownToEcosystemProjectData({
  data,
  content,
}: {
  data: any
  content?: string
}): EcosystemProjectData {
  return {
    title: data.title,
    slug: data.slug,
    createdOn: data['created-on'],
    updatedOn: data['updated-on'],
    publishedOn: data['published-on'],
    featured: data.featured,
    description: data.description,
    category: data.category,
    subcategories: data.subcategories,
    tags: data.tags,
    tech: data.tech,
    image: {
      url: data.image.url,
      alt: data.image.alt,
    },
    website: data.website,
    content: content,
    featuredContent: data['featured-content'],
    repo: data.repo,
    twitter: data.twitter,
    videoUrl: data['video-url'],
    yearJoined: data['year-joined'],
    newsUpdate: data['news-update'],
    metadata: data.metadata,
  }
}
