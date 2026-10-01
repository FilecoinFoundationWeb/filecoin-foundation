import { generateSitemap } from '@filecoin-foundation/utils/generateSitemap'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getBlogPostsData } from '@/blog/utils/getBlogPostData'
import { getDigestArticlesData } from '@/digest/utils/getDigestArticleData'
import { getDigestIssuesData } from '@/digest/utils/getDigestIssueData'
import { getEcosystemProjectsData } from '@/ecosystem-explorer/utils/getEcosystemProjectData'
import { getEventsData } from '@/events/utils/getEventData'
import { getMonthlyUpdatesData } from '@/filecoin-plus/monthly-updates/utils/getMonthlyUpdateData'

export default async function sitemap() {
  const routes = await generateSitemap({
    paths: PATHS,
    baseUrl: BASE_URL,
    dynamicRoutes: [
      {
        getData: withSlug(getBlogPostsData),
        basePath: PATHS.BLOG.path,
      },
      {
        getData: withSlug(getEcosystemProjectsData),
        basePath: PATHS.ECOSYSTEM_EXPLORER.path,
      },
      {
        getData: withSlug(getEventsData),
        basePath: PATHS.EVENTS.path,
      },
      {
        getData: withSlug(getMonthlyUpdatesData),
        basePath: PATHS.FIL_PLUS_MONTHLY_UPDATES.path,
      },
    ],
  })

  const digestRoutes = await generateDigestRoutes()

  return [...routes, ...digestRoutes]
}

type EntryWithMeta = {
  _meta: { slug: string }
}

function withSlug<Entry extends EntryWithMeta>(
  getData: () => Promise<Array<Entry>>,
) {
  return async function () {
    const entries = await getData()
    return entries.map((entry) => ({ ...entry, slug: entry._meta.slug }))
  }
}

async function generateDigestRoutes() {
  const [issues, articles] = await Promise.all([
    getDigestIssuesData(),
    getDigestArticlesData(),
  ])

  const issueRoutes = issues.map(({ issuePath, updatedOn }) => ({
    url: `${BASE_URL}${PATHS.DIGEST.path}/${issuePath}`,
    lastModified: updatedOn.toISOString(),
  }))

  const articleRoutes = articles.map(({ articlePath, updatedOn }) => ({
    url: `${BASE_URL}${PATHS.DIGEST.path}/${articlePath}`,
    lastModified: updatedOn.toISOString(),
  }))

  return [...issueRoutes, ...articleRoutes]
}
