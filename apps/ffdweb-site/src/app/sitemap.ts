import { generateDigestSitemapRoutes } from '@filecoin-foundation/utils/generateDigestSitemapRoutes'
import { generateSitemap } from '@filecoin-foundation/utils/generateSitemap'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getBlogPostsData } from '@/blog/utils/getBlogPostData'
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
    ],
  })

  const { path, issuesContentPath, articlesContentPath } = PATHS.DIGEST

  const digestRoutes = await generateDigestSitemapRoutes({
    digestPath: path,
    baseUrl: BASE_URL,
    issuesContentPath,
    articlesContentPath,
  })

  return [...routes, ...digestRoutes]
}
