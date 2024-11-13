import { formatISO } from 'date-fns'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import type { DynamicBaseData } from '@/schemas/DynamicDataBaseSchema'

import { getBlogPostsData } from '@/blog/utils/getBlogPostData'
import { getDigestArticlesData } from '@/digest/utils/getDigestArticleData'
import { getEcosystemProjectsData } from '@/ecosystem-explorer/utils/getEcosystemProjectData'
import { getEventsData } from '@/events/utils/getEventData'

type GenericEntryData = Pick<DynamicBaseData, 'updated-on'> & { slug: string }

function generateDynamicRoutes<T extends GenericEntryData>(
  data: Array<T>,
  basePath: string,
) {
  return data.map((item) => {
    const lastModifiedDate = formatISO(item['updated-on'] || new Date())

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

  const digestArticles = getDigestArticlesData()
  const dynamicDigestArticleRoutes = generateDynamicRoutes(
    digestArticles,
    PATHS.DIGEST.path,
  )

  const ecosystemProjects = getEcosystemProjectsData()
  const dynamicEcosystemProjectRoutes = generateDynamicRoutes(
    ecosystemProjects,
    PATHS.ECOSYSTEM_EXPLORER.path,
  )

  const events = getEventsData()
  const dynamicEventRoutes = generateDynamicRoutes(events, PATHS.EVENTS.path)

  return [
    ...staticRoutes,
    ...dynamicBlogRoutes,
    ...dynamicDigestArticleRoutes,
    ...dynamicEcosystemProjectRoutes,
    ...dynamicEventRoutes,
  ]
}
