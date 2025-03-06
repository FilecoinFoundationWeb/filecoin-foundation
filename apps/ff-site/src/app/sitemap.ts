import type { DynamicBaseData } from '@filecoin-foundation/ui/schemas/DynamicDataBaseSchema'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'


import { getBlogPostsData } from '@/blog/utils/getBlogPostData'
import { getDigestArticlesData } from '@/digest/utils/getDigestArticleData'
import { getEcosystemProjectsData } from '@/ecosystem-explorer/utils/getEcosystemProjectData'
import { getEventsData } from '@/events/utils/getEventData'

type GenericEntryData = {
  updatedOn: DynamicBaseData['updated-on']
  slug: string
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
  return data.map(({ slug, updatedOn }) => ({
    url: `${BASE_URL}${basePath}/${slug}`,
    lastModified: updatedOn.toISOString(),
  }))
}
