import { MetadataRoute } from 'next'

import { BlogPostData } from '@/types/blogPostTypes'
import { CaseStudyData } from '@/types/caseStudyTypes'

import { getEventData } from '@/utils/getEventData'
import { legacyGetMarkdownData } from '@/utils/getMarkdownData'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = Object.values(PATHS).map((path) => ({
    url: `${BASE_URL}${path.path}`,
    lastModified: new Date(),
  }))

  const blogPosts = legacyGetMarkdownData<BlogPostData>(
    PATHS.BLOG.entriesContentPath as string
  )
  const dynamicBlogRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}{PATHS.BLOG.path}/${post.slug}`,
    lastModified: post['updated-on'] || post['published-on'] || new Date(),
  }))

  const caseStudies = legacyGetMarkdownData<CaseStudyData>(
    PATHS.CASE_STUDIES.entriesContentPath as string
  )

  const dynamicCaseStudyRoutes = caseStudies.map((study) => ({
    url: `${BASE_URL}${PATHS.CASE_STUDIES.path}/${study.slug}`,
    lastModified: study['updated-on'] || study['published-on'] || new Date(),
  }))

  const events = getEventData(PATHS.EVENTS.entriesContentPath as string)

  const dynamicEventRoutes = events.map((event) => ({
    url: `${BASE_URL}${PATHS.EVENTS.path}/${event.slug}`,
    lastModified: event.updatedOn || event.publishedOn || new Date(),
  }))

  return [
    ...staticRoutes,
    ...dynamicBlogRoutes,
    ...dynamicCaseStudyRoutes,
    ...dynamicEventRoutes,
  ]
}
