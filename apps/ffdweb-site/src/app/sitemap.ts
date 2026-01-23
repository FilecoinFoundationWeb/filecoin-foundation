import { generateSitemap } from '@filecoin-foundation/utils/generateSitemap'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getBlogPostsData } from '@/blog/utils/getBlogPostData'
import { getDigestArticlesData } from '@/digest/utils/getDigestArticleData'
import { getDigestIssuesData } from '@/digest/utils/getDigestIssueData'
import { getProjectsData } from '@/projects/utils/getProjectData'

export default async function sitemap() {
  const routes = await generateSitemap({
    paths: PATHS,
    baseUrl: BASE_URL,
    dynamicRoutes: [
      {
        getData: getBlogPostsData,
        basePath: PATHS.BLOG.path,
      },
      {
        getData: getProjectsData,
        basePath: PATHS.PROJECTS.path,
      },
      {
        getData: getDigestIssuesData,
        basePath: PATHS.DIGEST.path,
      },
    ],
  })

  const articles = await getDigestArticlesData()
  const articleRoutes = articles.map(({ path, updatedOn }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: updatedOn.toISOString(),
  }))

  return [...routes, ...articleRoutes]
}
