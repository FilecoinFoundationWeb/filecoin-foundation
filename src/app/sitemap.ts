import { getBlogPostsData } from '@/utils/getBlogPostData'
import { getEcosystemProjectsData } from '@/utils/getEcosystemProjectData'
import { getEventsData } from '@/utils/getEventData'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

function generateDynamicRoutes<
  T extends { slug: string; updatedOn?: string; publishedOn?: string },
>(
  data: T[],
  basePath: string,
  timestampKey: 'updatedOn' | 'publishedOn' = 'updatedOn',
) {
  return data.map((item) => {
    const lastModifiedDate = item[timestampKey] ?? new Date().toISOString()

    return {
      url: `${BASE_URL}${basePath}/${item.slug}`,
      lastModified: lastModifiedDate,
    }
  })
}

export default function sitemap() {
  const staticRoutes = Object.values(PATHS).map((path) => ({
    url: `${BASE_URL}${path.path}`,
    lastModified: new Date(),
  }))

  const blogPosts = getBlogPostsData()
  const dynamicBlogRoutes = generateDynamicRoutes(blogPosts, PATHS.BLOG.path)

  const ecosystemProjects = getEcosystemProjectsData()
  const dynamicEcosystemProjectRoutes = generateDynamicRoutes(
    ecosystemProjects,
    PATHS.ECOSYSTEM.path,
  )

  const events = getEventsData()
  const dynamicEventRoutes = generateDynamicRoutes(events, PATHS.EVENTS.path)

  return [
    ...staticRoutes,
    ...dynamicBlogRoutes,
    ...dynamicEcosystemProjectRoutes,
    ...dynamicEventRoutes,
  ]
}
