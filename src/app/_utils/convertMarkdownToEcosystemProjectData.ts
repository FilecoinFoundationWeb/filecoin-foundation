import { EcosystemProjectFrontMatter } from '@/schemas/ecosystemProject/FrontMatterSchema'

export function convertMarkdownToEcosystemProjectData(
  data: Record<string, any>,
) {
  return EcosystemProjectFrontMatter.parse({
    title: data.title,
    createdOn: data['created-on'],
    updatedOn: data['updated-on'],
    publishedOn: data['published-on'],
    category: data.category,
    subcategories: data.subcategories,
    tags: data.tags,
    description: data.description,
    tech: data.tech,
    website: data.website,
    featuredContent: data['featured-content'],
    repo: data.repo,
    twitter: data.twitter,
    videoUrl: data['video-url'],
    yearJoined: data['year-joined'],
    newsUpdate: data['news-update'],
    content: data.content,
    image: data.image,
    seo: data.seo,
  })
}
