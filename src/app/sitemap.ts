import { BlogPostData } from '@/types/blogPostTypes'

import { getCaseStudiesData } from '@/utils/getCaseStudiesData'
import { getEcosystemProjectData } from '@/utils/getEcosystemProjectData'
import { getEventData } from '@/utils/getEventData'
import { legacyGetMarkdownData } from '@/utils/getMarkdownData'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

function generateDynamicRoutes<
  T extends { slug: string; updatedOn?: string; publishedOn?: string }
>(
  data: T[],
  basePath: string,
  timestampKey: 'updatedOn' | 'publishedOn' = 'updatedOn'
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

  const blogPosts = legacyGetMarkdownData<BlogPostData>(
    PATHS.BLOG.entriesContentPath as string
  )
  const dynamicBlogRoutes = generateDynamicRoutes(blogPosts, PATHS.BLOG.path)

  const caseStudies = getCaseStudiesData(
    PATHS.CASE_STUDIES.entriesContentPath as string
  )
  const dynamicCaseStudyRoutes = generateDynamicRoutes(
    caseStudies,
    PATHS.CASE_STUDIES.path
  )

  const ecosystemProjects = getEcosystemProjectData(
    PATHS.ECOSYSTEM.entriesContentPath as string
  )

  const dynamicEcosystemProjectRoutes = generateDynamicRoutes(
    ecosystemProjects,
    PATHS.ECOSYSTEM.path
  )

  const events = getEventData(PATHS.EVENTS.entriesContentPath as string)
  const dynamicEventRoutes = generateDynamicRoutes(events, PATHS.EVENTS.path)

  return [
    ...staticRoutes,
    ...dynamicBlogRoutes,
    ...dynamicCaseStudyRoutes,
    ...dynamicEcosystemProjectRoutes,
    ...dynamicEventRoutes,
  ]
}
