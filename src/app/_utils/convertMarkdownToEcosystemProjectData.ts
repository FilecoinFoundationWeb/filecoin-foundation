import { EcosystemProjectFrontMatter } from '@/schemas/ecosystemProject/FrontMatterSchema'

export function convertMarkdownToEcosystemProjectData(
  data: Record<string, any>,
  slug: string,
) {
  const result = EcosystemProjectFrontMatter.safeParse({
    title: data.title,
    slug: data.slug,
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

    throw new Error('Invalid ecosystem project data')
  }
}
