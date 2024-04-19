import { GrantGraduatesData } from '@/_types/grantGraduatesTypes'

export function mapMarkdownToGrandGraduatesData({
  data,
}: {
  data: any
  content?: string
}): GrantGraduatesData {
  return {
    title: data.title,
    slug: data.slug,
    createdOn: data['created-on'],
    updatedOn: data['updated-on'],
    publishedOn: data['published-on'],
    featured: data.featured,
    description: data.description,
    topic: data.topic,
    tags: data.tags,
    tech: data.tech,
    image: {
      url: data.image.url,
      alt: data.image.alt,
    },
    website: data.website,
    featuredContent: data['featured-content'],
    repo: data.repo,
    twitter: data.twitter,
    videoUrl: data['video-url'],
    yearJoined: data['year-joined'],
    newsUpdate: data['news-update'],
    metadata: data.metadata,
  }
}
