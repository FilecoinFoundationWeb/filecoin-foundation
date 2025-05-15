import generateSitemap from '@filecoin-foundation/utils/generateSitemap'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

export default async function sitemap() {
  return await generateSitemap({
    paths: PATHS,
    baseUrl: BASE_URL,
    dynamicRoutes: [
      {
        getData: getBlogPostsData,
        basePath: PATHS.SITE_AUDIT_REPORTS.path,
      },
    ],
  })
}
