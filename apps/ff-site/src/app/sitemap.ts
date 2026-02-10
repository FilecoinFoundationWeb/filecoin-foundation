import { generateDigestSitemapRoutes } from '@filecoin-foundation/utils/generateDigestSitemapRoutes'
import { generateSitemap } from '@filecoin-foundation/utils/generateSitemap'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getBlogPostsData } from '@/blog/utils/getBlogPostData'
import { getEcosystemProjectsData } from '@/ecosystem-explorer/utils/getEcosystemProjectData'
import { getEventsData } from '@/events/utils/getEventData'

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
        getData: getEcosystemProjectsData,
        basePath: PATHS.ECOSYSTEM_EXPLORER.path,
      },
      {
        getData: getEventsData,
        basePath: PATHS.EVENTS.path,
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
