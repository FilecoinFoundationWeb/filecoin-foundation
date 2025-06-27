import { generateSitemap } from '@filecoin-foundation/utils/generateSitemap'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getBlogPostsData } from '@/blog/utils/getBlogPostData'
import { getDigestArticlesData } from '@/digest/utils/getDigestArticleData'
import { getEcosystemProjectsData } from '@/ecosystem-explorer/utils/getEcosystemProjectData'
import { getEventsData } from '@/events/utils/getEventData'

export default async function sitemap() {
  return await generateSitemap({
    paths: PATHS,
    baseUrl: BASE_URL,
    dynamicRoutes: [
      {
        getData: getBlogPostsData,
        basePath: PATHS.BLOG.path,
      },
      {
        getData: getDigestArticlesData,
        basePath: PATHS.DIGEST.path,
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
}
