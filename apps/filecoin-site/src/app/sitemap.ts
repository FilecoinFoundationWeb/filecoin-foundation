import { LOCALES } from '@/i18n/locales'

import { generateSitemap } from '@filecoin-foundation/utils/generateSitemap'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { blogPostCollections } from '@/qino/collections/blogPosts'
import { caseStudyCollections } from '@/qino/collections/caseStudies'

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
  const posts = await getLocalizedData((locale) =>
    blogPostCollections[locale].getEntries({ view: 'published' }),
  )

  return posts.map(({ _meta: { slug }, publishedOn }) => ({
    slug,
    updatedOn: publishedOn,
  }))
}

async function getAllCaseStudies() {
  const caseStudies = await getLocalizedData((locale) =>
    caseStudyCollections[locale].getEntries(),
  )

  return caseStudies.map(({ _meta: { slug }, publishedOn, updatedOn }) => ({
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
