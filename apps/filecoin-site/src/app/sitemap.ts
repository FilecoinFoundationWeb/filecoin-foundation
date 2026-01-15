import { LOCALES } from '@/i18n/locales'

import { generateSitemap } from '@filecoin-foundation/utils/generateSitemap'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getBlogPostsData } from '@/blog/utils/getBlogPostData'
import { getCaseStudiesData } from '@/case-studies/utils/getCaseStudyData'

export default function sitemap() {
  return generateSitemap({
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
  const posts = await getLocalizedData(getBlogPostsData)

  return posts.map(({ slug, publishedOn }) => ({
    slug,
    updatedOn: publishedOn,
  }))
}

async function getAllCaseStudies() {
  const caseStudies = await getLocalizedData(getCaseStudiesData)

  return caseStudies.map(({ slug, publishedOn, updatedOn }) => ({
    slug,
    updatedOn: updatedOn || publishedOn,
  }))
}

async function getLocalizedData<T>(
  fetchFn: (locale: (typeof LOCALES)[number]) => Promise<T[]>,
) {
  const localizedData = await Promise.all(LOCALES.map(fetchFn))
  return localizedData.flat()
}
