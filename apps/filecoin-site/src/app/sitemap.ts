import { LOCALES } from '@/i18n/locales'

import { generateSitemap } from '@filecoin-foundation/utils/generateSitemap'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getBlogPostsData } from '@/blog/utils/getBlogPostData'
import { getCaseStudiesData } from '@/case-studies/utils/getCaseStudyData'

export default async function sitemap() {
  return await generateSitemap({
    paths: PATHS,
    baseUrl: BASE_URL,
    dynamicRoutes: [
      {
        getData: getAllBlogPosts,
        basePath: PATHS.BLOG.path,
      },
      {
        getData: getAllCaseStudies,
        basePath: PATHS.CASE_STUDIES.path,
      },
    ],
  })
}

async function getAllBlogPosts() {
  const allPosts = await Promise.all(
    LOCALES.map((locale) => getBlogPostsData(locale)),
  )

  return allPosts.flat().map((post) => ({
    slug: post.slug,
    updatedOn: post.publishedOn,
  }))
}

async function getAllCaseStudies() {
  const allCaseStudies = await Promise.all(
    LOCALES.map((locale) => getCaseStudiesData(locale)),
  )

  return allCaseStudies.flat().map((caseStudy) => ({
    slug: caseStudy.slug,
    updatedOn: new Date(),
  }))
}
