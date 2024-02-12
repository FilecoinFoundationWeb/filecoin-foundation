import { MetadataRoute } from 'next'

import { BlogPostData } from '@/types/blogPostTypes'
import { CaseStudyData } from '@/types/caseStudyTypes'
// import { EventData } from '@/types/eventTypes'

import { getMarkdownData } from '@/utils/getMarkdownData'

import { PATHS, CONTENT_PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = Object.values(PATHS).map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }))

  const blogPosts = getMarkdownData<BlogPostData>(
    CONTENT_PATHS.BLOG.POSTS as string
  )
  const dynamicBlogRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post['updated-on'] || post['published-on'] || new Date(),
  }))

  const caseStudies = getMarkdownData<CaseStudyData>(
    CONTENT_PATHS.CASE_STUDIES.POSTS as string
  )

  const dynamicCaseStudyRoutes = caseStudies.map((study) => ({
    url: `${BASE_URL}/case-studies/${study.slug}`,
    lastModified: study['updated-on'] || study['published-on'] || new Date(),
  }))

  //   const events = getMarkdownData<EventData>(CONTENT_PATHS.EVENTS.POSTS)

  //   const dynamicEventRoutes = events.map((study) => ({
  //     url: `${BASE_URL}/events/${study.slug}`,
  //     lastModified: event['updated-on'] || event['published-on'] || new Date(),
  //   }))

  return [...staticRoutes, ...dynamicBlogRoutes, ...dynamicCaseStudyRoutes]
}
