import { formatISO } from 'date-fns'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getBlogPostsData } from '@/utils/getBlogPostData'
import { getDigestArticlesData } from '@/utils/getDigestArticleData'
import { getEcosystemProjectsData } from '@/utils/getEcosystemProjectData'
import { getEventsData } from '@/utils/getEventData'

import type { DynamicBaseData } from '@/schemas/DynamicDataBaseSchema'

type GenericEntryData = Pick<DynamicBaseData, 'updatedOn'> & { slug: string }

function generateDynamicRoutes<T extends GenericEntryData>(
  data: Array<T>,
  basePath: string,
) {
  return data.map((item) => {
    const lastModifiedDate = formatISO(item.updatedOn || new Date())

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

  const digests = getDigestArticlesData()
  const dynamicDigestRoutes = generateDynamicRoutes(digests, PATHS.DIGEST.path)

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
    ...dynamicDigestRoutes,
    ...dynamicEcosystemProjectRoutes,
    ...dynamicEventRoutes,
  ]
}
