import { formatISO, parseISO, isValid } from 'date-fns'

import { DynamicBaseData } from '@/schemas/dynamicDataBaseSchema'

import { getBlogPostsData } from '@/utils/getBlogPostData'
import { getEcosystemProjectsData } from '@/utils/getEcosystemProjectData'
import { getEventsData } from '@/utils/getEventData'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

function generateDynamicRoutes<
  T extends Pick<DynamicBaseData, 'slug' | 'updatedOn' | 'publishedOn'>,
>(
  data: T[],
  basePath: string,
  timestampKey: keyof Pick<
    DynamicBaseData,
    'updatedOn' | 'publishedOn'
  > = 'updatedOn',
) {
  return data.map((item) => {
    const timestamp = item[timestampKey]

    const lastModifiedDate = (() => {
      if (timestamp instanceof Date) {
        return formatISO(timestamp)
      } else if (typeof timestamp === 'string') {
        const parsedDate = parseISO(timestamp)
        return isValid(parsedDate)
          ? formatISO(parsedDate)
          : formatISO(new Date())
      } else {
        return formatISO(new Date())
      }
    })()

    return {
      url: `${BASE_URL}${basePath}/${item.slug}`,
      lastModified: lastModifiedDate,
    }
  })
}

function generateDynamicRoutesLegacy<
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
  const dynamicBlogRoutes = generateDynamicRoutesLegacy(
    blogPosts,
    PATHS.BLOG.path,
  )

  const ecosystemProjects = getEcosystemProjectsData()
  const dynamicEcosystemProjectRoutes = generateDynamicRoutesLegacy(
    ecosystemProjects,
    PATHS.ECOSYSTEM_EXPLORER.path,
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
