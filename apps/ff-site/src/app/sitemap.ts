import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import type { DynamicBaseData } from '@/schemas/DynamicDataBaseSchema'

import { getBlogPostsData } from '@/blog/utils/getBlogPostData'
import { getDigestArticlesData } from '@/digest/utils/getDigestArticleData'
import { getEcosystemProjectsData } from '@/ecosystem-explorer/utils/getEcosystemProjectData'
import { getEventsData } from '@/events/utils/getEventData'

type GenericEntryData = {
  updatedOn: DynamicBaseData['updated-on']
  slug: string
  image?: DynamicBaseData['image']
  content?: string
}

export default async function sitemap() {
  const staticRoutes = Object.values(PATHS).map((path) => ({
    url: `${BASE_URL}${path.path}`,
    lastModified: new Date(),
  }))

  const blogPosts = await getBlogPostsData()
  const dynamicBlogRoutes = generateDynamicRoutes(blogPosts, PATHS.BLOG.path)

  const digestArticles = await getDigestArticlesData()
  const dynamicDigestArticleRoutes = generateDynamicRoutes(
    digestArticles,
    PATHS.DIGEST.path,
  )

  const ecosystemProjects = await getEcosystemProjectsData()
  const dynamicEcosystemProjectRoutes = generateDynamicRoutes(
    ecosystemProjects,
    PATHS.ECOSYSTEM_EXPLORER.path,
  )

  const events = await getEventsData()
  const dynamicEventRoutes = generateDynamicRoutes(events, PATHS.EVENTS.path)

  return [
    ...staticRoutes,
    ...dynamicBlogRoutes,
    ...dynamicDigestArticleRoutes,
    ...dynamicEcosystemProjectRoutes,
    ...dynamicEventRoutes,
  ]
}

function generateDynamicRoutes<T extends GenericEntryData>(
  data: Array<T>,
  basePath: string,
) {
  return data.map((entry) => ({
    url: `${BASE_URL}${basePath}/${entry.slug}`,
    lastModified: entry.updatedOn.toISOString(),
    images: extractAssetImages(entry).map((image) => `${BASE_URL}${image}`),
  }))
}

function extractAssetImages<T extends GenericEntryData>(data: T) {
  const assetImages = []

  const hasAssetImage = data.image?.src && !data.image.src.startsWith('http')

  if (hasAssetImage) {
    assetImages.push(data.image!.src)
  }

  if (data.content) {
    assetImages.push(...extractAssetImagesFromContent(data.content))
  }

  return assetImages
}

function extractAssetImagesFromContent(content: GenericEntryData['content']) {
  if (!content) return []

  const assetImageMarkdownRegex = /!\[.*?\]\((assets\/images\/.*?)\)/g
  const assetImageMatches = [...content.matchAll(assetImageMarkdownRegex)]
  return assetImageMatches.map((match) => match[1])
}
